var biopolis_cells = (function($, createjs){

	/******** REF ***********/

	var canvas, stage;

	/******** VAR ***********/

	var viewX = 100;
	var detlaViewX = 0;

	/******** CONST ********/

	const PTS = 0.25; // Parallax Trigger Size
	const SCROLL_SPEED = 2500;
	const MAX_X = 5000;
	const MIN_X = 0;
	const CELL_SPEED = 0.5;
	const CELL_RANGE = 200;
	const RANGE_THRESHOLD = 30;

	const BASE_HEIGHT = 1920;

	const SCALEFACTOR_MIN = 0.75;

	/******** STAGE OBJECTS *********/

	var bioObjects = [];
	var BioObject = (function() {

		function BioObject(img, x, y, z) {
			this.Bitmap_constructor(img);
			stage.addChild(this);
			bioObjects.push(this);

			this.z = z || 1;
			this.local = {
				x: (x || 0) * this.z,
				y: y || 0,
			}
		}

		var prototype = createjs.extend(BioObject, createjs.Bitmap);
		prototype.local = null;
		prototype.z = null;
		prototype.update = function(dt, t) {

			var globalY = window.innerHeight / stage.scaleY;
			this.y = this.local.y + globalY - this.image.height;
			this.x = (this.local.x + (viewX / stage.scaleY)) / this.z;

		}

		return createjs.promote(BioObject, "Bitmap");

	})();

	var Layer = (function() {
		function Layer(img, x, y, z) {
			this.BioObject_constructor(img, x, y, z);
		}

		var prototype = createjs.extend(Layer, BioObject);

		return createjs.promote(Layer, "BioObject");
	})();

	var Cell = (function() {
		
		function Cell(img, x, y, z, speed) {
			this.BioObject_constructor(img, x, y, z);
			this.origin = {x: this.local.x, y: this.local.y};
			this.speed = speed == undefined ? 0.25 : speed;
			this.popupID = img.replace("content/","").replace(".png","") + "-popup";

			this.on("click", function(e) {
				biopolis_navigation.showPopup(this.popupID);
			});

			var faceDir = img.replace("character","face").replace(".png","");
			console.log(faceDir);

			//Change the cursor if this cell has a popup
			var has_popup = $("#" + this.popupID).length != 0;
			if (!has_popup)
				return;

			var $cells_pane = $("#cells");

			this.on("mouseover", function(e) {
				$cells_pane.css("cursor","pointer");
			});

			this.on("mouseout", function(e) {
				$cells_pane.css("cursor","auto");
			});
		}

		var prototype = createjs.extend(Cell, BioObject);
		prototype.update = function(dt, t) {
			this.BioObject_update(dt,t);
			
			if (!this.target || this.atTarget()) 
				this.setRandomTarget();

			this.lerpToPosition(this.target, dt);
		}
		prototype.target = null;
		prototype.origin = null;
		prototype.speed = null;
		prototype.$popup = null;

		prototype.atTarget = function()
		{
			return distance(this.local, this.target) < RANGE_THRESHOLD;
		}

		prototype.setRandomTarget = function() 
		{
			var randX = (Math.random() - 0.5) * CELL_RANGE;
			var randY = (Math.random() - 0.5) * CELL_RANGE;

			this.target = {
				x: this.origin.x + randX,
				y: this.origin.y + randY
			};

			if (distance(this.target, this.origin) > CELL_RANGE)
				this.target = normalize(this.target);

		}
		
		prototype.outOfRange = function() 
		{
			return distance(this.local, this.origin) > CELL_RANGE;
		}
		
		prototype.lerpToPosition = function(dest, t) 
		{
			this.local.x = lerp(this.local.x, dest.x, t * this.speed);
			this.local.y = lerp(this.local.y, dest.y, t * this.speed);
		}

		return createjs.promote(Cell, "BioObject");

	})();

	/******** SETUP ***********/

	function create_stage()
	{
		canvas = $("#cell_stage")[0];
		stage = new createjs.Stage(canvas);

		//Handle Stage Movement
		stage.on("stagemousemove", function(e) {
			var x = e.stageX / window.innerWidth;
			var xAbs;

			if (x < PTS)
				xAbs = (x - PTS)/PTS;
			else if (x > (1 - PTS))
				xAbs = (x - (1 - PTS))/PTS;
			else
				xAbs = 0;

			detlaViewX = xAbs * xAbs * Math.sign(xAbs);
		});
	}

	function create_layers()
	{
		new Layer("content/cells_prongs_blurred.png", 0,0,10);
		new Layer("content/cells_lattice.png",		 -300,0,7);
		new Layer("content/cells_prongs.png",		    0,0,4);
		new Layer("content/cells_tube.png",			 1350,0,2);
		new Layer("content/cells_trees.png",		  600,0,2);
	}

	function create_cells()
	{
		var stretch = 1.65;

		new Cell("content/character_BACTERIA.png",		3800 * stretch, -400, 1, 1.5);
		new Cell("content/character_BLKBACTERIA.png",	2200 * stretch, -350, 1);
		new Cell("content/character_BRAINCELL.png",		1700 * stretch, -350, 1);
		new Cell("content/character_FATCELL.png",		1000 * stretch, -800, 7, 0);
		new Cell("content/character_MUSCLECELL.png",	3300 * stretch, -250, 1);
		new Cell("content/character_NEURONCELL.png",	1100 * stretch, -450, 1, 1);
		new Cell("content/character_PLATELET.png",		1500 * stretch, -600, 1, 1);
		new Cell("content/character_R_ROWAN.png",		120 * stretch,  -550, 1);
		new Cell("content/character_R_SCARLETT.png",	200 * stretch,  -430, 1);
		new Cell("content/character_SKINCELLS.png",		1300 * stretch, -150, 1);
		new Cell("content/character_VIRUS.png",			2900 * stretch, -450, 1, 2);
		new Cell("content/character_W_BLANCHE.png",		750 * stretch,  -550, 1);
		new Cell("content/character_W_LIAM.png",		650 * stretch,  -350, 1);
		new Cell("content/character_W_MAY.png",			500 * stretch,  -450, 1);

		stage.enableMouseOver();
	}

	function create_update_loop()
	{
		//Create Update Loop
		createjs.Ticker.on("tick", function(e) {
			var deltaTime = e.delta / 1000;
			var time = createjs.Ticker.getTime();

			viewX -= detlaViewX * SCROLL_SPEED * deltaTime;

			var maxX = MAX_X * stage.scaleY;
			viewX = clamp(viewX, -maxX, MIN_X);
			
			bioObjects.forEach(function(bio){
				bio.update(deltaTime, time);
			})

			stage.update(e);
		});
		createjs.Ticker.timingMode = createjs.Ticker.RAF;
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

	var scaleFactor = 1;
	function getScaleFactor()
	{
		return scaleFactor;
	}


	function setup()
	{
		create_stage();
		create_layers();
		create_cells();
		create_update_loop();

		setTimeout(resize, 250);
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
		if (scaleFactor < SCALEFACTOR_MIN)
			scaleFactor = SCALEFACTOR_MIN;

		stage.scaleX = scaleFactor;
		stage.scaleY = scaleFactor;

		stage.update();

	}

	return {
		setup: setup,
		resize: resize,
		scaleFactor: getScaleFactor
	}

})(jQuery, createjs);

$(window).resize(biopolis_cells.resize);