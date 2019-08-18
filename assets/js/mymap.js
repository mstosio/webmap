import {  kebabIcon, pizzaIcon, sushiIcon, barIcon, restaurantIcon, churchIcon, monumentIcon, hotelIcon,  hostelIcon } from './markers';
import { addMapView, mymap } from './mapOverlay';
import { onPageLoad, displayOverlay, displayOverlayLayer } from './helpers';
import axios from 'axios';



(function geoportalContoller(){
	addMapView();
	onPageLoad();
	displayOverlay();
	displayOverlayLayer()
})();


let kebabGeoJSON = false;
fetch('/webmap/kebabs.json', {
	method: 'GET'
})
	.then(response => response.json())
	.then(json => {
		
		const data = json.features;
		
		let geojson = L.geoJSON(json, {
			style: function (feature) {
				return {
					color: '#000',

				}
			},
			pointToLayer: function (geoJsonPoint, latlng) {
				//Funckja, która nadaje odpowiednie ikony 

				const restaurantProperties = geoJsonPoint.properties.type;
				const typeProperties = geoJsonPoint.properties.type;

				if (restaurantProperties === 'kebab') {
					const kebabs = L.marker(latlng, {
						icon: kebabIcon
					});
					return kebabs;
				} else if (restaurantProperties === 'pizza') {
					const pizza = L.marker(latlng, {
						icon: pizzaIcon
					});
					return pizza;
				} else if (restaurantProperties === 'sushi') {
					return L.marker(latlng, {
						icon: sushiIcon
					});
				} else if (restaurantProperties === 'bar') {
					return L.marker(latlng, {
						icon: barIcon
					});
				} else if (restaurantProperties === 'restauracja') {
					return L.marker(latlng, {
						icon: restaurantIcon
					});
				} else if (typeProperties === 'kosciol') {
					return L.marker(latlng, {
						icon: churchIcon
					});
				} else if (typeProperties === 'pomnik') {
					return L.marker(latlng, {
						icon: monumentIcon
					});
				} else if (typeProperties === 'hotel') {
					return L.marker(latlng, {
						icon: hotelIcon
					});
				} else if (typeProperties === 'hostel') {
					return L.marker(latlng, {
						icon: hostelIcon
					});
				}
			},
			onEachFeature: function (feature, layer) {


				// toggleIcons
				const checkbox = document.querySelectorAll(".overlay__marker-checkbox");

				checkbox.forEach(item => {
					item.addEventListener("click", function(){
						const images = document.querySelectorAll(`img[src="assets/mapicons/${item.dataset.type}.png"]`);
						images.forEach(image => {
							image.classList.toggle("display");
						})
					});
				});

				//Popup
				if (feature.geometry.type === 'Point') {
					layer.bindPopup(
						feature.properties.name + "<br>Tel: " +
						feature.properties.telefon + "<br>ul. " +
						feature.properties.adres
					);
				};


				//Po kliknieciu funkcja dodaje informacje o obiekcie i wyswietla je w zaawansowanym menu
				layer.addEventListener('click', function () {
					const overlay = document.getElementById("slide-in__box");
					const imageBox = document.getElementById("slide-in__image-box");
					const name = layer.feature.properties.name;
					const telephone = layer.feature.properties.telefon;
					const adres = layer.feature.properties.adres;
					const img = '<img src="' + layer.feature.properties.img + '" />';

					if (layer.feature.properties.type || layer.feature.properties.type === 'hotel' || layer.feature.properties.type === 'hostel') {
						overlay.innerHTML = name + "<br><br>" + '<img src=\'assets/mapicons/phone-receiver.png\'>' + "  " + telephone + "<br><br>" + '<img src=\'assets/mapicons/location.png\'>' + "  " + adres + "<br>";
						imageBox.innerHTML = img;
					} else if (layer.feature.properties.type === 'kosciol' || layer.feature.properties.type === 'pomnik') {
						overlay.innerHTML = name + "<br><br>" + '<img src=\'assets/mapicons/location.png\'>' + "  " + adres + "<br>";
						imageBox.innerHTML = img;
					}

					displayOverlayLayer();
				});

				const searchInput = document.getElementById('slide-in__search-input');

				//SEARCH
				searchInput.addEventListener('keyup', function (e) {
					const userInput = e.target.value;
					geojson.eachLayer(function (layer) {
						if (layer.feature.properties.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {
							layer.addTo(mymap);
						} else {
							mymap.removeLayer(layer);
						}
					})
				});
			},

		}).addTo(mymap);
	})
	.catch(error => console.log(error.message));

//Klasa ikony
mymap.on('moveend', function (e) {
	const inputbox = document.getElementById("current_center");
	const lat = mymap.getCenter().lat.toFixed(7);
	const lng = mymap.getCenter().lng.toFixed(7);
	inputbox.value = lat + "," + lng;
})


