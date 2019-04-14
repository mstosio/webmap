import { elementsDOM } from './elements';

export const displayData = item => {
			// data.forEach(item => {
				const element = ` 
				<div class="places-info__element" data-id="item-${item.properties.id}">
					<div class="places-info__box">
							<div class="places-info__title" >
								<h4 class="places-info__name">${item.properties.name}</h4>
								<p>${item.properties.type}</p>
							</div>
							<div class="places-info__details">
								<p>${item.properties.adres}</p>
								<p>${item.properties.telefon}</p>
							</div>
					</div>
				</div>`
               
				elementsDOM.searchBox.insertAdjacentHTML('beforeend', element );
			// });
};

const createButton = (page, typeButton) => `
	<button class="places-info__button button-${typeButton} data-sitenumber=${typeButton === 'prev' ? page-1 : page+1}"><span>Page ${typeButton === 'prev' ? page-1 : page+1}</span></button>
	
`;

const getButtons = (page, resultNumber, itemPerPage) => {
	const pagesNumber = Math.ceil(resultNumber / itemPerPage);

	let button;

	if(page === 1 && pagesNumber > 1){
		button = createButton(page, 'next');
	} else if (page < pagesNumber){
		// button = `
		// ${createButton(page, 'prev')}
		// ${createButton(page, 'next')}
		// `;	
		console.log("kloc");
		
	} else if (page === pagesNumber && pagesNumber > 1){
		button = createButton(page, 'prev');
	} 
	elementsDOM.searchBox.insertAdjacentHTML('beforeend', button);
};


export const paginationData = (data, page = 1, itemPerPage = 10) => {
	const start = (page - 1) * itemPerPage;
	const end = page * itemPerPage;

	data.slice(start, end).forEach(displayData);

	getButtons(page, data.length, itemPerPage);
}