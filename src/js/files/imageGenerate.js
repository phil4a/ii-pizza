import { pizzaObj } from './pizza.js';

export const imageGenerate = () => {
	let generateLink = document.querySelector('.generate__link');
	let generateImgSrc = document.querySelector('.generate__image');
	const checkedInputValue = document.querySelector(
		'.prefs__custom:checked'
	).value;

	function getRandomElement(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	}
	const findedEl = pizzaObj.find(el => el.id === checkedInputValue);

	setTimeout(() => {
		generateImgSrc.setAttribute('src', getRandomElement(findedEl.url));
		generateLink.setAttribute('href', findedEl.link);
	}, 3000);
};
