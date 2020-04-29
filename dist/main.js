/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n   /*  font-family: roboto-mono, Helvetica, Arial, sans-serif; */\n}\n\n\nhtml,body{\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    /* background-color: #E9F0FF; */\n    /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\n    background-size: cover;\n    -webkit-background-size: cover; */\n}\n\nh1,h2,h3,h4{\n    margin: 0;\n}\n\n/*************************************************************************/\n\n.content{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    /* background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,149,218,0.85) 9.9%, rgba(56,80,114,1) 100.3% ); */   \n   /*  background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%); */\n   background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\n   background-size: cover;\n   -webkit-background-size: cover;\n}\n\n.content-main{\n    height:100%;\n    width: 100%;\n    position: relative;\n    color: white;\n}\n\n/**************************************************************************/\n\n.content-main--title{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    position: absolute;\n    top:15%;\n    width: 100%;\n    margin-bottom: 5px;\n    text-align: center;\n}\n\n.content-main--title h1{\n    font-size: 3em;\n    margin: 0;\n    font-weight: 800;\n}\n\n.content-main--title h4{\n    font-size: 1em;\n    font-style: italic;\n    margin:0;\n}\n\n \n@media screen and (min-height: 1000px){\n    .content-main--title{\n        top: 30%;\n    }\n}\n\n/***************************************************************************/\n\n.content-main--sessions{\n    display: flex;\n    position: absolute;\n    justify-content: space-around;\n    bottom: 0;\n    width: 100%;\n    height: auto;\n}\n\n.content-main--sessions .session{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    border-top: 1px solid white;\n    text-align: center;\n}\n\n.content-main--sessions .session h2{\n    font-size: xx-large;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\n.content-main--sessions .session h3{\n    font-weight: 100;\n}\n\n/****************************************************************************/\n.content-competitors{\n    margin: 70px 15px 60px 15px;\n}\n\n.content-competitors--header h1{\n    color: #444444;\n    font-weight: 300;\n    margin-bottom: 30px;\n}\n\n.toggle{\n    margin-bottom: 10px;\n    margin-top: 15px;\n    line-height: 1.0;\n}\n\n.toggle ul{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    text-align: left;\n    font-size: 0;\n}\n\n@media only screen and (min-width: 767px){\n    .toggle{\n        margin-bottom: 0px;\n        float: right;\n        margin-top: -36px;\n    }\n}\n\n.toggle li{\n    font-size: 13px;\n    background: #ffffff;\n    border: 1px solid #bbbbbb;\n    display: inline-block;\n    vertical-align: top;\n    padding: 4px 12px 5px 12px;\n    cursor: pointer;\n    font-weight: 500;\n}\n\n@media only screen and (min-width: 767px){\n    .toggle li{\n        padding: 5px 12px 5px 12px;\n        font-size: 13px;\n    }\n}\n\n.toggle li:nth-child(1){\n    border-radius: 5px 0px 0px 5px;\n}\n\n.toggle li:nth-child(2){\n    border-radius: 0px 5px 5px 0px;\n}\n\n.toggle li.active{\n    background: #818181;\n    border: 1px solid #818181;\n    color: #fff;\n}\n\n.content-competitors--board{\n    margin-left: inherit;\n    margin-right: inherit;\n}\n\n.competitor-container{\n    border-bottom: 1px solid grey;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.competitor-container p{\n    margin-right: 10px;\n    width: 150px;\n    color: #444444;\n    font-weight: 400;   \n}\n\n.score-container{\n    width: 100%;\n}\n\n.score-container .score-bar{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    background: linear-gradient(90deg, rgb(124, 163, 248) 10%, rgba(46,136,237,1) 34%);\n    height: 30px;\n    border-bottom-right-radius: 6px;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\n.score-container .score-bar:hover{\n    cursor: pointer;\n}\n\n.score-container .score-bar p{\n    margin: 0 5px 0 0;\n    width: fit-content;\n    color: white;\n    font-weight: bold;\n    font-family: titling-gothic-fb, sans-serif;\n}\n\n.content-main--title.slide-in[data-time=\"0.9s\"]{\n    animation: slide-in-bottom 0.9s ease both;\n    -webkit-animation: slide-in-bottom 0.9s ease both;\n}\n\n.session.slide-in[data-time=\"1.5s\"]{\n    animation: slide-in-bottom 1.5s ease both;\n    -webkit-animation: slide-in-bottom 1.5s ease both;\n}\n\n\n@-webkit-keyframes slide-in-bottom{\n    0%{\n        -webkit-transform: translateY(1000px);\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n    100%{\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@keyframes slide-in-bottom {\n    0% {\n      -webkit-transform: translateY(1000px);\n              transform: translateY(1000px);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      opacity: 1;\n    }\n  }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");



window.addEventListener('load', _utils_render__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/templates/Competitor.js":
/*!*************************************!*\
  !*** ./src/templates/Competitor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getCompetitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getCompetitors */ "./src/utils/getCompetitors.js");
/* harmony import */ var _utils_getWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getWidth */ "./src/utils/getWidth.js");



const Competitor = async(level)=>{
    const competitors = await Object(_utils_getCompetitors__WEBPACK_IMPORTED_MODULE_0__["default"])(level);
    var view = "";
    competitors.forEach(competitor => {
        view += `
        <div class="content-competitors--board">
            <div class="competitor-container">
                <p>${competitor.Name}</p>
                <div class="score-container">
                    <div class="score-bar" style="width: 60%;" aria-describedby="tooltip">
                    <!--<div class="score-bar" style="width: ${Object(_utils_getWidth__WEBPACK_IMPORTED_MODULE_1__["default"])(competitor.points)};">-->
                        <p>${competitor.Account.Name}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    return view;
};

/* harmony default export */ __webpack_exports__["default"] = (Competitor);

/***/ }),

/***/ "./src/utils/getCompetitors.js":
/*!*************************************!*\
  !*** ./src/utils/getCompetitors.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/utils/getData.js");


const getCompetitors = async (level)=>{
    const data = await Object(_getData__WEBPACK_IMPORTED_MODULE_0__["default"])();
    let competitors;

    switch(level){
        case 'beginner':
            competitors = data.filter(competitor => competitor.Account.Name == 'sForce');
            break;
        case 'intermediate':
            competitors = data.filter(competitor => competitor.Account.Name == 'GenePoint');
            break;
    }

    return competitors;
}

/* harmony default export */ __webpack_exports__["default"] = (getCompetitors);

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getData = async()=>{
    try{
        
        const response = await fetch('/getData');
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error('Error en fetch ' + err);
    }
};

/* harmony default export */ __webpack_exports__["default"] = (getData); 

/***/ }),

/***/ "./src/utils/getWidth.js":
/*!*******************************!*\
  !*** ./src/utils/getWidth.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const getWidth = points => points/200;

/* harmony default export */ __webpack_exports__["default"] = (getWidth);

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_Competitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Competitor */ "./src/templates/Competitor.js");


const render = async()=>{
    const beginner = document.getElementById('beginner');
    const intermediate = document.getElementById('intermediate');

    beginner.innerHTML = await Object(_templates_Competitor__WEBPACK_IMPORTED_MODULE_0__["default"])('beginner');
    intermediate.innerHTML = await Object(_templates_Competitor__WEBPACK_IMPORTED_MODULE_0__["default"])('intermediate');
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map