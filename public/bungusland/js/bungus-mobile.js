var bungus = (function($){

/**********************************************************/
	//REFERENCES
/**********************************************************/

	var $island, $logo, $content, $modal;

	var $currentPane;

	var audio_should_be_paused = true;

	var $music, audio;

	var loadedContent = 0;

	const CONTENT_TO_LOAD = 6;
	const LOGO_WIDTH = 432;
	const LOGO_HEIGHT = 240;


/**********************************************************/
	//ISLAND POSITION DATA
/**********************************************************/

var islandPositions = {
	portrait : {
		src: "images/mobile_portrait_island.png",
		height: 1136,
		width: 640,
		hotspots: {
			music: {
				height: 140,
				width: 150,
				x: 380,
				y: 330,
			},
			videos: {
				height: 110,
				width: 180,
				x: 410,
				y: 530,
			},
			introduction: {
				height: 200,
				width: 225,
				x: 70,
				y: 330,
			},
			scriptsandsynopsis: {
				height: 220,
				width: 220,
				x: 380,
				y: 695,
			},
			behindthescenes: {
				height: 200,
				width: 260,
				x: 40,
				y: 610,
			}
		}
	},

	landScape : {
		src: "images/mobile_landscape_island.png",
		height: 640,
		width: 1136,
		hotspots : {
			music: {
				height: 140,
				width: 150,
				x: 120,
				y: 190,
			},
			videos: {
				height: 110,
				width: 180,
				x: 810,
				y: 240,
			},
			introduction: {
				height: 200,
				width: 225,
				x: 450,
				y: 240,
			},
			scriptsandsynopsis: {
				height: 220,
				width: 220,
				x: 210,
				y: 340,
			},
			behindthescenes: {
				height: 200,
				width: 260,
				x: 710,
				y: 390,
			}
		},
	},
}

/**********************************************************/
	//MAIN
/**********************************************************/

	function hide_all_panes()
	{
		$("[id$='_pane']").each(function(i, pane) { 
			$(pane).hide();
		});
	}

	function toggle_content()
	{
		if ($showcaseContainer.is(":visible")) {
			set_showcase_visible(false);
			stop_video_playback();

		} else {
			set_modal_visible(false);
			stop_soundcloud_playback();

		}
	}

	function set_modal_visible(value)
	{
		value = value == undefined ? true : value;

		if (value) {
			$content.show();
			$modal.show();
			center();

		} else {
			$content.hide();
			$modal.hide();
		}
	}

	function stop_video_playback()
	{
		var $vid = $shown_items.eq(shown_index);
		var src = $vid.attr('src');

		if (src.indexOf("vimeo") > -1) {
			$vid.attr('src', '');
			$vid.attr('src', src);
		}
	}

	var SCWidget = null;
	function stop_soundcloud_playback()
	{
		SCWidget.pause();
		SCWidget.seekTo(0);
	}

	function set_audio_icon()
	{
		var playing = !audio.paused;
		var css_value = "url('images/audio_icon" + (!playing ? "_disabled" : "") + ".png')";
		$music.css("background", css_value);
	}

/**********************************************************/
	//SETUP
/**********************************************************/

	function get_references()
	{
		$island = 				$('#island');
		$logo = 				$('#introduction_logo');

		$showcase = 			$('#showcase');
		$showcaseContainer = 	$('#showcase_container');
		$content =				$('#content');
		$modal =				$('#modal');
	}

	function load_content()
	{
		$("[id$='_pane']").each(function(i, pane) { 
			var $pane = $(pane);
			var id = $pane.prop("id");
			$pane.load("content/" + id + ".html", check_loaded);
		});

		$showcase.load("content/showcase_content.html", check_loaded);
	}

	function set_interaction($tag, action)
	{	
		$tag.css("cursor", "pointer");
		$tag.click(action);
	}

	function set_interactions()
	{
		$content.click(function(e) {
			e.stopPropagation();
		});

		set_interaction($(".pane_button"), function() {
			var thisId = $(this).prop("id");
			var undscoreIndex = thisId.indexOf("_");
			var pane_name = thisId.substr(0, undscoreIndex);

			show_pane(pane_name);
		});

		set_interaction($(".close_modal"), toggle_content);
		set_interaction($("#showcase_prev_btn"), showcase_prev)
		set_interaction($("#showcase_next_btn"), showcase_next);

		set_interaction($("#behind_the_scenes_video"), 	function(){ set_showcase(".vimeo_behind_scenes")			});
		set_interaction($(".video_preview"), 			function(){ set_showcase(".vimeo_video", $(this).index())	});
		set_interaction($("#behind_scenes_slideshow"),	function(){ set_showcase(".behind_the_scenes_image") 		});

	}

	function check_loaded()
	{
		loadedContent++;
		if (loadedContent >= CONTENT_TO_LOAD)
			all_loaded();
		
		if (loadedContent > CONTENT_TO_LOAD)
			console.error("Loaded more content than expected.");
	}

	function all_loaded()
	{
		set_interactions();
		music_handling();
	}

	function music_handling() 
	{
		$music = $("#music");
		$music.show();

		audio = $music.find("audio")[0];

		$music.click(function() {
			if (audio.paused)
				audio.play();
			else
				audio.pause();

			set_audio_icon();
		});

		setTimeout(set_audio_icon, 250);

		audio.volume = 0.15;

		SCWidget = SC.Widget("music_widget");
		SCWidget.bind("play", music_hold);
		SCWidget.bind("pause", music_resume);
		SCWidget.bind("finished", music_resume);
	}

	function music_hold()
	{
		audio.pause();
		$music.hide();
		set_audio_icon();
	}

	function music_resume()
	{
		$music.show();
		if (audio_should_be_paused || !audio.paused)
			return;

		audio.play();
		set_audio_icon();
	}

/**********************************************************/
	//SHOWCASE
/**********************************************************/

	var $shown_items;
	var $showcase, $showcaseContainer;

	var shown_index = 0;
	var items_centered = false;

	function showcase_update(delta)
	{
		$shown_items.eq(shown_index).hide();
		shown_index = (shown_index + delta) % $shown_items.size();
		$shown_items.eq(shown_index).show();
	}

	function showcase_next()
	{
		showcase_update(1);
	}

	function showcase_prev()
	{
		showcase_update(-1);
	}

	function center_showcase_items()
	{
		var showHeight = $showcase.height();
		var showWidth = $showcase.width();

		$showcase.children().each(function(){
			var $this = $(this);

			$this.css({
				position: "absolute"
			});

			$this.css({
				top: showHeight * 0.5 - $this.height() * 0.5,
				left: 0,
				width: showWidth
			});
		});
	}

	function set_showcase_visible(value)
	{
		value = value == undefined ? true : value;

		if (value) {
			$content.hide();
			$showcaseContainer.show();
		} else {
			music_resume();
			$content.show();
			$showcaseContainer.hide();
		}

		if (value && !items_centered) {
			items_centered = true;
			center_showcase_items();
		}
	}

	function set_showcase(selector, index) {

		$shown_items = $(selector);
		shown_index = typeof(index) == "number" ? index : 0;

		if ($shown_items.hasClass("vimeo_event"))
			music_hold();

		set_showcase_visible(true);
		$showcase.children().hide();
		showcase_update(0);
	}

	function clamp(value, min, max) 
	{
		return Math.min(Math.max(value, min), max);
	}

	function place_island(portrait, innerW, innerH)
	{
		var data = portrait ? islandPositions.portrait : islandPositions.landScape;		
		
		var scale = clamp(Math.min(innerW / (data.width * 0.5) , innerH / (data.height * 0.5)), 0, 1);
		var width = data.width * scale;
		var height = data.height * scale;

		var islandX = innerW - width * 0.5;
		var islandY = innerH - height * 0.5;

		$island.css({
			"background-image": 'url("' + data.src + '")',
			"background-size": width + "px " + height + "px",
			left: islandX,
			top: islandY,
			width: width,
			height: height
		});

		for(var hotspotTitle in data.hotspots) {
			var hotspotData = data.hotspots[hotspotTitle];

			var $button = $("#" + hotspotTitle + "_button");

			$button.css({
				height: hotspotData.height * scale,
				width: hotspotData.width * scale,
				top:  hotspotData.y * scale,
				left:  hotspotData.x * scale,
			});
		}
	}

/**********************************************************/
	//MODULE
/**********************************************************/

	function setup()
	{
		get_references();
		load_content();
		center();
	}

	function show_pane(pane_name)
	{
		$currentPane = $("#" + pane_name.toLowerCase() + "_pane");

		hide_all_panes();
		set_modal_visible(true);
		$currentPane.show();

		$content.css("height", "");

		if ($content.height() < window.innerHeight)
			$content.height(window.innerHeight);

		center();
	}

	function center()
	{
		var innerW = window.innerWidth * 0.5;
		var innerH = window.innerHeight * 0.5;
		var portrait = innerW < innerH;

		place_island(portrait, innerW, innerH);

		var showContainerX = innerW - $showcaseContainer.width() * 0.5;
		var showContainerY = innerH - $showcaseContainer.height() * 0.5;
		$showcaseContainer.css({
			left: showContainerX,
			top: showContainerY
		});

	}

	return {
		setup: setup,
		center: center,
		showPane: show_pane
	}

})(jQuery);

$(bungus.setup);
$(window).on("orientationchange", bungus.center);
$(window).on("resize", bungus.center);
