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
	if (isCallerMobile(req) || process.env.NODE_ENV != 'production')
		res.redirect('/bungusland/m.bungusland.html');
	else
		res.redirect('/bungusland/bungusland.html');
}

/*-----------------------------------------------------------------------------------------------
 Helper
 -----------------------------------------------------------------------------------------------*/

// returns true if the caller is a mobile phone (not tablet)
// compares the user agent of the caller against a regex
// This regex comes from http://detectmobilebrowsers.com/
function isCallerMobile(req) {
  var ua = req.headers['user-agent'].toLowerCase(),
    isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));

  return !!isMobile;
}

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
