var bungus = (function($){

/**********************************************************/
	//REFERENCES
/**********************************************************/
	var $island, $logo;

	const LOGO_WIDTH = 432;
	const LOGO_HEIGHT = 240;

/**********************************************************/
	//SETUP
/**********************************************************/

	function get_references()
	{
		$island = $('#island');
		$logo = $('#overlay_logo');
	}

/**********************************************************/
	//MODULE
/**********************************************************/
	function setup()
	{
		get_references();
		center();
	}

	function center()
	{
		var innerW = window.innerWidth * 0.5;
		var innerH = window.innerHeight * 0.5;

		var x = innerW - $island.width() * 0.5;
		var y = innerH - $island.height() * 0.5;

		$island.css({
			top: y,
			left: x,
		});

		var portrait = innerW < innerH;

		var width = portrait ? LOGO_WIDTH : LOGO_WIDTH * 0.75;
		var height = portrait ? LOGO_HEIGHT : LOGO_HEIGHT * 0.75;
		var x = portrait ? innerW - width * 0.5 : 10;

		$logo.css({
			width: width,
			height: height,
			left: x
		});

	}

	return {

		setup: setup,
		center: center,

	}

})(jQuery);

$(bungus.setup);

$(window).on("resize", bungus.center);