// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, bodyUnlock, isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { Pizza } from './pizza-loader.js';
import { imageGenerate } from './imageGenerate.js';

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
	const pizzaLoadImg = document.querySelector('#pizza');
	const generateBlock = document.querySelector('.generate__block');
	const generateLink = document.querySelector('.generate__link');
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
			return Math.floor(Math.random() * (13 - 7)) + 7;
		};

		wrapperBlur.classList.toggle('wrapper-overlay');
		overlay.style.display = 'block';
		pizzaLoadImg.style.display = 'block';
		generateBlock.classList.remove('generate__block-show');
		bodyLock();
		imageGenerate();
		setTimeout(() => {
			overlay.style.display = 'none';
			wrapperBlur.classList.toggle('wrapper-overlay');
			pizzaLoadImg.style.display = 'none';
			generateBlock.classList.add('generate__block-show');
			generateLink.style.display = 'inline-block';
			bodyUnlock();
		}, getRandomInt() * 1000);
	};

	//generate button listener
	makePizzaBtn.addEventListener('click', e => {
		e.preventDefault();
		generatePizza();
	});
});
