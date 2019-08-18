export const gooportalIcon = L.Icon.extend({
	options: {
		iconSize: [32, 37],
		shadowSize: [90, 64],
		iconAnchor: [15, 50],
		shadowAnchor: [4, 62],
		popupAnchor: [-3, -76]
	}
});

// poszczegolny ikony
export const kebabIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/kebab.png' });
export const pizzaIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/pizza.png' });
export const sushiIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/sushi.png' });
export const barIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/bar.png' });
export const restaurantIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/restaurant.png' });
export const churchIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/kosciol.png' });
export const monumentIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/monument.png' });
export const hotelIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/hotel.png' });
export const hostelIcon = new gooportalIcon({ iconUrl: 'assets/mapicons/hostel.png' });

