var bungus = (function(){

	var $modal;
	var $content;
	var $scroller;

	var scrollbar;

	var $showcase;
	var $showcaseContainer;
	var $shown_items;
	var shown_index = 0;

	const CONTENT_WIDTH = 810;
	const PANE_PADDING = 50;

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

	function stopVideoPlayback()
	{
		var $vid = $shown_items.eq(shown_index);
		var src = $vid.attr('src');

		if (src.indexOf("vimeo") > -1) {
			$vid.attr('src', '');
			$vid.attr('src', src);
		}
	}

	var SCWidget = null;
	function stopSoundPlayback()
	{
		if (SCWidget == null)
			SCWidget = SC.Widget("music_widget");

		SCWidget.pause();
		SCWidget.seekTo(0);
	}

	var mod = {

		setup : function() 
		{
			$modal = $("#modal");
			$modal.mousedown(function() {
				if ($showcaseContainer.is(":visible")) {
					mod.setShowCaseVisible(false);
					stopVideoPlayback();
				} else {
					mod.setModalVisible(false);
					stopSoundPlayback();
				}
			});

			$scroller = $("#scroller");
			$scroller.tinyscrollbar();
			scrollbar = $scroller.data("plugin_tinyscrollbar");

			$content = $("#content");
			$content.mousedown(function(e) {
				e.stopPropagation();
			});

			$showcase = $("#showcase");
			$showcaseContainer = $("#showcase_container");

			$("#showcase_prev_btn").mousedown(showcase_prev);
			$("#showcase_next_btn").mousedown(showcase_next);

			$(".video_preview").mouseup
				(function(e) {
					mod.setShowCase(".vimeo_video", $(this).index());
				});

			$("#behind_scenes_slideshow").mouseup
				(function(e) {
					mod.setShowCase(".behind_scenes_image");
				});

		},

		resize : function(minSize)
		{
			var height = Math.min(minSize, window.innerHeight);

			$content.height(height);
			scrollbar.update();
		},

		center : function()
		{
			var maxHeight = Math.min($content.height() , window.innerHeight);
		    $scroller.css({
		    	top : window.innerHeight * 0.5 - maxHeight * 0.5, 
		    	left: window.innerWidth * 0.5 - CONTENT_WIDTH * 0.5
		    });

		    $showcaseContainer.css({
		    	top : window.innerHeight * 0.5 - $showcaseContainer.height() * 0.5, 
		    	left: window.innerWidth * 0.5 - $showcaseContainer.width() * 0.5
		    });

		    if (scrollbar)
				scrollbar.update();
		},

		showPane : function(name)
		{			
			$("[id$='_pane']").each(function(i, tag) {
				$(tag).hide();
			});

			var $pane = $("#" + name.toLowerCase() + "_pane");
			this.setModalVisible(true);

			$pane.show();

			this.resize($pane.height() + PANE_PADDING);
			this.center();
		},

		setShowCase: function(selector, index)
		{
			$shown_items = $(selector);
			shown_index = typeof(index) == "number" ? index : 0;

			$showcaseContainer.show();
			$showcase.children().each(function(){
				$(this).hide();
			});

			showcase_update(0);
		},

		setModalVisible : function(value)
		{
			value = value == undefined ? true : value;
			
			if (value) {
				$content.show();
				$modal.show();
				this.center();

			} else {
				$content.hide();
				$modal.hide();

			}
		},

		setShowCaseVisible : function(value)
		{
			value = value == undefined ? true : value;

			if (value)
				$showcaseContainer.show();
			else
				$showcaseContainer.hide();
		}

	}

	return mod;

})();

$(bungus.setup);

$(window).on("resize", bungus.center);