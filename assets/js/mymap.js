import { gooportalIcon } from './markers';
import { addMapView, mymap } from './mapOverlay';
import { onPageLoad, displayOverlay, displayOverlayLayer } from './helpers';


const geoportalContoller = () => {
	addMapView();
	onPageLoad();
	displayOverlay();
	displayOverlayLayer()
}

geoportalContoller();




//Funkcja, sprawia, że wszystkie checkboxy są zaznaczone podczas załadowania strony





//import GeoJSON

let kebabGeoJSON = false;
fetch('/kebabs.json', {
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

				const checkboxKebab = document.getElementById("kebabcheckbox");
				const checkboxPizza = document.getElementById("pizzacheckbox");
				const checkboxSushi = document.getElementById("sushicheckbox");
				const checkboxBar = document.getElementById("barscheckbox");
				const checkboxRestaurant = document.getElementById("restaurantcheckbox");
				const checkboxChurch = document.getElementById("churchcheckbox");
				const checkboxMonument = document.getElementById("monumentcheckbox");
				const checkboxHotel = document.getElementById("hotelcheckbox");
				const checkboxHostel = document.getElementById("hostelcheckbox");

				checkboxKebab.addEventListener("click", toggleKebab);
				checkboxPizza.addEventListener("click", togglePizza);
				checkboxSushi.addEventListener("click", toggleSushi);
				checkboxBar.addEventListener("click", toggleBar);
				checkboxRestaurant.addEventListener("click", toggleRestaurant);
				checkboxChurch.addEventListener("click", toggleChurch);
				checkboxMonument.addEventListener("click", toggleMonument);
				checkboxHotel.addEventListener("click", toggleHotel);
				checkboxHostel.addEventListener("click", toggleHostel);

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

				//Poszczegolne funkcje, które pozwalają na włączanie oraz wyłączanie widoku markerów

				function toggleKebab() {
					const kebab = feature.properties.type === 'kebab';
					const kebabImg = document.querySelectorAll('img[src="assets/mapicons/kebab.png"]');
					if (kebab) {
						kebabImg.forEach(function (keba) {
							keba.classList.toggle("display");
						})
					}
				};

				function togglePizza() {
					const pizza = feature.properties.type === 'pizza';
					const pizzaImg = document.querySelectorAll('img[src="assets/mapicons/pizza.png"]');
					if (pizza) {
						pizzaImg.forEach(function (pizzeria) {
							pizzeria.classList.toggle("display");
						})
					}
				};

				function toggleSushi() {
					const sushi = feature.properties.type === 'sushi';
					const sushiImg = document.querySelectorAll('img[src="assets/mapicons/sushi.png"]');
					if (sushi) {
						sushiImg.forEach(function (sushipart) {
							sushipart.classList.toggle("display");
						})
					}
				};

				function toggleBar() {
					const bar = feature.properties.type === 'bar';
					const barImg = document.querySelectorAll('img[src="assets/mapicons/bar.png"]');
					if (bar) {
						barImg.forEach(function (ba) {
							ba.classList.toggle("display");
						})
					}
				};

				function toggleRestaurant() {
					const restaurant = feature.properties.type === 'restauracja';
					const restaurantImg = document.querySelectorAll('img[src="assets/mapicons/restaurant.png"]');
					if (restaurant) {
						restaurantImg.forEach(function (rest) {
							rest.classList.toggle("display");
						})
					}
				};

				function toggleChurch() {
					const church = feature.properties.type === 'kosciol';
					const churchImg = document.querySelectorAll('img[src="assets/mapicons/kosciol.png"]');
					if (church) {
						churchImg.forEach(function (kosc) {
							kosc.classList.toggle("display");
						})
					}
				};

				function toggleMonument() {
					const monument = feature.properties.type === 'kosciol';
					const monumentImg = document.querySelectorAll('img[src="assets/mapicons/monument.png"]');
					if (monument) {
						monumentImg.forEach(function (monu) {
							monu.classList.toggle("display");
						})
					}
				};

				function toggleHotel() {
					const hotel = feature.properties.type === 'hotel';
					const hotelImg = document.querySelectorAll('img[src="assets/mapicons/hotel.png"]');
					if (hotel) {
						hotelImg.forEach(function (hote) {
							hote.classList.toggle("display");
						})
					}
				};

				function toggleHostel() {
					const hostel = feature.properties.type === 'hostel';
					const hostelImg = document.querySelectorAll('img[src="assets/mapicons/hostel.png"]');
					if (hostel) {
						hostelImg.forEach(function (hot) {
							hot.classList.toggle("display");
						})
					}
				};

				//WYSZUKIWARKA

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



const searchInput = document.getElementById('slide-in__search-input');

//Klasa ikony


// poszczegolny ikony
const kebabIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/kebab.png' });
const pizzaIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/pizza.png' });
const sushiIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/sushi.png' });
const barIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/bar.png' });
const restaurantIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/restaurant.png' });
const churchIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/kosciol.png' });
const monumentIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/monument.png' });
const hotelIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/hotel.png' });
const hostelIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/hostel.png' });




//coordinates 

// mymap.on('moveend'), function(e){
// 	$('#current_center').html(mymap.getCenter().lat+','+mymap.getCenter().lng);
// } 



mymap.on('moveend', function (e) {
	const inputbox = document.getElementById("current_center");
	const lat = mymap.getCenter().lat.toFixed(7);
	const lng = mymap.getCenter().lng.toFixed(7);
	inputbox.value = lat + "," + lng;
})


