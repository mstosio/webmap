
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
	fetch('/kebab.json',{
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
				} 						
			},
			onEachFeature: function(feature, layer){
				if(feature.geometry.type === 'Point'){
					layer.bindPopup(
						feature.geometry.coordinates.join(',') +
						feature.properties.telefon +
						feature.properties.adres
					  );
				}
			},
			onEachFeature: function(feature, layer){
				const toggle = document.getElementById("togglelayer");
				toggle.addEventListener("click", function(){
					const kebab = feature.properties.restaurant === 'kebab';
					const kebabImg = document.querySelectorAll('img[src="assets/mapicons/kebab.png"]');
					if(kebab){
						console.log(kebabImg);
						kebabImg.forEach(function(keba){
							keba.style.display = "none";
						})	
					} else {
						console.log("retard");
					}
				});
			
			},

		}).addTo(mymap);
	})
	.catch(error => console.log(error.message));



	  const gooportalIcon = L.Icon.extend({
		options: {
			iconSize:     [50, 64],
			shadowSize:   [90, 64],
			iconAnchor:   [15, 50],
			shadowAnchor: [4, 62],
			popupAnchor:  [-3, -76]
		}
	});

	const kebabIcon = new gooportalIcon({iconUrl: 'assets/mapicons/kebab.png'});
	const pizzaIcon = new gooportalIcon({iconUrl: 'assets/mapicons/pizza.png'});
	const sushiIcon = new gooportalIcon({iconUrl: 'assets/mapicons/sushi.png'});

	

	
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

	

