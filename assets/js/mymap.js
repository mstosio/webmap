//Funkcja, sprawia, że wszystkie checkboxy są zaznaczone podczas załadowania strony

window.onload = onPageLoad();

function onPageLoad() {
  const kebs = document.getElementsByClassName("marker-checkbox");
  const checkboxes = document.querySelectorAll("checkbox");
  for(var i = 0; i < kebs.length; i++){
	  kebs[i].checked = true;
  }
}

// MAP INTERACTIVITY


const mymap = L.map('mymap').setView([52.167930660117555, 22.271411418914795], 15);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	

	// importowanie geoJSON przez AJAX call

	var kebabGeoJSON = false;
	fetch('/restaurants.json',{
		method: 'GET'
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		var geojson = L.geoJSON(json, {
			style : function(feature) {
				return {
					color: '#000',
					
				}
			},
			pointToLayer: function(geoJsonPoint, latlng){

				//Funckja, która nadaje odpowiednie ikony 
				if(geoJsonPoint.properties.restaurant === 'kebab'){
					return  L.marker(latlng, {
						icon: kebabIcon
					});
				} else if (geoJsonPoint.properties.restaurant === 'pizza') {
					return  L.marker(latlng, {
						icon: pizzaIcon
					});
				} else if (geoJsonPoint.properties.restaurant === 'sushi') {
					return  L.marker(latlng, {
						icon: sushiIcon
					});
				} else if (geoJsonPoint.properties.restaurant === 'bar') {
					return  L.marker(latlng, {
						icon: barIcon
					});
				} else if (geoJsonPoint.properties.restaurant === 'restauracja') {
					return  L.marker(latlng, {
						icon: restaurantIcon
					});	
				}							
			},
			onEachFeature: function(feature, layer){
				
				const checkboxKebab = document.getElementById("kebabcheckbox");
				const checkboxPizza = document.getElementById("pizzacheckbox");
				const checkboxSushi = document.getElementById("sushicheckbox");
				const checkboxBar = document.getElementById("barscheckbox");
				const checkboxRestaurant = document.getElementById("restaurantcheckbox");

				checkboxKebab.addEventListener("click", toggleKebab);
				checkboxPizza.addEventListener("click", togglePizza);
				checkboxSushi.addEventListener("click", toggleSushi);
				checkboxBar.addEventListener("click", toggleBar);
				checkboxRestaurant.addEventListener("click", toggleRestaurant);

				//Popup
				if(feature.geometry.type === 'Point'){
					console.log("sex");
					layer.bindPopup(
						feature.properties.name + "<br>" +
						feature.properties.telefon + "<br>" +
						feature.properties.adres
					  );
				} else {
					console.log("sex");
				}

				//Poszczegolne funkcje, które pozwalają na włączanie oraz wyłączanie widoku markerów
				
				function toggleKebab(){		
						const kebab = feature.properties.restaurant === 'kebab';	
						const kebabImg = document.querySelectorAll('img[src="assets/mapicons/kebab.png"]');					
						if(kebab){
							kebabImg.forEach(function(keba){
								keba.classList.toggle("display");
							}) 	
						} 
				};

				function togglePizza(){
						const pizza = feature.properties.restaurant === 'pizza';
						const pizzaImg = document.querySelectorAll('img[src="assets/mapicons/pizza.png"]');
						if(pizza){
							pizzaImg.forEach(function(pizzeria){
								pizzeria.classList.toggle("display");
							}) 	
						} 
				};

				function toggleSushi(){
					const sushi = feature.properties.restaurant === 'sushi';
					const sushiImg = document.querySelectorAll('img[src="assets/mapicons/sushi.png"]');
					if(sushi){
						sushiImg.forEach(function(sushipart){
							sushipart.classList.toggle("display");
						}) 	
					} 
				};

				function toggleBar(){
					const bar = feature.properties.restaurant === 'bar';
					const barImg = document.querySelectorAll('img[src="assets/mapicons/bar.png"]');
					if(bar){
						barImg.forEach(function(bary){
							bary.classList.toggle("display");
						}) 	
					} 
				};

				function toggleRestaurant(){
					const restaurant = feature.properties.restaurant === 'restauracja';
					const restaurantImg = document.querySelectorAll('img[src="assets/mapicons/bar.png"]');
					if(restaurant){
						restaurantImg.forEach(function(rest){
							rest.classList.toggle("display");
						}) 	
					} 
				};
			
			},

		}).addTo(mymap);
	})
	.catch(error => console.log(error.message));


	//Klasa ikony
	  const gooportalIcon = L.Icon.extend({
		options: {
			iconSize:     [40, 51],
			shadowSize:   [90, 64],
			iconAnchor:   [15, 50],
			shadowAnchor: [4, 62],
			popupAnchor:  [-3, -76]
		}
	});

	// poszczegolny ikony
	const kebabIcon = new gooportalIcon({iconUrl: 'assets/mapicons/kebab.png'});
	const pizzaIcon = new gooportalIcon({iconUrl: 'assets/mapicons/pizza.png'});
	const sushiIcon = new gooportalIcon({iconUrl: 'assets/mapicons/sushi.png'});
	const barIcon = new gooportalIcon({iconUrl: 'assets/mapicons/bar.png'});
	const restaurantIcon = new gooportalIcon({iconUrl: 'assets/mapicons/restaurant.png'});

	

	
	//coordinates 

	// mymap.on('moveend'), function(e){
	// 	$('#current_center').html(mymap.getCenter().lat+','+mymap.getCenter().lng);
	// } 

	mymap.on('moveend', function(e){
		const inputbox = document.getElementById("current_center");
		const lat = mymap.getCenter().lat.toFixed(7);
		const lng = mymap.getCenter().lng.toFixed(7);
		inputbox.value = lat + "," + lng;			
	})

	

