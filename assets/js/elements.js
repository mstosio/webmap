export const elementsDOM = {
    searchBox: document.querySelector(".places-info__search-bar"),
    listOfItems: document.querySelectorAll(".places-info__element"),
    searchInput: document.querySelector(".search-input"),
    searchButton: document.querySelector(".search-button"),
    buttonBox: document.querySelector(".places-info__button-box"),
    elementsBox: document.querySelector(".places-info__elements"),
    widget: document.querySelector(".widget"),
    listOfItems: document.querySelectorAll(".category__list-item"),
}

export const baseElements = {
    loader: 'loader'
}

export const Loader = item => {
    const loader = ` <div class="spinner-wrapper">
    <div class="loading">
    </div>
        </div>
    `;
    
    item.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(baseElements.loader);
    if(loader) loader.parentElement.removeChild(loader);
}