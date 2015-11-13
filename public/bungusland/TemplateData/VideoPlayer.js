window.VideoPlayer = (function(){

	var holderTag;
	var videoTag;
	var sourceTag;
	var backgroundTag;

	var mod = {

		setup : function() {

			holderTag = document.getElementById("video_holder");
			videoTag = holderTag.getElementsByTagName("video")[0];
			sourceTag = videoTag.getElementsByTagName("source")[0];
			backgroundTag = document.getElementById("video_background");

			videoTag.addEventListener("ended", function() {
				mod.setVisible(false);
			}, false)

			backgroundTag.addEventListener("mousedown", function() {
				if (mod.isVisible())
					mod.setVisible(false);
			}, false)

			mod.center();
		},

		center : function()
		{
		    holderTag.style.top = window.innerHeight * 0.5 - holderTag.offsetHeight * 0.5 + "px";
		    holderTag.style.left = window.innerWidth * 0.5 - holderTag.offsetWidth * 0.5 + "px";
		},

		setVisible : function(value)
		{
			holderTag.style.display = value ? "block" : "none";
			backgroundTag.style.display = value ? "block" : "none";

			if (!value)
				sourceTag.removeAttribute("src");
			else
				mod.center();
		},

		isVisible : function(value)
		{
			return holderTag.style.display == "block";
		},

		setVideo : function(name)
		{
			sourceTag.setAttribute("src", "videos/" + name + ".mp4");
			videoTag.load();
			mod.setVisible(true);
		}

	}

	return mod;

})();

window.addEventListener("load", window.VideoPlayer.setup);
window.addEventListener("resize", window.VideoPlayer.center);