
import { paginationData, displayCanFitBox, clearBox  } from './displayData';
import { findTheMarker } from './findTheMarker';
import { state } from './index';
import Data from './data';

let lastclicked;

export let changeCategory = async (data, that) => {
    
    state.search = new Data();
    await state.search.getData();

    data = state.search.result;
    
    let newdataset = data.filter(item => {
        if(that.dataset.type === item.properties.type){
            return item;
        }
    }); 

    clearBox();

    if(lastclicked && lastclicked.dataset.type != "all"){
        lastclicked.querySelector(".fas").classList.remove("fa-pulse");
    }
    
    if(that.dataset.type != "all"){
        state.search.result = newdataset;
        that.querySelector(".fas").classList.add("fa-pulse");
    }  

    
    
       
  

    
    lastclicked = that;
    paginationData(state.search.result, displayCanFitBox);
    findTheMarker(state.search.result);

  
};

