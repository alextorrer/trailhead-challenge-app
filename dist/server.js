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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\nconst app = express();\nconst PROJ_DIR = __dirname;\nconst HTML_FILE = path.join(PROJ_DIR, '/index.html');\napp.use(express.static(PROJ_DIR));\nconst SF = {\n  LoginUrl: 'https://login.salesforce.com/services/oauth2/token',\n  Username: 'alextorrer@myorg.com',\n  Password: 'atr2901alex5QCHfQRoTjpcyPE5bGI1qWQCb',\n  ClientId: '3MVG95jctIhbyCppbKNigsWB_A07g0JZpPdOm9SzH2vJQOfOAWqzjKVGyvfYoWj5LfASsLH4Ddnee9E7O2tfg',\n  ClientSecret: 'E146D7E91E42200DDB2B313B4DD4F5F9D7B498A92E980B0292CE183209E1F8F7'\n};\nconst options = {\n  url: `${SF.LoginUrl}?username=${SF.Username}&password=${encodeURIComponent(SF.Password)}&client_id=${encodeURIComponent(SF.ClientId)}&client_secret=${encodeURIComponent(SF.ClientSecret)}&grant_type=password`,\n  headers: {},\n  method: 'POST'\n};\nconst dataOptions = {\n  url: '/services/apexrest/contacts/trailheadchallenge/',\n  method: 'GET'\n};\napp.get('/getData', (req, res) => {\n  axios.post(options.url).then(function (resp) {\n    //console.log(resp.data.access_token);\n    axios.get(resp.data.instance_url + dataOptions.url, {\n      headers: {\n        'Authorization': `Bearer ${resp.data.access_token}`\n      }\n    }).then(function (response) {\n      console.log(response.data);\n      res.send(response.data); //res.json(response.data);\n    }).catch(function (err) {\n      console.error(err);\n    });\n  }).catch(function (err) {\n    console.error(err);\n  });\n});\napp.use(express.static(PROJ_DIR));\napp.listen(8080);\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });