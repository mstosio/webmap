import { elementsDOM } from './elements';



export const displayData = item => {
				const element = ` 
				<div class="places-info__element" data-id="item-${item.properties.id}">
					<div class="places-info__box places-info__box-${item.properties.type}">
							<div class="places-info__title" >
								<h4 class="places-info__name">${item.properties.name}</h4>
								<p>${item.properties.type}</p>
					
							</div>	
							<div class="places-info__line"></div>	
							
					</div>
				
				</div>`
               
				elementsDOM.searchBox.insertAdjacentHTML('beforeend', element );
};

export const clearBox = () => {
	elementsDOM.searchBox.innerHTML = '';
	elementsDOM.buttonBox.innerHTML = '';
}


//PAGINATION

const createButton = (page, typeButton) => `
	<button class="button button--${typeButton}" data-sitenumber="${typeButton === 'prev' ? page-1 : page+1}"><span>Page ${typeButton === 'prev' ? page-1 : page+1}</span></button>
	
`;

const getButtons = (page, resultNumber, itemPerPage) => {
	const pagesNumber = Math.ceil(resultNumber / itemPerPage);

	let button;

	if(page === 1 && pagesNumber > 1){
		button = createButton(page, 'next');
	} else if (page < pagesNumber){
		button = `
		${createButton(page, 'prev')}
		${createButton(page, 'next')}
		`;	
	
		
	} else if (page === pagesNumber && pagesNumber > 1){
		button = createButton(page, 'prev');
	} 
	elementsDOM.buttonBox.insertAdjacentHTML('beforeend', button);

};




const searchBarHeight = document.querySelector(".places-info__search-bar").getBoundingClientRect().height;

export const countDisplayItems = (height, boxHeight, count = 0) => {
	if(boxHeight < 0) {
		return count;
	} else {
		return countDisplayItems(height, boxHeight - height, count + 1);
	};
};

export const displayCanFitBox = countDisplayItems(120, searchBarHeight, 0);



export const paginationData = (data, page = 1, itemPerPage = (displayCanFitBox-1)) => {
	const start = (page - 1) * itemPerPage;
	const end = page * itemPerPage;
	clearBox();

	//sort Data by name
	let sortedData = data.sort((firstPlace, secondPlace) => {
		const nameFirst = firstPlace.properties.name;
		const nameSecond = secondPlace.properties.name;
		return (nameFirst < nameSecond ) ? -1 : (nameFirst > nameSecond) ? 1 : 0;
	});


	sortedData.slice(start, end).forEach(displayData);

	if(sortedData.length > displayCanFitBox){
		getButtons(page, data.length, itemPerPage);
	}
	
}

