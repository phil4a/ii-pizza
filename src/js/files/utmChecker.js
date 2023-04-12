import { utms } from './utms.js';

export const utmChecker = () => {
	const generatePromo = document.querySelector('.generate__promo');
	//получаем ссылку
	let url = window.location.href;
	console.log(url);
	// console.log(utms);

	//найти вхождение метки в ссылке
	const findCompaign = link => {
		const word = 'utm_campaign=';
		if (link.toLowerCase().includes(word)) {
			const sliceStart = link.indexOf(word);
			return link.slice(sliceStart);
		}
	};

	const findedUtm = findCompaign(url);
	console.log(findedUtm);

	const utmEl = utms.find(utm => findCompaign(utm.mark) === findedUtm);
	console.log(utmEl);
	if (utmEl) {
		generatePromo.innerHTML = utmEl.promo;
	}
	//привязываем его к появляющемуся тексту промокода
};
