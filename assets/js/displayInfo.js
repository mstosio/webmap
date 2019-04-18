import { elementsDOM } from './elements.js';

export const displayInfo = (data, clickedId) => {

    const clickedPlacementId = parseFloat(clickedId.split("-")[1]);
    
    data.forEach(item => {
        if(clickedPlacementId === item.properties.id){
            console.log(data);
            console.log(item.properties.id);
            console.log(item.properties.name);
            console.log(item.properties.type);
            console.log(item.properties.img);

            elementsDOM.widget.innerHTML = "";

            const elementPlacement = ` 
				<img src="${item.properties.img}" />
            `
               
			elementsDOM.widget.insertAdjacentHTML('beforeend', elementPlacement );
        }
      
    });


    
}

