var express     = require('express');
var app         = express();
var compress    = require('compression');
var bodyParser  = require("body-parser");
var Vimeo       = require('vimeo-api').Vimeo;
var Q           = require("q");

/*
  App setup and caching
 */

var oneDay = 0;
// var oneDay = 86400000;
app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.set('view engine', 'jade');

/*
  VIMEO
 */

var vimeoConfig = {
  clientID: 'f7f0d3e98bcf5e7f1fce9274d94e36a9f77155ae',
  clientSecret: 'dd6af929f5984635e80f99ab3b25e85fe9dcee6d',
  unauthenticatedAuthHandler: 'Authorization : Basic ZjdmMGQzZTk4YmNmNWU3ZjFmY2U5Mjc0ZDk0ZTM2YTlmNzcxNTVhZTpkZDZhZjkyOWY1OTg0NjM1ZTgwZjk5YWIzYjI1ZTg1ZmU5ZGNlZTZk',
  scope: 'public',
  accountID: 2657340
}

var vimeoLib = new Vimeo( vimeoConfig.clientID, 
                          vimeoConfig.clientSecret );

vimeoLib.generateClientCredentials(vimeoConfig.scope, function (err, access_token) {
    if (err) {
      throw err;
    }
    vimeoLib.access_token = access_token.access_token;
});

var playlists;
var currentPlaylist;
var playlistVideos;

var getPlaylists = function (cb) {
  console.log('getting playlists');
  var playlists_uri = '/users/'+vimeoConfig.accountID+'/portfolios';
  vimeoLib.request({
    path: playlists_uri,
    query: {
      page: 1,
      per_page: 50
    }
  }, cb);
}

var getPlaylistVideos = function (playlist_uri, cb) {
  console.log('getting playlist videos');
  vimeoLib.request({
    path: playlist_uri+'/videos',
  }, cb);
}

/*
  Routes
 */

// Redirect a request to /feed/ to the RSS feed of our Medium publication
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

app.get('/portfolios', function(req, res) {
  getPlaylists(function (error, body, status_code, headers) {
    if (error) {
      console.log('error');
    } else {
      console.log('body');
    }
    playlists = body.data;
    getPlaylistVideos(playlists[0].uri, function (error, body, status_code, headers) {
      playlistVideos = body.data;
      console.log(playlistVideos);
      res.render('home', { 
        playlist: playlists[0],
        videos: playlistVideos 
      });
    })
  });
});

// main page
app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

// On 404, redirect to our global 404
app.use(function(req, res, next){
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.redirect('/');
    return;
  }
});

app.listen(process.env.PORT || 5000);
