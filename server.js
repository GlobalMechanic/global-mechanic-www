var express     = require('express');
var app         = express();
var compress    = require('compression');
var bodyParser  = require('body-parser');
var _           = require('underscore');
var Vimeo       = require('vimeo-api').Vimeo;
var Q           = require("q");

// check if we're in dev;
var static_folder = (process.env.NODE_ENV == 'development') ? '/src' : '/public';
var oneDay = (process.env.NODE_ENV == 'development') ? 0 : 86400000;
app.locals.deployVersion = (new Date).getTime();

/*-----------------------------------------------------------------------------------------------
  Express Setup
 -----------------------------------------------------------------------------------------------*/

app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + static_folder, { maxAge: oneDay * 30 }));
app.set('view engine', 'jade');

/*-----------------------------------------------------------------------------------------------
  VIMEO
 -----------------------------------------------------------------------------------------------*/

var vimeoConfig = {
  clientId: 'f7f0d3e98bcf5e7f1fce9274d94e36a9f77155ae',
  clientSecret: 'dd6af929f5984635e80f99ab3b25e85fe9dcee6d',
  unauthenticatedAuthHandler: 'Authorization : Basic ZjdmMGQzZTk4YmNmNWU3ZjFmY2U5Mjc0ZDk0ZTM2YTlmNzcxNTVhZTpkZDZhZjkyOWY1OTg0NjM1ZTgwZjk5YWIzYjI1ZTg1ZmU5ZGNlZTZk',
  accountId: 2657340,
  // the private access token was generated in the Vimeo Developer Portal
  // https://developer.vimeo.com/apps/49623#authentication
  privateAccess: {
    token: '18f2a0a24a35c052b536f01b0ae7be64',
    scope: 'public private'
  },
  publicAccess: {
    token: null,
    scope: 'public'
  }
}

var vimeoLib = new Vimeo( vimeoConfig.clientId, 
                          vimeoConfig.clientSecret );

var fetchedData = {
    publicPortfolioList: {
      lastFetched: null,
      portfolios: {}
    },
    privatePortfolioList: {
      lastFetched: null,
      portfolios: {}
    },
    videos: {}
}

/**
 * Determines if the data timestamp is invalid
 * @param  {Date}  timestamp - the last time the data was received
 * @return {Boolean}           true if the data has expired
 */
var isDataValid = function (timestamp) {
  var sinceLastFetched = new Date() - timestamp;
  var cacheExpiryInterval = 30000 * 60; // one hour
  return sinceLastFetched < cacheExpiryInterval;
}

/**
 * Authenticates to vimeo.
 * @param  {[boolean]} authenticate_as_GM Set to true if you want calls to be authenticated as Global Mechanic's account. Defaults to false.
 * @return {[type]}                    [description]
 */
var authenticateVimeo = function (authenticate_as_GM) {
  var deferred = Q.defer();
  if (authenticate_as_GM ) {
    console.log('AUTH as GM');
    vimeoLib.access_token = vimeoConfig.privateAccess.token;
    deferred.resolve(vimeoLib.access_token)
  }
  else if (!authenticate_as_GM && vimeoLib.access_token) {
    console.log('AUTH as anonymous');
    vimeoLib.access_token = vimeoConfig.publicAccess.token;
    deferred.resolve(vimeoLib.access_token)
  }
  else {
    console.log('generating Vimeo credentials');
    vimeoLib.generateClientCredentials(vimeoConfig.publicAccess.scope, function (err, access_token) {
      if (err) {
        console.log(err);
        deferred.reject(new Error(err));
        throw err;
      }
      if (access_token.access_token){
        vimeoLib.access_token = vimeoConfig.publicAccess.token = access_token.access_token;
        deferred.resolve();
      }
    });
  }
  return deferred.promise;
}

/**
 * Gets a list of Global Mechanic's public portfolios from Vimeo, sorted alphabetically.
 * @return {promise} Eventually resolves to the list of portfolios
 */
var getPublicPortfolios = function () {
  var deferred = Q.defer();
  authenticateVimeo().then(function() {
    // data is valid
    if ( isDataValid(fetchedData.publicPortfolioList.lastFetched) ) {
      console.log('CACHED portfolio list');
      deferred.resolve();
    } 
    // data is invalid, so go get it again
    else {
      console.log('retrieving portfolio list');
      fetchedData.publicPortfolioList.portfolios = {};
      vimeoLib.request({
        path: '/users/'+vimeoConfig.accountId+'/portfolios?sort=alphabetical',
        query: {
          page: 1,
          per_page: 50
        }
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log('error retreiving portfolios');
          console.log(error);
        } else {
          console.log('portfolio list retrieved');
          fetchedData.publicPortfolioList.lastFetched = new Date();
          // cycle through the portfolios. 
          _.each(body.data, function (fresh_portfolio) {
            var portfolio_id = fresh_portfolio.uri.split('/')[4];
            var portfolio = fetchedData.publicPortfolioList.portfolios[portfolio_id];
            // if portfolio doesn't exist, create it
            if ( !portfolio ) {
              portfolio = fetchedData.publicPortfolioList.portfolios[portfolio_id] = {};
            }
            // update the portfolio data
            portfolio.id          = portfolio_id;
            portfolio.name        = fresh_portfolio.name;
            portfolio.description = fresh_portfolio.description;
            portfolio.link        = fresh_portfolio.link;
          });
          deferred.resolve();
        }
      });
    }
  });
  return deferred.promise;
}

/**
 * [getPrivatePortfolios description]
 * @return {[type]} [description]
 */
var getPrivatePortfolios = function () {
  var deferred = Q.defer();

  getPublicPortfolios()
    .then(function () {
      return authenticateVimeo(true);
    })
    .then(function() {
      // data is valid
      if ( isDataValid(fetchedData.privatePortfolioList.lastFetched) ) {
        console.log('CACHED private portfolio list');
        deferred.resolve(fetchedData.privatePortfolioList.portfolios);
      } 
      // data is invalid, so go get it again
      else {
        console.log('retrieving private portfolio list');
        // reset the list
        fetchedData.privatePortfolioList.portfolios = {};
        // issue the request
        vimeoLib.request({
          path: '/me/portfolios?sort=alphabetical',
          query: {
            page: 1,
            per_page: 50
          }
        }, function (error, body, status_code, headers) {
          if (error) {
            console.log('error retreiving private portfolios');
          } else {
            console.log('portfolio list retrieved');
            fetchedData.privatePortfolioList.lastFetched = new Date();
            // cycle through the portfolios and format them for display
            _.each(body.data, function (fresh_portfolio) {
              var portfolio_id = fresh_portfolio.uri.split('/')[4];
              // if this is already in the public portfolio list, ignore it
              if ( !fetchedData.publicPortfolioList.portfolios[portfolio_id] ) {
                var portfolio = fetchedData.privatePortfolioList.portfolios[portfolio_id];
                // if portfolio doesn't exist, create it
                if ( !portfolio ) {
                  portfolio = fetchedData.privatePortfolioList.portfolios[portfolio_id] = {};
                }
                // update the portfolio data
                portfolio.id          = portfolio_id;
                portfolio.name        = fresh_portfolio.name;
                portfolio.description = fresh_portfolio.description;
                portfolio.link        = fresh_portfolio.link;
              } 
            });
            // 
            deferred.resolve();
          }
        });
      }
    });
  
  return deferred.promise;
}

/**
 * Retrieves the videos for a specific portfolio
 * @param  {string} the id of the vimeo portfolio
 * @return {[type]}               [description]
 */
var getPortfolioVideos = function (portfolio_id, is_private) {
  console.log('getPortfolioVideos');
  var deferred  = Q.defer();
  var portfolio = (is_private) ? fetchedData.privatePortfolioList.portfolios[portfolio_id] : fetchedData.publicPortfolioList.portfolios[portfolio_id];
  authenticateVimeo(is_private).then(function() {
    // data is valid
    if ( isDataValid(portfolio.lastFetched) ) {
      console.log('CACHED videos for portfolio: '+portfolio_id);
      deferred.resolve();
    } 
    // data is invalid, so go get it again
    else {
      console.log('requesting portfolio details');
      vimeoLib.request({
        path: '/users/'+vimeoConfig.accountId+'/portfolios/'+portfolio_id+'/videos?sort=manual',
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log('error retreiving portfolio details');
        } else {
          console.log('got portfolio details');
          portfolio.lastFetched = new Date();
          portfolio.videos = body.data;
          deferred.resolve();
        }
      });
    }
  });
  return deferred.promise;
}

/**
 * Get the video details
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
var getVideo = function (video_id) {
  var deferred = Q.defer();
  var video = fetchedData.videos[video_id];
  authenticateVimeo().then(function() {
    // data is valid
    if ( video && isDataValid(video.lastFetched) ) {
      console.log('CACHED video: '+video_id);
      deferred.resolve();
    } 
    // data is invalid, so go get it again
    else {
      console.log('getting the video');
      vimeoLib.request({
        path: '/videos/'+video_id,
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log('error retreiving the video');
          console.log(error);
        } else {
          console.log('got the video');
          fetchedData.videos[video_id] = body;
          fetchedData.videos[video_id].id = video_id;
          fetchedData.videos[video_id].lastFetched = new Date();;
          deferred.resolve();
        }
      });
    }
  });
  return deferred.promise;
}


/**
 * [prepareVideoMetadata description]
 * @param  {[type]} video     [description]
 * @param  {[type]} portfolio [description]
 * @return {[type]}           [description]
 */
var prepareVideoMetadata = function ( video, portfolio ) {

  var target_portfolio_name,
      total_video_count,
      current_video_index,
      next_video_id,
      prev_video_id;

  if ( portfolio ) {
    target_portfolio_name = portfolio.name;
    total_video_count     = portfolio.videos.length;
    current_video_index   = _.indexOf(portfolio.videos, 
                                      _.findWhere(portfolio.videos, { uri: '/videos/'+video.id }));
    // calc the next video id
    var next_video = portfolio.videos[current_video_index+1];

    if (next_video) {
      next_video_id = next_video.uri.split('/')[2];
      console.log(next_video_id);
    }

    // calc the prev video id
    var prev_video = portfolio.videos[current_video_index-1];

    if (prev_video) {
      prev_video_id = prev_video.uri.split('/')[2];
      console.log(prev_video_id);
    }
  }

  return {
    video:                video,
    currentPortfolioId:   portfolio.id,
    currentPortfolioName: target_portfolio_name,
    prevVideoId:          prev_video_id,
    nextVideoId:          next_video_id,
    currentVideoIndex:    current_video_index+1,
    totalVideoCount:      total_video_count
  }

}

/*-----------------------------------------------------------------------------------------------
  Routes
 -----------------------------------------------------------------------------------------------*/

app.get('/services/', function(req, res){
  res.redirect(301, '/');
});

app.get('/studio/', function(req, res){
  res.redirect(301, '/');
});

app.get('/profile/*', function(req, res){
  res.redirect(301, '/');
});

app.get('/social/', function(req, res){
  res.redirect(301, '/');
});

app.get('/project/', function(req, res){
  res.redirect(301, '/');
});

app.get('/contact/', function(req, res){
  res.redirect(301, '/');
});

// private portfolios
app.get('/private', function(req, res){
  console.log('Route: /private');
  getPrivatePortfolios()
    .then(function () {
      var sorted_portfolios = _.sortBy(fetchedData.privatePortfolioList.portfolios, 'name');
      res.render('private', {
        portfolios:         sorted_portfolios
      });
    });
});

// private portfolios
app.get('/private/portfolio/:id', function(req, res){
  console.log('Route: /private');
  var featured_portfolio_id = '357398';
  var target_portfolio_id   = req.params.id || featured_portfolio_id;
  
  getPrivatePortfolios()
    .then(function () {
      return getPortfolioVideos( target_portfolio_id, true );
    })
    // und render 
    .then(function () {
      res.render('private_portfolio', {
        portfolio: fetchedData.privatePortfolioList.portfolios[target_portfolio_id]
      });
    });
});

// private portfolio video page
app.get('/private/portfolio/videos/:id', function(req, res){
  console.log('Route: /private/portfolio/videos/:id');
  var target_video_id     = req.params.id;
  var target_portfolio_id = req.query.portfolio;
  getPrivatePortfolios()
    .then(function () {
      if ( target_portfolio_id ) {
        return getPortfolioVideos( target_portfolio_id, true );  
      } else {
        return true;
      }
    })
    .then(function () {
      return getVideo( target_video_id );
    })
    .then(function () {
      var portfolio = fetchedData.privatePortfolioList.portfolios[target_portfolio_id] || null;
      res.render('video', prepareVideoMetadata( fetchedData.videos[target_video_id], portfolio ) );
    });
});

// public video page
app.get('/videos/:id', function(req, res){
  console.log('Route: /videos/:id');
  var target_video_id     = req.params.id;
  var target_portfolio_id = req.query.portfolio;
  getPublicPortfolios()
    .then(function () {
      console.log('getting the portfolio')
      if ( target_portfolio_id ) {
        return getPortfolioVideos( target_portfolio_id );  
      } else {
        return true;
      }
    })
    .then(function () {
      return getVideo( target_video_id );
    })
    .then(function () {
      var portfolio = fetchedData.publicPortfolioList.portfolios[target_portfolio_id] || null;
      var data = prepareVideoMetadata( fetchedData.videos[target_video_id], portfolio );
      console.log(data);
      res.render('video', data);
    });
});

// main page
app.get('/', function(req, res){
  console.log('Route: /');
  var featured_portfolio_id = '357398';
  var target_portfolio_id   = req.query.portfolio || featured_portfolio_id;
  authenticateVimeo()
    .then(function() {
      return getPublicPortfolios();
    })
    .then(function () {
      return getPortfolioVideos( target_portfolio_id );
    })
    .then(function () {
      var sorted_portfolios = _.sortBy(fetchedData.publicPortfolioList.portfolios, 'name');
      res.render('home', {
        portfolios:         sorted_portfolios,
        currentPortfolio:   fetchedData.publicPortfolioList.portfolios[target_portfolio_id]
      });
    });
});

app.listen(process.env.PORT || 5000);
