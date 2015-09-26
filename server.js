var express     = require('express');
var app         = express();
var compress    = require('compression');
var bodyParser  = require('body-parser');
var _           = require('underscore');
var Q           = require('q');
var gmVimeo     = require('./modules/gmVimeo.js');

// check if we're in dev;
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';
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

app.get('/project/', function(req, res) {
  res.redirect(301, '/');
});

app.get('/contact/', function(req, res) {
  res.redirect(301, '/');
});

// private portfolios
app.get('/private', function(req, res){
  console.log('Route: /private');
  console.log(req.query);
  if (_.has(req.query, 'resetDataCache')) {
    gmVimeo.resetDataCache();
  }
  gmVimeo.fetchPrivatePortfolios()
    .then(function () {
      res.render('private', {
        portfolios: gmVimeo.getPortfolioList( 'private' )
      });
    });
});

// private portfolios
app.get('/private/portfolio/:id', function(req, res){
  console.log('Route: /private');
  var featured_portfolio_id = '357398';
  var target_portfolio_id   = req.params.id || featured_portfolio_id;
  gmVimeo.fetchPortfolio( target_portfolio_id, true )
    .then(function () {
      res.render('private_portfolio', {
        portfolio: gmVimeo.getPortfolio( target_portfolio_id )
      });
    });
});

// private portfolio video page
app.get('/private/portfolio/:portfolio_id/videos/:id', function(req, res){
  console.log('Route: /private/portfolio/videos/:id');
  var target_video_id     = req.params.id;
  var target_portfolio_id = req.params.portfolio_id;
  gmVimeo.fetchVideo( target_video_id )
    .then(function () {
      return gmVimeo.prepareVideoMetadata( target_video_id, target_portfolio_id )
    })
    .then(function (video_data) {
      res.render('private_portfolio_video', video_data);
    });
});

// public video page
app.get('/videos/:id', function(req, res){
  console.log('Route: /videos/:id');
  var target_video_id     = req.params.id;
  var target_portfolio_id = req.query.portfolio;
  gmVimeo.fetchVideo( target_video_id )
    .then(function () {
      return gmVimeo.prepareVideoMetadata( target_video_id, target_portfolio_id )
    })
    .then(function (video_data) {
      res.render('video', video_data);
    });
});

// jorbs!
app.get('/wantsyou', function(req, res){
  console.log('Route: /private/wantsyou');
  res.render('wantsyou');
});

// about page
app.get('/about', function(req, res){
  console.log('Route: /about');
  res.render('about');
});

// main page
app.get('/', function(req, res){
  console.log('Route: /');
  var featured_portfolio_id = '357398';
  var target_portfolio_id   = req.query.portfolio || featured_portfolio_id;
  gmVimeo.fetchPortfolio( target_portfolio_id )
    .then(function () {
      res.render('home', {
        portfolios:         gmVimeo.getPortfolioList( 'public' ),
        currentPortfolio:   gmVimeo.getPortfolio( target_portfolio_id ) 
      });
    }, function (error) {
      console.log('error rendering home page');
    });
});

/**** INTERTACTIVE BUILDS START HERE ******/

app.get('/interactive001/biopolis', function(req, res) {
	console.log("Going to biopolis.")
	res.redirect(301, '/interactive/biopolis/index.html');
});

app.get('/interactive001/bungusland', function(req, res) {
	console.log("Going to bungusland.")
	res.redirect(301, '/interactive/bungusland/index.html');
});

/*******************************************/

app.listen(process.env.PORT || 5000);
