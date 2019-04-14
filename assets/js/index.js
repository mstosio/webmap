import Search from './Search';
import { displayData } from './displayData';
import { findTheMarker } from './findTheMarker';
import { addMapView } from './mapOverlay';


//Global state
const state = {};

const controlData = async () => {
    addMapView();

    state.search = new Search();

    await state.search.getData();

    let data = state.search.result;

    displayData(data);

    findTheMarker(data);
};

controlData();