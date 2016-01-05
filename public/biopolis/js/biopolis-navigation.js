var biopolis_navigation = (function($){

	/******** REF ***********/

	var $home_pane, $chloe_pane, $cells_pane, $more_pane;

	var $popup_modal, $chloe_character, $music, audio;

	var $scroller, scrollbar = null;

	/******** SETUP ***********/

	function assign_panes()
	{
		// Assign panes
		$home_pane = $("#home");
		$chloe_pane = $("#chloe");
		$cells_pane = $("#cells");
		$more_pane = $("#more");

		$chloe_character = $("#chloe_character");
	}

	function pane_click_receivers()
	{
		$('#home_nav_btn').click(go_home);
		$('#chloe_nav_btn').click(go_chloe);
		$('#chloe_link_btn').click(go_chloe);
		$('#cells_nav_btn').click(go_cells);
		$('#more_nav_btn').click(go_more);
	}

	function load_content()
	{
		$home_pane.load("content/pane_home.html", function() {
			$('#chloe_link_btn').click(go_chloe);
			go_home();
		});

		$cells_pane.load("content/pane_cells.html", function() {
			$popup_modal = $("#character_popup_modal");
			$popup_modal.click(hide_popup_modal);
			hide_popup_modal();

			biopolis_cells.setup();

			resize();
		});

		$more_pane.load("content/pane_more.html", function() {
			if (!$.browser.mobile) {
				$scroller = $("#scroller");
				$scroller.tinyscrollbar();
				scrollbar = $scroller.data("plugin_tinyscrollbar");
				scrollbar.update();
			}
		});

		$popup_modal = $("#character_popup_modal");
		$popup_modal.click( function() {
			$popup_modal.hide();
		});
		$popup_modal.hide();
	}

	function music_handling() {
		//setup music handling
		$music = $("#music");
		audio = $music.find("audio")[0];
		$music.click(function() {
			if (!audio_is_playing())
				audio.play();
			else
				audio.pause();

			set_audio_icon();
		});

		setTimeout(set_audio_icon, 250);

		audio.volume = 0.15;
	}

	function audio_is_playing()
	{
		return !audio.paused && audio.duration > 0;
	}

	function set_audio_icon()
	{
		var playing = audio_is_playing();
		var css_value = "url('images/audio_icon" + (!playing ? "_disabled" : "") + ".png')";
		$music.css("background", css_value);
	}

	/******** HELPER ***********/

	function hide_popup_modal()
	{
		if ($popup_modal)
			$popup_modal.hide();
	}

	function each_pane(callback)
	{
		callback($home_pane);
		callback($chloe_pane);
		callback($cells_pane);
		callback($more_pane);
	}

	function set_blur($image, amount)
	{
		var blur = 'blur(' + amount + 'px)';
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
		set_blur($chloe_character, $.browser.mobile ? 8 : 15);
		focus($home_pane);
		hide_popup_modal();
	}

	function go_chloe()
	{
		$chloe_character.show();
		set_blur($chloe_character, 0);
		focus($chloe_pane)
		hide_popup_modal();
	}

	function go_cells()
	{
		$chloe_character.hide();
		focus($cells_pane);
		hide_popup_modal();
	}

	function go_more()
	{
		$chloe_character.show();
		set_blur($chloe_character, $.browser.mobile ? 8 : 15);
		focus($more_pane);
		hide_popup_modal();
		if (scrollbar)
			scrollbar.update();
	}

	/******** MODULE ***********/

	function show_popup(popup_id) {

		var $popup = $("#" + popup_id );

		if ($popup.length == 0)
			return;

		$(".character_popup").hide();
		$popup_modal.show();
		$popup.show();
	}

	function focus($pane)
	{
		//remove highlight and hide pane
		each_pane(function($p){
			$($p.selector + "_nav_btn").removeClass("current_nav");
			$p.hide();
		});

		//assign highlight
		$($pane.selector + "_nav_btn").addClass("current_nav");

		//show pane
		$pane.show();
	}

	function setup()
	{
		assign_panes();
		load_content();
		pane_click_receivers();
		music_handling();

		go_home();

		$(document).resize(resize);

		resize();
	}

	function resize()
	{
		if (scrollbar)
			scrollbar.update();
	}

	return {
		showPopup: show_popup,
		focus: focus,
		setup: setup,
		resize: resize
	}

})(jQuery);

$(document).ready(biopolis_navigation.setup);