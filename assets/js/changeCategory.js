
import { paginationData, displayCanFitBox, clearBox, countDisplayItems  } from './displayData';
import { findTheMarker } from './findTheMarker';
import { state } from './index';
import { elementsDOM, Loader, clearLoader } from './elements';
import Data from './data';

let lastclicked;

export let changeCategory = async (data, that) => {
    console.log("getLoader");
    clearBox();
    state.search = new Data();
    await state.search.getData();

    data = state.search.result;
    
    let newdataset = data.filter(item => {
        if(that.dataset.type === item.properties.type){
            return item;
        }
    }); 


    Loader(elementsDOM.searchBox);

    if(lastclicked && lastclicked.dataset.type != "all"){
        lastclicked.querySelector(".fas").classList.remove("category__list-item--active");
    }
    
    if(that.dataset.type != "all"){
        state.search.result = newdataset;
        that.querySelector(".fas").classList.add("category__list-item--active");
    }  

    lastclicked = that;
    
    //set timeout for test if loader is working
    setTimeout(function(){
        paginationData(state.search.result);
        findTheMarker(state.search.result);
    }, 1000);
    clearLoader();
  
  
};

