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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/styles.css
var styles = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/getData.js
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

/* harmony default export */ var utils_getData = (getData); 
// CONCATENATED MODULE: ./src/utils/getCompetitors.js


const getCompetitors = async (level)=>{
    const data = await utils_getData();
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

/* harmony default export */ var utils_getCompetitors = (getCompetitors);
// CONCATENATED MODULE: ./src/utils/getWidth.js

const getWidth = points => points/200;

/* harmony default export */ var utils_getWidth = (getWidth);
// CONCATENATED MODULE: ./src/templates/Competitor.js



const Competitor = async(level)=>{
    const competitors = await utils_getCompetitors(level);
    var view = "";
    competitors.forEach(competitor => {
        view += `
        <div class="content-competitors--board">
            <div class="competitor-container">
                <p>${competitor.Name}</p>
                <div class="score-container">
                    <div class="score-bar" style="width: 60%;" data-tippy-content="Tooltip">
                    <!--<div class="score-bar" style="width: ${utils_getWidth(competitor.points)};">-->
                        <p>${competitor.Account.Name}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    return view;
};

/* harmony default export */ var templates_Competitor = (Competitor);
// CONCATENATED MODULE: ./src/utils/render.js


const render = async()=>{
    const beginner = document.getElementById('beginner');
    const intermediate = document.getElementById('intermediate');

    beginner.innerHTML = await templates_Competitor('beginner');
    intermediate.innerHTML = await templates_Competitor('intermediate');
};

/* harmony default export */ var utils_render = (render);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(1);

// CONCATENATED MODULE: ./src/index.js





window.addEventListener('load', utils_render);

/* tippy('[data-tippy-content]', {
    trigger: 'click'
}); */

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map