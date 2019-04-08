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

eval("//Funkcja, sprawia, że wszystkie checkboxy są zaznaczone podczas załadowania strony\nalert(\"ayyesds\");\nwindow.onload = onPageLoad();\n\nfunction onPageLoad() {\n  var kebs = document.getElementsByClassName(\"overlay__marker-checkbox\");\n  var checkboxes = document.querySelectorAll(\"checkbox\");\n\n  for (var i = 0; i < kebs.length; i++) {\n    kebs[i].checked = true;\n  }\n} // MAP INTERACTIVITY\n\n\nvar mymap = L.map('mymap').setView([52.167930660117555, 22.271411418914795], 15);\nvar firstOverlay = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {\n  maxZoom: 18,\n  attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, ' + '<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, ' + 'Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n  id: 'mapbox.streets'\n});\nvar secondOverlay = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {\n  maxZoom: 18,\n  attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n});\nvar thirdOverlay = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n  maxZoom: 19,\n  attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n});\nvar fourthOverlay = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {\n  maxZoom: 18,\n  attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n});\nfirstOverlay.addTo(mymap);\nvar baseLayers = {\n  \"Domyślne\": firstOverlay,\n  \"Black and White\": secondOverlay,\n  \"Open Street Map\": thirdOverlay,\n  \"Open Street Map 2\": fourthOverlay\n};\nL.control.layers(baseLayers).addTo(mymap); //import GeoJSON\n\nvar kebabGeoJSON = false;\nfetch('/kebabs.json', {\n  method: 'GET'\n}).then(function (response) {\n  return response.json();\n}).then(function (json) {\n  var data = json.features;\n  var geojson = L.geoJSON(json, {\n    style: function style(feature) {\n      return {\n        color: '#000'\n      };\n    },\n    pointToLayer: function pointToLayer(geoJsonPoint, latlng) {\n      //Funckja, która nadaje odpowiednie ikony \n      var restaurantProperties = geoJsonPoint.properties.restaurant;\n      var typeProperties = geoJsonPoint.properties.type;\n\n      if (restaurantProperties === 'kebab') {\n        var kebabs = L.marker(latlng, {\n          icon: kebabIcon\n        });\n        return kebabs;\n      } else if (restaurantProperties === 'pizza') {\n        var pizza = L.marker(latlng, {\n          icon: pizzaIcon\n        });\n        return pizza;\n      } else if (restaurantProperties === 'sushi') {\n        return L.marker(latlng, {\n          icon: sushiIcon\n        });\n      } else if (restaurantProperties === 'bar') {\n        return L.marker(latlng, {\n          icon: barIcon\n        });\n      } else if (restaurantProperties === 'restauracja') {\n        return L.marker(latlng, {\n          icon: restaurantIcon\n        });\n      } else if (typeProperties === 'kosciol') {\n        return L.marker(latlng, {\n          icon: churchIcon\n        });\n      } else if (typeProperties === 'pomnik') {\n        return L.marker(latlng, {\n          icon: monumentIcon\n        });\n      } else if (typeProperties === 'hotel') {\n        return L.marker(latlng, {\n          icon: hotelIcon\n        });\n      } else if (typeProperties === 'hostel') {\n        return L.marker(latlng, {\n          icon: hostelIcon\n        });\n      }\n    },\n    onEachFeature: function onEachFeature(feature, layer) {\n      var checkboxKebab = document.getElementById(\"kebabcheckbox\");\n      var checkboxPizza = document.getElementById(\"pizzacheckbox\");\n      var checkboxSushi = document.getElementById(\"sushicheckbox\");\n      var checkboxBar = document.getElementById(\"barscheckbox\");\n      var checkboxRestaurant = document.getElementById(\"restaurantcheckbox\");\n      var checkboxChurch = document.getElementById(\"churchcheckbox\");\n      var checkboxMonument = document.getElementById(\"monumentcheckbox\");\n      var checkboxHotel = document.getElementById(\"hotelcheckbox\");\n      var checkboxHostel = document.getElementById(\"hostelcheckbox\");\n      checkboxKebab.addEventListener(\"click\", toggleKebab);\n      checkboxPizza.addEventListener(\"click\", togglePizza);\n      checkboxSushi.addEventListener(\"click\", toggleSushi);\n      checkboxBar.addEventListener(\"click\", toggleBar);\n      checkboxRestaurant.addEventListener(\"click\", toggleRestaurant);\n      checkboxChurch.addEventListener(\"click\", toggleChurch);\n      checkboxMonument.addEventListener(\"click\", toggleMonument);\n      checkboxHotel.addEventListener(\"click\", toggleHotel);\n      checkboxHostel.addEventListener(\"click\", toggleHostel); //Popup\n\n      if (feature.geometry.type === 'Point') {\n        layer.bindPopup(feature.properties.name + \"<br>Tel: \" + feature.properties.telefon + \"<br>ul. \" + feature.properties.adres);\n      }\n\n      ; //Po kliknieciu funkcja dodaje informacje o obiekcie i wyswietla je w zaawansowanym menu\n\n      layer.addEventListener('click', function () {\n        var overlay = document.getElementById(\"slide-in__box\");\n        var imageBox = document.getElementById(\"slide-in__image-box\");\n        var name = layer.feature.properties.name;\n        var telephone = layer.feature.properties.telefon;\n        var adres = layer.feature.properties.adres;\n        var img = '<img src=\"' + layer.feature.properties.img + '\" />';\n\n        if (layer.feature.properties.restaurant || layer.feature.properties.type === 'hotel' || layer.feature.properties.type === 'hostel') {\n          overlay.innerHTML = name + \"<br><br>\" + '<img src=\\'assets/mapicons/phone-receiver.png\\'>' + \"  \" + telephone + \"<br><br>\" + '<img src=\\'assets/mapicons/location.png\\'>' + \"  \" + adres + \"<br>\";\n          imageBox.innerHTML = img;\n        } else if (layer.feature.properties.type === 'kosciol' || layer.feature.properties.type === 'pomnik') {\n          overlay.innerHTML = name + \"<br><br>\" + '<img src=\\'assets/mapicons/location.png\\'>' + \"  \" + adres + \"<br>\";\n          imageBox.innerHTML = img;\n        }\n\n        displayOverlayLayer();\n      }); //Poszczegolne funkcje, które pozwalają na włączanie oraz wyłączanie widoku markerów\n\n      function toggleKebab() {\n        var kebab = feature.properties.restaurant === 'kebab';\n        var kebabImg = document.querySelectorAll('img[src=\"assets/mapicons/kebab.png\"]');\n\n        if (kebab) {\n          kebabImg.forEach(function (keba) {\n            keba.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function togglePizza() {\n        var pizza = feature.properties.restaurant === 'pizza';\n        var pizzaImg = document.querySelectorAll('img[src=\"assets/mapicons/pizza.png\"]');\n\n        if (pizza) {\n          pizzaImg.forEach(function (pizzeria) {\n            pizzeria.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleSushi() {\n        var sushi = feature.properties.restaurant === 'sushi';\n        var sushiImg = document.querySelectorAll('img[src=\"assets/mapicons/sushi.png\"]');\n\n        if (sushi) {\n          sushiImg.forEach(function (sushipart) {\n            sushipart.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleBar() {\n        var bar = feature.properties.restaurant === 'bar';\n        var barImg = document.querySelectorAll('img[src=\"assets/mapicons/bar.png\"]');\n\n        if (bar) {\n          barImg.forEach(function (ba) {\n            ba.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleRestaurant() {\n        var restaurant = feature.properties.restaurant === 'restauracja';\n        var restaurantImg = document.querySelectorAll('img[src=\"assets/mapicons/restaurant.png\"]');\n\n        if (restaurant) {\n          restaurantImg.forEach(function (rest) {\n            rest.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleChurch() {\n        var church = feature.properties.type === 'kosciol';\n        var churchImg = document.querySelectorAll('img[src=\"assets/mapicons/kosciol.png\"]');\n\n        if (church) {\n          churchImg.forEach(function (kosc) {\n            kosc.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleMonument() {\n        var monument = feature.properties.type === 'kosciol';\n        var monumentImg = document.querySelectorAll('img[src=\"assets/mapicons/monument.png\"]');\n\n        if (monument) {\n          monumentImg.forEach(function (monu) {\n            monu.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleHotel() {\n        var hotel = feature.properties.type === 'hotel';\n        var hotelImg = document.querySelectorAll('img[src=\"assets/mapicons/hotel.png\"]');\n\n        if (hotel) {\n          hotelImg.forEach(function (hote) {\n            hote.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ;\n\n      function toggleHostel() {\n        var hostel = feature.properties.type === 'hostel';\n        var hostelImg = document.querySelectorAll('img[src=\"assets/mapicons/hostel.png\"]');\n\n        if (hostel) {\n          hostelImg.forEach(function (hot) {\n            hot.classList.toggle(\"display\");\n          });\n        }\n      }\n\n      ; //WYSZUKIWARKA\n\n      searchInput.addEventListener('keyup', function (e) {\n        var userInput = e.target.value;\n        geojson.eachLayer(function (layer) {\n          if (layer.feature.properties.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {\n            layer.addTo(mymap);\n          } else {\n            mymap.removeLayer(layer);\n          }\n        });\n      });\n    }\n  }).addTo(mymap);\n})[\"catch\"](function (error) {\n  return console.log(error.message);\n}); // let kebabGeoJSON = false;\n// fetch('/bike.json', {\n// \tmethod: 'GET'\n// })\n// \t.then(response => response.json())\n// \t.then(json => {\n// \t\tlet geojson = L.geoJSON(json, {\n// \t\t\t// if(feature.properties.name === 'trasa zalew'){\n// \t\t\t// }\n// \t\t\tstyle: function (feature) {\n// \t\t\t\treturn {\n// \t\t\t\t\tstroke: true,\n// \t\t\t\t\tcolor: \"red\",\n// \t\t\t\t\tweight: 3\n// \t\t\t\t}\n// \t\t\t},\n// \t\t\tonEachFeature: function (feature, layer) {\n// \t\t\t\tif (feature.properties.name = \"trasa zalew\") {\n// \t\t\t\t\tlayer.setStyle({\n// \t\t\t\t\t\t'color': feature.properties.color,\n// \t\t\t\t\t});\n// \t\t\t\t}\n// \t\t\t\tif (feature.geometry.type === 'LineString') {\n// \t\t\t\t\tlayer.bindPopup(\n// \t\t\t\t\t\tfeature.properties.name + \"<br>Długość: \" +\n// \t\t\t\t\t\tfeature.properties.mile\n// \t\t\t\t\t);\n// \t\t\t\t};\n// \t\t\t\tconst bikeCheckbox = document.getElementById('biketrackscheckbox');\n// \t\t\t\tbikeCheckbox.addEventListener('click', function (layer) {\n// \t\t\t\t\tconst bikeCheckbox = document.getElementById('biketrackscheckbox');\n// \t\t\t\t\tgeojson.eachLayer(function (layer) {\n// \t\t\t\t\t\tif (mymap.hasLayer(layer)) {\n// \t\t\t\t\t\t\tmymap.removeLayer(layer);\n// \t\t\t\t\t\t} else {\n// \t\t\t\t\t\t\tlayer.addTo(mymap);\n// \t\t\t\t\t\t}\n// \t\t\t\t\t})\n// \t\t\t\t});\n// \t\t\t},\n// \t\t}).addTo(mymap);\n// \t})\n// \t.catch(error => console.log(error.message));\n\nvar searchInput = document.getElementById('slide-in__search-input'); //Klasa ikony\n\nvar gooportalIcon = L.Icon.extend({\n  options: {\n    iconSize: [32, 37],\n    shadowSize: [90, 64],\n    iconAnchor: [15, 50],\n    shadowAnchor: [4, 62],\n    popupAnchor: [-3, -76]\n  }\n}); // poszczegolny ikony\n\nvar kebabIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/kebab.png'\n});\nvar pizzaIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/pizza.png'\n});\nvar sushiIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/sushi.png'\n});\nvar barIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/bar.png'\n});\nvar restaurantIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/restaurant.png'\n});\nvar churchIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/kosciol.png'\n});\nvar monumentIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/monument.png'\n});\nvar hotelIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/hotel.png'\n});\nvar hostelIcon = new gooportalIcon({\n  iconUrl: 'assets/mapicons/hostel.png'\n}); //coordinates \n// mymap.on('moveend'), function(e){\n// \t$('#current_center').html(mymap.getCenter().lat+','+mymap.getCenter().lng);\n// } \n\nmymap.on('moveend', function (e) {\n  var inputbox = document.getElementById(\"current_center\");\n  var lat = mymap.getCenter().lat.toFixed(7);\n  var lng = mymap.getCenter().lng.toFixed(7);\n  inputbox.value = lat + \",\" + lng;\n}); // overlay toggle\n\nvar toggleOverlay = document.getElementById('slide-in__toggle-button');\ntoggleOverlay.addEventListener('click', displayOverlay);\nvar overlay = document.getElementById('slide-in__slider');\nvar arrowImage = document.getElementById('slide-in__toggle--arrow');\n\nfunction displayOverlay() {\n  overlay.classList.toggle(\"visible\");\n  changeArrowImage();\n}\n\nfunction displayOverlayLayer() {\n  overlay.classList.add(\"visible\");\n  changeArrowImage();\n}\n\nfunction changeArrowImage() {\n  if (overlay.classList.contains(\"visible\")) {\n    arrowImage.src = \"assets/mapicons/left-arrow.png\";\n  } else {\n    arrowImage.src = \"assets/mapicons/right-arrow.png\";\n  }\n}\n\n;\n\n//# sourceURL=webpack:///./assets/js/mymap.js?");

/***/ })

/******/ });