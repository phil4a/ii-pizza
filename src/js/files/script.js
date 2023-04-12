// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, bodyUnlock, isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { Pizza } from './pizza-loader.js';
import { imageGenerate } from './imageGenerate.js';
import { utmChecker } from './utmChecker.js';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
	//loader
	let pizzaLoader = new Pizza('pizza');

	(function update() {
		requestAnimationFrame(update);
		pizzaLoader.update();
	})();

	//global options
	const wrapperBlur = document.querySelector('.wrapper');
	const overlay = document.querySelector('.overlay');
	const pizzaLoadBlock = document.querySelector('.pizza-loader');
	const generateBlock = document.querySelector('.generate__block');
	const generateLink = document.querySelector('.generate__link');
	const generatePromoBlock = document.querySelector('.generate__promo-block');

	const makePizzaBtn = document.querySelector('.prefs__button');

	//animation
	const tl = gsap.timeline({
		scrollTrigger: {
			start: 200,
			toggleActions: 'restart reset restart reset',
		},
	});

	//first screen
	gsap.to('.hero__pizza', {
		ease: 'none',
		rotation: 360,
		duration: 120,
		repeat: -1,
	});
	gsap.to('.hero__robot-hand', {
		ease: 'sine.inOut',
		x: 20,
		y: -20,
		rotation: 5,
		duration: 15,
		yoyoEase: true,
		repeat: -1,
	});
	gsap.to('.hero__human-hand', {
		ease: 'sine.inOut',
		x: -20,
		y: 20,
		rotation: -5,
		duration: 15,
		yoyoEase: true,
		repeat: -1,
	});
	tl.to('.howto__text', {
		x: -200,
		opacity: 1,
	});

	tl.to('.howto__pizza', {
		x: 200,
		opacity: 1,
	});

	const generatePizza = () => {
		const getRandomInt = () => {
			return Math.floor(Math.random() * (8 - 4)) + 4;
		};

		let actualRndmNum = getRandomInt();

		wrapperBlur.classList.toggle('wrapper-overlay');
		overlay.style.display = 'block';
		pizzaLoadBlock.style.display = 'flex';
		generateBlock.classList.remove('generate__block-show');

		bodyLock();
		imageGenerate();
		utmChecker();

		// const countdownFn = num => {
		// 	document.querySelector('.timer-seconds').textContent = num;
		// 	console.log(num);
		// };

		// let numMin;

		// numMin = setTimeout(function countdownFn(actualRndmNum) {
		// 	console.log(actualRndmNum);
		// 	numMin = setTimeout(countdownFn, 1000);
		// }, actualRndmNum);

		let timerId = setTimeout(function tick() {
			document.querySelector('.timer-seconds').textContent = actualRndmNum;
			actualRndmNum--;
			timerId = setTimeout(tick, 1000);
		}, actualRndmNum);

		console.log(actualRndmNum);
		setTimeout(() => {
			overlay.style.display = 'none';
			wrapperBlur.classList.toggle('wrapper-overlay');
			if (document.querySelector('.generate__promo').innerHTML.length > 0) {
				console.log(
					document.querySelector('.generate__promo').innerHTML.length
				);
				generatePromoBlock.style.display = 'block';
			} else {
				generatePromoBlock.style.display = 'none';
			}
			pizzaLoadBlock.style.display = 'none';
			generateBlock.classList.add('generate__block-show');
			generateLink.style.display = 'inline-block';
			bodyUnlock();
			clearTimeout(timerId);
		}, actualRndmNum * 1000);
	};

	//generate button listener
	makePizzaBtn.addEventListener('click', e => {
		e.preventDefault();
		generatePizza();
	});
});
