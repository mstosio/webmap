import { elementsDOM } from './elements';

export const displayData = data => {
			data.forEach(item => {
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
			});
};

