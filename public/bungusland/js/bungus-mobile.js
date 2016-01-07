var bungus = (function($){

/**********************************************************/
	//REFERENCES
/**********************************************************/

	var $island, $logo, $showcase, $showcaseContainer, $content, $modal;

	var $currentPane;

	var loadedContent =0;

	const CONTENT_TO_LOAD = 6;
	const LOGO_WIDTH = 432;
	const LOGO_HEIGHT = 240;


/**********************************************************/
	//MAIN
/**********************************************************/

	function show_pane(pane_name)
	{
		$currentPane = $("#" + pane_name.toLowerCase() + "_pane");

		hide_all_panes();
		set_modal_visible(true);
		$currentPane.show();
		center();
	}

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

	function set_showcase_visible(value)
	{
		value = value == undefined ? true : value;

		if (value) {
			$content.hide();
			$showcaseContainer.show();

		} else {
			$content.show();
			$showcaseContainer.hide();
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
		if (SCWidget == null)
			SCWidget = SC.Widget("music_widget");

		SCWidget.pause();
		SCWidget.seekTo(0);
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
	}
/**********************************************************/
	//SHOWCASE
/**********************************************************/

	var shown_index = 0;
	var $shown_items;

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

	function set_showcase(selector) {

		$shown_items = $(selector);
		shown_index = typeof(index) == "number" ? index : 0;

		set_showcase_visible(true);

		var showHeight = $showcase.height();
		var showWidth = $showcase.width();

		$showcase.children().each(function(){
			var $this = $(this);
			$this.css({
				position: "absolute",
				top: showHeight * 0.5 - $this.height() * 0.5,
				left: 0,
				width: showWidth
			});

			$this.hide();
		});

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

	function center()
	{
		var innerW = window.innerWidth * 0.5;
		var innerH = window.innerHeight * 0.5;
		var portrait = innerW < innerH;

		var islandX = innerW - $island.width() * 0.5;
		var islandY = innerH - $island.height() * 0.5;

		$island.css({
			left: islandX,
			top: islandY
		});

		var logoW = portrait ? LOGO_WIDTH : LOGO_WIDTH * 0.75;
		var logoH = portrait ? LOGO_HEIGHT : LOGO_HEIGHT * 0.75;
		var logoX = portrait ? innerW - logoW * 0.5 : 10;

		$logo.css({
			width: logoW,
			height: logoH,
			left: logoX
		});

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
	}

})(jQuery);

$(bungus.setup);
$(window).on("resize", bungus.center);
