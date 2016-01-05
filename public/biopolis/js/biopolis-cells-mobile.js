var biopolis_cells = (function($, createjs){

	/******** REF ***********/

	var canvas, stage;

	/******** VAR ***********/

	var viewX = 100;
	var detlaViewX = 0;

	/******** CONST ********/

	const CELL_SCALE_PORTRIAT = 0.3;
	const CELL_SCALE_LANDSCAPE = 0.5;

	/******** STAGE OBJECTS *********/

	var bioObjects = [];
	var BioObject = (function() {

		function BioObject(img, x, y) {
			this.Bitmap_constructor(img);
			stage.addChild(this);
			bioObjects.push(this);

			this.offset = {
				x: x || 0,
				y: y || 0,
			}
		}

		var prototype = createjs.extend(BioObject, createjs.Bitmap);
		prototype.offset = null;

		return createjs.promote(BioObject, "Bitmap");
	})();

	var Cell = (function() {
		
		function Cell(img, x, y) {
			this.BioObject_constructor(img, x, y);
			this.popupID = img.replace("content/","").replace(".png","") + "-popup";

			this.on("click", function(e) {
				biopolis_navigation.showPopup(this.popupID);
			});
		}

		var prototype = createjs.extend(Cell, BioObject);
		prototype.$popup = null;

		return createjs.promote(Cell, "BioObject");

	})();

	/******** SETUP ***********/

	function create_stage()
	{
		canvas = $("#cell_stage")[0];
		stage = new createjs.Stage(canvas);
	}

	function create_layers()
	{
		new BioObject("images/cells_mobile_still.png", 0,0);
	}

	function create_cells()
	{
		var stretch = 1.65;
		
		new Cell("content/character_BACTERIA.png", 		0.105,0.705);
		new Cell("content/character_BLKBACTERIA.png", 	0.35,0.125);
		new Cell("content/character_BRAINCELL.png", 	0.075,0.225);
		new Cell("content/character_FATCELL.png", 		0.6,0.05);
		new Cell("content/character_MUSCLECELL.png", 	0.725,0.525);
		new Cell("content/character_NEURONCELL.png", 	0.5,0.325);
		new Cell("content/character_PLATELET.png", 		0.6,0.775);
		new Cell("content/character_R_ROWAN.png", 		0.75,0.325);
		new Cell("content/character_R_SCARLETT.png", 	0.8,0.225);
		new Cell("content/character_SKINCELLS.png", 	0.35,0.65);
		new Cell("content/character_VIRUS.png", 		0.75,0.7);
		new Cell("content/character_W_BLANCHE.png",		0.3,0.4);
		new Cell("content/character_W_LIAM.png",		0.2,0.5);
		new Cell("content/character_W_MAY.png",			0.2,0.3);
		
		stage.enableMouseOver();
	}

	/******** HELPER ***********/

	function distance(a, b) 
	{
		var x2 = Math.pow(a.x - b.x, 2);
		var y2 = Math.pow(a.y - b.y, 2);
		var dist = Math.sqrt(x2 + y2);

		return dist;
	}

	function normalize(a) 
	{
		var mag = 1 / Math.sqrt(a * a + b * b);

		return {
			x: a.x * mag,
			y: a.y * mag
		}
	}

	function clamp(value, min, max)
	{
		return Math.max(min, Math.min(max, value));
	}

	function lerp(a,b,t)
	{
		t = clamp(t, 0, 1);

		return a + t * (b - a);
	}

	/******** MODULE ***********/

	function setup()
	{
		create_stage();
		create_layers();
		create_cells();

		setTimeout(resize, 100);
	}

	function resize()
	{
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		var bg = bioObjects[0];
		var bounds = bg.getBounds();
		if (!bounds)
			return;

		var fX = window.innerWidth / bounds.width;
		var fY =  window.innerHeight / bounds.height;

		scaleFactor = Math.max(fX, fY);

		bg.scaleX = scaleFactor;
		bg.scaleY = scaleFactor;

		bg.x = window.innerWidth < bounds.width * scaleFactor ? (window.innerWidth - bounds.width * scaleFactor) * 0.5 : 0;
		bg.y = window.innerHeight < bounds.height * scaleFactor ? (window.innerHeight - bounds.height * scaleFactor) * 0.5 : 0;

		var cellScale = window.innerHeight < window.innerWidth ? CELL_SCALE_LANDSCAPE : CELL_SCALE_PORTRIAT;

		bioObjects.forEach(function(bioObject) {
			if (bioObject == bg)
				return;

			bioObject.regX = bioObject.getBounds().width * 0.5;
			bioObject.regY = bioObject.getBounds().height * 0.5;

			bioObject.x = bioObject.offset.x * window.innerWidth;
			bioObject.y = bioObject.offset.y * window.innerHeight;

			bioObject.scaleX = scaleFactor * cellScale;
			bioObject.scaleY = scaleFactor * cellScale;
			
		});

		stage.update();
	}

	return {
		setup: setup,
		resize: resize,
	}

})(jQuery, createjs);

$(window).resize(biopolis_cells.resize);