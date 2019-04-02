const mymap = L.map('search-map').setView([52.167930660117555, 22.271411418914795], 15);

var firstOverlay = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
});

firstOverlay.addTo(mymap);

fetch('/kebabs.json', {
	method: 'GET'
})
	.then(response => response.json())
	.then(json => {
		
		const data = json.features;
        
        let searchBox = document.querySelector(".places-info__search-bar");
				let id = 0;
				
		//Adding Elements to UI
		data.forEach(item => {
			searchBox.innerHTML += `<div class="search-bar__item" data-id="item-${item.properties.id}">${item.properties.name}</div>`;
		});
		
		
		const listOfItems = document.querySelectorAll(".search-bar__item");
		
		let marker = null;

		listOfItems.forEach(listItem => {
			listItem.addEventListener("click", function(e){

				data.forEach(item => {
					const clickedItemId = parseFloat(listItem.dataset.id.split("-")[1]);
					const dataItemId = item.properties.id;

					if(clickedItemId == dataItemId){

						const [dataLat, dataLng ] = [
							item.geometry.coordinates[0],
							item.geometry.coordinates[1]
						];

						if (marker !== null) {
							mymap.removeLayer(marker);
					 }
			
					 marker = L.marker([dataLng, dataLat]).addTo(mymap);
					 mymap.flyTo([dataLng, dataLat]);
		
					}


				});

			});
		});

	
    })
      .catch(error => console.log(error));

	  