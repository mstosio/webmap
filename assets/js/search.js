fetch('/kebabs.json', {
	method: 'GET'
})
	.then(response => response.json())
	.then(json => {
		
		const data = json.features;
        
        let searchBox = document.querySelector(".places-info__search-bar");
        let id = 0;
		data.forEach(item => {
			searchBox.innerHTML += `<div class="search-bar__item data-id="item-${id +=  1}">${item.properties.name}</div>`;
		});
		
		//1. We data from the element userClicks on
		const listOfItems = document.querySelectorAll(".search-bar__item");
		



		listOfItems.forEach(listItem => {
			listItem.addEventListener("click", function(e){
				console.log(this);
			});
		});

	
    })
      .catch(error => console.log(error));

	  