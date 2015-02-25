var express     = require('express');
var app         = express();
var compress    = require('compression');
var bodyParser  = require("body-parser");
var _           = require("underscore");
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
  scope: 'public',
  accountId: 2657340
}

var vimeoLib = new Vimeo( vimeoConfig.clientId, 
                          vimeoConfig.clientSecret );

var fetchedData = {
    portfolioList: {
      lastFetched: null,
      portfolios: {}
    },
    videos: {}
}

/**
 * [isDataExpired description]
 * @param  {Date}  timestamp - the last time the data was received
 * @return {Boolean}           true if the data has expired
 */
var isDataValid = function (timestamp) {
  var sinceLastFetched = new Date() - timestamp;
  var cacheExpiryInterval = 30000;
  console.log('Data last fetched '+sinceLastFetched/1000+' seconds ago');
  return sinceLastFetched < cacheExpiryInterval;
}

/**
 * [authenticateVimeo description]
 * @return {[type]} [description]
 */
var authenticateVimeo = function () {
  var deferred = Q.defer();
  if (vimeoLib.access_token) {
    deferred.resolve(vimeoLib.access_token)
  }
  else {
    console.log('generating vimeo credentials');
    vimeoLib.generateClientCredentials(vimeoConfig.scope, function (err, access_token) {
      if (err) {
        console.log(err);
        deferred.reject(new Error(err));
        throw err;
      }
      if (access_token.access_token){
        vimeoLib.access_token = access_token.access_token;
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
var portfolios_uri = '/users/'+vimeoConfig.accountId+'/portfolios';
var upatedPortfolioList = function () {
  var deferred = Q.defer();
  // data is valid
  if ( isDataValid(fetchedData.portfolioList.lastFetched) ) {
    console.log('CACHED portfolio list');
    deferred.resolve();
  } 
  // data is invalid, so go get it again
  else {
    console.log('retrieving portfolio list');
    vimeoLib.request({
      path: portfolios_uri+'?sort=alphabetical',
      query: {
        page: 1,
        per_page: 50
      }
    }, function (error, body, status_code, headers) {
      if (error) {
        console.log('error retreiving portfolios');
      } else {
        console.log('portfolio list retrieved');
        fetchedData.portfolioList.lastFetched = new Date();
        // cycle through the portfolios. 
        _.each(body.data, function (fresh_portfolio) {
          var portfolio_id = fresh_portfolio.uri.split('/')[4];
          var portfolio = fetchedData.portfolioList.portfolios[portfolio_id];
          // if portfolio doesn't exist, create it
          if ( !portfolio ) {
            portfolio = fetchedData.portfolioList.portfolios[portfolio_id] = {};
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
  
  return deferred.promise;
}

/**
 * Retrieves the videos for a specific portfolio
 * @param  {string} the id of the vimeo portfolio
 * @return {[type]}               [description]
 */
var getPortfolioVideos = function (portfolio_id) {
  var deferred  = Q.defer();
  var portfolio = fetchedData.portfolioList.portfolios[portfolio_id];
  // data is valid
  if ( isDataValid(portfolio.lastFetched) ) {
    console.log('CACHED videos for portfolio: '+portfolio_id);
    deferred.resolve();
  } 
  // data is invalid, so go get it again
  else {
    console.log('requesting portfolio details');
    vimeoLib.request({
      path: portfolios_uri+'/'+portfolio_id+'/videos?sort=manual',
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

  return deferred.promise;
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

// TODO: probably should just call the vimeo API to get the video detail, or stash all videos in an 
// object for retrieval 
app.get('/videos/:id', function(req, res){
  console.log('Route: /videos/:id');
  var target_video_id     = req.params.id;
  var target_portfolio_id = req.query.portfolio;
  var target_portfolio_name,
      total_video_count,
      current_video_index,
      next_video_id,
      prev_video_id;
  authenticateVimeo()
    .then(function() {
      if ( target_portfolio_id ) {
        return upatedPortfolioList();
      } else {
        return true;
      }
    })
    .then(function () {
      if ( target_portfolio_id ) {
        return getPortfolioVideos( target_portfolio_id );  
      } else {
        return true;
      }
    })
    .then(function () {
      return getVideo(target_video_id);
    })
    .then(function () {
      if ( target_portfolio_id ) {
        console.log('figuring portfolio variables');
        var portfolio = fetchedData.portfolioList.portfolios[target_portfolio_id];
        target_portfolio_name = portfolio.name;
        total_video_count     = portfolio.videos.length;
        current_video_index   = _.indexOf(portfolio.videos, _.findWhere(portfolio.videos, { uri: '/videos/'+target_video_id }));
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
      res.render('video', {
        currentPortfolioName: target_portfolio_name,
        currentPortfolioId:   target_portfolio_id,
        video:                fetchedData.videos[target_video_id],
        prevVideoId:          prev_video_id,
        nextVideoId:          next_video_id,
        currentVideoIndex:    current_video_index+1,
        totalVideoCount:      total_video_count
      });
    });
});

// main page
app.get('/', function(req, res){
  console.log('Route: /');
  var featured_portfolio_id = '357398';
  var target_portfolio_id   = req.query.portfolio || featured_portfolio_id;
  authenticateVimeo()
    .then(function() {
      return upatedPortfolioList();
    })
    .then(function () {
      return getPortfolioVideos( target_portfolio_id );
    })
    .then(function () {
      var sorted_portfolios = _.sortBy(fetchedData.portfolioList.portfolios, 'name');
      res.render('home', {
        portfolios:         sorted_portfolios,
        currentPortfolio:   fetchedData.portfolioList.portfolios[target_portfolio_id]
      });
    });
});

app.listen(process.env.PORT || 5000);
