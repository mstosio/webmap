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

/***/ "./assets/js/helpers.js":
/*!******************************!*\
  !*** ./assets/js/helpers.js ***!
  \******************************/
/*! exports provided: onPageLoad, displayOverlay, displayOverlayLayer, changeArrowImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onPageLoad\", function() { return onPageLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayOverlay\", function() { return displayOverlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayOverlayLayer\", function() { return displayOverlayLayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeArrowImage\", function() { return changeArrowImage; });\nfunction onPageLoad() {\n  var kebs = document.getElementsByClassName(\"overlay__marker-checkbox\");\n  var checkboxes = document.querySelectorAll(\"checkbox\");\n\n  for (var i = 0; i < kebs.length; i++) {\n    kebs[i].checked = true;\n  }\n}\nvar toggleOverlay = document.getElementById('slide-in__toggle-button');\ntoggleOverlay.addEventListener('click', displayOverlay);\nvar overlay = document.getElementById('slide-in__slider');\nvar arrowImage = document.getElementById('slide-in__toggle--arrow');\nfunction displayOverlay() {\n  overlay.classList.toggle(\"visible\");\n  changeArrowImage();\n}\nfunction displayOverlayLayer() {\n  overlay.classList.add(\"visible\");\n  changeArrowImage();\n}\nfunction changeArrowImage() {\n  if (overlay.classList.contains(\"visible\")) {\n    arrowImage.src = \"assets/mapicons/left-arrow.png\";\n  } else {\n    arrowImage.src = \"assets/mapicons/right-arrow.png\";\n  }\n}\n;\n\n//# sourceURL=webpack:///./assets/js/helpers.js?");

/***/ }),

/***/ "./assets/js/mapOverlay.js":
/*!*********************************!*\
  !*** ./assets/js/mapOverlay.js ***!
  \*********************************/
/*! exports provided: mymap, addMapView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mymap\", function() { return mymap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMapView\", function() { return addMapView; });\nvar mymap = L.map('search-map').setView([52.167930660117555, 22.271411418914795], 15);\nvar addMapView = function addMapView() {\n  var firstOverlay = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {\n    maxZoom: 18,\n    attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, ' + '<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, ' + 'Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n    id: 'mapbox.streets'\n  });\n  var secondOverlay = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {\n    maxZoom: 18,\n    attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n  });\n  var thirdOverlay = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    maxZoom: 19,\n    attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n  });\n  var fourthOverlay = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {\n    maxZoom: 18,\n    attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n  });\n  firstOverlay.addTo(mymap);\n  var baseLayers = {\n    \"Domyślne\": firstOverlay,\n    \"Black and White\": secondOverlay,\n    \"Open Street Map\": thirdOverlay,\n    \"Open Street Map 2\": fourthOverlay\n  };\n  L.control.layers(baseLayers).addTo(mymap);\n};\n\n//# sourceURL=webpack:///./assets/js/mapOverlay.js?");

/***/ }),

/***/ "./assets/js/markers.js":
/*!******************************!*\
  !*** ./assets/js/markers.js ***!
  \******************************/
/*! exports provided: gooportalIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gooportalIcon\", function() { return gooportalIcon; });\nvar gooportalIcon = L.Icon.extend({\n  options: {\n    iconSize: [32, 37],\n    shadowSize: [90, 64],\n    iconAnchor: [15, 50],\n    shadowAnchor: [4, 62],\n    popupAnchor: [-3, -76]\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/markers.js?");

/***/ }),

/***/ "./assets/js/mymap.js":
/*!****************************!*\
  !*** ./assets/js/mymap.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markers */ \"./assets/js/markers.js\");\n/* harmony import */ var _mapOverlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapOverlay */ \"./assets/js/mapOverlay.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./assets/js/helpers.js\");\n\n\n\n\nvar geoportalContoller = function geoportalContoller() {\n  Object(_mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"addMapView\"])();\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"onPageLoad\"])();\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"displayOverlay\"])();\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"displayOverlayLayer\"])();\n};\n\ngeoportalContoller(); //Funkcja, sprawia, że wszystkie checkboxy są zaznaczone podczas załadowania strony\n//import GeoJSON\n\nvar kebabGeoJSON = false;\nfetch('/kebabs.json', {\n  method: 'GET'\n}).then(function (response) {\n  return response.json();\n}).then(function (json) {\n  var data = json.features;\n  var geojson = L.geoJSON(json, {\n    style: function style(feature) {\n      return {\n        color: '#000'\n      };\n    },\n    pointToLayer: function pointToLayer(geoJsonPoint, latlng) {\n      //Funckja, która nadaje odpowiednie ikony \n      var restaurantProperties = geoJsonPoint.properties.type;\n      var typeProperties = geoJsonPoint.properties.type;\n\n      if (restaurantProperties === 'kebab') {\n        var kebabs = L.marker(latlng, {\n          icon: kebabIcon\n        });\n        return kebabs;\n      } else if (restaurantProperties === 'pizza') {\n        var pizza = L.marker(latlng, {\n          icon: pizzaIcon\n        });\n        return pizza;\n      } else if (restaurantProperties === 'sushi') {\n        return L.marker(latlng, {\n          icon: sushiIcon\n        });\n      } else if (restaurantProperties === 'bar') {\n        return L.marker(latlng, {\n          icon: barIcon\n        });\n      } else if (restaurantProperties === 'restauracja') {\n        return L.marker(latlng, {\n          icon: restaurantIcon\n        });\n      } else if (typeProperties === 'kosciol') {\n        return L.marker(latlng, {\n          icon: churchIcon\n        });\n      } else if (typeProperties === 'pomnik') {\n        return L.marker(latlng, {\n          icon: monumentIcon\n        });\n      } else if (typeProperties === 'hotel') {\n        return L.marker(latlng, {\n          icon: hotelIcon\n        });\n      } else if (typeProperties === 'hostel') {\n        return L.marker(latlng, {\n          icon: hostelIcon\n        });\n      }\n    },\n    onEachFeature: function onEachFeature(feature, layer) {\n      // toggleIcons\n      var checkbox = document.querySelectorAll(\".overlay__marker-checkbox\");\n      checkbox.forEach(function (item) {\n        item.addEventListener(\"click\", function () {\n          var images = document.querySelectorAll(\"img[src=\\\"assets/mapicons/\".concat(item.dataset.type, \".png\\\"]\"));\n          images.forEach(function (image) {\n            image.classList.toggle(\"display\");\n          });\n        });\n      }); //Popup\n\n      if (feature.geometry.type === 'Point') {\n        layer.bindPopup(feature.properties.name + \"<br>Tel: \" + feature.properties.telefon + \"<br>ul. \" + feature.properties.adres);\n      }\n\n      ; //Po kliknieciu funkcja dodaje informacje o obiekcie i wyswietla je w zaawansowanym menu\n\n      layer.addEventListener('click', function () {\n        var overlay = document.getElementById(\"slide-in__box\");\n        var imageBox = document.getElementById(\"slide-in__image-box\");\n        var name = layer.feature.properties.name;\n        var telephone = layer.feature.properties.telefon;\n        var adres = layer.feature.properties.adres;\n        var img = '<img src=\"' + layer.feature.properties.img + '\" />';\n\n        if (layer.feature.properties.type || layer.feature.properties.type === 'hotel' || layer.feature.properties.type === 'hostel') {\n          overlay.innerHTML = name + \"<br><br>\" + '<img src=\\'assets/mapicons/phone-receiver.png\\'>' + \"  \" + telephone + \"<br><br>\" + '<img src=\\'assets/mapicons/location.png\\'>' + \"  \" + adres + \"<br>\";\n          imageBox.innerHTML = img;\n        } else if (layer.feature.properties.type === 'kosciol' || layer.feature.properties.type === 'pomnik') {\n          overlay.innerHTML = name + \"<br><br>\" + '<img src=\\'assets/mapicons/location.png\\'>' + \"  \" + adres + \"<br>\";\n          imageBox.innerHTML = img;\n        }\n\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"displayOverlayLayer\"])();\n      }); //SEARCH\n\n      searchInput.addEventListener('keyup', function (e) {\n        var userInput = e.target.value;\n        geojson.eachLayer(function (layer) {\n          if (layer.feature.properties.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {\n            layer.addTo(_mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"mymap\"]);\n          } else {\n            _mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"mymap\"].removeLayer(layer);\n          }\n        });\n      });\n    }\n  }).addTo(_mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"mymap\"]);\n})[\"catch\"](function (error) {\n  return console.log(error.message);\n});\nvar searchInput = document.getElementById('slide-in__search-input'); //Klasa ikony\n// poszczegolny ikony\n\nvar kebabIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/kebab.png'\n});\nvar pizzaIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/pizza.png'\n});\nvar sushiIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/sushi.png'\n});\nvar barIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/bar.png'\n});\nvar restaurantIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/restaurant.png'\n});\nvar churchIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/kosciol.png'\n});\nvar monumentIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/monument.png'\n});\nvar hotelIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/hotel.png'\n});\nvar hostelIcon = new _markers__WEBPACK_IMPORTED_MODULE_0__[\"gooportalIcon\"]({\n  iconUrl: 'assets/mapicons/hostel.png'\n}); //coordinates \n// mymap.on('moveend'), function(e){\n// \t$('#current_center').html(mymap.getCenter().lat+','+mymap.getCenter().lng);\n// } \n\n_mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"mymap\"].on('moveend', function (e) {\n  var inputbox = document.getElementById(\"current_center\");\n  var lat = _mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"mymap\"].getCenter().lat.toFixed(7);\n  var lng = _mapOverlay__WEBPACK_IMPORTED_MODULE_1__[\"mymap\"].getCenter().lng.toFixed(7);\n  inputbox.value = lat + \",\" + lng;\n});\n\n//# sourceURL=webpack:///./assets/js/mymap.js?");

/***/ })

/******/ });