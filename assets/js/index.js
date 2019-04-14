import Data from './data';
import { displayData, paginationData } from './displayData';
import { findTheMarker } from './findTheMarker';
import { addMapView } from './mapOverlay';
import { elementsDOM } from './elements.js';


//Global state
const state = {};

const controlData = async () => {
    addMapView();

    state.search = new Data();

    await state.search.getData();

    let data = state.search.result;

    paginationData(data);
    // displayData(data);

    findTheMarker(data);
};


controlData();

elementsDOM.searchBox.addEventListener('click', function(e){
    const button = e.target.closest('button');

    if(button){
        const navigateToPage = button.dataset.sitenumber;
        console.log(navigateToPage);
        paginationData(state.search.result, navigateToPage);
    }
})