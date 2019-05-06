export function onPageLoad() {
	const kebs = document.getElementsByClassName("overlay__marker-checkbox");
	const checkboxes = document.querySelectorAll("checkbox");
	for (let i = 0; i < kebs.length; i++) {
		kebs[i].checked = true;
	}
}

const toggleOverlay = document.getElementById('slide-in__toggle-button');

toggleOverlay.addEventListener('click', displayOverlay);

const overlay = document.getElementById('slide-in__slider');
const arrowImage = document.getElementById('slide-in__toggle--arrow');

export function displayOverlay() {
	overlay.classList.toggle("visible");
	changeArrowImage();
}

export function displayOverlayLayer() {
	overlay.classList.add("visible");
	changeArrowImage();
}

export function changeArrowImage() {
	if (overlay.classList.contains("visible")) {
		arrowImage.src = "assets/mapicons/left-arrow.png";
	} else {
		arrowImage.src = "assets/mapicons/right-arrow.png";
	}
};