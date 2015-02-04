var express     = require('express');
var app         = express();
var compress    = require('compression');
var bodyParser  = require("body-parser");

var oneDay = 0;
// var oneDay = 86400000;
app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

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
