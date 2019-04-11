import "@babel/polyfill";
import axios from 'axios';


const mymap = L.map('search-map').setView([52.167930660117555, 22.271411418914795], 15);

const firstOverlay = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
});

firstOverlay.addTo(mymap);
//main state of the app

// var elements = {
// 	listOfItems: document.querySelectorAll(".search-bar__item")
// };

// console.log(elements.listOfItems);
// console.log(elements);

let state = {};

//BASE


//INDEX
class Search {
	constuctor(query){
		this.query = query;
	}

	//show data in the screen
	async getData(){
		
		try {
			const json = await axios('kebabs.json');
			this.result = json.data.features;

			let data = this.result;
		
			let searchBox = document.querySelector(".places-info__search-bar");

			data.forEach(item => {
				// searchBox.innerHTML += `<div class="places-info__title" data-id="item-${item.properties.id}">${item.properties.name}</div>`;

				searchBox.innerHTML += ` 
				<div class="places-info__element" data-id="item-${item.properties.id}">
					<div class="places-info__box">
							<div class="places-info__title" >
								<h4 class="places-info__name">${item.properties.name}</h4>
								<p>${item.properties.type}</p>
							</div>
							<div class="places-info__details">
								<p>${item.properties.adres}</p>
								<p>${item.properties.telefon}</p>
							</div>
					</div>
				</div>`
			});

		} catch(error){
			console.log(error);
		}

}
};

//add click event on each item and flies to marker on the map
const findTheMarker = async () => {
		
		state.search = new Search();

		await state.search.getData()
		
		const data = state.search.result;
		const listOfItems = document.querySelectorAll(".places-info__element");
		let marker = null;


				listOfItems.forEach(listItem => {
						listItem.addEventListener("click", function(e){

							data.forEach(item => {
								const clickedItemId = parseFloat(listItem.dataset.id.split("-")[1]);
								const dataItemId = item.properties.id;

								if(clickedItemId === dataItemId){

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

};



const search = new Search();
search.getData();
findTheMarker();
