var biopolis = (function($){

	var $home, $chloe, $cells, $more;

	function each_pane(callback)
	{
		callback($home);
		callback($chloe);
		callback($cells);
		callback($more);
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

		//click receiver for each pane
		$('#home_nav_btn').click(function(){ module.focus($home) });
		$('#chloe_nav_btn').click(function(){ module.focus($chloe) });
		$('#cells_nav_btn').click(function(){ module.focus($cells) });
		$('#more_nav_btn').click(function(){ module.focus($more) });

		$('#chloe_link_btn').click(function(){ module.focus($chloe) });

		module.focus($home);
	}

	return module;
})(jQuery);

//Jquery onLoad syntax
$(biopolis.setup);