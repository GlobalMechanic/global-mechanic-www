var biopolis = (function($){

	/******** REF ***********/

	var $home_pane, $chloe_pane, $cells_pane, $more_pane;

	var $popup_modal;

	var $chloe_character;

	var $cell_layers, $cell_charactes;

	var $music;

	var $scroller;

	var xDelta = 0;
	var xTotal = 0;
	var over_character = false;

	/******** CONST ********/

	const PTS = 0.25; // Parallax Trigger Size
	const SCROLL_SPEED = 4;
	const MAX_X = 4000;
	const MIN_X = 0;
	const CELL_SPEED = 0.5;
	const CELL_RANGE = 200;

	/******** POINT ***********/

	function Point(x,y)
	{
		this.x = x;
		this.y = y;
	}
	this.normalize = function()
	{

	}
	this.lerp = function(otherPoint, t)
	{
		var x = lerp(this.x, otherPoint.x, t);
		var y = lerp(this.y, otherPoint.y, t);

		return new Point(x,y);
	}

	function lerp(a,b,t)
	{
		t = clamp(t, 0, 1);

		return a + t * (b - a);
	}

	/******** HELPER ***********/

	function each_pane(callback)
	{
		callback($home_pane);
		callback($chloe_pane);
		callback($cells_pane);
		callback($more_pane);
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
		$chloe_character.show();
		set_blur($chloe_character, 15);
		module.focus($home_pane);
		stop_update();
		$popup_modal.hide();

	}

	function go_chloe()
	{
		$chloe_character.show();
		set_blur($chloe_character, 0);
		module.focus($chloe_pane)
		stop_update();
		$popup_modal.hide();

	}

	function go_cells()
	{
		$chloe_character.hide();
		module.focus($cells_pane);
		start_update();
		$popup_modal.hide();

	}

	function go_more()
	{
		$chloe_character.show();
		set_blur($chloe_character, 15);
		module.focus($more_pane);
		stop_update();
		$popup_modal.hide();

	}

	function clamp(value, min, max)
	{
		return Math.max(min, Math.min(max, value));
	}

	function get_origin($layer)
	{
		var origin = $layer.data("origin");
		if (!origin) {
			var position = $layer.position();
			$layer.data({origin: [position.left, position.top]});
			var origin = $layer.data("origin");
		}

		return origin;
	}

	function at_target(target, position)
	{
		if (target == undefined)
			return true;

		var a = target[0] - position.left;
		var b = target[1] - position.top;

		var d = Math.sqrt(a * a + b * b);

		return d <= 50;
	}

	/******** UPDATE ***********/

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

		update_character_drift(deltaTime);
		update_cell_layer_position(deltaTime);
	}

	function update_character_drift(deltaTime)
	{
		deltaTime *= 0.001;

		$cell_characters.each(function(i, layer){
			var $layer = $(layer);

			if ($layer.hasClass("dont_drift"))
				return;

			var position = $layer.position();
			var origin = get_origin($layer);

			var target = $layer.data("target");
			if (at_target(target, position)) {
				var randX = origin[0] + (Math.random() - 0.5) * CELL_RANGE;
				var randY = origin[1] + (Math.random() - 0.5) * CELL_RANGE;

				target = [randX, randY];
				$layer.data({target: target});
			}

			var newX = lerp(position.left, target[0], deltaTime * CELL_SPEED);
			var newY = lerp(position.top, target[1], deltaTime * CELL_SPEED);

			$layer.css({
				left: newX,
				top: newY
			});
		});
	}

	function update_cell_layer_position(deltaTime)
	{

		xTotal -= xDelta * SCROLL_SPEED * deltaTime;
		xTotal = clamp(xTotal, -MAX_X, MIN_X);

		$cell_layers.each(function(i, layer) {
			var $layer = $(layer);

			var distance = $layer.data("distance");
			var offset = $layer.data("offset");

			var newX = xTotal / distance + offset;

			$layer.css({ left: newX, });
		});		
	}

	/******** MODULE ***********/

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
		$home_pane = $("#home");
		$chloe_pane = $("#chloe");
		$cells_pane = $("#cells");
		$more_pane = $("#more");
		$chloe_character = $("#chloe_character");
		$cell_layers = $(".cell_layer");
		$cell_characters = $(".character");
		$popup_modal = $("#character_popup_modal");
		$popup_modal.click(function(){
			$popup_modal.hide();
		});
		$popup_modal.hide();

		/*$cell_characters.hover(function() {
			over_character = true;
		}, function(){
			over_character = false;
		});*/

		$cell_characters.click(function(){
			var id = $(this).prop("id");
			var $popup = $("#" + id + "-popup");

			if ($popup.length == 0)
				return;

			$(".character_popup").hide();

			$popup_modal.show();
			$popup.show();

		});

		/*
		$scroller = $("#scroller");

		console.log($scroller);
		$scroller.tinyscrollbar();
		*/
		
		$music = $("#music");
		$music.click(function() {
			var $audio = $music.find("audio");
			var muted = $audio.prop("muted");

			$audio.prop("muted", !muted);

			var css_value = "url('images/audio_icon" + (!muted ? "_disabled" : "") + ".png')";
			$(this).css("background", css_value);
		});

		//click receiver for each pane
		$('#home_nav_btn').click(go_home);
		$('#chloe_nav_btn').click(go_chloe);
		$('#chloe_link_btn').click(go_chloe);
		$('#cells_nav_btn').click(go_cells);
		$('#more_nav_btn').click(go_more);

		//Default Audio
		$music.find("audio").prop("volume", 0.15);

		//Mouse movement callback
		$(document).mousemove(function(e){

			if (over_character) {
				xDelta = 0;
				return;
			}

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
$(document).ready(biopolis.setup);