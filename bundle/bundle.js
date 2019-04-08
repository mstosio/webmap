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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/mymap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/mymap.js":
/*!****************************!*\
  !*** ./assets/js/mymap.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\assets\\\\js\\\\mymap.js: Identifier 'kebabGeoJSON' has already been declared (281:4)\\n\\n\\u001b[0m \\u001b[90m 279 | \\u001b[39m\\t\\u001b[33m.\\u001b[39m\\u001b[36mcatch\\u001b[39m(error \\u001b[33m=>\\u001b[39m console\\u001b[33m.\\u001b[39mlog(error\\u001b[33m.\\u001b[39mmessage))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 280 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 281 | \\u001b[39mlet kebabGeoJSON \\u001b[33m=\\u001b[39m \\u001b[36mfalse\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 282 | \\u001b[39mfetch(\\u001b[32m'/bike.json'\\u001b[39m\\u001b[33m,\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 283 | \\u001b[39m\\tmethod\\u001b[33m:\\u001b[39m \\u001b[32m'GET'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 284 | \\u001b[39m})\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3851:17)\\n    at ScopeHandler.declareName (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8811:12)\\n    at Parser.checkLVal (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5535:22)\\n    at Parser.parseVarId (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7969:10)\\n    at Parser.parseVar (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7940:12)\\n    at Parser.parseVarStatement (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7762:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7358:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7291:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7868:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7855:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7220:10)\\n    at Parser.parse (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8863:17)\\n    at parse (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11135:38)\\n    at parser (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\Michal\\\\Desktop\\\\PERSONAL PROJECTS\\\\webmap\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./assets/js/mymap.js?");

/***/ })

/******/ });