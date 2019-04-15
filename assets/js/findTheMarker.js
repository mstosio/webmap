import { mymap } from './mapOverlay';

let marker = null;
let lastClicked;
//add click event on each item and flies to marker on the map
export const findTheMarker = (data) => {
    const listOfItems = document.querySelectorAll(".places-info__element");
   
            listOfItems.forEach(listItem => {
                    listItem.addEventListener("click", function(e){
                        
                        let clickedItem = e.target.closest(".places-info__box");
                     
                        if(lastClicked) {
                            lastClicked.classList.remove("places-info__box--active");
                        }
                      
                        clickedItem.classList.add("places-info__box--active");
                        
                        lastClicked = clickedItem;

                       
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


