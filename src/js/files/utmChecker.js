import { utms } from './utms.js';

export const utmChecker = () => {
	const generatePromo = document.querySelector('.generate__promo');

	let url = window.location.href;

	const findCompaign = link => {
		const word = 'utm_campaign=';
		if (link.toLowerCase().includes(word)) {
			const sliceStart = link.indexOf(word);
			return link.slice(sliceStart);
		}
	};

	const findedUtm = findCompaign(url);

	const utmEl = utms.find(utm =>
		findedUtm?.toLowerCase().includes(findCompaign(utm.mark).toLowerCase())
	);

	if (utmEl) {
		generatePromo.innerHTML = utmEl.promo;
	}
};
