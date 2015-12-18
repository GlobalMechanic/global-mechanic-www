/*-----------------------------------------------------------------------------------------------
  Dependencies
 -----------------------------------------------------------------------------------------------*/

var express     = require('express');
var	app 		= express();
var compress    = require('compression');
var bodyParser  = require('body-parser');
var _           = require('underscore');
var Q           = require('q');
var gmVimeo     = require('./modules/gm-vimeo.js');

/*-----------------------------------------------------------------------------------------------
  Data
 -----------------------------------------------------------------------------------------------*/

const FEATURED_PORTFOLIO_ID = '357398';
const DEFAULT_PORT = 5000;

/*-----------------------------------------------------------------------------------------------
  Setup
 -----------------------------------------------------------------------------------------------*/

function setup_express()
{
	// check if we're in dev;
	if (!process.env.NODE_ENV) 
		process.env.NODE_ENV = 'production';

	var seconds_in_a_month = 86400000 * 30;

	var is_production = process.env.NODE_ENV == 'production';
	var app_dir = is_production ? '/public' : '/src';
	var maxTime = is_production ? seconds_in_a_month : 0;

	app.locals.deployVersion = (new Date).getTime();

	app.use(compress());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(__dirname + app_dir, { maxAge: maxTime }));

	app.set('view engine', 'jade');
}

function setup_routes()
{
	app.get("/services/", 	main_page);
	app.get("/studio/", 	main_page);
	app.get("/profile/*", 	main_page);
	app.get("/social/", 	main_page);
	app.get("/project/",	main_page);
	app.get("/contact/", 	main_page);
	app.get("/", 			main_page);

	app.get("/videos/:id", 	public_video_page)
	app.get("/private/", 	private_page)
	app.get("/private/portfolio/:id", portfolio_page)
	app.get("/private/portfolio/:portfolio_id/videos/:id", private_video_page)

	app.get("/wantsyou", wants_you_page);
	app.get("/about", about_page);

	app.get("/bungusland", bungusland_page);
	app.get("/biopolis", biopolis_page);

}

function start_server()
{
	app.listen(process.env.PORT || DEFAULT_PORT);
}

/*-----------------------------------------------------------------------------------------------
  Pages
 -----------------------------------------------------------------------------------------------*/

function main_page(req, res){

	var target_portfolio_id = req.query.portfolio || FEATURED_PORTFOLIO_ID;

	gmVimeo
  	.fetchPortfolio(target_portfolio_id)
    .then(function () {

    	var data = {
			portfolios:			gmVimeo.getPortfolioList( 'public' ),
			currentPortfolio:   gmVimeo.getPortfolio( target_portfolio_id ) 
		}

		res.render('home', data);

    });
}

function private_page(req, res)
{
	if (_.has(req.query, 'resetDataCache'))
		gmVimeo.resetDataCache();

	gmVimeo
	.fetchPrivatePortfolios()
	.then(function() {
		var data = {
			portfolios: gmVimeo.getPortfolioList('private')
		};

		res.render('private', data)
	});
}

function portfolio_page(req, res)
{
	var target_portfolio_id = req.params.id || FEATURED_PORTFOLIO_ID;

	gmVimeo
	.fetchPortfolio(target_portfolio_id, true)
	.then(function(){
		var data = {
			portfolio : gmVimeo.getPortfolio(target_portfolio_id)
		}

		res.render('private_portfolio', data);
	});

}

function public_video_page(req, res)
{
	var target_video_id     = req.params.id;
	var target_portfolio_id = req.query.portfolio;
	
	render_video_page(target_video_id, target_portfolio_id, res, false);	
}

function private_video_page(req, res)
{
	var target_video_id     = req.params.id;
	var target_portfolio_id = req.params.portfolio_id;

	render_video_page(target_video_id, target_portfolio_id, res, true);	
}

function wants_you_page(req, res)
{
	res.render('wantsyou');
}

function about_page(req, res)
{
	res.render('about');
}

function bungusland_page(req, res)
{
	res.redirect('/bungusland/index.html');
}

function biopolis_page(req, res)
{
	res.redirect('/biopolis/index.html');
}

/*-----------------------------------------------------------------------------------------------
 Helper
 -----------------------------------------------------------------------------------------------*/

function render_video_page(video_id, portfolio_id, response, private)
{
	var target_template = private ? "private_portfolio_video" : "video";

	gmVimeo
	.fetchVideo( video_id )
	.then(function () {
		return gmVimeo.prepareVideoMetadata( video_id, portfolio_id )
	})
	.then(function (video_data) {
		response.render(target_template, video_data);
	});

}

/*-----------------------------------------------------------------------------------------------
  Execute
 -----------------------------------------------------------------------------------------------*/

setup_express();
setup_routes();
start_server();
