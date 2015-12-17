var biopolis = (function($){

	var $home, $chloe, $cells, $more;

	var $character;

	var $cell_layers;

	var xDelta = 0;
	var xTotal = 0;

	const PTS = 0.25; // Parallax Trigger Size
	const SPEED = 5;
	const MAX_X = 5800;
	const MIN_X = 0;

	function each_pane(callback)
	{
		callback($home);
		callback($chloe);
		callback($cells);
		callback($more);
	}

	function set_blur($image, amount)
	{
		var blur = 'blur('+amount+'px)';
		$image
			.css('filter', blur)
			.css('webkitFilter',blur)
			.css('mozFilter', blur)
			.css('oFilter', blur)
			.css('msFilter', blur);
	}

	function go_home()
	{
		$character.show();
		set_blur($character, 15);
		module.focus($home);
		start_update();
	}

	function go_chloe()
	{
		$character.show();
		set_blur($character, 0);
		module.focus($chloe)
		stop_update();
	}

	function go_cells()
	{
		$character.hide();
		module.focus($cells);
		start_update();
	}

	function go_more()
	{
		$character.show();
		set_blur($character, 15);
		module.focus($more);
		start_update();
	}

	function clamp(value, min, max)
	{
		return Math.max(min, Math.min(max, value));
	}

	var update_interval_id;
	var update_time_stamp;
	function start_update()
	{
		update_time_stamp = Date.now();
		update_interval_id = setInterval(update, 33);
	}

	function stop_update()
	{
		clearInterval(update_interval_id);
	}

	function get_deltaTime()
	{
		var time = Date.now();
		var deltaTime = (time - update_time_stamp);
		update_time_stamp = time;

		return deltaTime;
	}

	function update() 
	{
		var deltaTime = get_deltaTime();

		if (xDelta == 0)
			return;

		xTotal -= xDelta * SPEED * deltaTime;
		xTotal = clamp(xTotal, -MAX_X, MIN_X);

		$cell_layers.each(function(i, layer) {
			var $layer = $(layer);

			var distance = $layer.data("distance");
			var offset = $layer.data("offset");

			var newX = xTotal / distance + offset;

			$layer.css({ left: newX, });
		});
	}

	var module = {}

	module.focus = function($pane)
	{
		//remove highlight and hide pane
		each_pane(function($p){
			$($p.selector+"_nav_btn").removeClass("current_nav");
			$p.hide();
		});

		//assign highlight
		$($pane.selector+"_nav_btn").addClass("current_nav");

		//show pane
		$pane.show();
	}

	module.setup = function()
	{
		// Assign panes
		$home = $("#home");
		$chloe = $("#chloe");
		$cells = $("#cells");
		$more = $("#more");
		$character = $("#chloe_character");
		$cell_layers = $(".cell_layer");

		//click receiver for each pane
		$('#home_nav_btn').click(go_home);
		$('#chloe_nav_btn').click(go_chloe);
		$('#chloe_link_btn').click(go_chloe);
		$('#cells_nav_btn').click(go_cells);
		$('#more_nav_btn').click(go_more);

		$(document).mousemove(function(e){
			var x = e.pageX / window.innerWidth;

			var xAbs;

			if (x < PTS)
				xAbs = (x - PTS)/PTS;
			else if (x > (1 - PTS))
				xAbs = (x - (1 - PTS))/PTS;
			else
				xAbs = 0;

			xDelta = xAbs * xAbs * Math.sign(xAbs);
		});

		//Set up cell parallax
		go_home();
	}

	return module;
})(jQuery);

//Jquery onLoad syntax
$(biopolis.setup);