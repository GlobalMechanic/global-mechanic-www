var Vimeo 	= require('vimeo-api').Vimeo;
var Q       = require('q');
var _       = require('underscore');

var exports = module.exports = {};

/*-----------------------------------------------------------------------------------------------
  Setup
 -----------------------------------------------------------------------------------------------*/

// configuration values for Vimeo
exports.config = {
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
    token: null, //we request this in authenticateVimeo()
    scope: 'public'
  }
}

exports.vimeoLib = new Vimeo( exports.config.clientId, 
                          	  exports.config.clientSecret );

/**
 * Authenticates to vimeo.
 * @param  {[boolean]} authenticate_as_GM Set to true if you want calls to be authenticated as Global Mechanic's account. Defaults to false.
 * @return {[type]}                    [description]
 */
exports.authenticateVimeo = function (authenticate_as_GM) {
  var deferred = Q.defer();
  if (authenticate_as_GM) {
    console.log('AUTH as GM');
    exports.vimeoLib.access_token = exports.config.privateAccess.token;
    deferred.resolve(exports.vimeoLib.access_token)
  }
  else if (!authenticate_as_GM && exports.config.publicAccess.token) {
    console.log('AUTH as anonymous');
    exports.vimeoLib.access_token = exports.config.publicAccess.token;
    deferred.resolve(exports.vimeoLib.access_token)
  }
  else {
    console.log('generating Vimeo credentials');
    exports.vimeoLib.generateClientCredentials(exports.config.publicAccess.scope, function (err, access_token) {
      if (err) {
        deferred.reject(new Error(err));
        throw err;
      }
      if (access_token.access_token){
        exports.vimeoLib.access_token = exports.config.publicAccess.token = access_token.access_token;
        deferred.resolve();
      }
    });
  }
  return deferred.promise;
}

/*-----------------------------------------------------------------------------------------------
  Fetching methods
 -----------------------------------------------------------------------------------------------*/

// Used for storing info about when things were fetched
exports.fetchedData = {
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
exports.isDataValid = function (timestamp) {
  var sinceLastFetched = new Date() - timestamp;
  var cacheExpiryInterval = 30000 * 60; // one hour
  return sinceLastFetched < cacheExpiryInterval;
}

/**
 * Resets the lastFetched timestamp on all cached resources
 * @return {[type]} [description]
 */
exports.resetDataCache = function () {
  console.log('resetDataCache');
  // do it for public portfolios
  exports.fetchedData.publicPortfolioList.lastFetched = null;
  _.each(exports.fetchedData.publicPortfolioList.portfolios, function (portfolio) {
    portfolio.lastFetched = null;
  });
  // do it for private portfolios
  exports.fetchedData.privatePortfolioList.lastFetched = null;
  _.each(exports.fetchedData.privatePortfolioList.portfolios, function (portfolio) {
    portfolio.lastFetched = null;
  });
  // do it for videos
  _.each(exports.fetchedData.videos, function (video) {
    video.lastFetched = null;
  });
}

/**
 * Gets a list of Global Mechanic's public portfolios from Vimeo, sorted alphabetically.
 * @return {promise} Eventually resolves to the list of portfolios
 */
exports.fetchPublicPortfolios = function () {
  var deferred = Q.defer();
  exports.authenticateVimeo().then(function() {
    // data is valid
    if ( exports.isDataValid(exports.fetchedData.publicPortfolioList.lastFetched) ) {
      console.log('CACHED portfolio list');
      deferred.resolve();
    } 
    // data is invalid, so go get it again
    else {
      console.log('retrieving public portfolio list');
      exports.fetchedData.publicPortfolioList.portfolios = {};
      exports.vimeoLib.request({
        path: '/users/'+exports.config.accountId+'/portfolios?sort=alphabetical',
        query: {
          page: 1,
          per_page: 50
        }
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log('error fetching portfolios');
          console.log(error);
        } else {
        	console.log('public portfolios fetched');
          exports.fetchedData.publicPortfolioList.lastFetched = new Date();
          // cycle through the portfolios. 
          _.each(body.data, function (fresh_portfolio) {
            var portfolio_id = fresh_portfolio.uri.split('/')[4];
            var portfolio = exports.getPortfolio( portfolio_id );
            // if portfolio doesn't exist, create it
            if ( !portfolio ) {
              portfolio = exports.fetchedData.publicPortfolioList.portfolios[portfolio_id] = {};
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
exports.fetchPrivatePortfolios = function () {
  var deferred = Q.defer();
  exports.fetchPublicPortfolios()
    .then(function () {
      return exports.authenticateVimeo(true);
    })
    .then(function() {
      // data is valid
      if ( exports.isDataValid(exports.fetchedData.privatePortfolioList.lastFetched) ) {
        console.log('CACHED private portfolio list');
        deferred.resolve(exports.fetchedData.privatePortfolioList.portfolios);
      } 
      // data is invalid, so go get it again
      else {
        console.log('retrieving private portfolio list');
        // reset the list
        exports.fetchedData.privatePortfolioList.portfolios = {};
        // issue the request
        exports.vimeoLib.request({
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
            exports.fetchedData.privatePortfolioList.lastFetched = new Date();
            // cycle through the portfolios and format them for display
            _.each(body.data, function (fresh_portfolio) {
              var portfolio_id = fresh_portfolio.uri.split('/')[4];
              // if this is already in the public portfolio list, ignore it
              if ( !exports.getPortfolio( portfolio_id ) ) {
                var portfolio = exports.getPortfolio( portfolio_id );
                // if portfolio doesn't exist, create it
                if ( !portfolio ) {
                  portfolio = exports.fetchedData.privatePortfolioList.portfolios[portfolio_id] = {};
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
exports.fetchPortfolio = function (portfolio_id, is_private) {
  var deferred  = Q.defer();
  var portfolio;

  exports.authenticateVimeo(is_private)
  	.then(function() {
  		if ( is_private ) {
  			return exports.fetchPrivatePortfolios()
  		} else {
  			return exports.fetchPublicPortfolios()
  		}
  	})
  	.then(function() {
  		portfolio = exports.getPortfolio( portfolio_id );
	    // data is valid
	    if ( exports.isDataValid(portfolio.lastFetched) ) {
	      console.log('CACHED videos for portfolio: '+portfolio_id);
	      deferred.resolve(portfolio);
	    } 
	    // data is invalid, so go get it again
	    else {
	      exports.vimeoLib.request({
	        path: '/users/'+exports.config.accountId+'/portfolios/'+portfolio_id+'/videos?sort=manual',
	      }, function (error, body, status_code, headers) {
	        if (error) {
	          console.log('error retreiving portfolio details');
	        } else {
	          console.log('got portfolio details');
	          portfolio.lastFetched = new Date();
	          portfolio.videos = body.data;
	          deferred.resolve(portfolio);
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
exports.fetchVideo = function (video_id) {
  var deferred = Q.defer();
  var video = exports.getVideo( video_id );
  exports.authenticateVimeo()
  	.then(function() {
	    // data is valid
	    if ( video && exports.isDataValid(video.lastFetched) ) {
	      console.log('CACHED video: '+video_id);
	      deferred.resolve();
	    } 
	    // data is invalid, so go get it again
	    else {
	      console.log('fetching the video');
	      exports.vimeoLib.request({
	        path: '/videos/'+video_id,
	      }, function (error, body, status_code, headers) {
	        if (error) {
	          console.log('error retreiving the video');
	          console.log(error);
	        } else {
	          exports.fetchedData.videos[video_id] = body;
	          exports.fetchedData.videos[video_id].id = video_id;
	          exports.fetchedData.videos[video_id].lastFetched = new Date();;
	          deferred.resolve();
	        }
	      });
	    }
	  });
  return deferred.promise;
}

/*-----------------------------------------------------------------------------------------------
 	Utility methods
 -----------------------------------------------------------------------------------------------*/

/**
 * [prepareVideoMetadata description]
 * @param  {[type]} video     [description]
 * @param  {[type]} portfolio [description]
 * @return {[type]}           [description]
 */
exports.prepareVideoMetadata = function ( video_id, portfolio_id ) {

	var deferred = Q.defer();

  var target_portfolio_name,
      total_video_count,
      current_video_index,
      next_video_id,
      prev_video_id;

  var video = exports.getVideo( video_id ); 

  if ( portfolio_id ) {
  	var is_private = exports.isPortfolioPrivate( portfolio_id );
  	exports.fetchPortfolio( portfolio_id, is_private )
  		.then(function(portfolio) {
  			target_portfolio_name = portfolio.name;
		    total_video_count     = portfolio.videos.length;
		    current_video_index   = _.indexOf(portfolio.videos, 
		                                      _.findWhere(portfolio.videos, { uri: '/videos/'+video_id }));
		    // calc the next video id
		    var next_video = portfolio.videos[current_video_index+1];
		    if (next_video) {
		      next_video_id = next_video.uri.split('/')[2];
		    }
		    // calc the prev video id
		    var prev_video = portfolio.videos[current_video_index-1];
		    if (prev_video) {
		      prev_video_id = prev_video.uri.split('/')[2];
		    }
		    // resolve the ole promise with the portfolio info
		    deferred.resolve({
		    	video:                video,
		    	currentPortfolioId:   portfolio.id,
		    	currentPortfolioName: target_portfolio_name,
		    	prevVideoId:          prev_video_id,
		    	nextVideoId:          next_video_id,
		    	currentVideoIndex:    current_video_index+1,
		    	totalVideoCount:      total_video_count
		  	});
  		});
  } else {
  	deferred.resolve({
  		video: video
  	});
  }

  return deferred.promise;

}

/**
 * [isPortfolioPublic description]
 * @param  {[type]}  portfolio_id [description]
 * @return {Boolean}              [description]
 */
exports.isPortfolioPrivate = function (portfolio_id) {
	return !!exports.fetchedData.privatePortfolioList.portfolios[portfolio_id];
}


/*-----------------------------------------------------------------------------------------------
  Get methods 
 -----------------------------------------------------------------------------------------------*/

/**
 * [portfolios description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
exports.getPortfolioList = function (type) {
	if (type == 'private') {
		return _.sortBy(exports.fetchedData.privatePortfolioList.portfolios, 'name');
	} else {
		return _.sortBy(exports.fetchedData.publicPortfolioList.portfolios, 'name');
	}
}

/**
 * Returns a portfolio from either our cached lists of portfolios
 * @param  {[type]} portfolio_id The ID of the portfolio you want
 * @return {[type]}              [description]
 */
exports.getPortfolio = function (portfolio_id) {
	var portfolio;
	// try finding a public portfolio
	portfolio = exports.fetchedData.publicPortfolioList.portfolios[portfolio_id];
	// or maybe it's a private portfolio
	if (!portfolio) {
		portfolio = exports.fetchedData.privatePortfolioList.portfolios[portfolio_id]
	} 
	return portfolio;
}

/**
 * [getVideo description]
 * @param  {[type]} video_id [description]
 * @return {[type]}          [description]
 */
exports.getVideo = function (video_id) {
	return exports.fetchedData.videos[video_id];
}