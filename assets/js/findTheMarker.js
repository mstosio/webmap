import { mymap, addMapView } from './mapOverlay';
import { elementsDOM } from './elements';
// import { mymap } from './mapOverlay';


//add click event on each item and flies to marker on the map
export const findTheMarker = (data) => {
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


