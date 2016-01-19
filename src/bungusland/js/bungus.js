var bungus = (function($){

/**********************************************************/
	//REFERENCES
/**********************************************************/

	var $island, $logo, $content, $modal;
	var $currentPane;
	var $contentClose;

	var $music, audio;
	var audio_should_be_paused = false;

	var SCWidget = null;

	const LOGO_WIDTH = 432;
	const LOGO_HEIGHT = 240;

	const CONTENT_MAX_HEIGHT = 0.75;
	const CLOSE_BUTTON_PADX = 5;

/**********************************************************/
	//MAIN
/**********************************************************/

	function hide_all_panes()
	{
		$("[id$='_pane']").each(function(i, pane) { 
			$(pane).hide();
		});
	}

	function music_handling() 
	{
		$music = $("#music");
		$music.show();

		audio = $music.find("audio")[0];
		audio.play();

		audio_should_be_paused = false;

		$music.click(function() {

			audio_should_be_paused = !audio.paused;
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

	var loadedContent =0;
	const CONTENT_TO_LOAD = 6;

	function get_references()
	{
		$island = 				$('#island');
		$logo = 				$('#introduction_logo');

		$showcase = 			$('#showcase');
		$showcaseContainer = 	$('#showcase_container');
		$content =				$('#content');
		$contentClose =			$('#content_close_btn');
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

		//Vimeo events don't work. Unsure why.
		/*$(".vimeo_event").each(function(i, iFrame){
			var player = $f(iFrame);

			player.addEvent("pause", music_resume);
			player.addEvent("finish", music_resume);
			player.addEvent("play", music_hold);

		});*/

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
		set_scrollbar();
		music_handling();
	}

/**********************************************************/
	//SCROLLBAR
/**********************************************************/

	function set_scrollbar()
	{
		$content.perfectScrollbar({
			suppressScrollX: true,
		});
	}

	function update_scrollbar()
	{
		$content.perfectScrollbar("update");
	}

/**********************************************************/
	//SHOWCASE
/**********************************************************/

	var $showcase, $showcaseContainer;
	var shown_index = 0;
	var $shown_items;
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

		center();
	}

	function center()
	{
		//Center Island, if it exists
		var innerW = window.innerWidth * 0.5;
		var innerH = window.innerHeight * 0.5;
		var portrait = innerW < innerH;

		var islandX = innerW - $island.width() * 0.5;
		var islandY = innerH - $island.height() * 0.5;

		$island.css({
			left: islandX,
			top: islandY
		});

		//Position Logo
		var logoW = portrait ? LOGO_WIDTH : LOGO_WIDTH * 0.75;
		var logoH = portrait ? LOGO_HEIGHT : LOGO_HEIGHT * 0.75;
		var logoX = portrait ? innerW - logoW * 0.5 : 10;

		$logo.css({
			width: logoW,
			height: logoH,
			left: logoX
		});

		//Position ShowCase
		var showContainerX = innerW - $showcaseContainer.width() * 0.5;
		var showContainerY = innerH - $showcaseContainer.height() * 0.5;
		$showcaseContainer.css({
			left: showContainerX,
			top: showContainerY
		});

		$content.css('height', '');

		//Position Content and Content Close Button
		var maxH = window.innerHeight * CONTENT_MAX_HEIGHT;
		var contentH = $content.height() > maxH ? maxH : $content.height();

		var contentY = innerH - contentH * 0.5;
		contentY = contentY > 0 ? contentY : 0;
		var contentCloseXn = (innerW - $content.width() * 0.5) + CLOSE_BUTTON_PADX;

		$content.css({
			top: contentY,
			height: contentH
		});

		$contentClose.css({
			right: contentCloseXn,
			top: contentY
		});

		update_scrollbar();
	}

	return {
		setup: setup,
		center: center,
		showPane: show_pane
	}

})(jQuery);

$(bungus.setup);
$(window).on("resize", bungus.center);
