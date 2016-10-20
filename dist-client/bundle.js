/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(6);

	__webpack_require__(21);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(27);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(28);

	var _pages = __webpack_require__(143);

	var _reactRouter = __webpack_require__(30);

	var _dataLoader = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/******************************************************************************/
	// Setup
	/******************************************************************************/

	window.onload = function () {

	  var mainTag = document.getElementsByTagName('main')[0];

	  _reactDom2.default.render(_react2.default.createElement(Website, null), mainTag);
	  (0, _dataLoader.loadPortfolios)();
	  (0, _dataLoader.loadVideos)();
	};

	/******************************************************************************/
	// Routes
	/******************************************************************************/

	function Website() {

	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _components.Navigation },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _pages.Splash }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/directors', inverse: true, component: _pages.Directors },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: '/directors/:director', inverse: true, component: _pages.Director },
	          _react2.default.createElement(_reactRouter.Route, { path: '/directors/:director/:video', inverse: true, component: _pages.Video })
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/work/:portfolio', inverse: true, component: _pages.Work },
	        _react2.default.createElement(_reactRouter.Route, { path: '/work/:portfolio/:video', inverse: true, component: _pages.Video })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/about', dark: true, component: _pages.About },
	        _react2.default.createElement(_reactRouter.Route, { path: '/about/:staff', dark: true, component: _pages.Staff })
	      )
	    )
	  );
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate,\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Bebas-Neue-Regular';\n  src: url(" + __webpack_require__(8) + ") format(\"woff2\"), url(" + __webpack_require__(9) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'AvenirNext LT Pro';\n  src: url(" + __webpack_require__(10) + ");\n  src: url(" + __webpack_require__(10) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(11) + ") format(\"woff\"), url(" + __webpack_require__(12) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: normal;\n}\n\n.text,\n.title,\n.body,\n.dropdown h1 {\n  letter-spacing: 0px;\n  transition: font-size 500ms;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.title {\n  line-height: 0.9em;\n  font-family: \"Bebas-Neue-Regular\";\n  font-size: 62px;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n@media screen and (max-width: 1200px) {\n  .title {\n    font-size: 46.5px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .title {\n    font-size: 37.2px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .title {\n    font-size: 24.8px;\n  }\n}\n\n.title.mini {\n  line-height: 0.9em;\n  font-size: 24.8px;\n}\n\n@media screen and (max-width: 1200px) {\n  .title.mini {\n    font-size: 18.6px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .title.mini {\n    font-size: 14.88px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .title.mini {\n    font-size: 9.92px;\n  }\n}\n\n.title.small {\n  line-height: 0.9em;\n  font-size: 37.2px;\n}\n\n@media screen and (max-width: 1200px) {\n  .title.small {\n    font-size: 27.9px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .title.small {\n    font-size: 22.32px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .title.small {\n    font-size: 14.88px;\n  }\n}\n\n.title.medium {\n  line-height: 0.9em;\n  font-size: 46.5px;\n}\n\n@media screen and (max-width: 1200px) {\n  .title.medium {\n    font-size: 34.875px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .title.medium {\n    font-size: 27.9px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .title.medium {\n    font-size: 18.6px;\n  }\n}\n\n.title.large {\n  line-height: 0.9em;\n  font-size: 93px;\n}\n\n@media screen and (max-width: 1200px) {\n  .title.large {\n    font-size: 7.5vw;\n  }\n}\n\n.body {\n  line-height: 1.25em;\n  font-family: \"AvenirNext LT Pro\";\n  font-size: 22px;\n}\n\n@media screen and (max-width: 1200px) {\n  .body {\n    font-size: 16.5px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .body {\n    font-size: 13.2px;\n  }\n}\n\n.body.mini {\n  font-size: 8.8px;\n  line-height: 1.25em;\n}\n\n@media screen and (max-width: 1200px) {\n  .body.mini {\n    font-size: 6.6px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .body.mini {\n    font-size: 5.28px;\n  }\n}\n\n.grey {\n  color: #aaa !important;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\nhtml {\n  overflow-y: scroll;\n}\n\np,\na {\n  color: white;\n  text-decoration: none;\n}\n\n.clickable {\n  cursor: pointer;\n  transition: color 500ms;\n}\n\n.clickable.active,\n.clickable:hover {\n  color: #aaa;\n}\n\n.inverse p,\n.inverse a {\n  color: black;\n}\n\n.inverse .clickable.active,\n.inverse .clickable:hover {\n  color: #aaa;\n}\n\n.fill {\n  width: 100%;\n  background-color: transparent;\n}\n\n.fill.inverse {\n  width: 100%;\n  background-color: white;\n}\n\n.padded,\n.mini-width,\n.small-width,\n.med-width,\n.large-width {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.padded-bottom {\n  padding-bottom: 20px;\n}\n\n.padded-top {\n  padding-top: 20px;\n}\n\n.mini-width {\n  max-width: 500px;\n}\n\n.small-width {\n  max-width: 800px;\n}\n\n.med-width {\n  max-width: 1200px;\n}\n\n.large-width {\n  max-width: 1500px;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0px;\n}\n\n.block {\n  overflow: hidden;\n}\n\nvideo::-webkit-media-controls-start-playback-button {\n  display: none;\n}\n\n.bulge {\n  opacity: 1 !important;\n  transition: opacity 500ms;\n}\n\n.bulge:hover {\n  opacity: 0.5 !important;\n}\n\n.caret {\n  display: inline-block;\n  background-image: url(" + __webpack_require__(13) + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: scale(1, 1);\n  transition: transform 500ms, background-image 500ms;\n  width: 32px;\n  height: 26px;\n}\n\n@media screen and (max-width: 1200px) {\n  .caret {\n    width: 24px;\n    height: 19.5px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .caret {\n    width: 19.2px;\n    height: 15.6px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .caret {\n    width: 12.8px;\n    height: 10.4px;\n  }\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown h1 {\n  min-width: 400px;\n  margin: auto;\n  font-family: \"Bebas-Neue-Regular\";\n  font-weight: normal;\n  font-size: 120px;\n}\n\n@media screen and (max-width: 1200px) {\n  .dropdown h1 {\n    font-size: 90px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .dropdown h1 {\n    font-size: 72px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .dropdown h1 {\n    font-size: 48px;\n  }\n}\n\n.dropdown .clickable:hover {\n  transition: color 500ms;\n}\n\n.dropdown .clickable:hover .caret {\n  background-image: url(" + __webpack_require__(14) + ");\n  transform: scale(1.25, 1.25);\n}\n\n.dropdown-list {\n  position: absolute;\n  z-index: 10;\n  right: 0px;\n  opacity: 0;\n  height: 0px;\n  overflow: hidden;\n  padding-bottom: 10px;\n  background-color: white;\n  transition: opacity 500ms;\n}\n\n.dropdown-list.active {\n  opacity: 1;\n  height: inherit;\n}\n\n.dropdown-item {\n  background-color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 2.5px;\n}\n\n#gear-background {\n  background: url(" + __webpack_require__(15) + ") no-repeat center;\n  background-size: contain;\n  opacity: 0.5;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  z-index: -50;\n}\n\n#video-background-overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: -99;\n  background: url(" + __webpack_require__(16) + ") repeat;\n  background-color: transparent;\n  transition: background-color 500ms, background 500ms;\n}\n\n#video-background-overlay.dark {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n#video-background-overlay.inverse {\n  background: white;\n}\n\n#video-background {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n\n#video-background.dark {\n  -webkit-filter: blur(10px);\n}\n\n#nav-holder {\n  display: block;\n  height: 82px;\n}\n\n@media screen and (max-width: 1200px) {\n  #nav-holder {\n    height: 61.5px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  #nav-holder {\n    height: 49.2px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  #nav-holder {\n    height: 32.8px;\n  }\n}\n\n.nav-link {\n  margin-top: 20px;\n  margin-right: 30px;\n  font-size: 52px;\n}\n\n@media screen and (max-width: 1200px) {\n  .nav-link {\n    margin-top: 15px;\n    margin-right: 15px;\n    font-size: 39px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .nav-link {\n    margin-top: 12px;\n    margin-right: 12px;\n    font-size: 31.2px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .nav-link {\n    margin-top: 8px;\n    margin-right: 8px;\n    font-size: 20.8px;\n  }\n}\n\n.nav-home {\n  background-image: url(" + __webpack_require__(15) + ");\n  transform: scale(1, 1);\n  transition: background-image 500ms, transform 500ms;\n  width: 52px;\n  height: 52px;\n  margin-top: 16px;\n  margin-left: 20px;\n}\n\n@media screen and (max-width: 1200px) {\n  .nav-home {\n    width: 39px;\n    height: 39px;\n    margin-top: 12px;\n    margin-left: 15px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .nav-home {\n    width: 31.2px;\n    height: 31.2px;\n    margin-top: 9.6px;\n    margin-left: 12px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .nav-home {\n    width: 20.8px;\n    height: 20.8px;\n    margin-top: 6.4px;\n    margin-left: 8px;\n  }\n}\n\n.nav-home:hover {\n  background-image: url(" + __webpack_require__(17) + ");\n  transform: scale(1.1, 1.1);\n}\n\n.nav-home.active {\n  background-image: url(" + __webpack_require__(17) + ");\n}\n\n#nav-holder.inverse .nav-home {\n  background-image: url(" + __webpack_require__(18) + ");\n}\n\n#nav-holder.inverse .nav-home:hover,\n#nav-holder.inverse .nav-home.active {\n  background-image: url(" + __webpack_require__(17) + ");\n}\n\n.staff-picture {\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.staff-writeup {\n  padding-left: 24px;\n  padding-right: 20px;\n  padding-top: 3px;\n  padding-bottom: 20px;\n  margin-top: -4px;\n  min-height: 180px;\n}\n\n@media screen and (max-width: 800px) {\n  .staff-writeup {\n    min-height: 108px;\n  }\n}\n\n.staff-writeup .staff-bio {\n  margin-left: 200px;\n}\n\n@media screen and (max-width: 800px) {\n  .staff-writeup .staff-bio {\n    margin-left: 128px;\n  }\n}\n\n.staff-writeup .staff-bio .body {\n  margin-top: 10px;\n}\n\n.staff-writeup .staff-picture {\n  cursor: auto;\n  opacity: 1;\n  width: 180px;\n  height: 180px;\n  float: left;\n}\n\n@media screen and (max-width: 800px) {\n  .staff-writeup .staff-picture {\n    width: 108px;\n    height: 108px;\n  }\n}\n\n.page.navigate-enter {\n  opacity: 0;\n}\n\n.page.navigate-enter-active {\n  opacity: 1;\n  transition: opacity 500ms ease-in-out;\n}\n\n.page.navigate-leave {\n  opacity: 1;\n}\n\n.page.navigate-leave-active {\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n#splash-page {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Bebas-Neue-Regular\";\n  color: white;\n  text-transform: uppercase;\n  z-index: -50;\n}\n\n#splash-page h1 {\n  font-size: 15vw;\n}\n\n#splash-page.navigate-enter {\n  top: -100vh;\n}\n\n#splash-page.navigate-enter #splash-background {\n  transform: scale(0, 0);\n}\n\n#splash-page.navigate-enter.navigate-enter-active {\n  top: 0vh;\n  transition: top 500ms ease-out;\n}\n\n#splash-page.navigate-enter.navigate-enter-active #splash-background {\n  transform: scale(1, 1);\n  transition: transform 500ms;\n}\n\n#splash-page.navigate-leave {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n#splash-page.navigate-leave #splash-background {\n  opacity: 1;\n}\n\n#splash-page.navigate-leave.navigate-leave-active {\n  transform: scale(4, 4);\n  opacity: 0;\n  transition: transform 500ms, opacity 500ms, ease-out;\n}\n\n#splash-page.navigate-leave.navigate-leave-active #splash-background {\n  opacity: 0;\n  transition: opacity 500ms;\n}\n\n#just_clicks_button {\n  position: fixed;\n  right: 30px;\n  bottom: 20px;\n}\n\n.play-button {\n  display: inline-block;\n  background-image: url(" + __webpack_require__(19) + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: scale(1, 1);\n  transition: transform 500ms, background-image 500ms;\n  width: 18px;\n  height: 18px;\n}\n\n@media screen and (max-width: 1200px) {\n  .play-button {\n    width: 13.5px;\n    height: 13.5px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .play-button {\n    width: 10.8px;\n    height: 10.8px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .play-button {\n    width: 7.2px;\n    height: 7.2px;\n  }\n}\n\n.clickable:hover {\n  transition: color 500ms;\n}\n\n.clickable:hover .play-button {\n  background-image: url(" + __webpack_require__(20) + ");\n  transform: scale(1.25, 1.25);\n}\n\n#about-page.navigate-enter {\n  position: absolute;\n  top: -100vh;\n}\n\n#about-page.navigate-enter #our-team-section {\n  overflow: hidden;\n  height: 0px;\n}\n\n#about-page.navigate-enter-active {\n  position: absolute;\n  top: -100vh;\n  transition: top, 250ms;\n}\n\n#about-page.navigate-enter-active #our-team-section {\n  height: auto;\n  transition: height, 250ms;\n}\n\n@media screen and (max-width: 1200px) {\n  #about-page .title.large {\n    max-width: 1200px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  #about-page .title.large {\n    max-width: 800px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  #about-page .title.large {\n    max-width: 500px;\n  }\n}\n\n#bottom-info .title {\n  letter-spacing: 0.5px;\n}\n\n.about-stick {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.video-page {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.75);\n}\n\n.hack-image-viewer {\n  margin: auto;\n  display: block;\n  padding-top: 0px;\n  max-width: 675px;\n}\n\n@media screen and (max-width: 1200px) {\n  .hack-image-viewer {\n    max-width: 540px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .hack-image-viewer {\n    max-width: 360px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .hack-image-viewer {\n    max-width: 225px;\n  }\n}\n\n.video-player {\n  width: 960px;\n  height: 540px;\n  padding-top: 0px;\n  border: none;\n  transition: width 500ms, height 500ms, padding-top 500ms;\n  margin: auto;\n  display: block;\n}\n\n@media screen and (max-width: 1200px) {\n  .video-player {\n    width: 720px;\n    height: 405px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .video-player {\n    width: 576px;\n    height: 324px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .video-player {\n    width: 384px;\n    height: 216px;\n  }\n}\n\n.cell-block {\n  display: inline-block;\n  margin: 0px;\n  padding: 0px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e2104e1062874ad0b506864cd554e6bb.woff2";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0413fec9aa7bcae2111b974cae78d4ea.woff";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1fa1e9a6bc5e04e0ddae853c6821b1fd.eot";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "55f4d6f05544d1fbd39771deecad8692.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "524b642aa909e57fe19fb8dfe5cc8f3b.ttf";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNC4zIDI4LjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0LjMgMjguNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDAwMDA7fQo8L3N0eWxlPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE3LjMsMjguMiAxLDAgMzMuNSwwICIvPgo8L3N2Zz4K"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNC4zIDI4LjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0LjMgMjguNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNhYWE7fQo8L3N0eWxlPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE3LjMsMjguMiAxLDAgMzMuNSwwICIvPgo8L3N2Zz4K"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjUgNSA5MCA5MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuMSwxMS43SDI3LjlMNS44LDUwbDIyLjEsMzguM2g0NC4yTDk0LjIsNTBMNzIuMSwxMS43eiBNNTAsNjUuNmMtOC42LDAtMTUuNi03LTE1LjYtMTUuNgoJYzAtOC42LDctMTUuNiwxNS42LTE1LjZjOC42LDAsMTUuNiw3LDE1LjYsMTUuNkM2NS42LDU4LjYsNTguNiw2NS42LDUwLDY1LjZ6Ii8+Cjwvc3ZnPgo="

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "64e92568b4db6618fbbf7e3c6ef6d45a.png";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjUgNSA5MCA5MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNhYWFhYWE7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuMSwxMS43SDI3LjlMNS44LDUwbDIyLjEsMzguM2g0NC4yTDk0LjIsNTBMNzIuMSwxMS43eiBNNTAsNjUuNmMtOC42LDAtMTUuNi03LTE1LjYtMTUuNgoJYzAtOC42LDctMTUuNiwxNS42LTE1LjZjOC42LDAsMTUuNiw3LDE1LjYsMTUuNkM2NS42LDU4LjYsNTguNiw2NS42LDUwLDY1LjZ6Ii8+Cjwvc3ZnPgo="

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjUgNSA5MCA5MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDAwMDA7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuMSwxMS43SDI3LjlMNS44LDUwbDIyLjEsMzguM2g0NC4yTDk0LjIsNTBMNzIuMSwxMS43eiBNNTAsNjUuNmMtOC42LDAtMTUuNi03LTE1LjYtMTUuNgoJYzAtOC42LDctMTUuNiwxNS42LTE1LjZjOC42LDAsMTUuNiw3LDE1LjYsMTUuNkM2NS42LDU4LjYsNTguNiw2NS42LDUwLDY1LjZ6Ii8+Cjwvc3ZnPgo="

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NzIuOCA1NDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Mi44IDU0NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjQ3Mi44LDI3MyAwLDU0NiAwLDAgIi8+Cjwvc3ZnPgo="

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NzIuOCA1NDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Mi44IDU0NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNhYWFhYWE7fQo8L3N0eWxlPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjQ3Mi44LDI3MyAwLDU0NiAwLDAgIi8+Cjwvc3ZnPgo="

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//IE-11 compatibility
	window.Object.assign = window.Object.assign || __webpack_require__(22);
	window.Promise = window.Promise || __webpack_require__(23);

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;

	  function noop() {}
	  
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }

	  function Promise(fn) {
	    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];

	    doResolve(fn, this);
	  }

	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }

	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }

	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }

	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      Promise._immediateFn(function() {
	        if (!self._handled) {
	          Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }

	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }

	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }

	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }

	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };

	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new (this.constructor)(noop);

	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };

	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);

	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;

	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }

	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };

	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }

	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };

	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };

	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };

	  // Use polyfill for setImmediate for performance gains
	  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
	    function (fn) {
	      setTimeoutFunc(fn, 0);
	    };

	  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };

	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @deprecated
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    Promise._immediateFn = fn;
	  };

	  /**
	   * Change the function to execute on unhandled rejection
	   * @param {function} fn Function to execute on unhandled rejection
	   * @deprecated
	   */
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    Promise._unhandledRejectionFn = fn;
	  };
	  
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }

	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24).setImmediate))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(25).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24).setImmediate, __webpack_require__(24).clearImmediate))

/***/ },
/* 25 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Portfolio = exports.StaffPicture = exports.Dropdown = exports.Footer = exports.Content = exports.FreeWall = exports.Inverted = exports.TitleText = exports.BodyText = exports.Spacer = exports.Background = exports.Navigation = undefined;

	var _Navigation = __webpack_require__(29);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _Background = __webpack_require__(92);

	var _Background2 = _interopRequireDefault(_Background);

	var _Spacer = __webpack_require__(129);

	var _Spacer2 = _interopRequireDefault(_Spacer);

	var _TitleText = __webpack_require__(130);

	var _TitleText2 = _interopRequireDefault(_TitleText);

	var _BodyText = __webpack_require__(131);

	var _BodyText2 = _interopRequireDefault(_BodyText);

	var _Inverted = __webpack_require__(132);

	var _Inverted2 = _interopRequireDefault(_Inverted);

	var _FreeWall = __webpack_require__(133);

	var _FreeWall2 = _interopRequireDefault(_FreeWall);

	var _Dropdown = __webpack_require__(136);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _Portfolio = __webpack_require__(138);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _StaffPicture = __webpack_require__(140);

	var _StaffPicture2 = _interopRequireDefault(_StaffPicture);

	var _Content = __webpack_require__(141);

	var _Content2 = _interopRequireDefault(_Content);

	var _Footer = __webpack_require__(142);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Navigation = _Navigation2.default;
	exports.Background = _Background2.default;
	exports.Spacer = _Spacer2.default;
	exports.BodyText = _BodyText2.default;
	exports.TitleText = _TitleText2.default;
	exports.Inverted = _Inverted2.default;
	exports.FreeWall = _FreeWall2.default;
	exports.Content = _Content2.default;
	exports.Footer = _Footer2.default;
	exports.Dropdown = _Dropdown2.default;
	exports.StaffPicture = _StaffPicture2.default;
	exports.Portfolio = _Portfolio2.default;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Navigation;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(30);

	var _Background = __webpack_require__(92);

	var _Background2 = _interopRequireDefault(_Background);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

	var DefaultPortfolio = 'featured_work';

	function HomeIcon() {

	  return _react2.default.createElement(_reactRouter.Link, { to: '/',
	    onlyActiveOnIndex: true,
	    className: 'nav-home left title clickable',
	    activeClassName: 'active' });
	}

	function PageLink(_ref) {
	  var to = _ref.to;
	  var children = _ref.children;


	  return _react2.default.createElement(
	    _reactRouter.Link,
	    { to: to,
	      className: 'nav-link right title clickable',
	      activeClassName: 'active' },
	    children
	  );
	}

	function NavHolder(_ref2) {
	  var children = _ref2.children;
	  var inverse = _ref2.inverse;

	  var classes = inverse ? ' inverse' : '';

	  return _react2.default.createElement(
	    'div',
	    { id: 'nav-holder', className: classes },
	    children
	  );
	}

	function Navigation(_ref3) {
	  var children = _ref3.children;
	  var routes = _ref3.routes;

	  var inverse = routes && !!routes[routes.length - 1].inverse;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      NavHolder,
	      { inverse: inverse },
	      _react2.default.createElement(HomeIcon, null),
	      _react2.default.createElement(
	        PageLink,
	        { to: '/directors' },
	        'Directors'
	      ),
	      _react2.default.createElement(
	        PageLink,
	        { to: '/work/' + DefaultPortfolio },
	        'Work'
	      ),
	      _react2.default.createElement(
	        PageLink,
	        { to: '/about' },
	        'About'
	      )
	    ),
	    children,
	    _react2.default.createElement(_Background2.default, null)
	  );
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(31);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(32);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(37);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(39);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(69);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(70);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(71);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(73);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(75);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(74);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(76);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(77);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(78);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(79);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(80);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(66);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(81);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(82);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(86);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(87);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(88);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(91);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(83);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(26);

	var _deprecateObjectProperties = __webpack_require__(33);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(36);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(26);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(40);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(55);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(58);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(36);

	var _RouterContext = __webpack_require__(66);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(31);

	var _RouterUtils = __webpack_require__(68);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(41);

	var _PathUtils = __webpack_require__(42);

	var _ExecutionEnvironment = __webpack_require__(43);

	var _DOMUtils = __webpack_require__(44);

	var _DOMStateStorage = __webpack_require__(45);

	var _createDOMHistory = __webpack_require__(46);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(43);

	var _DOMUtils = __webpack_require__(44);

	var _createHistory = __webpack_require__(47);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(48);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(42);

	var _AsyncUtils = __webpack_require__(51);

	var _Actions = __webpack_require__(41);

	var _createLocation2 = __webpack_require__(52);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(53);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(49);
	var isArguments = __webpack_require__(50);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 49 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 50 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(41);

	var _PathUtils = __webpack_require__(42);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(56);

	var _runTransitionHook = __webpack_require__(53);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(42);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(57);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _Actions = __webpack_require__(41);

	var _computeChangedRoutes2 = __webpack_require__(59);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(60);

	var _isActive2 = __webpack_require__(62);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(63);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(65);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _Actions.REPLACE);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(37);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(61);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(37);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(61);

	var _makeStateWithLocation = __webpack_require__(64);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(33);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(61);

	var _makeStateWithLocation = __webpack_require__(64);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(37);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(33);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(67);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(31);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(37);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(33);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot handle clicks.') : (0, _invariant2.default)(false) : void 0;

	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	      var state = _props.state;

	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	      this.context.router.push(location);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(69);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(72);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent) {
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    render: function render() {
	      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(74);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(31);

	var _PatternUtils = __webpack_require__(37);

	var _InternalPropTypes = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(31);

	var _InternalPropTypes = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(31);

	var _InternalPropTypes = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(55);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(58);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(66);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(34);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(83);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(58);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(31);

	var _RouterUtils = __webpack_require__(68);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(55);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(84);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(85);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(43);

	var _PathUtils = __webpack_require__(42);

	var _runTransitionHook = __webpack_require__(53);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(42);

	var _Actions = __webpack_require__(41);

	var _createHistory = __webpack_require__(47);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(55);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(84);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(66);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  var withContext = middlewares.map(function (m) {
	    return m.renderRouterContext;
	  }).filter(function (f) {
	    return f;
	  });
	  var withComponent = middlewares.map(function (m) {
	    return m.renderRouteComponent;
	  }).filter(function (f) {
	    return f;
	  });
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(89);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(90);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(38);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(41);

	var _PathUtils = __webpack_require__(42);

	var _ExecutionEnvironment = __webpack_require__(43);

	var _DOMUtils = __webpack_require__(44);

	var _DOMStateStorage = __webpack_require__(45);

	var _createDOMHistory = __webpack_require__(46);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(86);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(40);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(90);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _justClicksWeb = __webpack_require__(93);

	var _justClicksWeb2 = _interopRequireDefault(_justClicksWeb);

	var _justClicksWeb3 = __webpack_require__(94);

	var _justClicksWeb4 = _interopRequireDefault(_justClicksWeb3);

	var _dataLoader = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Background = function (_React$Component) {
	  _inherits(Background, _React$Component);

	  function Background(props) {
	    _classCallCheck(this, Background);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Background).call(this, props));

	    _this.state = { classes: '' };
	    _this.backgroundStyleChange = _this.backgroundStyleChange.bind(_this);
	    return _this;
	  }

	  _createClass(Background, [{
	    key: 'backgroundStyleChange',
	    value: function backgroundStyleChange(data) {
	      var classes = '';

	      for (var key in data) {
	        if (data[key] === true) classes += classes === '' ? key : ' ' + key;
	      }this.setState({ classes: classes });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _dataLoader.events.on('background-style', this.backgroundStyleChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _dataLoader.events.removeEventListener('background-style', this.backgroundStyleChange);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = this.state.classes;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', { id: 'video-background-overlay', className: classes }),
	        _react2.default.createElement(
	          'video',
	          { id: 'video-background', className: classes, loop: true, autoPlay: true, muted: true, poster: _justClicksWeb4.default },
	          _react2.default.createElement('source', { src: _justClicksWeb2.default, type: 'video/mp4' })
	        )
	      );
	    }
	  }]);

	  return Background;
	}(_react2.default.Component);

	exports.default = Background;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "54c0f24c2fc4ea3eb4723df05a11a8d7.mp4";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "959e97c474db670d12ea7775da6c6d0f.jpg";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.data = undefined;
	exports.loadPortfolios = loadPortfolios;
	exports.loadVideos = loadVideos;

	var _client = __webpack_require__(96);

	var _client2 = _interopRequireDefault(_client);

	var _client3 = __webpack_require__(116);

	var _client4 = _interopRequireDefault(_client3);

	var _events = __webpack_require__(112);

	var _events2 = _interopRequireDefault(_events);

	var _jquery = __webpack_require__(128);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/******************************************************************************/
	// Config
	/******************************************************************************/

	var host = 'http://192.168.1.32:3030';
	var config = (0, _client4.default)(host).jquery(_jquery2.default);
	var app = (0, _client2.default)().configure(config);

	/******************************************************************************/
	// Emitter
	/******************************************************************************/

	var events = new _events2.default();

	var data = {
	  portfolios: null,
	  videos: null
	};

	/******************************************************************************/
	// Fetch
	/******************************************************************************/

	function randomCellSize() {
	  var plus = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	  return (plus + Math.ceil(Math.random() * 5)) * 50;
	}

	function randomizeWidthAndHeight(videos) {
	  for (var i in videos) {
	    videos[i].width = randomCellSize(3);
	    videos[i].height = randomCellSize(2);
	  }

	  return videos;
	}

	function loadPortfolios() {
	  app.service('portfolios').find().then(function (portfolios) {
	    data.portfolios = portfolios;
	    events.emit('portfolios-loaded', portfolios);
	  });
	}

	function loadVideos() {
	  app.service('videos').find().then(function (videos) {
	    data.videos = randomizeWidthAndHeight(videos);
	    events.emit('videos-loaded', data.videos);
	  });
	}

	/******************************************************************************/
	// Exports
	/******************************************************************************/

	exports.data = data;
	exports.events = events;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(97);


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createApplication;

	var _feathers = __webpack_require__(98);

	var _feathers2 = _interopRequireDefault(_feathers);

	var _express = __webpack_require__(115);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createApplication() {
	  return (0, _feathers2.default)(_express2.default.apply(undefined, arguments));
	}

	createApplication.version = '2.0.1';
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createApplication;

	var _uberproto = __webpack_require__(99);

	var _uberproto2 = _interopRequireDefault(_uberproto);

	var _application = __webpack_require__(100);

	var _application2 = _interopRequireDefault(_application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Create a Feathers application that extends Express.
	 *
	 * @return {Function}
	 * @api public
	 */
	function createApplication(app) {
	  _uberproto2.default.mixin(_application2.default, app);
	  app.init();
	  return app;
	}
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
	/**
	 * A base object for ECMAScript 5 style prototypal inheritance.
	 *
	 * @see https://github.com/rauschma/proto-js/
	 * @see http://ejohn.org/blog/simple-javascript-inheritance/
	 * @see http://uxebu.com/blog/2011/02/23/object-based-inheritance-for-ecmascript-5/
	 */
	(function (root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.Proto = factory();
		}
	}(this, function () {

		function makeSuper(_super, old, name, fn) {
			return function () {
				var tmp = this._super;

				// Add a new ._super() method that is the same method
				// but either pointing to the prototype method
				// or to the overwritten method
				this._super = (typeof old === 'function') ? old : _super[name];

				// The method only need to be bound temporarily, so we
				// remove it when we're done executing
				var ret = fn.apply(this, arguments);
				this._super = tmp;

				return ret;
			};
		}

		function legacyMixin(prop, obj) {
			var self = obj || this;
			var fnTest = /\b_super\b/;
			var _super = Object.getPrototypeOf(self) || self.prototype;
			var _old;

			// Copy the properties over
			for (var name in prop) {
				// store the old function which would be overwritten
				_old = self[name];

				// Check if we're overwriting an existing function
				if(
						((
							typeof prop[name] === 'function' &&
							typeof _super[name] === 'function'
						) || (
							typeof _old === 'function' &&
							typeof prop[name] === 'function'
						)) && fnTest.test(prop[name])
				) {
					self[name] = makeSuper(_super, _old, name, prop[name]);
				} else {
					self[name] = prop[name];
				}
			}

			return self;
		}

		function es5Mixin(prop, obj) {
			var self = obj || this;
			var fnTest = /\b_super\b/;
			var _super = Object.getPrototypeOf(self) || self.prototype;
			var descriptors = {};
			var proto = prop;
			var processProperty = function(name) {
				if(!descriptors[name]) {
					descriptors[name] = Object.getOwnPropertyDescriptor(proto, name);
				}
			};

			// Collect all property descriptors
			do {
				Object.getOwnPropertyNames(proto).forEach(processProperty);
	    } while((proto = Object.getPrototypeOf(proto)) && Object.getPrototypeOf(proto));
			
			Object.keys(descriptors).forEach(function(name) {
				var descriptor = descriptors[name];

				if(typeof descriptor.value === 'function' && fnTest.test(descriptor.value)) {
					descriptor.value = makeSuper(_super, self[name], name, descriptor.value);
				}

				Object.defineProperty(self, name, descriptor);
			});

			return self;
		}

		return {
			/**
			 * Create a new object using Object.create. The arguments will be
			 * passed to the new instances init method or to a method name set in
			 * __init.
			 */
			create: function () {
				var instance = Object.create(this);
				var init = typeof instance.__init === 'string' ? instance.__init : 'init';

				if (typeof instance[init] === 'function') {
					instance[init].apply(instance, arguments);
				}
				return instance;
			},
			/**
			 * Mixin a given set of properties
			 * @param prop The properties to mix in
			 * @param obj [optional] The object to add the mixin
			 */
			mixin: typeof Object.defineProperty === 'function' ? es5Mixin : legacyMixin,
			/**
			 * Extend the current or a given object with the given property
			 * and return the extended object.
			 * @param prop The properties to extend with
			 * @param obj [optional] The object to extend from
			 * @returns The extended object
			 */
			extend: function (prop, obj) {
				return this.mixin(prop, Object.create(obj || this));
			},
			/**
			 * Return a callback function with this set to the current or a given context object.
			 * @param name Name of the method to proxy
			 * @param args... [optional] Arguments to use for partial application
			 */
			proxy: function (name) {
				var fn = this[name];
				var args = Array.prototype.slice.call(arguments, 1);

				args.unshift(this);
				return fn.bind.apply(fn, args);
			}
		};

	}));


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debug = __webpack_require__(101);

	var _debug2 = _interopRequireDefault(_debug);

	var _feathersCommons = __webpack_require__(104);

	var _uberproto = __webpack_require__(99);

	var _uberproto2 = _interopRequireDefault(_uberproto);

	var _index = __webpack_require__(108);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var debug = (0, _debug2.default)('feathers:application');
	var methods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
	var Proto = _uberproto2.default.extend({
	  create: null
	});

	exports.default = {
	  init: function init() {
	    Object.assign(this, {
	      methods: methods,
	      mixins: (0, _index2.default)(),
	      services: {},
	      providers: [],
	      _setup: false
	    });
	  },
	  service: function service(location, _service) {
	    var _this = this;

	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    location = (0, _feathersCommons.stripSlashes)(location);

	    if (!_service) {
	      var current = this.services[location];

	      if (typeof current === 'undefined' && typeof this.defaultService === 'function') {
	        return this.service(location, this.defaultService(location), options);
	      }

	      return current;
	    }

	    var protoService = Proto.extend(_service);

	    debug('Registering new service at `' + location + '`');

	    // Add all the mixins
	    this.mixins.forEach(function (fn) {
	      return fn.call(_this, protoService);
	    });

	    if (typeof protoService._setup === 'function') {
	      protoService._setup(this, location);
	    }

	    // Run the provider functions to register the service
	    this.providers.forEach(function (provider) {
	      return provider.call(_this, location, protoService, options);
	    });

	    // If we ran setup already, set this service up explicitly
	    if (this._isSetup && typeof protoService.setup === 'function') {
	      debug('Setting up service for `' + location + '`');
	      protoService.setup(this, location);
	    }

	    return this.services[location] = protoService;
	  },
	  use: function use(location) {
	    var service = void 0,
	        middleware = Array.from(arguments).slice(1).reduce(function (middleware, arg) {
	      if (typeof arg === 'function') {
	        middleware[service ? 'after' : 'before'].push(arg);
	      } else if (!service) {
	        service = arg;
	      } else {
	        throw new Error('invalid arg passed to app.use');
	      }
	      return middleware;
	    }, {
	      before: [],
	      after: []
	    });

	    var hasMethod = function hasMethod(methods) {
	      return methods.some(function (name) {
	        return service && typeof service[name] === 'function';
	      });
	    };

	    // Check for service (any object with at least one service method)
	    if (hasMethod(['handle', 'set']) || !hasMethod(this.methods.concat('setup'))) {
	      return this._super.apply(this, arguments);
	    }

	    // Any arguments left over are other middleware that we want to pass to the providers
	    this.service(location, service, { middleware: middleware });

	    return this;
	  },
	  setup: function setup() {
	    var _this2 = this;

	    // Setup each service (pass the app so that they can look up other services etc.)
	    Object.keys(this.services).forEach(function (path) {
	      var service = _this2.services[path];

	      debug('Setting up service for `' + path + '`');
	      if (typeof service.setup === 'function') {
	        service.setup(_this2, path);
	      }
	    });

	    this._isSetup = true;

	    return this;
	  },


	  // Express 3.x configure is gone in 4.x but we'll keep a more basic version
	  // That just takes a function in order to keep Feathers plugin configuration easier.
	  // Environment specific configurations should be done as suggested in the 4.x migration guide:
	  // https://github.com/visionmedia/express/wiki/Migrating-from-3.x-to-4.x
	  configure: function configure(fn) {
	    fn.call(this);

	    return this;
	  },
	  listen: function listen() {
	    var server = this._super.apply(this, arguments);

	    this.setup(server);
	    debug('Feathers application listening');

	    return server;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(102);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(103);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _arguments = __webpack_require__(105);

	var _arguments2 = _interopRequireDefault(_arguments);

	var _utils = __webpack_require__(106);

	var _hooks = __webpack_require__(107);

	var _hooks2 = _interopRequireDefault(_hooks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  getArguments: _arguments2.default,
	  stripSlashes: _utils.stripSlashes,
	  each: _utils.each,
	  hooks: _hooks2.default,
	  matcher: _utils.matcher,
	  sorter: _utils.sorter
	};
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = getArguments;
	var noop = exports.noop = function noop() {};
	var getCallback = function getCallback(args) {
	  var last = args[args.length - 1];
	  return typeof last === 'function' ? last : noop;
	};
	var getParams = function getParams(args, position) {
	  return _typeof(args[position]) === 'object' ? args[position] : {};
	};

	var updateOrPatch = function updateOrPatch(name) {
	  return function (args) {
	    var id = args[0];
	    var data = args[1];
	    var callback = getCallback(args);
	    var params = getParams(args, 2);

	    if (typeof id === 'function') {
	      throw new Error('First parameter for \'' + name + '\' can not be a function');
	    }

	    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	      throw new Error('No data provided for \'' + name + '\'');
	    }

	    if (args.length > 4) {
	      throw new Error('Too many arguments for \'' + name + '\' service method');
	    }

	    return [id, data, params, callback];
	  };
	};

	var getOrRemove = function getOrRemove(name) {
	  return function (args) {
	    var id = args[0];
	    var params = getParams(args, 1);
	    var callback = getCallback(args);

	    if (args.length > 3) {
	      throw new Error('Too many arguments for \'' + name + '\' service method');
	    }

	    if (typeof id === 'function') {
	      throw new Error('First parameter for \'' + name + '\' can not be a function');
	    }

	    return [id, params, callback];
	  };
	};

	var converters = exports.converters = {
	  find: function find(args) {
	    var callback = getCallback(args);
	    var params = getParams(args, 0);

	    if (args.length > 2) {
	      throw new Error('Too many arguments for \'find\' service method');
	    }

	    return [params, callback];
	  },
	  create: function create(args) {
	    var data = args[0];
	    var params = getParams(args, 1);
	    var callback = getCallback(args);

	    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	      throw new Error('First parameter for \'create\' must be an object');
	    }

	    if (args.length > 3) {
	      throw new Error('Too many arguments for \'create\' service method');
	    }

	    return [data, params, callback];
	  },


	  update: updateOrPatch('update'),

	  patch: updateOrPatch('patch'),

	  get: getOrRemove('get'),

	  remove: getOrRemove('remove')
	};

	function getArguments(method, args) {
	  return converters[method](args);
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.stripSlashes = stripSlashes;
	exports.each = each;
	exports.matcher = matcher;
	exports.sorter = sorter;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function stripSlashes(name) {
	  return name.replace(/^(\/*)|(\/*)$/g, '');
	}

	function each(obj, callback) {
	  if (obj && typeof obj.forEach === 'function') {
	    obj.forEach(callback);
	  } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    Object.keys(obj).forEach(function (key) {
	      return callback(obj[key], key);
	    });
	  }
	}

	var _ = exports._ = {
	  some: function some(value, callback) {
	    return Object.keys(value).map(function (key) {
	      return [value[key], key];
	    }).some(function (current) {
	      return callback.apply(undefined, _toConsumableArray(current));
	    });
	  },
	  every: function every(value, callback) {
	    return Object.keys(value).map(function (key) {
	      return [value[key], key];
	    }).every(function (current) {
	      return callback.apply(undefined, _toConsumableArray(current));
	    });
	  },
	  isMatch: function isMatch(obj, item) {
	    return Object.keys(item).every(function (key) {
	      return obj[key] === item[key];
	    });
	  },
	  omit: function omit(obj) {
	    var result = _extends({}, obj);

	    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      keys[_key - 1] = arguments[_key];
	    }

	    keys.forEach(function (key) {
	      return delete result[key];
	    });
	    return result;
	  }
	};

	var specialFilters = exports.specialFilters = {
	  $in: function $in(key, ins) {
	    return function (current) {
	      return ins.indexOf(current[key]) !== -1;
	    };
	  },
	  $nin: function $nin(key, nins) {
	    return function (current) {
	      return nins.indexOf(current[key]) === -1;
	    };
	  },
	  $lt: function $lt(key, value) {
	    return function (current) {
	      return current[key] < value;
	    };
	  },
	  $lte: function $lte(key, value) {
	    return function (current) {
	      return current[key] <= value;
	    };
	  },
	  $gt: function $gt(key, value) {
	    return function (current) {
	      return current[key] > value;
	    };
	  },
	  $gte: function $gte(key, value) {
	    return function (current) {
	      return current[key] >= value;
	    };
	  },
	  $ne: function $ne(key, value) {
	    return function (current) {
	      return current[key] !== value;
	    };
	  }
	};

	function matcher(originalQuery) {
	  var query = _.omit(originalQuery, '$limit', '$skip', '$sort');

	  return function (item) {
	    if (query.$or && _.some(query.$or, function (or) {
	      return _.isMatch(item, or);
	    })) {
	      return true;
	    }

	    return _.every(query, function (value, key) {
	      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	        return _.every(value, function (target, filterType) {
	          if (specialFilters[filterType]) {
	            var filter = specialFilters[filterType](key, target);
	            return filter(item);
	          }

	          return false;
	        });
	      } else if (typeof item[key] !== 'undefined') {
	        return item[key] === query[key];
	      }

	      return false;
	    });
	  };
	}

	function sorter($sort) {
	  return function (first, second) {
	    var comparator = 0;
	    each($sort, function (modifier, key) {
	      modifier = parseInt(modifier, 10);

	      if (first[key] < second[key]) {
	        comparator -= 1 * modifier;
	      }

	      if (first[key] > second[key]) {
	        comparator += 1 * modifier;
	      }
	    });
	    return comparator;
	  };
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _utils = __webpack_require__(106);

	function getOrRemove(args) {
	  return {
	    id: args[0],
	    params: args[1],
	    callback: args[2]
	  };
	}

	function updateOrPatch(args) {
	  return {
	    id: args[0],
	    data: args[1],
	    params: args[2],
	    callback: args[3]
	  };
	}

	exports.converters = {
	  find: function find(args) {
	    return {
	      params: args[0],
	      callback: args[1]
	    };
	  },
	  create: function create(args) {
	    return {
	      data: args[0],
	      params: args[1],
	      callback: args[2]
	    };
	  },
	  get: getOrRemove,
	  remove: getOrRemove,
	  update: updateOrPatch,
	  patch: updateOrPatch
	};

	exports.hookObject = exports.hook = function (method, type, args) {
	  var hook = exports.converters[method](args);

	  hook.method = method;
	  hook.type = type;

	  return hook;
	};

	var defaultMakeArguments = exports.defaultMakeArguments = function (hook) {
	  var result = [];
	  if (typeof hook.id !== 'undefined') {
	    result.push(hook.id);
	  }

	  if (hook.data) {
	    result.push(hook.data);
	  }

	  result.push(hook.params || {});
	  result.push(hook.callback);

	  return result;
	};

	exports.makeArguments = function (hook) {
	  if (hook.method === 'find') {
	    return [hook.params, hook.callback];
	  }

	  if (hook.method === 'get' || hook.method === 'remove') {
	    return [hook.id, hook.params, hook.callback];
	  }

	  if (hook.method === 'update' || hook.method === 'patch') {
	    return [hook.id, hook.data, hook.params, hook.callback];
	  }

	  if (hook.method === 'create') {
	    return [hook.data, hook.params, hook.callback];
	  }

	  return defaultMakeArguments(hook);
	};

	exports.convertHookData = function (obj) {
	  var hook = {};

	  if (Array.isArray(obj)) {
	    hook = { all: obj };
	  } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    hook = { all: [obj] };
	  } else {
	    (0, _utils.each)(obj, function (value, key) {
	      hook[key] = !Array.isArray(value) ? [value] : value;
	    });
	  }

	  return hook;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var mixins = [__webpack_require__(109), __webpack_require__(110), __webpack_require__(114)];

	  // Override push to make sure that normalize is always the last
	  mixins.push = function () {
	    var args = [this.length - 1, 0].concat(Array.from(arguments));
	    this.splice.apply(this, args);
	    return this.length;
	  };

	  return mixins;
	};

	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (service) {
	  var _this = this;

	  if (typeof service.mixin === 'function') {
	    (function () {
	      var mixin = {};

	      _this.methods.forEach(function (method) {
	        if (typeof service[method] === 'function') {
	          mixin[method] = wrapper;
	        }
	      });

	      service.mixin(mixin);
	    })();
	  }
	};

	function isPromise(result) {
	  return typeof result !== 'undefined' && typeof result.then === 'function';
	}

	function wrapper() {
	  var result = this._super.apply(this, arguments);
	  var callback = arguments[arguments.length - 1];

	  if (typeof callback === 'function' && isPromise(result)) {
	    result.then(function (data) {
	      return callback(null, data);
	    }, function (error) {
	      return callback(error);
	    });
	  }
	  return result;
	}

	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (service) {
	  var isEmitter = typeof service.on === 'function' && typeof service.emit === 'function';
	  var emitter = service._rubberDuck = _rubberduck2.default.emitter(service);

	  if (typeof service.mixin === 'function' && !isEmitter) {
	    service.mixin(_events.EventEmitter.prototype);
	  }

	  service._serviceEvents = Array.isArray(service.events) ? service.events.slice() : [];

	  // Pass the Rubberduck error event through
	  // TODO deal with error events properly
	  emitter.on('error', function (errors) {
	    service.emit('serviceError', errors[0]);
	  });

	  Object.keys(eventMappings).forEach(function (method) {
	    var event = eventMappings[method];
	    var alreadyEmits = service._serviceEvents.indexOf(event) !== -1;

	    if (typeof service[method] === 'function' && !alreadyEmits) {
	      // The Rubberduck event name (e.g. afterCreate, afterUpdate or afterDestroy)
	      var eventName = 'after' + upperCase(method);
	      service._serviceEvents.push(event);
	      // Punch the given method
	      emitter.punch(method, -1);
	      // Pass the event and error event through
	      emitter.on(eventName, function (results, args) {
	        if (!results[0]) {
	          (function () {
	            // callback without error
	            var hook = hookObject(method, 'after', args);
	            var data = Array.isArray(results[1]) ? results[1] : [results[1]];

	            data.forEach(function (current) {
	              return service.emit(event, current, hook);
	            });
	          })();
	        } else {
	          service.emit('serviceError', results[0]);
	        }
	      });
	    }
	  });
	};

	var _rubberduck = __webpack_require__(111);

	var _rubberduck2 = _interopRequireDefault(_rubberduck);

	var _events = __webpack_require__(112);

	var _feathersCommons = __webpack_require__(104);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hookObject = _feathersCommons.hooks.hookObject;
	var eventMappings = {
	  create: 'created',
	  update: 'updated',
	  remove: 'removed',
	  patch: 'patched'
	};

	function upperCase(name) {
	  return name.charAt(0).toUpperCase() + name.substring(1);
	}

	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var events = __webpack_require__(112);
	var utils = __webpack_require__(113);
	var wrap = exports.wrap = {
	  /**
	   * Wrap an anonymous or named function to notify an Emitter and
	   * return the wrapper function.
	   * @param {events.EventEmitter} emitter The emitter to notify
	   * @param {Function} fn The function to wrap
	   * @param {String} name The optional name
	   */
	  fn: function(emitter, fn, strict, name, scope) {
	    var wrapped = function() {
	      var result;
	      utils.emitEvents(emitter, 'before', name, [arguments, this, name]);

	      try {
	        result = fn.apply(scope || this, arguments);
	      } catch (e) {
	        utils.emitEvents(emitter, 'error', name, [ e, arguments, this, name ]);
	        throw e;
	      }

	      utils.emitEvents(emitter, 'after', name, [ result, arguments, this, name ]);
	      return result;
	    };

	    if (strict) {
	      eval('wrapped = ' + utils.addArgs(wrapped.toString(), fn.length));
	    }

	    return wrapped;
	  },
	  /**
	   * Wrap an anonymous or named function that calls a callback asynchronously
	   * to notify an Emitter and return the wrapper function.
	   * @param {events.EventEmitter} emitter The emitter to notify
	   * @param {Function} fn The function to wrap
	   * @param {Integer} position The position of the callback in the arguments
	   * array (defaults to 0). Set to -1 if the callback is the last argument.
	   * @param {String} name The optional name
	   */
	  async: function(emitter, fn, position, strict, name, scope) {
	    var wrapped = function() {
	      var pos = position == -1 ? arguments.length - 1 : (position || 0);
	      var callback = arguments[pos];
	      var context = this;
	      var methodArgs = arguments;
	      var callbackWrapper = function() {
	        try {
	          callback.apply(callback, arguments);
	        } catch (e) {
	          utils.emitEvents(emitter, 'error', name, [ e, methodArgs, context, name ]);
	          throw e;
	        }
	        var eventType = arguments[0] instanceof Error ? 'error' : 'after';
	        utils.emitEvents(emitter, eventType, name, [ arguments, methodArgs, context, name ]);
	      };

	      utils.emitEvents(emitter, 'before', name, [ methodArgs, this, name ]);
	      methodArgs[pos] = callbackWrapper;

	      try {
	        return fn.apply(scope || this, methodArgs);
	      } catch (e) {
	        utils.emitEvents(emitter, 'error', name, [ e, methodArgs, context, name ]);
	        throw e;
	      }
	    };

	    if (strict) {
	      eval('wrapped = ' + utils.addArgs(wrapped.toString(), fn.length));
	    }

	    return wrapped;
	  }
	};

	var Emitter = exports.Emitter = function(obj) {
	  this.obj = obj;
	};

	Emitter.prototype = Object.create(events.EventEmitter.prototype);

	/**
	 * Punch a method with the given name, with
	 * @param {String | Array} method The name of the method or a list of
	 * method names.
	 * @param {Integer} position The optional position of the asynchronous callback
	 * in the arguments list.
	 */
	Emitter.prototype.punch = function(method, position, strict) {
	  if (Array.isArray(method)) {
	    var self = this;
	    method.forEach(function(method) {
	      self.punch(method, position, strict);
	    });
	  } else {
	    var old = this.obj[method];
	    if (typeof old == 'function') {
	      this.obj[method] = (!position && position !== 0) ?
	        wrap.fn(this, old, strict, method) :
	        wrap.async(this, old, position, strict, method);
	    }
	  }
	  return this;
	};

	exports.emitter = function(obj) {
	  return new Emitter(obj);
	};


/***/ },
/* 112 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 113 */
/***/ function(module, exports) {

	exports.toBase26 = function(num) {
	  var outString = '';
	  var letters = 'abcdefghijklmnopqrstuvwxyz';
	  while (num > 25) {
	    var remainder = num % 26;
	    outString = letters.charAt(remainder) + outString;
	    num = Math.floor(num / 26) - 1;
	  }
	  outString = letters.charAt(num) + outString;
	  return outString;
	};

	exports.makeFakeArgs = function(len) {
	  var argArr = [];
	  for (var i = 0; i < len; i++) {
	    argArr.push(exports.toBase26(i));
	  }
	  return argArr.join(",");
	};

	exports.addArgs = function(fnString, argLen) {
	  return fnString.replace(/function\s*\(\)/, 'function(' + exports.makeFakeArgs(argLen) + ')');
	};

	exports.emitEvents = function(emitter, type, name, args) {
	  var ucName = name ? name.replace(/^\w/, function(first) {
	    return first.toUpperCase();
	  }) : null;

	  emitter.emit.apply(emitter, [type].concat(args));
	  if (ucName) {
	    emitter.emit.apply(emitter, [type + ucName].concat(args));
	  }
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (service) {
	  var _this = this;

	  if (typeof service.mixin === 'function') {
	    (function () {
	      var mixin = {};

	      _this.methods.forEach(function (method) {
	        if (typeof service[method] === 'function') {
	          mixin[method] = function () {
	            return this._super.apply(this, (0, _feathersCommons.getArguments)(method, arguments));
	          };
	        }
	      });

	      service.mixin(mixin);
	    })();
	  }
	};

	var _feathersCommons = __webpack_require__(104);

	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var app = {
	    settings: {},

	    get: function get(name) {
	      return this.settings[name];
	    },
	    set: function set(name, value) {
	      this.settings[name] = value;
	      return this;
	    },
	    disable: function disable(name) {
	      this.settings[name] = false;
	      return this;
	    },
	    disabled: function disabled(name) {
	      return !this.settings[name];
	    },
	    enable: function enable(name) {
	      this.settings[name] = true;
	      return this;
	    },
	    enabled: function enabled(name) {
	      return !!this.settings[name];
	    },
	    use: function use() {
	      throw new Error('Middleware functions can not be used in the Feathers client');
	    },
	    listen: function listen() {
	      return {};
	    }
	  };

	  _uberproto2.default.mixin(_events.EventEmitter.prototype, app);

	  return app;
	};

	var _events = __webpack_require__(112);

	var _uberproto = __webpack_require__(99);

	var _uberproto2 = _interopRequireDefault(_uberproto);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(117);


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var base = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	  var result = {};

	  Object.keys(transports).forEach(function (key) {
	    var Service = transports[key];

	    result[key] = function (connection) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      if (!connection) {
	        throw new Error(key + ' has to be provided to feathers-rest');
	      }

	      var defaultService = function defaultService(name) {
	        return new Service({ base: base, name: name, connection: connection, options: options });
	      };

	      var initialize = function initialize() {
	        if (typeof this.defaultService === 'function') {
	          throw new Error('Only one default client provider can be configured');
	        }

	        this.rest = connection;
	        this.defaultService = defaultService;
	      };

	      initialize.Service = Service;
	      initialize.service = defaultService;

	      return initialize;
	    };
	  });

	  return result;
	};

	var _jquery = __webpack_require__(118);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _superagent = __webpack_require__(125);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _request = __webpack_require__(126);

	var _request2 = _interopRequireDefault(_request);

	var _fetch = __webpack_require__(127);

	var _fetch2 = _interopRequireDefault(_fetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transports = {
	  jquery: _jquery2.default,
	  superagent: _superagent2.default,
	  request: _request2.default,
	  fetch: _fetch2.default
	};

	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(119);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Service = function (_Base) {
	  _inherits(Service, _Base);

	  function Service() {
	    _classCallCheck(this, Service);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }

	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var _this2 = this;

	      var opts = _extends({
	        dataType: options.type || 'json'
	      }, options);

	      if (options.body) {
	        opts.data = JSON.stringify(options.body);
	        opts.contentType = 'application/json';
	      }

	      delete opts.type;
	      delete opts.body;

	      return new Promise(function (resolve, reject) {
	        _this2.connection.ajax(opts).then(resolve, function (xhr) {
	          var error = xhr.responseText;

	          try {
	            error = JSON.parse(error);
	          } catch (e) {
	            error = new Error(xhr.responseText);
	          }

	          error.xhr = error.response = xhr;

	          reject(error);
	        });
	      });
	    }
	  }]);

	  return Service;
	}(_base2.default);

	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _qs = __webpack_require__(120);

	var _qs2 = _interopRequireDefault(_qs);

	var _feathersCommons = __webpack_require__(104);

	var _feathersErrors = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function toError(error) {
	  throw (0, _feathersErrors.convert)(error);
	}

	var Base = function () {
	  function Base(settings) {
	    _classCallCheck(this, Base);

	    this.name = (0, _feathersCommons.stripSlashes)(settings.name);
	    this.options = settings.options;
	    this.connection = settings.connection;
	    this.base = settings.base + '/' + this.name;
	  }

	  _createClass(Base, [{
	    key: 'makeUrl',
	    value: function makeUrl(params, id) {
	      params = params || {};
	      var url = this.base;

	      if (typeof id !== 'undefined' && id !== null) {
	        url += '/' + id;
	      }

	      if (Object.keys(params).length !== 0) {
	        var queryString = _qs2.default.stringify(params);

	        url += '?' + queryString;
	      }

	      return url;
	    }
	  }, {
	    key: 'find',
	    value: function find() {
	      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.request({
	        url: this.makeUrl(params.query),
	        method: 'GET',
	        headers: _extends({}, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'get',
	    value: function get(id) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      return this.request({
	        url: this.makeUrl(params.query, id),
	        method: 'GET',
	        headers: _extends({}, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'create',
	    value: function create(body) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      return this.request({
	        url: this.makeUrl(params.query),
	        body: body,
	        method: 'POST',
	        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'update',
	    value: function update(id, body) {
	      var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	      return this.request({
	        url: this.makeUrl(params.query, id),
	        body: body,
	        method: 'PUT',
	        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'patch',
	    value: function patch(id, body) {
	      var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	      return this.request({
	        url: this.makeUrl(params.query, id),
	        body: body,
	        method: 'PATCH',
	        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(id) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      return this.request({
	        url: this.makeUrl(params.query, id),
	        method: 'DELETE',
	        headers: _extends({}, params.headers)
	      }).catch(toError);
	    }
	  }]);

	  return Base;
	}();

	exports.default = Base;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stringify = __webpack_require__(121);
	var Parse = __webpack_require__(123);

	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Utils = __webpack_require__(122);

	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};

	var defaults = {
	    delimiter: '&',
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true,
	    encoder: Utils.encode
	};

	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || Utils.isBuffer(obj)) {
	        if (encoder) {
	            return [encoder(prefix) + '=' + encoder(obj)];
	        }
	        return [prefix + '=' + String(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        } else {
	            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        }
	    }

	    return values;
	};

	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var objKeys;
	    var filter;

	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }

	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (sort) {
	        objKeys.sort(sort);
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	var hexTable = (function () {
	    var array = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }

	    return array;
	}());

	exports.arrayToObject = function (source, options) {
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = typeof str === 'string' ? str : String(str);

	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);

	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }

	    return out;
	};

	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }

	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (var j = 0; j < keys.length; ++j) {
	        var key = keys[j];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};

	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Utils = __webpack_require__(122);

	var defaults = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false,
	    decoder: Utils.decode
	};

	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[options.decoder(part)] = '';

	            if (options.strictNullHandling) {
	                obj[options.decoder(part)] = null;
	            }
	        } else {
	            var key = options.decoder(part.slice(0, pos));
	            var val = options.decoder(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = [].concat(obj[key]).concat(val);
	            } else {
	                obj[key] = val;
	            }
	        }
	    }

	    return obj;
	};

	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};

	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }

	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return parseObject(keys, val, options);
	};

	module.exports = function (str, opts) {
	    var options = opts || {};

	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }

	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    var instance = Reflect.construct(cls, Array.from(arguments));
	    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	    return instance;
	  }

	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });

	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }

	  return ExtendableBuiltin;
	}

	var debug = __webpack_require__(101)('feathers-errors');

	// NOTE (EK): Babel doesn't properly support extending
	// some classes in ES6. The Error class being one of them.
	// Node v5.0+ does support this but until we want to drop support
	// for older versions we need this hack.
	// http://stackoverflow.com/questions/33870684/why-doesnt-instanceof-work-on-instances-of-error-subclasses-under-babel-node
	// https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend

	var FeathersError = function (_extendableBuiltin2) {
	  _inherits(FeathersError, _extendableBuiltin2);

	  function FeathersError(msg, name, code, className, data) {
	    _classCallCheck(this, FeathersError);

	    msg = msg || 'Error';

	    var errors = undefined;
	    var message = undefined;
	    var newData = undefined;

	    if (msg instanceof Error) {
	      message = msg.message || 'Error';

	      // NOTE (EK): This is typically to handle validation errors
	      if (msg.errors) {
	        errors = msg.errors;
	      }
	    }
	    // Support plain old objects
	    else if ((typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
	        message = msg.message || 'Error';
	        data = msg;
	      }
	      // message is just a string
	      else {
	          message = msg;
	        }

	    if (data) {
	      // NOTE(EK): To make sure that we are not messing
	      // with immutable data, just make a copy.
	      // https://github.com/feathersjs/feathers-errors/issues/19
	      newData = _extends({}, data);

	      if (newData.errors) {
	        errors = newData.errors;
	        delete newData.errors;
	      }
	    }

	    // NOTE (EK): Babel doesn't support this so
	    // we have to pass in the class name manually.
	    // this.name = this.constructor.name;

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FeathersError).call(this, message));

	    _this.type = 'FeathersError';
	    _this.name = name;
	    _this.message = message;
	    _this.code = code;
	    _this.className = className;
	    _this.data = newData;
	    _this.errors = errors || {};

	    debug(_this.name + '(' + _this.code + '): ' + _this.message);
	    return _this;
	  }

	  // NOTE (EK): A little hack to get around `message` not
	  // being included in the default toJSON call.


	  _createClass(FeathersError, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        name: this.name,
	        message: this.message,
	        code: this.code,
	        className: this.className,
	        data: this.data,
	        errors: this.errors
	      };
	    }
	  }]);

	  return FeathersError;
	}(_extendableBuiltin(Error));

	var BadRequest = function (_FeathersError) {
	  _inherits(BadRequest, _FeathersError);

	  function BadRequest(message, data) {
	    _classCallCheck(this, BadRequest);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BadRequest).call(this, message, 'BadRequest', 400, 'bad-request', data));
	  }

	  return BadRequest;
	}(FeathersError);

	var NotAuthenticated = function (_FeathersError2) {
	  _inherits(NotAuthenticated, _FeathersError2);

	  function NotAuthenticated(message, data) {
	    _classCallCheck(this, NotAuthenticated);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotAuthenticated).call(this, message, 'NotAuthenticated', 401, 'not-authenticated', data));
	  }

	  return NotAuthenticated;
	}(FeathersError);

	var PaymentError = function (_FeathersError3) {
	  _inherits(PaymentError, _FeathersError3);

	  function PaymentError(message, data) {
	    _classCallCheck(this, PaymentError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PaymentError).call(this, message, 'PaymentError', 402, 'payment-error', data));
	  }

	  return PaymentError;
	}(FeathersError);

	var Forbidden = function (_FeathersError4) {
	  _inherits(Forbidden, _FeathersError4);

	  function Forbidden(message, data) {
	    _classCallCheck(this, Forbidden);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Forbidden).call(this, message, 'Forbidden', 403, 'forbidden', data));
	  }

	  return Forbidden;
	}(FeathersError);

	var NotFound = function (_FeathersError5) {
	  _inherits(NotFound, _FeathersError5);

	  function NotFound(message, data) {
	    _classCallCheck(this, NotFound);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).call(this, message, 'NotFound', 404, 'not-found', data));
	  }

	  return NotFound;
	}(FeathersError);

	var MethodNotAllowed = function (_FeathersError6) {
	  _inherits(MethodNotAllowed, _FeathersError6);

	  function MethodNotAllowed(message, data) {
	    _classCallCheck(this, MethodNotAllowed);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MethodNotAllowed).call(this, message, 'MethodNotAllowed', 405, 'method-not-allowed', data));
	  }

	  return MethodNotAllowed;
	}(FeathersError);

	var NotAcceptable = function (_FeathersError7) {
	  _inherits(NotAcceptable, _FeathersError7);

	  function NotAcceptable(message, data) {
	    _classCallCheck(this, NotAcceptable);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotAcceptable).call(this, message, 'NotAcceptable', 406, 'not-acceptable', data));
	  }

	  return NotAcceptable;
	}(FeathersError);

	var Timeout = function (_FeathersError8) {
	  _inherits(Timeout, _FeathersError8);

	  function Timeout(message, data) {
	    _classCallCheck(this, Timeout);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Timeout).call(this, message, 'Timeout', 408, 'timeout', data));
	  }

	  return Timeout;
	}(FeathersError);

	var Conflict = function (_FeathersError9) {
	  _inherits(Conflict, _FeathersError9);

	  function Conflict(message, data) {
	    _classCallCheck(this, Conflict);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Conflict).call(this, message, 'Conflict', 409, 'conflict', data));
	  }

	  return Conflict;
	}(FeathersError);

	var Unprocessable = function (_FeathersError10) {
	  _inherits(Unprocessable, _FeathersError10);

	  function Unprocessable(message, data) {
	    _classCallCheck(this, Unprocessable);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Unprocessable).call(this, message, 'Unprocessable', 422, 'unprocessable', data));
	  }

	  return Unprocessable;
	}(FeathersError);

	var GeneralError = function (_FeathersError11) {
	  _inherits(GeneralError, _FeathersError11);

	  function GeneralError(message, data) {
	    _classCallCheck(this, GeneralError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GeneralError).call(this, message, 'GeneralError', 500, 'general-error', data));
	  }

	  return GeneralError;
	}(FeathersError);

	var NotImplemented = function (_FeathersError12) {
	  _inherits(NotImplemented, _FeathersError12);

	  function NotImplemented(message, data) {
	    _classCallCheck(this, NotImplemented);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotImplemented).call(this, message, 'NotImplemented', 501, 'not-implemented', data));
	  }

	  return NotImplemented;
	}(FeathersError);

	var Unavailable = function (_FeathersError13) {
	  _inherits(Unavailable, _FeathersError13);

	  function Unavailable(message, data) {
	    _classCallCheck(this, Unavailable);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Unavailable).call(this, message, 'Unavailable', 503, 'unavailable', data));
	  }

	  return Unavailable;
	}(FeathersError);

	var errors = {
	  FeathersError: FeathersError,
	  BadRequest: BadRequest,
	  NotAuthenticated: NotAuthenticated,
	  PaymentError: PaymentError,
	  Forbidden: Forbidden,
	  NotFound: NotFound,
	  MethodNotAllowed: MethodNotAllowed,
	  NotAcceptable: NotAcceptable,
	  Timeout: Timeout,
	  Conflict: Conflict,
	  Unprocessable: Unprocessable,
	  GeneralError: GeneralError,
	  NotImplemented: NotImplemented,
	  Unavailable: Unavailable
	};

	function convert(error) {
	  if (!error) {
	    return error;
	  }

	  var FeathersError = errors[error.name];
	  var result = FeathersError ? new FeathersError(error.message, error.data) : new Error(error.message || error);

	  if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object') {
	    _extends(result, error);
	  }

	  return result;
	}

	exports.default = _extends({
	  convert: convert,
	  types: errors,
	  errors: errors
	}, errors);
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(119);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Service = function (_Base) {
	  _inherits(Service, _Base);

	  function Service() {
	    _classCallCheck(this, Service);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }

	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var superagent = this.connection(options.method, options.url).set('Accept', 'application/json').type(options.type || 'json');

	      return new Promise(function (resolve, reject) {
	        superagent.set(options.headers);

	        if (options.body) {
	          superagent.send(options.body);
	        }

	        superagent.end(function (error, res) {
	          if (error) {
	            try {
	              var response = error.response;
	              error = JSON.parse(error.response.text);
	              error.response = response;
	            } catch (e) {}

	            return reject(error);
	          }

	          resolve(res && res.body);
	        });
	      });
	    }
	  }]);

	  return Service;
	}(_base2.default);

	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(119);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Service = function (_Base) {
	  _inherits(Service, _Base);

	  function Service() {
	    _classCallCheck(this, Service);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }

	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var _this2 = this;

	      return new Promise(function (resolve, reject) {
	        _this2.connection(_extends({
	          json: true
	        }, options), function (error, res, data) {
	          if (error) {
	            return reject(error);
	          }

	          if (!error && res.statusCode >= 400) {
	            if (typeof data === 'string') {
	              return reject(new Error(data));
	            }

	            data.response = res;

	            return reject(_extends(new Error(data.message), data));
	          }

	          resolve(data);
	        });
	      });
	    }
	  }]);

	  return Service;
	}(_base2.default);

	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(119);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Service = function (_Base) {
	  _inherits(Service, _Base);

	  function Service() {
	    _classCallCheck(this, Service);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }

	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var fetchOptions = _extends({}, options);

	      fetchOptions.headers = _extends({
	        Accept: 'application/json'
	      }, fetchOptions.headers);

	      if (options.body) {
	        fetchOptions.body = JSON.stringify(options.body);
	      }

	      var fetch = this.connection;

	      return fetch(options.url, fetchOptions).then(this.checkStatus).then(this.parseJSON);
	    }
	  }, {
	    key: 'checkStatus',
	    value: function checkStatus(response) {
	      if (response.ok) {
	        return response;
	      }

	      return new Promise(function (resolve, reject) {
	        var body = response.body;
	        var buffer = '';

	        body.on('data', function (data) {
	          return buffer += data.toString();
	        });
	        body.on('error', reject);
	        body.on('end', function () {
	          var error = new Error(buffer);

	          try {
	            error = JSON.parse(buffer);
	          } catch (e) {
	            error.code = response.status;
	          }

	          error.response = response;

	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: 'parseJSON',
	    value: function parseJSON(response) {
	      return response.json();
	    }
	  }]);

	  return Service;
	}(_base2.default);

	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = TitleText;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function TitleText(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var mini = _ref.mini;

	  var other = _objectWithoutProperties(_ref, ['children', 'className', 'mini']);

	  var classes = 'title' + (className ? ' ' + className : '');
	  if (mini) classes += ' mini';

	  return _react2.default.createElement(
	    'p',
	    _extends({ className: classes }, other),
	    children
	  );
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = TitleText;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function TitleText(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var mini = _ref.mini;

	  var other = _objectWithoutProperties(_ref, ['children', 'className', 'mini']);

	  var classes = 'body' + (className ? ' ' + className : '');

	  if (mini) classes += ' mini';

	  return _react2.default.createElement(
	    'p',
	    _extends({ className: classes }, other),
	    children
	  );
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = Inverted;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function Inverted(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var fill = _ref.fill;

	  var other = _objectWithoutProperties(_ref, ['children', 'className', 'fill']);

	  var classes = 'inverse' + (className ? ' ' + className : '');
	  if (fill) classes += classes.length == 0 ? 'fill' : ' fill';

	  return _react2.default.createElement('div', _extends({ className: classes }, other), children);
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FreeWall = __webpack_require__(134);

	var _FreeWall2 = _interopRequireDefault(_FreeWall);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FreeWall2.default;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DefaultTargetHeight = exports.DefaultDimension = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _freewallBengaumondForked = __webpack_require__(135);

	var _freewallBengaumondForked2 = _interopRequireDefault(_freewallBengaumondForked);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /******************************************************************************/
	// Dependencies
	/******************************************************************************/

	/******************************************************************************/
	// Exports
	/******************************************************************************/
	var DefaultCellSize = 80;
	var DefaultAnimTime = 0.5;

	var FreeWall = function (_React$Component) {
	  _inherits(FreeWall, _React$Component);

	  function FreeWall(props) {
	    _classCallCheck(this, FreeWall);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FreeWall).call(this, props));

	    _this.freewall = null;
	    _this.resize = _this.resize.bind(_this);
	    _this.reset = _this.reset.bind(_this);
	    return _this;
	  }

	  _createClass(FreeWall, [{
	    key: 'reset',
	    value: function reset() {
	      var _props = this.props;
	      var animTime = _props.animTime;
	      var cellSize = _props.cellSize;
	      var selector = _props.selector;

	      this.freewall.reset({
	        selector: selector,
	        animate: animTime || DefaultAnimTime,
	        cellW: cellSize || DefaultCellSize,
	        cellH: cellSize || DefaultCellSize,
	        gutterY: 0,
	        gutterX: 0,
	        delay: 0
	      });
	      this.resize();
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      if (this.freewall && this.dom) this.freewall.fitWidth(this.dom.offsetWidth);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.freewall = new _freewallBengaumondForked2.default('#' + this.props.id);

	      $(window).on('resize', this.resize);
	      $(window).on('reset', this.reset);
	      $(window).trigger('reset');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $(window).off('resize', this.resize);
	      $(window).off('reset', this.reset);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.reset();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.children) return null;

	      var _props2 = this.props;
	      var id = _props2.id;
	      var className = _props2.className;
	      var children = _props2.children;


	      return _react2.default.createElement(
	        'div',
	        { className: 'freewall-container' },
	        _react2.default.createElement(
	          'div',
	          { id: id, className: className, ref: function ref(div) {
	              return _this2.dom = div;
	            } },
	          children
	        )
	      );
	    }
	  }]);

	  return FreeWall;
	}(_react2.default.Component);

	exports.default = FreeWall;
	var DefaultDimension = exports.DefaultDimension = 50;

	var DefaultTargetHeight = exports.DefaultTargetHeight = 500;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jquery = __webpack_require__(128);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// for zeptojs;
	_jquery2.default.isNumeric == null && (_jquery2.default.isNumeric = function (src) {
	    return src != null && src.constructor === Number;
	}); // created by Minh Nguyen
	// edited by Ben Gaumond to allow letiable transition times. As of this writing,
	// (Aug 19th 2016) the pull request has not been merged, so I've created a manual
	// local copy here

	/* eslint-disable */

	_jquery2.default.isFunction == null && (_jquery2.default.isFunction = function (src) {
	    return src != null && src instanceof Function;
	});

	var $W = (0, _jquery2.default)(window);
	var $D = (0, _jquery2.default)(document);

	var layoutManager = {
	    // default setting;
	    defaultConfig: {
	        animate: false,
	        cellW: 100, // function(container) {return 100;}
	        cellH: 100, // function(container) {return 100;}
	        delay: 0, // slowdown active block;
	        engine: 'giot', // 'giot' is a person name;
	        fixSize: null, // resize + adjust = fill gap;
	        //fixSize: 0, resize but keep ratio = no fill gap;
	        //fixSize: 1, no resize + no adjust = no fill gap;
	        gutterX: 15, // width spacing between blocks;
	        gutterY: 15, // height spacing between blocks;
	        keepOrder: false,
	        selector: '> div',
	        draggable: false,
	        cacheSize: true, // caches the original size of block;
	        rightToLeft: false,
	        bottomToTop: false,
	        onGapFound: function onGapFound() {},
	        onComplete: function onComplete() {},
	        onResize: function onResize() {},
	        onBlockDrag: function onBlockDrag() {},
	        onBlockMove: function onBlockMove() {},
	        onBlockDrop: function onBlockDrop() {},
	        onBlockReady: function onBlockReady() {},
	        onBlockFinish: function onBlockFinish() {},
	        onBlockActive: function onBlockActive() {},
	        onBlockResize: function onBlockResize() {}
	    },
	    plugin: {},
	    totalGrid: 1,
	    transition: false,
	    loadBlock: function loadBlock(item, setting) {
	        var runtime = setting.runtime;
	        var gutterX = runtime.gutterX;
	        var gutterY = runtime.gutterY;
	        var cellH = runtime.cellH;
	        var cellW = runtime.cellW;
	        var block = null;
	        var $item = (0, _jquery2.default)(item);
	        var active = $item.data("active");
	        var fixPos = $item.attr('data-position');
	        var fixSize = parseInt($item.attr('data-fixSize'));
	        var blockId = runtime.lastId++ + '-' + runtime.totalGrid;

	        //ignore dragging block;
	        if ($item.hasClass('fw-float')) return null;
	        $item.attr({ id: blockId, 'data-delay': item.index });

	        //remove animation for speed render;
	        if (setting.animate && this.transition) {
	            this.setTransition(item, "");
	        }

	        isNaN(fixSize) && (fixSize = null);
	        fixSize == null && (fixSize = setting.fixSize);
	        var makeRound = !fixSize ? "round" : "ceil";
	        // store original size;

	        $item.attr('data-height') == null && $item.attr('data-height', $item.height());
	        $item.attr('data-width') == null && $item.attr('data-width', $item.width());
	        var height = 1 * $item.attr('data-height');
	        var width = 1 * $item.attr('data-width');

	        if (!setting.cacheSize) {
	            item.style.width = "";
	            width = $item.width();

	            item.style.height = "";
	            height = $item.height();
	        }

	        var col = !width ? 0 : Math[makeRound]((width + gutterX) / cellW);
	        var row = !height ? 0 : Math[makeRound]((height + gutterY) / cellH);

	        // estimate size;
	        if (!fixSize && setting.cellH == 'auto') {
	            $item.width(cellW * col - gutterX);
	            item.style.height = "";
	            height = $item.height();
	            row = !height ? 0 : Math.round((height + gutterY) / cellH);
	        }

	        if (!fixSize && setting.cellW == 'auto') {
	            $item.height(cellH * row - gutterY);
	            item.style.width = "";
	            width = $item.width();
	            col = !width ? 0 : Math.round((width + gutterX) / cellW);
	        }

	        // for none resize block;
	        if (fixSize != null && (col > runtime.limitCol || row > runtime.limitRow)) {
	            block = null;
	        } else {
	            // get smallest width and smallest height of block;
	            // using for image runtime;
	            row && row < runtime.minHoB && (runtime.minHoB = row);
	            col && col < runtime.minWoB && (runtime.minWoB = col);

	            // get biggest width and biggest height of block;
	            row > runtime.maxHoB && (runtime.maxHoB = row);
	            col > runtime.maxWoB && (runtime.maxWoB = col);

	            width == 0 && (col = 0);
	            height == 0 && (row = 0);

	            block = {
	                resize: false,
	                id: blockId,
	                width: col,
	                height: row,
	                fixSize: fixSize
	            };

	            // for fix position;
	            if (fixPos) {
	                fixPos = fixPos.split("-");
	                block.y = 1 * fixPos[0];
	                block.x = 1 * fixPos[1];
	                block.width = fixSize != null ? col : Math.min(col, runtime.limitCol - block.x);
	                block.height = fixSize != null ? row : Math.min(row, runtime.limitRow - block.y);
	                var holeId = block.y + "-" + block.x + "-" + block.width + "-" + block.height;
	                if (active) {
	                    runtime.holes[holeId] = {
	                        id: block.id,
	                        top: block.y,
	                        left: block.x,
	                        width: block.width,
	                        height: block.height
	                    };
	                    this.setBlock(block, setting);
	                } else {
	                    delete runtime.holes[holeId];
	                }
	            }
	        }

	        // for css animation;
	        if ($item.attr("data-state") == null) {
	            $item.attr("data-state", "init");
	        } else {
	            $item.attr("data-state", "move");
	        }

	        setting.onBlockReady.call(item, block, setting);

	        return fixPos && active ? null : block;
	    },
	    setBlock: function setBlock(block, setting) {
	        var runtime = setting.runtime;
	        var gutterX = runtime.gutterX;
	        var gutterY = runtime.gutterY;
	        var height = block.height;
	        var width = block.width;
	        var cellH = runtime.cellH;
	        var cellW = runtime.cellW;
	        var x = block.x;
	        var y = block.y;

	        if (setting.rightToLeft) {
	            x = runtime.limitCol - x - width;
	        }
	        if (setting.bottomToTop) {
	            y = runtime.limitRow - y - height;
	        }

	        var realBlock = {
	            fixSize: block.fixSize,
	            resize: block.resize,
	            top: y * cellH,
	            left: x * cellW,
	            width: cellW * width - gutterX,
	            height: cellH * height - gutterY
	        };

	        realBlock.top = 1 * realBlock.top.toFixed(2);
	        realBlock.left = 1 * realBlock.left.toFixed(2);
	        realBlock.width = 1 * realBlock.width.toFixed(2);
	        realBlock.height = 1 * realBlock.height.toFixed(2);

	        //runtime.length += 1;
	        block.id && (runtime.blocks[block.id] = realBlock);

	        // for append feature;
	        return realBlock;
	    },
	    showBlock: function showBlock(item, setting) {
	        var runtime = setting.runtime;
	        var method = setting.animate && !this.transition ? 'animate' : 'css';
	        var time = typeof setting.animate == 'string' || typeof setting.animate == 'number' ? setting.animate : 0.5;
	        var block = runtime.blocks[item.id];
	        var $item = (0, _jquery2.default)(item);
	        var self = this;
	        var start = $item.attr("data-state") != "move";
	        var trans = start ? "width " + time + "s, height " + time + "s" : "top " + time + "s, left " + time + "s, width " + time + "s, height " + time + "s, opacity " + time + "s";

	        item.delay && clearTimeout(item.delay);
	        //ignore dragging block;
	        if ($item.hasClass('fw-float')) return;

	        // kill the old transition;
	        self.setTransition(item, "");
	        item.style.position = "absolute";
	        setting.onBlockActive.call(item, block, setting);

	        function action() {
	            // start to arrange;
	            start && $item.attr("data-state", "start");
	            // add animation by using css3 transition;
	            if (setting.animate && self.transition) {
	                self.setTransition(item, trans);
	            }

	            // for hidden block;
	            if (!block) {
	                //let position = $item.position(); <= make speed so slow;
	                var height = parseInt(item.style.height) || 0;
	                var width = parseInt(item.style.width) || 0;
	                var left = parseInt(item.style.left) || 0;
	                var top = parseInt(item.style.top) || 0;
	                $item[method]({
	                    left: left + width / 2,
	                    top: top + height / 2,
	                    width: 0,
	                    height: 0,
	                    opacity: 0
	                });
	            } else {
	                if (block.fixSize) {
	                    block.height = 1 * $item.attr("data-height");
	                    block.width = 1 * $item.attr("data-width");
	                }

	                $item["css"]({
	                    opacity: 1,
	                    width: block.width,
	                    height: block.height
	                });

	                // for animating by javascript;
	                $item[method]({
	                    top: block.top,
	                    left: block.left
	                });

	                if ($item.attr('data-nested') != null) {
	                    self.nestedGrid(item, setting);
	                }
	            }

	            runtime.length -= 1;

	            setting.onBlockFinish.call(item, block, setting);

	            runtime.length == 0 && setting.onComplete.call(item, block, setting);
	        }

	        block && block.resize && setting.onBlockResize.call(item, block, setting);

	        setting.delay > 0 ? item.delay = setTimeout(action, setting.delay * $item.attr("data-delay")) : action();
	    },
	    nestedGrid: function nestedGrid(item, setting) {
	        var innerWall = void 0,
	            $item = (0, _jquery2.default)(item),
	            runtime = setting.runtime;
	        var gutterX = $item.attr("data-gutterX") || setting.gutterX;
	        var gutterY = $item.attr("data-gutterY") || setting.gutterY;
	        var method = $item.attr("data-method") || "fitZone";
	        var nested = $item.attr('data-nested') || "> div";
	        var cellH = $item.attr("data-cellH") || setting.cellH;
	        var cellW = $item.attr("data-cellW") || setting.cellW;
	        var block = runtime.blocks[item.id];

	        if (block) {
	            innerWall = new Freewall($item);
	            innerWall.reset({
	                cellH: cellH,
	                cellW: cellW,
	                gutterX: 1 * gutterX,
	                gutterY: 1 * gutterY,
	                selector: nested,
	                cacheSize: false
	            });

	            switch (method) {
	                case "fitHeight":
	                    innerWall[method](block.height);
	                    break;
	                case "fitWidth":
	                    innerWall[method](block.width);
	                    break;
	                case "fitZone":
	                    innerWall[method](block.width, block.height);
	                    break;
	            }
	        }
	    },
	    adjustBlock: function adjustBlock(block, setting) {
	        var runtime = setting.runtime;
	        var gutterX = runtime.gutterX;
	        var gutterY = runtime.gutterY;
	        var $item = (0, _jquery2.default)("#" + block.id);
	        var cellH = runtime.cellH;
	        var cellW = runtime.cellW;

	        if (setting.cellH == 'auto') {
	            $item.width(block.width * cellW - gutterX);
	            $item[0].style.height = "";
	            block.height = Math.round(($item.height() + gutterY) / cellH);
	        }
	    },
	    adjustUnit: function adjustUnit(width, height, setting) {
	        var gutterX = setting.gutterX;
	        var gutterY = setting.gutterY;
	        var runtime = setting.runtime;
	        var cellW = setting.cellW;
	        var cellH = setting.cellH;

	        _jquery2.default.isFunction(cellW) && (cellW = cellW(width));
	        cellW = 1 * cellW;
	        !_jquery2.default.isNumeric(cellW) && (cellW = 1);

	        _jquery2.default.isFunction(cellH) && (cellH = cellH(height));
	        cellH = 1 * cellH;
	        !_jquery2.default.isNumeric(cellH) && (cellH = 1);

	        if (_jquery2.default.isNumeric(width)) {
	            // adjust cell width via container;
	            cellW < 1 && (cellW = cellW * width);

	            // estimate total columns;
	            var limitCol = Math.max(1, Math.floor(width / cellW));

	            // adjust unit size for fit width;
	            if (!_jquery2.default.isNumeric(gutterX)) {
	                gutterX = (width - limitCol * cellW) / Math.max(1, limitCol - 1);
	                gutterX = Math.max(0, gutterX);
	            }

	            limitCol = Math.floor((width + gutterX) / cellW);
	            runtime.cellW = (width + gutterX) / Math.max(limitCol, 1);
	            runtime.cellS = runtime.cellW / cellW;
	            runtime.gutterX = gutterX;
	            runtime.limitCol = limitCol;
	        }

	        if (_jquery2.default.isNumeric(height)) {
	            // adjust cell height via container;
	            cellH < 1 && (cellH = cellH * height);

	            // estimate total rows;
	            var limitRow = Math.max(1, Math.floor(height / cellH));

	            // adjust size unit for fit height;
	            if (!_jquery2.default.isNumeric(gutterY)) {
	                gutterY = (height - limitRow * cellH) / Math.max(1, limitRow - 1);
	                gutterY = Math.max(0, gutterY);
	            }

	            limitRow = Math.floor((height + gutterY) / cellH);
	            runtime.cellH = (height + gutterY) / Math.max(limitRow, 1);
	            runtime.cellS = runtime.cellH / cellH;
	            runtime.gutterY = gutterY;
	            runtime.limitRow = limitRow;
	        }

	        if (!_jquery2.default.isNumeric(width)) {
	            // adjust cell width via cell height;
	            cellW < 1 && (cellW = runtime.cellH);
	            runtime.cellW = cellW != 1 ? cellW * runtime.cellS : 1;
	            runtime.gutterX = gutterX;
	            runtime.limitCol = 666666;
	        }

	        if (!_jquery2.default.isNumeric(height)) {
	            // adjust cell height via cell width;
	            cellH < 1 && (cellH = runtime.cellW);
	            runtime.cellH = cellH != 1 ? cellH * runtime.cellS : 1;
	            runtime.gutterY = gutterY;
	            runtime.limitRow = 666666;
	        }

	        runtime.keepOrder = setting.keepOrder;
	    },
	    resetGrid: function resetGrid(runtime) {
	        runtime.blocks = {};
	        runtime.length = 0;
	        runtime.cellH = 0;
	        runtime.cellW = 0;
	        runtime.lastId = 1;
	        runtime.matrix = {};
	        runtime.totalCol = 0;
	        runtime.totalRow = 0;
	    },
	    setDraggable: function setDraggable(item, option) {
	        var isTouch = false;
	        var config = {
	            startX: 0, //start clientX;
	            startY: 0,
	            top: 0,
	            left: 0,
	            handle: null,
	            onDrop: function onDrop() {},
	            onDrag: function onDrag() {},
	            onStart: function onStart() {}
	        };

	        (0, _jquery2.default)(item).each(function () {
	            var setting = _jquery2.default.extend({}, config, option);
	            var handle = setting.handle || this;
	            var ele = this;
	            var $E = (0, _jquery2.default)(ele);
	            var $H = (0, _jquery2.default)(handle);

	            var posStyle = $E.css("position");
	            posStyle != "absolute" && $E.css("position", "relative");

	            function mouseDown(evt) {
	                evt.stopPropagation();
	                evt = evt.originalEvent;

	                if (evt.touches) {
	                    isTouch = true;
	                    evt = evt.changedTouches[0];
	                }

	                if (evt.button != 2 && evt.which != 3) {
	                    setting.onStart.call(ele, evt);

	                    setting.startX = evt.clientX;
	                    setting.startY = evt.clientY;
	                    setting.top = parseInt($E.css("top")) || 0;
	                    setting.left = parseInt($E.css("left")) || 0;

	                    $D.bind("mouseup touchend", mouseUp);
	                    $D.bind("mousemove touchmove", mouseMove);
	                }

	                return false;
	            };

	            function mouseMove(evt) {
	                evt = evt.originalEvent;
	                isTouch && (evt = evt.changedTouches[0]);

	                $E.css({
	                    top: setting.top - (setting.startY - evt.clientY),
	                    left: setting.left - (setting.startX - evt.clientX)
	                });

	                setting.onDrag.call(ele, evt);
	            };

	            function mouseUp(evt) {
	                evt = evt.originalEvent;
	                isTouch && (evt = evt.changedTouches[0]);

	                setting.onDrop.call(ele, evt);

	                $D.unbind("mouseup touchend", mouseUp);
	                $D.unbind("mousemove touchmove", mouseMove);
	            };

	            // ignore drag drop on text field;
	            $E.find("iframe, form, input, textarea, .ignore-drag").each(function () {
	                (0, _jquery2.default)(this).on("touchstart mousedown", function (evt) {
	                    evt.stopPropagation();
	                });
	            });

	            $D.unbind("mouseup touchend", mouseUp);
	            $D.unbind("mousemove touchmove", mouseMove);
	            $H.unbind("mousedown touchstart").bind("mousedown touchstart", mouseDown);
	        });
	    },
	    setTransition: function setTransition(item, trans) {
	        var style = item.style;
	        var $item = (0, _jquery2.default)(item);

	        // remove animation;
	        if (!this.transition && $item.stop) {
	            $item.stop();
	        } else if (style.webkitTransition != null) {
	            style.webkitTransition = trans;
	        } else if (style.MozTransition != null) {
	            style.MozTransition = trans;
	        } else if (style.msTransition != null) {
	            style.msTransition = trans;
	        } else if (style.OTransition != null) {
	            style.OTransition = trans;
	        } else {
	            style.transition = trans;
	        }
	    },
	    getFreeArea: function getFreeArea(t, l, runtime) {
	        var maxY = Math.min(t + runtime.maxHoB, runtime.limitRow);
	        var maxX = Math.min(l + runtime.maxWoB, runtime.limitCol);
	        var minX = maxX;
	        var minY = maxY;
	        var matrix = runtime.matrix;

	        // find limit zone by horizon;
	        for (var y = t; y < minY; ++y) {
	            for (var x = l; x < maxX; ++x) {
	                if (matrix[y + '-' + x]) {
	                    l < x && x < minX && (minX = x);
	                }
	            }
	        }

	        // find limit zone by vertical;
	        for (var _y = t; _y < maxY; ++_y) {
	            for (var _x = l; _x < minX; ++_x) {
	                if (matrix[_y + '-' + _x]) {
	                    t < _y && _y < minY && (minY = _y);
	                }
	            }
	        }

	        return {
	            top: t,
	            left: l,
	            width: minX - l,
	            height: minY - t
	        };
	    },
	    setWallSize: function setWallSize(runtime, container) {
	        var totalRow = runtime.totalRow;
	        var totalCol = runtime.totalCol;
	        var gutterY = runtime.gutterY;
	        var gutterX = runtime.gutterX;
	        var cellH = runtime.cellH;
	        var cellW = runtime.cellW;
	        var totalWidth = Math.max(0, cellW * totalCol - gutterX);
	        var totalHeight = Math.max(0, cellH * totalRow - gutterY);

	        container.attr({
	            'data-total-col': totalCol,
	            'data-total-row': totalRow,
	            'data-wall-width': Math.ceil(totalWidth),
	            'data-wall-height': Math.ceil(totalHeight)
	        });

	        if (runtime.limitCol < runtime.limitRow) {
	            // do not set height with nesting grid;
	            !container.attr("data-height") && container.height(Math.ceil(totalHeight));
	        }
	    }
	};

	var engine = {
	    // Giot just a person name;
	    giot: function giot(items, setting) {
	        var runtime = setting.runtime,
	            row = runtime.limitRow,
	            col = runtime.limitCol,
	            x = 0,
	            y = 0,
	            maxX = runtime.totalCol,
	            maxY = runtime.totalRow,
	            wall = {},
	            holes = runtime.holes,
	            block = null,
	            matrix = runtime.matrix,
	            bigLoop = Math.max(col, row),
	            freeArea = null,
	            misBlock = null,
	            fitWidth = col < row ? 1 : 0,
	            lastBlock = null,
	            smallLoop = Math.min(col, row);

	        // fill area with top, left, width, height;
	        function fillMatrix(id, t, l, w, h) {
	            for (var _y2 = t; _y2 < t + h;) {
	                for (var _x2 = l; _x2 < l + w;) {
	                    matrix[_y2 + '-' + _x2] = id;
	                    ++_x2 > maxX && (maxX = _x2);
	                }
	                ++_y2 > maxY && (maxY = _y2);
	            }
	        }

	        // set holes on the wall;
	        for (var i in holes) {
	            if (holes.hasOwnProperty(i)) {
	                fillMatrix(holes[i]["id"] || true, holes[i]['top'], holes[i]['left'], holes[i]['width'], holes[i]['height']);
	            }
	        }

	        for (var b = 0; b < bigLoop; ++b) {
	            if (!items.length) break;
	            fitWidth ? y = b : x = b;
	            lastBlock = null;

	            for (var s = 0; s < smallLoop; ++s) {
	                if (!items.length) break;
	                block = null;
	                fitWidth ? x = s : y = s;
	                if (runtime.matrix[y + '-' + x]) continue;
	                freeArea = layoutManager.getFreeArea(y, x, runtime);

	                // trying resize last block to fit free area;
	                if (setting.fixSize == null) {
	                    // resize near block to fill gap;
	                    if (lastBlock && !fitWidth && runtime.minHoB > freeArea.height) {
	                        lastBlock.height += freeArea.height;
	                        lastBlock.resize = true;
	                        fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
	                        layoutManager.setBlock(lastBlock, setting);
	                        continue;
	                    } else if (lastBlock && fitWidth && runtime.minWoB > freeArea.width) {
	                        lastBlock.width += freeArea.width;
	                        lastBlock.resize = true;
	                        fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
	                        layoutManager.setBlock(lastBlock, setting);
	                        continue;
	                    }
	                }

	                // get the next block to keep order;
	                if (runtime.keepOrder) {
	                    block = items.shift();
	                    block.resize = true;
	                } else {
	                    // find a suitable block to fit gap;
	                    for (var _i = 0; _i < items.length; ++_i) {
	                        if (items[_i].height > freeArea.height) continue;
	                        if (items[_i].width > freeArea.width) continue;
	                        block = items.splice(_i, 1)[0];
	                        break;
	                    }

	                    // trying resize the other block to fit gap;
	                    if (block == null && setting.fixSize == null) {
	                        // get other block fill to gap;
	                        for (var _i2 = 0; _i2 < items.length; ++_i2) {
	                            if (items[_i2]['fixSize'] != null) continue;
	                            block = items.splice(_i2, 1)[0];
	                            block.resize = true;
	                            break;
	                        }
	                    }
	                }

	                if (block != null) {
	                    // resize block with free area;
	                    if (block.resize) {
	                        if (fitWidth) {
	                            block.width = freeArea.width;
	                            if (setting.cellH == 'auto') {
	                                layoutManager.adjustBlock(block, setting);
	                            }
	                            // for fitZone;
	                            block.height = Math.min(block.height, freeArea.height);
	                        } else {
	                            block.height = freeArea.height;
	                            // for fitZone;
	                            block.width = Math.min(block.width, freeArea.width);
	                        }
	                    }

	                    wall[block.id] = {
	                        id: block.id,
	                        x: x,
	                        y: y,
	                        width: block.width,
	                        height: block.height,
	                        resize: block.resize,
	                        fixSize: block.fixSize
	                    };

	                    // keep success block for next round;
	                    lastBlock = wall[block.id];

	                    fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
	                    layoutManager.setBlock(lastBlock, setting);
	                } else {
	                    // get expect area;
	                    var _misBlock = {
	                        x: x,
	                        y: y,
	                        fixSize: 0
	                    };
	                    if (fitWidth) {
	                        _misBlock.width = freeArea.width;
	                        _misBlock.height = 0;
	                        var lastX = x - 1;
	                        var lastY = y;

	                        while (matrix[lastY + '-' + lastX]) {
	                            matrix[lastY + '-' + x] = true;
	                            _misBlock.height += 1;
	                            lastY += 1;
	                        }
	                    } else {
	                        _misBlock.height = freeArea.height;
	                        _misBlock.width = 0;
	                        var _lastY = y - 1;
	                        var _lastX = x;

	                        while (matrix[_lastY + '-' + _lastX]) {
	                            matrix[y + '-' + _lastX] = true;
	                            _misBlock.width += 1;
	                            _lastX += 1;
	                        }
	                    }
	                    setting.onGapFound(layoutManager.setBlock(_misBlock, setting), setting);
	                }
	            }
	        }

	        runtime.matrix = matrix;
	        runtime.totalRow = maxY;
	        runtime.totalCol = maxX;
	    }
	};

	function Freewall(selector) {

	    var container = (0, _jquery2.default)(selector);
	    if (container.css('position') == 'static') {
	        container.css('position', 'relative');
	    }
	    var MAX = Number.MAX_VALUE;
	    var klass = this;
	    // increase the instance index;
	    layoutManager.totalGrid += 1;

	    var setting = _jquery2.default.extend({}, layoutManager.defaultConfig);
	    var runtime = {
	        arguments: null,
	        blocks: {}, // store all items;
	        events: {}, // store custome events;
	        matrix: {},
	        holes: {}, // forbidden zone;

	        cellW: 0,
	        cellH: 0, // unit adjust;
	        cellS: 1, // unit scale;

	        filter: '', // filter selector;
	        lastId: 0,
	        length: 0,

	        maxWoB: 0, // max width of block;
	        maxHoB: 0,
	        minWoB: MAX,
	        minHoB: MAX, // min height of block;

	        running: 0, // flag to check layout arranging;

	        gutterX: 15,
	        gutterY: 15,

	        totalCol: 0,
	        totalRow: 0,

	        limitCol: 666666, // maximum column;
	        limitRow: 666666,

	        sortFunc: null,
	        keepOrder: false
	    };
	    setting.runtime = runtime;
	    runtime.totalGrid = layoutManager.totalGrid;

	    // check browser support transition;
	    var bodyStyle = document.body.style;
	    if (!layoutManager.transition) {
	        (bodyStyle.webkitTransition != null || bodyStyle.MozTransition != null || bodyStyle.msTransition != null || bodyStyle.OTransition != null || bodyStyle.transition != null) && (layoutManager.transition = true);
	    }

	    function setDraggable(item) {

	        var gutterX = runtime.gutterX;
	        var gutterY = runtime.gutterY;
	        var cellH = runtime.cellH;
	        var cellW = runtime.cellW;
	        var $item = (0, _jquery2.default)(item);
	        var handle = $item.find($item.attr("data-handle"));
	        layoutManager.setDraggable(item, {
	            handle: handle[0],
	            onStart: function onStart(event) {
	                if (setting.animate && layoutManager.transition) {
	                    layoutManager.setTransition(this, "");
	                }
	                $item.css('z-index', 9999).addClass('fw-float');

	                setting.onBlockDrag.call(item, event);
	            },
	            onDrag: function onDrag(event, tracker) {
	                var position = $item.position();
	                var top = Math.round(position.top / cellH);
	                var left = Math.round(position.left / cellW);
	                var width = Math.round($item.width() / cellW);
	                var height = Math.round($item.height() / cellH);
	                top = Math.min(Math.max(0, top), runtime.limitRow - height);
	                left = Math.min(Math.max(0, left), runtime.limitCol - width);
	                klass.setHoles({ top: top, left: left, width: width, height: height });
	                klass.refresh();

	                setting.onBlockMove.call(item, event);
	            },
	            onDrop: function onDrop(event) {
	                var position = $item.position();
	                var top = Math.round(position.top / cellH);
	                var left = Math.round(position.left / cellW);
	                var width = Math.round($item.width() / cellW);
	                var height = Math.round($item.height() / cellH);
	                top = Math.min(Math.max(0, top), runtime.limitRow - height);
	                left = Math.min(Math.max(0, left), runtime.limitCol - width);

	                $item.removeClass('fw-float');
	                $item.css({
	                    zIndex: "auto",
	                    top: top * cellH,
	                    left: left * cellW
	                });

	                //check old drag element;
	                var x = void 0,
	                    y = void 0,
	                    key = void 0,
	                    oldDropId = void 0;
	                for (y = 0; y < height; ++y) {
	                    for (x = 0; x < width; ++x) {
	                        key = y + top + "-" + (x + left);
	                        oldDropId = runtime.matrix[key];
	                        if (oldDropId && oldDropId != true) {
	                            (0, _jquery2.default)("#" + oldDropId).removeAttr("data-position");
	                        }
	                    }
	                }

	                runtime.holes = {};

	                $item.attr({
	                    "data-width": $item.width(),
	                    "data-height": $item.height(),
	                    "data-position": top + "-" + left
	                });

	                klass.refresh();

	                setting.onBlockDrop.call(item, event);
	            }
	        });
	    }

	    _jquery2.default.extend(klass, {

	        addCustomEvent: function addCustomEvent(name, func) {
	            var events = runtime.events;
	            name = name.toLowerCase();
	            !events[name] && (events[name] = []);
	            func.eid = events[name].length;
	            events[name].push(func);
	            return this;
	        },

	        appendBlock: function appendBlock(items) {
	            var allBlock = (0, _jquery2.default)(items).appendTo(container);
	            var block = null;
	            var activeBlock = [];

	            if (runtime.arguments) {

	                if (_jquery2.default.isFunction(runtime.sortFunc)) {
	                    allBlock.sort(runtime.sortFunc);
	                }

	                allBlock.each(function (index, item) {
	                    item.index = ++index;
	                    block = layoutManager.loadBlock(item, setting);
	                    block && activeBlock.push(block);
	                });

	                engine[setting.engine](activeBlock, setting);

	                layoutManager.setWallSize(runtime, container);

	                runtime.length = allBlock.length;

	                allBlock.each(function (index, item) {
	                    layoutManager.showBlock(item, setting);
	                    if (setting.draggable || item.getAttribute('data-draggable')) {
	                        setDraggable(item);
	                    }
	                });
	            }
	        },
	        /*
	        add one or more blank area (hole) on layout;
	        example:
	             wall.appendHoles({
	                top: 10,
	                left: 36,
	                width: 2,
	                height: 6
	            });
	             wall.appendHoles([
	                {
	                    top: 16,
	                    left: 16,
	                    width: 8,
	                    height: 2
	                },
	                {
	                    top: 10,
	                    left: 36,
	                    width: 2,
	                    height: 6
	                }
	            ]);
	         */
	        appendHoles: function appendHoles(holes) {
	            var newHoles = [].concat(holes),
	                h = {},
	                i = void 0;
	            for (i = 0; i < newHoles.length; ++i) {
	                h = newHoles[i];
	                runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height] = h;
	            }
	            return this;
	        },

	        container: container,

	        destroy: function destroy() {
	            var allBlock = container.find(setting.selector).removeAttr('id'),
	                block = null,
	                activeBlock = [];

	            allBlock.each(function (index, item) {
	                $item = (0, _jquery2.default)(item);
	                var width = 1 * $item.attr('data-width') || "";
	                var height = 1 * $item.attr('data-height') || "";
	                $item.width(width).height(height).css({
	                    position: 'static'
	                });
	            });
	        },

	        fillHoles: function fillHoles(holes) {
	            if (arguments.length == 0) {
	                runtime.holes = {};
	            } else {
	                var newHoles = [].concat(holes),
	                    h = {},
	                    i = void 0;
	                for (i = 0; i < newHoles.length; ++i) {
	                    h = newHoles[i];
	                    delete runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height];
	                }
	            }
	            return this;
	        },

	        filter: function filter(_filter) {
	            runtime.filter = _filter;
	            if (runtime.arguments) {
	                this.refresh();
	            }
	            return this;
	        },

	        fireEvent: function fireEvent(name, object, setting) {
	            var events = runtime.events;
	            name = name.toLowerCase();
	            if (events[name] && events[name].length) {
	                for (var i = 0; i < events[name].length; ++i) {
	                    events[name][i].call(this, object, setting);
	                }
	            }
	            return this;
	        },

	        fitHeight: function fitHeight(height) {

	            height = height ? height : container.height() || $W.height();

	            this.fitZone('auto', height);

	            runtime.arguments = arguments;
	        },

	        fitWidth: function fitWidth(width) {

	            width = width ? width : container.width() || $W.width();

	            this.fitZone(width, 'auto');

	            runtime.arguments = arguments;
	        },

	        fitZone: function fitZone(width, height) {
	            var allBlock = container.find(setting.selector).removeAttr('id'),
	                block = null,
	                activeBlock = [];

	            height = height ? height : container.height() || $W.height();
	            width = width ? width : container.width() || $W.width();

	            runtime.arguments = arguments;

	            layoutManager.resetGrid(runtime);

	            layoutManager.adjustUnit(width, height, setting);

	            if (runtime.filter) {
	                allBlock.data('active', 0);
	                allBlock.filter(runtime.filter).data('active', 1);
	            } else {
	                allBlock.data('active', 1);
	            }

	            if (_jquery2.default.isFunction(runtime.sortFunc)) {
	                allBlock.sort(runtime.sortFunc);
	            }

	            allBlock.each(function (index, item) {
	                var $item = (0, _jquery2.default)(item);
	                item.index = ++index;
	                block = layoutManager.loadBlock(item, setting);
	                block && $item.data("active") && activeBlock.push(block);
	            });

	            klass.fireEvent('onGridReady', container, setting);

	            engine[setting.engine](activeBlock, setting);

	            layoutManager.setWallSize(runtime, container);

	            klass.fireEvent('onGridArrange', container, setting);

	            runtime.length = allBlock.length;

	            allBlock.each(function (index, item) {
	                layoutManager.showBlock(item, setting);
	                if (setting.draggable || item.getAttribute('data-draggable')) {
	                    setDraggable(item);
	                }
	            });
	        },

	        /*
	        set block with special position, the top and left are multiple of unit width/height;
	        example:
	             wall.fixPos({
	                top: 0,
	                left: 0,
	                block: $('.free')
	            });
	        */
	        fixPos: function fixPos(option) {
	            (0, _jquery2.default)(option.block).attr({ 'data-position': option.top + "-" + option.left });
	            return this;
	        },

	        /*
	        set block with special size, the width and height are multiple of unit width/height;
	        example:
	             wall.fixSize({
	                height: 5,
	                width: 2,
	                block: $('.free')
	            });
	        */
	        fixSize: function fixSize(option) {
	            option.height != null && (0, _jquery2.default)(option.block).attr({ 'data-height': option.height });
	            option.width != null && (0, _jquery2.default)(option.block).attr({ 'data-width': option.width });
	            return this;
	        },

	        prepend: function prepend(items) {
	            container.prepend(items);
	            if (runtime.arguments) {
	                this.refresh();
	            }
	            return this;
	        },

	        refresh: function refresh() {
	            var params = arguments.length ? arguments : runtime.arguments;
	            var oldArg = runtime.arguments;
	            var method = oldArg ? oldArg.callee : this.fitWidth;
	            method.apply(this, Array.prototype.slice.call(params, 0));
	            return this;
	        },

	        /*
	        custom layout setting;
	        example:
	             wall.reset({
	                selector: '.brick',
	                animate: true,
	                cellW: 160,
	                cellH: 160,
	                delay: 50,
	                onResize: function() {
	                    wall.fitWidth();
	                }
	            });
	        */
	        reset: function reset(option) {
	            _jquery2.default.extend(setting, option);
	            return this;
	        },

	        /*
	        create one or more blank area (hole) on layout;
	        example:
	             wall.setHoles({
	                top: 2,
	                left: 2,
	                width: 2,
	                height: 2
	            });
	        */

	        setHoles: function setHoles(holes) {
	            var newHoles = [].concat(holes),
	                h = {},
	                i = void 0;
	            runtime.holes = {};
	            for (i = 0; i < newHoles.length; ++i) {
	                h = newHoles[i];
	                runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height] = h;
	            }
	            return this;
	        },
	        /*
	        sort items by using array sort function;
	        example:
	             wall.sortBy(function(itemA, itemB) {
	                return $(itemA).width() - $(itemB).width();
	            });
	        */
	        sortBy: function sortBy(func) {
	            runtime.sortFunc = func;
	            if (runtime.arguments) {
	                this.refresh();
	            }
	            return this;
	        },

	        unFilter: function unFilter() {
	            delete runtime.filter;
	            this.refresh();
	            return this;
	        }
	    });

	    container.attr('data-min-width', Math.floor($W.width() / 80) * 80);
	    // execute plugins;
	    for (var i in layoutManager.plugin) {
	        if (layoutManager.plugin.hasOwnProperty(i)) {
	            layoutManager.plugin[i].call(klass, setting, container);
	        }
	    }

	    // setup resize event;
	    $W.resize(function () {
	        if (runtime.running) return;
	        runtime.running = 1;
	        setTimeout(function () {
	            runtime.running = 0;
	            setting.onResize.call(klass, container);
	        }, 122);
	        container.attr('data-min-width', Math.floor($W.width() / 80) * 80);
	    });
	};

	/*
	add default setting;
	example:

	    Freewall.addConfig({
	        offsetLeft: 0
	    });
	*/
	Freewall.addConfig = function (newConfig) {
	    // add default setting;
	    _jquery2.default.extend(layoutManager.defaultConfig, newConfig);
	};

	/*
	support create new arrange algorithm;
	example:

	    Freewall.createEngine({
	        slice: function(items, setting) {
	            // slice engine;
	        }
	    });
	*/
	Freewall.createEngine = function (engineData) {
	    // create new engine;
	    _jquery2.default.extend(engine, engineData);
	};

	/*
	support create new plugin;
	example:

	    Freewall.createPlugin({
	        centering: function(setting, container) {
	            console.log(this);
	            console.log(setting);
	        }
	    })l
	*/
	Freewall.createPlugin = function (pluginData) {
	    // register new plugin;
	    _jquery2.default.extend(layoutManager.plugin, pluginData);
	};

	/*
	support access helper function;
	example:

	    Freewall.getMethod('setBlock')(block, setting);
	*/
	Freewall.getMethod = function (method) {
	    // get helper method;
	    return layoutManager[method];
	};

	exports.default = Freewall;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _TitleText = __webpack_require__(130);

	var _TitleText2 = _interopRequireDefault(_TitleText);

	var _isExplicit = __webpack_require__(137);

	var _isExplicit2 = _interopRequireDefault(_isExplicit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Caret(_ref) {
	  var show = _ref.show;


	  return show ? _react2.default.createElement('span', { className: 'caret' }) : null;
	}

	function Item(_ref2) {
	  var value = _ref2.value;
	  var onSelection = _ref2.onSelection;

	  return _react2.default.createElement(
	    'div',
	    { className: 'dropdown-item', onClick: function onClick(e) {
	        return onSelection(e, value);
	      } },
	    _react2.default.createElement(
	      _TitleText2.default,
	      { className: 'medium clickable' },
	      value.name
	    )
	  );
	}

	function List(_ref3) {
	  var items = _ref3.items;
	  var open = _ref3.open;
	  var onSelection = _ref3.onSelection;


	  return _react2.default.createElement(
	    'div',
	    { className: 'dropdown-list' + (open ? ' active' : '') },
	    items.map(function (item) {
	      return _react2.default.createElement(Item, { key: item.id, value: item, onSelection: onSelection });
	    })
	  );
	}

	var Dropdown = function (_React$Component) {
	  _inherits(Dropdown, _React$Component);

	  function Dropdown(props) {
	    _classCallCheck(this, Dropdown);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

	    _this.state = {
	      open: false
	    };
	    _this.setOpen = _this.setOpen.bind(_this);
	    _this.setSelected = _this.setSelected.bind(_this);
	    _this.clickAnywhereToClose = _this.clickAnywhereToClose.bind(_this);
	    return _this;
	  }

	  _createClass(Dropdown, [{
	    key: 'setSelected',
	    value: function setSelected(e, value) {
	      var onSelection = this.props.onSelection;

	      if ((0, _isExplicit2.default)(onSelection, Function)) onSelection(e, value);
	    }
	  }, {
	    key: 'setOpen',
	    value: function setOpen(e, value) {
	      e.stopPropagation();

	      var open = (0, _isExplicit2.default)(value, Boolean) ? value : !this.state.open;
	      this.setState({ open: open });
	    }
	  }, {
	    key: 'clickAnywhereToClose',
	    value: function clickAnywhereToClose() {
	      this.setState({ open: false });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $(window).click(this.clickAnywhereToClose);

	      if (this.props.open) this.setOpen();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $(window).off('click', this.clickAnywhereToClose);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var items = _props.items;

	      var other = _objectWithoutProperties(_props, ['className', 'items']);

	      var open = this.state.open;


	      return _react2.default.createElement(
	        'div',
	        _extends({ className: 'dropdown padded inverse ' + (className || '') }, other, { onClick: this.setOpen }),
	        _react2.default.createElement(
	          'h1',
	          { className: 'clickable' },
	          this.props.title,
	          _react2.default.createElement(Caret, { show: !!this.props.title })
	        ),
	        _react2.default.createElement(List, { items: items, open: open, onSelection: this.setSelected, $dom: this.$dom })
	      );
	    }
	  }]);

	  return Dropdown;
	}(_react2.default.Component);

	exports.default = Dropdown;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	function is(value)
	{
		//Validate value argument
		if (arguments.length == 0)
			throw new Error("is expects at least one value and optionally a variable number of type arguments");

		//Validate type arguments
		for (var i = 1; i < arguments.length; i++) {
			var _type = arguments[i];
			if (typeof _type !== "function")
				throw new Error("types, if supplied, are expected to be of type 'function'");
		}

		//Type not supplied
		if (arguments.length < 2)
			return value !== undefined && value !== null && !Number.isNaN(value);

		//Test types
		var value_type = typeof value;
		for (var i = 1; i < arguments.length; i++) {
			var _type = arguments[i];

			if (value_type === "string" && _type === String)
				return true;

			else if (value_type === "boolean" && _type === Boolean)
				return true;

			else if (value_type === "number" && _type === Number && !Number.isNaN(value))
				return true;

			else if (value_type === "function" && _type === Function)
				return true;

			else if (value instanceof _type)
				return true;
		}

		//All failed
		return false;
	}

	module.exports = is;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(28);

	var _reactRouter = __webpack_require__(30);

	var _dataLoader = __webpack_require__(95);

	var _Image = __webpack_require__(139);

	var _TitleText = __webpack_require__(130);

	var _TitleText2 = _interopRequireDefault(_TitleText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function navigate(url) {
	  _reactRouter.browserHistory.push(url);
	}

	function ImageBlock(_ref) {
	  var width = _ref.width;
	  var height = _ref.height;
	  var url = _ref.url;
	  var onClick = _ref.onClick;

	  return _react2.default.createElement('div', {
	    className: 'cell-block clickable bulge',
	    onClick: onClick,
	    style: {
	      width: width || 160,
	      height: height || 160,
	      backgroundImage: 'url(' + url + ')'
	    } });
	}

	function VideoBlock(_ref2) {
	  var video = _ref2.video;
	  var urlPrefix = _ref2.urlPrefix;


	  urlPrefix = urlPrefix || '/';
	  var thumb_index = Math.floor(video.urls.thumb.length * 0.5);
	  var thumb_url = video.urls.thumb[thumb_index];

	  var video_url = urlPrefix + video.id;

	  var width = video.width;
	  var height = video.height;


	  return _react2.default.createElement('div', {
	    className: 'cell-block clickable bulge',
	    onClick: function onClick() {
	      return navigate(video_url);
	    },
	    style: {
	      width: width,
	      height: height,
	      backgroundImage: 'url(' + thumb_url + ')'
	    } });
	}

	function PortfolioTitle(_ref3) {
	  var place = _ref3.place;
	  var children = _ref3.children;

	  return place ? _react2.default.createElement(
	    _TitleText2.default,
	    { className: 'padded', style: { paddingBottom: '0.25em' } },
	    children
	  ) : null;
	}

	var Portfolio = function (_React$Component) {
	  _inherits(Portfolio, _React$Component);

	  function Portfolio(props) {
	    _classCallCheck(this, Portfolio);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Portfolio).call(this, props));

	    _this.state = {
	      videos: [],
	      image: null
	    };
	    _this.setVideos = _this.setVideos.bind(_this);
	    _this.setImage = _this.setImage.bind(_this);
	    _this.clearImage = _this.clearImage.bind(_this);
	    return _this;
	  }

	  _createClass(Portfolio, [{
	    key: 'setImage',
	    value: function setImage(image) {
	      this.setState({ image: image });
	    }
	  }, {
	    key: 'clearImage',
	    value: function clearImage() {
	      this.setState({ image: null });
	    }
	  }, {
	    key: 'setVideos',
	    value: function setVideos(allVideos) {
	      var id = this.props.portfolio.toString();
	      var videos = [];

	      for (var i in allVideos) {
	        var video = allVideos[i];
	        if (video.portfolios.includes(id)) videos.push(video);
	      }

	      this.setState({ videos: videos });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _dataLoader.events.on('videos-loaded', this.setVideos);
	      if (_dataLoader.data.videos) this.setVideos(_dataLoader.data.videos);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _dataLoader.events.removeListener('videos-loaded', this.setVideos);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var id = _props.id;
	      var urlPrefix = _props.urlPrefix;
	      var portfolioImagesHack = _props.portfolioImagesHack;

	      var other = _objectWithoutProperties(_props, ['id', 'urlPrefix', 'portfolioImagesHack']);

	      var _state = this.state;
	      var videos = _state.videos;
	      var image = _state.image;


	      var imageBlocks = [],
	          gifBlocks = [];
	      var imagePort = portfolioImagesHack || [];

	      imagePort.forEach(function (img) {
	        var arr = img.url.includes('.gif') ? gifBlocks : imageBlocks;
	        arr.push(_react2.default.createElement(ImageBlock, _extends({ key: img.url, onClick: function onClick() {
	            return _this2.setImage(img);
	          } }, img)));
	      });

	      var videoBlocks = videos.map(function (video) {
	        return _react2.default.createElement(VideoBlock, { key: video.id, video: video, urlPrefix: urlPrefix });
	      });

	      videoBlocks.push(gifBlocks);

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          PortfolioTitle,
	          { place: !!portfolioImagesHack },
	          'Videos'
	        ),
	        image ? _react2.default.createElement(_Image.Image, _extends({}, image, { close: this.clearImage })) : null,
	        _react2.default.createElement(
	          _index.FreeWall,
	          _extends({ id: id, key: id, selector: '.cell-block' }, other),
	          videoBlocks
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          PortfolioTitle,
	          { place: !!portfolioImagesHack },
	          'Illustrations'
	        ),
	        portfolioImagesHack ? _react2.default.createElement(
	          _index.FreeWall,
	          _extends({ id: id + 'images', key: id + 'images', selector: '.cell-block' }, other),
	          imageBlocks
	        ) : null
	      );
	    }
	  }]);

	  return Portfolio;
	}(_react2.default.Component);

	exports.default = Portfolio;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Image = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Image = exports.Image = function (_React$Component) {
	  _inherits(Image, _React$Component);

	  function Image(props) {
	    _classCallCheck(this, Image);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, props));

	    _this.state = {
	      video: null
	    };
	    _this.resize = _this.resize.bind(_this);
	    _this.$holder = null;
	    return _this;
	  }

	  _createClass(Image, [{
	    key: 'resize',
	    value: function resize() {
	      if (!this.$holder || this.$holder.length === 0) return;

	      var y = Math.max((window.innerHeight - this.$holder.height()) * 0.5, 0);
	      this.$holder.css('paddingTop', y);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $(window).on('resize', this.resize);
	      setTimeout(this.resize, 10);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $(window).off('resize', this.resize);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      setTimeout(this.resize, 10);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var close = _props.close;
	      var url = _props.url;

	      return _react2.default.createElement(
	        'div',
	        { className: 'video-page clickable', onClick: close },
	        _react2.default.createElement('img', { className: 'hack-image-viewer', src: url, ref: function ref(holder) {
	            return _this2.$holder = $(holder);
	          } })
	      );
	    }
	  }]);

	  return Image;
	}(_react2.default.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = StaffPicture;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _TitleText = __webpack_require__(130);

	var _TitleText2 = _interopRequireDefault(_TitleText);

	var _BodyText = __webpack_require__(131);

	var _BodyText2 = _interopRequireDefault(_BodyText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function italicize(writeup) {
	  return writeup.split('**').map(function (str, i) {
	    return _react2.default.createElement(
	      'span',
	      { key: i, className: i % 2 == 1 ? 'italic' : '' },
	      str
	    );
	  });
	}

	function StaffPicture(_ref) {
	  var className = _ref.className;
	  var staff = _ref.staff;

	  var other = _objectWithoutProperties(_ref, ['className', 'staff']);

	  var style = {
	    backgroundImage: 'url(' + staff.image + ')'
	  };

	  return _react2.default.createElement(
	    'div',
	    { className: 'staff-writeup' + (className || '') },
	    _react2.default.createElement('div', _extends({ className: 'staff-picture', style: style }, other)),
	    _react2.default.createElement(
	      'div',
	      { className: 'staff-bio' },
	      _react2.default.createElement(
	        _TitleText2.default,
	        null,
	        staff.name
	      ),
	      _react2.default.createElement(
	        _BodyText2.default,
	        null,
	        italicize(staff.writeup)
	      )
	    )
	  );
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Content;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function Content(_ref) {
	  var children = _ref.children;

	  var other = _objectWithoutProperties(_ref, ['children']);

	  return _react2.default.createElement(
	    'div',
	    other,
	    children
	  );
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _isExplicit = __webpack_require__(137);

	var _isExplicit2 = _interopRequireDefault(_isExplicit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//this class will keep things stuck to the bottom, because I can't figure out reliable css to do the same

	var $window = void 0;

	var Footer = function (_React$Component) {
	  _inherits(Footer, _React$Component);

	  function Footer(props) {
	    _classCallCheck(this, Footer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

	    if (!(0, _isExplicit2.default)(_this.props.content, String)) throw new Error('the content property should be an id');

	    _this.state = { classes: '', style: null };
	    _this.dom = null;
	    _this.$this = null;
	    _this.$target = null;
	    _this.calcStyle = _this.calcStyle.bind(_this);
	    return _this;
	  }

	  _createClass(Footer, [{
	    key: 'calcStyle',
	    value: function calcStyle() {
	      if (!$window) $window = $(window);

	      if (!this.$this) this.$this = $(this.dom);

	      if (!this.$target) this.$target = $('#' + this.props.content);

	      if (this.$target.length === 0) throw new Error('Could not find selection with id ' + this.props.content);

	      var bottom = $window.height() > this.$target.height() + this.$target.offset().top + this.$this.height();
	      var classes = bottom ? 'bottom' : '';

	      this.setState({ classes: classes });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $(window).on('resize', this.calcStyle);
	      this.calcStyle();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $(window).off('resize', this.calcStyle);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;

	      var other = _objectWithoutProperties(_props, ['children', 'className']);

	      var suppliedClass = className || '';
	      var classes = suppliedClass + (suppliedClass.length > 0 ? ' ' : '') + this.state.classes;
	      return _react2.default.createElement(
	        'footer',
	        _extends({ className: classes }, other, { ref: function ref(dom) {
	            return _this2.dom = dom;
	          } }),
	        children
	      );
	    }
	  }]);

	  return Footer;
	}(_react2.default.Component);

	exports.default = Footer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Staff = exports.Director = exports.Video = exports.Work = exports.About = exports.Directors = exports.Splash = undefined;

	var _Splash = __webpack_require__(144);

	var _Splash2 = _interopRequireDefault(_Splash);

	var _Directors = __webpack_require__(146);

	var _Directors2 = _interopRequireDefault(_Directors);

	var _Director = __webpack_require__(181);

	var _Director2 = _interopRequireDefault(_Director);

	var _About = __webpack_require__(182);

	var _About2 = _interopRequireDefault(_About);

	var _Work = __webpack_require__(192);

	var _Work2 = _interopRequireDefault(_Work);

	var _Video = __webpack_require__(193);

	var _Video2 = _interopRequireDefault(_Video);

	var _Staff = __webpack_require__(194);

	var _Staff2 = _interopRequireDefault(_Staff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Splash = _Splash2.default;
	exports.Directors = _Directors2.default;
	exports.About = _About2.default;
	exports.Work = _Work2.default;
	exports.Video = _Video2.default;
	exports.Director = _Director2.default;
	exports.Staff = _Staff2.default;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = Splash;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(145);

	var _Page2 = _interopRequireDefault(_Page);

	var _reactRouter = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Play() {
	  return _react2.default.createElement('span', { className: 'play-button' });
	}

	function Splash(props) {
	  return _react2.default.createElement(
	    _Page2.default,
	    _extends({ id: 'splash-page', className: '' }, props),
	    _react2.default.createElement(
	      'h1',
	      null,
	      'Global Mechanic'
	    ),
	    _react2.default.createElement('div', { id: 'gear-background' }),
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { id: 'just_clicks_button', className: 'title mini clickable', to: '/work/just_clicks/86731887' },
	      _react2.default.createElement(Play, null),
	      ' Just Click'
	    )
	  );
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = Page;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _dataLoader = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function Page(props) {
	  var className = props.className;
	  var children = props.children;
	  var routes = props.routes;

	  var other = _objectWithoutProperties(props, ['className', 'children', 'routes']);

	  var _routes = routes[routes.length - 1];
	  var path = _routes.path;

	  var backgroundProps = _objectWithoutProperties(_routes, ['path']); // eslint-disable-line no-unused-vars

	  setTimeout(function () {
	    return _dataLoader.events.emit('background-style', backgroundProps);
	  }, 100);

	  var classes = className || 'page';
	  return _react2.default.createElement(
	    'div',
	    _extends({}, other, { className: classes }),
	    children
	  );
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = Directors;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _directors = __webpack_require__(147);

	var _directors2 = _interopRequireDefault(_directors);

	var _reactRouter = __webpack_require__(30);

	var _components = __webpack_require__(28);

	var _Page = __webpack_require__(145);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dropdownSelect = function dropdownSelect(e, dir) {
	  _reactRouter.browserHistory.push('/directors/' + dir.id);
	};

	function DirectorBlock(_ref) {
	  var id = _ref.id;
	  var name = _ref.name;
	  var image = _ref.image;
	  var width = _ref.width;
	  var height = _ref.height;


	  var click = function click() {
	    _reactRouter.browserHistory.push('/directors/' + id);
	  };

	  return _react2.default.createElement(
	    'div',
	    {
	      onClick: click,
	      key: name, className: 'director-block bulge',
	      style: {
	        width: width,
	        height: height
	      } },
	    _react2.default.createElement('div', { className: 'staff-picture', style: { backgroundImage: 'url(' + image + ')' } })
	  );
	}

	function Directors(props) {

	  return _react2.default.createElement(
	    _Page2.default,
	    _extends({ id: 'directors-page' }, props),
	    _react2.default.createElement(
	      _components.Content,
	      { id: 'directors-content' },
	      _react2.default.createElement(_components.Dropdown, { title: 'Directors', items: _directors2.default, onSelection: dropdownSelect }),
	      props.params.director ? props.children :
	      // <FreeWall key={props.params.director} id="director-free-wall" className="med-width" selector=".director-block">
	      _react2.default.createElement(
	        _components.FreeWall,
	        { key: props.params.director, id: 'director-free-wall', selector: '.director-block' },
	        _directors2.default.map(function (dir) {
	          return _react2.default.createElement(DirectorBlock, _extends({ key: dir.id }, dir));
	        })
	      )
	    )
	  );
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  name: 'Bruce Alcock',
	  id: 'bruce',
	  width: 320,
	  height: 320,
	  portfolio: 638563,
	  image: __webpack_require__(148),
	  writeup: 'Bruce Alcock, is an artist whose animated shorts – **Impromptu**, **Vive' + ' la Rose**, **At the Quinte Hotel**, **Wrong Number Phone Message** and **54 Hours** - have' + ' won accolades at festivals worldwide. Bruce’s wide-ranging background in music' + ' and art expresses itself in a varied and inventive approach to every project.' + ' His design-based TV commercials have led to award-winning campaigns for clients' + ' like Coca-Cola, Molson, Chrysler, Bell and Procter & Gamble; his art projects' + ' include an interactive film for Canada’s pavilion in the Venice Biennale of' + ' Architecture, multi-screen typographical animation for the dance/ theatre/poetry/music' + ' piece **The Four Horsemen** with Toronto’s Volcano Theatre, set design and projection' + ' work for Art in Times’s **I Send You This Cadmium Red** and ongoing gallery shows' + ' of his paintings and installations. Bruce studied tuba performance and comparative' + ' literature at the University of Toronto, then moved to Barcelona, where he' + ' apprenticed with animator Dirk Van de Vondel. He also designed the font Soupbone,' + ' distributed by FontShop International. Global Mechanic is his third production' + ' company; he founded Cuppa Coffee Animation in Toronto (1991) and Tricky Pictures' + ' in Chicago (1995).'
	}, {
	  name: 'Dirk Van De Vondel',
	  id: 'dirk',
	  width: 200,
	  height: 200,
	  portfolio: 400039,
	  image: __webpack_require__(149),
	  writeup: 'Dirk Van de Vondel is a Belgian director, whose expansive career has' + ' spanned North America, the UK and parts of Europe. Earlier in his career, Dirk' + ' directed at top studios in London, later relocating to Spain in 1990. His' + ' obsessively experimental approach and beautiful drawings have drawn numerous' + ' international clients - Coca-Cola, SEAT, The Tate Gallery, Nokia, MTV and' + ' British Airways. His work is characterized by fluid transformations, powerful' + ' and dynamic lines, a deep love of texture and creating at the edges of possibility.' + ' For many years, Dirk co-founded and ran a popular outdoor film festival, Xinacittà,' + ' in Barcelona. '
	}, {
	  name: 'Morten Vinther',
	  id: 'morten',
	  width: 240,
	  height: 240,
	  portfolio: 631712,
	  image: __webpack_require__(150),
	  writeup: 'Morten Vinther is a VFX supervisor and compositing artist with more' + ' than 15 years experience in creating visual effects, design and animation for ' + 'commercials, TV and film. He has held lead positions as far afield as Copenhagen, ' + 'Edinburgh, London, Dublin, Sydney and more recently Amsterdam.'
	}, {
	  name: 'Nathaniel Akin',
	  id: 'nathaniel',
	  width: 320,
	  height: 320,
	  portfolio: 631636,
	  image: __webpack_require__(151),
	  writeup: 'Nathaniel Akin is an award-winning director with more than 15 years' + ' of animation and design experience. In addition to directing and developing' + ' the look of a number of innovative commercial campaigns and short films he' + ' directed the children\'s web series **All Terrain Brain** and created station' + ' branding for the Nickelodeon digital animation channel Nicktoons.'
	}, {
	  name: 'Daniel Sousa',
	  id: 'daniel',
	  width: 240,
	  height: 240,
	  portfolio: 400062,
	  image: __webpack_require__(152),
	  writeup: 'Daniel Sousa is an accomplished director and an Academy Award nominee ' + ' (for his film **Feral**). ' + ' In 2003 he was awarded a Moving Image Fund production grant by the LEF Foundation' + ' to produce **Fable** (2005). In 2008 he was the recipient of a production grant' + ' from the Creative Capital Foundation for the film, **Feral**. His films have screened' + ' at a number of animation film festivals including Annecy, Melbourne, Ottawa' + ' and Anima Mundi. In addition to his independent projects, Daniel has worked as a' + ' director and animator with Cartoon Network, Olive Jar Studios, Global Mechanic,' + ' and Duck. He is a founding member of Handcrankedfilm, a film makers’ collective,' + ' along with Jeff Sias, Bryan Papciak, and Jake Mahaffy. Daniel has taught at' + ' several colleges in the New England area, including Harvard University, The' + ' Museum School, and The Art Institute of Boston. Since 2001 he has been teaching' + ' at the Rhode Island School of Design.'
	}, {
	  name: 'Marv Newland',
	  id: 'marv',
	  width: 240,
	  height: 160,
	  portfolio: 631613,
	  image: __webpack_require__(153),
	  writeup: 'Marv Newland began a career making animated films in Los Angeles with ' + 'the creation of the short **Bambi Meets Godzilla**. In 1970 he moved to Toronto, ' + 'Canada where he designed, directed and animated television commercials, ID’s ' + 'for Sesame Street, and segments for longer films. In late 1972 Newland moved ' + 'to Vancouver, Canada where he free-lanced for local and American production ' + 'companies. In 1975 Newland founded the animated film production company International ' + 'Rocketship Limited in Vancouver, where he continues to produce and direct animated ' + 'short films.'
	}, {
	  name: 'Rich Ferguson-Hull',
	  id: 'rich',
	  width: 220,
	  height: 220,
	  portfolio: 631619,
	  image: __webpack_require__(154),
	  writeup: 'Rich Ferguson-Hull works primarily in' + ' television and advertising.  He recently completed consulting and' + ' storyboarding for the Emmy-nominated Adult Swim series **Your Pretty Face is' + ' Going to Hell**, and is the animation consultant and designer for a show currently' + ' in development at Georgia Public Television. Prior to that, he was a director' + ' for the first and second seasons of the animated series **Ugly Americans**, which' + ' aired on Comedy Central, and also directed two pilots for Cartoon Network,' + ' one of which he also created, co-wrote, and executive produced. Rich also was' + ' the Supervising Director for **Harvey Birdman, Attorney at Law**, part of Cartoon' + ' Network\'s late night animation block, Adult Swim. The **Harvey Birdman** Episode ' + '**Birdgirl of Guatanamole** won Best Animated Series For Adults at the Ottawa ' + 'International Animation Festival the year it aired.  Prior to directing that ' + 'series, Ferguson-Hull spent nine years at Olive Jar Studios of Boston and Los ' + 'Angeles, first as animator and director, and later as a Creative Director.  ' + 'He is currently represented for commercial work through Global Mechanic. Rich' + ' received his BA in Film Studies from Wesleyan University.  He works from his' + ' studio in Connecticut, where he lives with his wife and two sons.'
	}, {
	  name: 'Tom Schroeder',
	  id: 'tom',
	  width: 320,
	  height: 320,
	  portfolio: 400084,
	  image: __webpack_require__(155),
	  writeup: 'Tom Schroeder has been making hand-drawn animated films and commercials' + ' since 1990. Tom’s distinct, original style of animation is showcased in both' + ' films and commercials. Companies are elated with his commercial work - he has' + ' directed pieces for Kashi, Samsung and Hertz Car Rental. Tom enjoys continued' + ' success on the international festival circuit – with screenings in Annecy,' + ' Rotterdam, Sundance, South by Southwest, Ottawa and Edinburgh – and has won' + ' over thirty festival awards. Tom received Minnesota State Arts Board Grants' + ' in 1991, 1999 and 2006, Jerome Film and Video Grants in 2000 and 2004, McKnight' + ' Fellowships in 2006 and 2011, and Bush Fellowships in 1997 and 2008. His films' + ' have also been broadcast on Independent Lens, Sundance Channel, Canal + France,' + ' SBS in Australia, CBC in Canada, and screened at the American Cinematique in' + ' Los Angeles and Anthology Film Archives in New York.'
	}, {
	  name: 'Julian Frost',
	  id: 'julian',
	  width: 360,
	  height: 360,
	  portfolio: 634980,
	  portfolioImagesHack: __webpack_require__(156),
	  image: __webpack_require__(180),
	  writeup: 'Julian specialises in design-driven comedic animation. His work has' + ' won Cannes Lion Grand Prixs, Webbys, an Annecy Cristal, and been honoured by' + ' the London Design Museum. He lives in Melbourne, Australia, and quite likes ducks.'
	}].filter(function (dir) {
	  return dir.writeup !== null && dir.portfolio !== null;
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "42ac2898f697e77db0cae76b2b12b5e2.png";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b9840d7930c8dce06a5e3697c51f1a5f.png";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "92eeb6ac04a2f590c76599b6723e8577.jpg";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e6cc4a215a86d003d94913fee144aad9.jpg";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b5b950a4ee8b7ef03fcff5767440bef8.jpg";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5d339848b820ff0e8f08c7c32ab68306.jpg";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7303acb94f70b31a29508a76bdc0466b.jpg";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fd9ace8902e42260c515fa4ebda46549.jpg";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var images = [{ width: 400,
	  height: 80,
	  url: 'julian-frost_bibimbap.gif'
	}, { width: 320,
	  height: 320,
	  url: 'julian-frost_bored.png'
	}, { width: 320,
	  height: 160,
	  url: 'julian-frost_cow.gif'
	}, { width: 400,
	  height: 400,
	  url: 'julian-frost_diving.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_bear.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_hairfire.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_kidneys.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_moose.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_piranha.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_snake.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_spaceman.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_toast.jpg'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_dwtd_xmas.jpg'
	}, { width: 240,
	  height: 240,
	  url: 'julian-frost_island.gif'
	}, { width: 320,
	  height: 240,
	  url: 'julian-frost_no_pants.jpg'
	}, { width: 240,
	  height: 240,
	  url: 'julian-frost_no_smoking_in_the_bathroom.gif'
	}, { width: 200,
	  height: 200,
	  url: 'julian-frost_simplification.gif'
	}, { width: 320,
	  height: 320,
	  url: 'julian-frost_sinus_problem.png'
	}, { width: 240,
	  height: 320,
	  url: 'julian-frost_sousaphone.jpg'
	}, { width: 320,
	  height: 240,
	  url: 'julian-frost_squid.png'
	}, { width: 320,
	  height: 240,
	  url: 'julian-frost_storm.png'
	}, { width: 320,
	  height: 320,
	  url: 'julian-frost_suplex.png'
	}];
	module.exports = images.map(function (image) {
	  return Object(_extends({}, image, {
	    url: __webpack_require__(157)("./" + image.url)
	  }));
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./julian-frost_bibimbap.gif": 158,
		"./julian-frost_bored.png": 159,
		"./julian-frost_cow.gif": 160,
		"./julian-frost_diving.jpg": 161,
		"./julian-frost_dwtd_bear.jpg": 162,
		"./julian-frost_dwtd_hairfire.jpg": 163,
		"./julian-frost_dwtd_kidneys.jpg": 164,
		"./julian-frost_dwtd_moose.jpg": 165,
		"./julian-frost_dwtd_piranha.jpg": 166,
		"./julian-frost_dwtd_snake.jpg": 167,
		"./julian-frost_dwtd_spaceman.jpg": 168,
		"./julian-frost_dwtd_toast.jpg": 169,
		"./julian-frost_dwtd_xmas.jpg": 170,
		"./julian-frost_island.gif": 171,
		"./julian-frost_no_pants.jpg": 172,
		"./julian-frost_no_smoking_in_the_bathroom.gif": 173,
		"./julian-frost_simplification.gif": 174,
		"./julian-frost_sinus_problem.png": 175,
		"./julian-frost_sousaphone.jpg": 176,
		"./julian-frost_squid.png": 177,
		"./julian-frost_storm.png": 178,
		"./julian-frost_suplex.png": 179
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 157;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc4943e3b6d82e5efe9a5798755271ba.gif";

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7e8cc69daebed0c62a14970c5da74f3b.png";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "47f4dd319c1a8f0bbbe351ba56a77ab8.gif";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3d160c06150720fa089be93f5fedec67.jpg";

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bd2cab65427059c88b87ac67433fea4d.jpg";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1176af356676374265ae80c043c9fe3e.jpg";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a58df3484e55a73b2c6af1727879cb88.jpg";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "756e4d7321b23a3995814b14254119e3.jpg";

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "579a19f5bde3c3c749ff9c284a1de5db.jpg";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "baff7556fac4a86c798005daa20ed79a.jpg";

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f5f56f7c3fc2eb216958a8c06e972d12.jpg";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b9d0ded16cd87986faeb9d8b623db5ac.jpg";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "079e5e73fcc5ea39ceb9ac13421d3e54.jpg";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fb57b981db06abfdfbb68ec7554df93d.gif";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60e5ab162db42357f22009309f53474e.jpg";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d1f7757b4a7e204de63fe61f0bf90317.gif";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b6b28dc16e0afc40127db915009c22f6.gif";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89eb2b99a0b133b31c0b21a4fb204840.png";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f00ab4808ccef28a4d819ae7c820e081.jpg";

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d5963ecbb04aec623b139190c9f50834.png";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b24205dce2a52ff76721c4bf944c238f.png";

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d75e2b2d545b75a9927a7f3403da85ed.png";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "daf4e05b5b1aa9aeca93c4c151160369.jpg";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = Director;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(145);

	var _Page2 = _interopRequireDefault(_Page);

	var _directors = __webpack_require__(147);

	var _directors2 = _interopRequireDefault(_directors);

	var _components = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function Director(props) {
	  var id = props.params.director;
	  var children = props.children;

	  var other = _objectWithoutProperties(props, ['children']);

	  var director = _directors2.default.filter(function (dir) {
	    return dir.id === id;
	  })[0];

	  return _react2.default.createElement(
	    _Page2.default,
	    _extends({ id: id, className: 'inverse' }, other),
	    _react2.default.createElement(_components.StaffPicture, { staff: director }),
	    _react2.default.createElement(_components.Portfolio, { id: 'directors-portfolio', key: director.id, portfolio: director.portfolio,
	      portfolioImagesHack: director.portfolioImagesHack,
	      urlPrefix: '/directors/' + director.id + '/' }),
	    children
	  );
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(145);

	var _Page2 = _interopRequireDefault(_Page);

	var _components = __webpack_require__(28);

	var _staff = __webpack_require__(183);

	var _staff2 = _interopRequireDefault(_staff);

	var _reactRouter = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var $window = $(window);

	function StaffBlock(_ref) {
	  var id = _ref.id;
	  var image = _ref.image;
	  var width = _ref.width;
	  var height = _ref.height;


	  var click = function click() {
	    _reactRouter.browserHistory.push('/about/' + id);
	  };

	  return _react2.default.createElement(
	    'div',
	    {
	      onClick: click,
	      key: name, className: 'staff-block bulge',
	      style: {
	        width: width,
	        height: height
	      } },
	    _react2.default.createElement('div', { className: 'staff-picture', style: { backgroundImage: 'url(' + image + ')' } })
	  );
	}

	var About = function (_React$Component) {
	  _inherits(About, _React$Component);

	  function About(props) {
	    _classCallCheck(this, About);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));

	    _this.state = { stick: false };
	    return _this;
	  }

	  _createClass(About, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.resize = this.resize.bind(this);

	      $window.on('resize', this.resize);

	      this.$section = $('#our-team-section');
	      this.$content = $('#about-page-content');

	      this.resize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $window.off('resize', this.resize);
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {

	      var contentY = this.$content.offset().top + this.$content.outerHeight(true);
	      var sectionH = this.$section.height();

	      var stick = contentY + sectionH < innerHeight;

	      this.setState({ stick: stick });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var onStaffMember = props.params.staff;

	      return _react2.default.createElement(
	        _Page2.default,
	        _extends({ id: 'about-page' }, props),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          _components.Content,
	          { id: 'about-page-content' },
	          _react2.default.createElement(
	            _components.TitleText,
	            { className: 'padded large' },
	            'Global Mechanic is a design studio.'
	          ),
	          _react2.default.createElement(
	            _components.TitleText,
	            { className: 'padded large' },
	            'We experiment, we create, we make beautiful things.'
	          ),
	          _react2.default.createElement(
	            _components.BodyText,
	            { className: 'padded' },
	            'Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films, commercials, television series, digital media and art projects. Oscar and Emmy nominated, we\'re well decorated in festival and ad circuits worldwide.'
	          ),
	          _react2.default.createElement(
	            _components.BodyText,
	            { className: 'padded' },
	            'With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us nimble, adaptive, and it saves us from getting set in our ways. It\'s a studio culture of invention and collaboration, where change is expected. Welcome, even.'
	          ),
	          _react2.default.createElement(
	            _components.BodyText,
	            { className: 'padded' },
	            'It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola, BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodeon and CBC, the films we produce independently and in co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.'
	          )
	        ),
	        _react2.default.createElement(
	          _components.Inverted,
	          { id: 'our-team-section', fill: true, className: 'padded-bottom' + (this.state.stick ? ' about-stick' : '') },
	          _react2.default.createElement('div', { id: 'about-gear-background' }),
	          _react2.default.createElement('br', null),
	          onStaffMember ? _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/about' },
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'clickable padded' },
	              'KEY STAFF'
	            )
	          ) : _react2.default.createElement(
	            _components.TitleText,
	            { className: 'padded' },
	            'KEY STAFF'
	          ),
	          _react2.default.createElement('br', null),
	          props.params.staff ? props.children : _react2.default.createElement(
	            _components.FreeWall,
	            { id: 'chief-free-wall', selector: '.staff-block' },
	            _staff2.default.map(function (dir) {
	              return _react2.default.createElement(StaffBlock, _extends({ key: dir.id }, dir));
	            })
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { id: 'bottom-info' },
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded small' },
	              'USA | Liz Laine Reps +1 312 329 1111'
	            ),
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded small' },
	              'Canada | Hestyreps +1 416 482 0411'
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded', mini: true },
	              'Suite 208 - 1525 West 8th Avenue'
	            ),
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded', mini: true },
	              'Vancouver BC'
	            ),
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded', mini: true },
	              'Canada V6J 1T5'
	            ),
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded', mini: true },
	              '+1 604 733 7475'
	            ),
	            _react2.default.createElement(
	              _components.TitleText,
	              { className: 'padded', mini: true },
	              'studio@globalmechanic.com'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return About;
	}(_react2.default.Component);

	exports.default = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  name: 'Bruce Alcock',
	  id: 'bruce',
	  width: 240,
	  height: 160,
	  image: __webpack_require__(184),
	  writeup: 'Founder and Creative Director, Bruce Alcock, has produced countless' + ' award-winning projects throughout his expansive career. As Creative Director,' + ' Bruce supervises all work made by the studio, including TV series for broadcasters' + ' like PBS and the Cartoon Network. Global Mechanic is Bruce’s third production' + ' company, where multiple modes of production inform one another, mixing the' + ' professional rigour of commercial work with the creative spirit and critical' + ' aesthetic of art projects. In addition to ongoing film, commercial and art' + ' projects, Bruce thoroughly enjoys speaking about Global Mechanic’s approach' + ' to animation and production, one which is oriented around hybridisation and' + ' experimental techniques. In June 2016, Bruce was asked to present his life’s' + ' animation work in advertising at the Annecy International Film Festival. He’s' + ' also given workshops and masterclasses at home and abroad, from St. John’s,' + ' Newfoundland to Edinburgh, Scotland. Bruce has sat on juries at the Ottawa' + ' International Animation Festival and the Canadian Screen Awards, while also' + ' moderating panels at KidScreen, Boards Advertising Conference and OIAF. Sharing' + ' his passion with like-minded individuals, he regularly mentors filmmakers and' + ' consults on projects for organizations like the NFB, ECIAD and Vancouver Film School.'
	}, {
	  name: 'Tina Ouellette',
	  id: 'tina',
	  width: 240,
	  height: 160,
	  image: __webpack_require__(185),
	  writeup: 'Executive Producer and CEO, Tina Ouellette oversees all Global Mechanic' + ' business and supervises all aspects of client services. Leveraging decades' + ' of experience in production, Tina specializes in putting together and inspiring' + ' both cross-media and cross-functional collaborations. Tina’s management experience' + ' ranges from multi-platform digital projects to commercials, documentaries, network' + ' news, broadcast sports, films, series TV and extensive branding work. Tina' + ' is profoundly aware of the importance of clear communication with clients,' + ' worldwide, ensuring that projects fulfill the mandates of all stakeholders' + ' and reach the target audience.'
	}, {
	  name: 'Ryan Kane',
	  id: 'ryan',
	  width: 240,
	  height: 160,
	  image: __webpack_require__(186),
	  writeup: 'Art Director Ryan Kane relocated to Vancouver and joined Global Mechanic,' + ' after 6 years as an Art Director, Senior Motion graphics and VFX Supervisor' + ' in Ireland’s largest design studio. Ryan’s experience includes AAA properties' + ' and brands such as **Halo**, **Dead Rising**, McDonalds and Levi’s. He has won many' + ' graphic design and VFX awards, and rounds out the studio with his seasoned' + ' eye and talent for 3D and VFX.'
	}, {
	  name: 'Allison Barry',
	  id: 'allison',
	  image: __webpack_require__(187),
	  width: 160,
	  height: 160,
	  writeup: 'Business Affairs Allison Barry offers years of experience in project' + ' management, client relations, business development and contracts administration.' + ' Joining Global Mechanic in 2010, Allison embodies a variety of roles within' + ' the studio and is an invaluable asset to the company. Her portfolio ranges' + ' from supervising Global Mechanic’s recruitment plan and marketing strategy,' + ' to building networking relationships with new business partners and collaborators.'
	}, {
	  name: 'Cesare Battista',
	  id: 'chez',
	  width: 160,
	  height: 160,
	  image: __webpack_require__(188),
	  writeup: 'Animation Director Cesare Battista, “Chez”, has been an integral part' + ' of Global Mechanic for 12 years. Lead Storyboard Artist for five seasons of' + ' PBS’s Emmy-nominated Fetch! with Ruff Ruffman, he also designed and animated' + ' countless TV commercials, animated and storyboarded on award-winning films' + ' At the **Quinte Hotel, Long Tack Sam, Vive la Rose, Impromptu** and **54 Hours**. ' + ' His abilities range from an unerring sense of story, through expertise in ' + 'any illustrative style, to inventive approaches to pipeline, to beautiful animated' + ' movement. '
	}, {
	  name: 'Chris Brodie',
	  id: 'chris',
	  width: 160,
	  height: 160,
	  image: __webpack_require__(189),
	  writeup: 'Producer Chris Brodie has worked in the Vancouver production industry' + ' since graduating with a MA from Screen Academy Scotland in 2009. His experience' + ' in live-action commercial and children’s television production led him to Global' + ' Mechanic in 2012, where he now produces animated series and commercials. He' + ' enjoys running logistics in the creative field, solving problems and communicating' + ' with clients to ensure his productions deliver at the highest quality, on-time' + ' and on-budget.'
	}, {
	  name: 'Ben Gaumond',
	  id: 'ben',
	  width: 160,
	  height: 160,
	  image: __webpack_require__(190),
	  writeup: 'Technical Director Ben Gaumond specializes in technology services,' + ' video editing and management of data services. Ben is continually adapting' + ' and refining Global Mechanic’s technical infrastructure, relying on his multi-dimensional' + ' knowledge of app development and coding languages to provide sophisticated' + ' and resourceful solutions. When he\'s not overseeing all of Global Mechanic\'s' + ' technical aspects, he\'s filming and pursuing creative efforts. '
	}, {
	  name: 'Rachel Welsh',
	  id: 'rachel',
	  width: 160,
	  height: 160,
	  image: __webpack_require__(191),
	  writeup: 'Associate Producer Rachel Welsh graduated from the University of British' + ' Columbia in 2012 with an interdisciplinary degree in English Literature and' + ' Women’s Studies. Her enthusiasm, commitment and broad range of interests have' + ' made her an indispensable part of Global Mechanic, as her position has expanded' + ' from research and development to include commercial production.'
	}].filter(function (dir) {
	  return dir.writeup !== null && dir.portfolio !== null;
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3172c0a3e1ae872ee4cf4c8480a4c45f.jpg";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a6f52bc96212313d8f9ff80a00baf18d.jpg";

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bbdb01ab09008037debed7ed6174ecd9.jpg";

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "56ceec8c9f3172c2d92701448106c05f.jpg";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fb26d70ae3aa1e24353d3a1b25034504.jpg";

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "65f27db6bed4e20ad916a505b8cf6175.jpg";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "015c5cfd5937ab81d44d8f4f8f99700f.jpg";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7bee8e61d50bcca614adf2c4b97fffc6.jpg";

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(145);

	var _Page2 = _interopRequireDefault(_Page);

	var _reactRouter = __webpack_require__(30);

	var _components = __webpack_require__(28);

	var _dataLoader = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function pathified(str) {
	  return str.toLowerCase().replace(/ /g, '_').replace(/&/g, 'and');
	}

	function navigate(e, value) {
	  _reactRouter.browserHistory.push('/work/' + pathified(value.name));
	}

	var Work = function (_React$Component) {
	  _inherits(Work, _React$Component);

	  function Work(props) {
	    _classCallCheck(this, Work);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Work).call(this, props));

	    _this.state = { portfolios: [] };
	    _this.setPortfolios = _this.setPortfolios.bind(_this);
	    return _this;
	  }

	  _createClass(Work, [{
	    key: 'setPortfolios',
	    value: function setPortfolios(allPortfolios) {
	      var portfolios = [];

	      for (var i in allPortfolios) {
	        portfolios.push(allPortfolios[i]);
	      }this.setState({ portfolios: portfolios });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _dataLoader.events.on('portfolios-loaded', this.setPortfolios);
	      if (_dataLoader.data.portfolios) this.setPortfolios(_dataLoader.data.portfolios);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _dataLoader.events.removeListener('portfolios-loaded', this.setPortfolios);
	    }
	  }, {
	    key: 'setVideos',
	    value: function setVideos(allVideos) {
	      var id = this.props.portfolio.toString();
	      var videos = [];

	      for (var i in allVideos) {
	        var video = allVideos[i];
	        if (video.portfolios.includes(id)) videos.push(video);
	      }

	      this.setState({ videos: videos });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var portfolios = this.state.portfolios;

	      var path = this.props.params.portfolio;
	      var publicPortfolios = portfolios.filter(function (port) {
	        return port.scope === 'public';
	      });
	      var portfolio = portfolios.filter(function (port) {
	        return pathified(port.name) === path;
	      })[0];

	      var id = path + '-portfolio';

	      return _react2.default.createElement(
	        _Page2.default,
	        _extends({ id: 'work-page' }, this.props),
	        _react2.default.createElement(
	          _components.Content,
	          { id: 'work-content' },
	          _react2.default.createElement(_components.Dropdown, { title: portfolio ? portfolio.name : '', items: publicPortfolios, onSelection: navigate }),
	          portfolio ? _react2.default.createElement(_components.Portfolio, { key: id, id: id, portfolio: portfolio.id, urlPrefix: '/work/' + path + '/' }) : null,
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Work;
	}(_react2.default.Component);

	exports.default = Work;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(30);

	var _dataLoader = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function goBack() {
	  _reactRouter.browserHistory.goBack();
	}

	var Video = function (_React$Component) {
	  _inherits(Video, _React$Component);

	  function Video(props) {
	    _classCallCheck(this, Video);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Video).call(this, props));

	    _this.state = {
	      video: null
	    };
	    _this.setVideos = _this.setVideos.bind(_this);
	    _this.resize = _this.resize.bind(_this);
	    _this.$player = null;
	    return _this;
	  }

	  _createClass(Video, [{
	    key: 'resize',
	    value: function resize() {
	      if (!this.$player || this.$player.length === 0) return;

	      var y = Math.max((window.innerHeight - this.$player.height()) * 0.5, 0);
	      this.$player.css('paddingTop', y);
	    }
	  }, {
	    key: 'setVideos',
	    value: function setVideos(allVideos) {
	      var id = this.props.params.video;
	      var video = null;

	      for (var i in allVideos) {
	        var otherVideo = allVideos[i];
	        if (otherVideo.id === id) {
	          video = otherVideo;
	          break;
	        }
	      }

	      this.setState({ video: video });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _dataLoader.events.on('videos-loaded', this.setVideos);
	      $(window).on('resize', this.resize);

	      if (_dataLoader.data.videos) this.setVideos(_dataLoader.data.videos);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _dataLoader.events.removeListener('videos-loaded', this.setVideos);
	      $(window).off('resize', this.resize);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.resize();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var video = this.state.video;
	      var id = this.props.params.video;

	      if (id.includes(':')) id = id.split(':')[0];

	      return video ? _react2.default.createElement(
	        'div',
	        { className: 'video-page clickable', onClick: goBack },
	        _react2.default.createElement('iframe', { className: 'video-player', src: '//player.vimeo.com/video/' + id,
	          frameBorder: false, title: false, badge: false, byline: false,
	          ref: function ref(player) {
	            return _this2.$player = $(player);
	          },
	          webkitallowfullscreen: true,
	          mozallowfullscreen: true,
	          allowfullscreen: true })
	      ) : null;
	    }
	  }]);

	  return Video;
	}(_react2.default.Component);

	exports.default = Video;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Staff;

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _staff = __webpack_require__(183);

	var _staff2 = _interopRequireDefault(_staff);

	var _components = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Staff(props) {
	  var id = props.params.staff;
	  var person = _staff2.default.filter(function (dir) {
	    return dir.id === id;
	  })[0];

	  return _react2.default.createElement(_components.StaffPicture, { staff: person });
	}

/***/ }
/******/ ]);