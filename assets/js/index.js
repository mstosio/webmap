import Data from './data';
import { paginationData } from './displayData';
import { findTheMarker } from './findTheMarker';
import { addMapView } from './mapOverlay';
import { elementsDOM } from './elements.js';
import { displayInfo } from './displayInfo';


//Global state
const state = {};

const controlData = async () => {
    addMapView();

    state.search = new Data();

    await state.search.getData();

    let data = state.search.result;

    paginationData(data);

    findTheMarker(data);
};


elementsDOM.buttonBox.addEventListener('click', function(e){

    const button = e.target.closest('button');
    if(button){
        const navigateToPage = parseInt(button.dataset.sitenumber, 10); 
        
        paginationData(state.search.result, navigateToPage);

        findTheMarker(state.search.result);
     
    }
});

let lastClicked = null;

//EVENT DELEGATION HAPPENS
elementsDOM.searchBox.addEventListener('click', function(e){
  


    if(!e.target.closest('.places-info__box')) return;

    displayInfo(state.search.result);
  
});

controlData();