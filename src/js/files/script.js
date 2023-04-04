// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

//animation
const tl = gsap.timeline({
	scrollTrigger: {
		start: 200,
		toggleActions: 'restart reset restart reset',
	},
});
document.addEventListener('DOMContentLoaded', () => {
	gsap.to('.hero__pizza', {
		ease: 'none',
		rotation: 360,
		duration: 120,
		repeat: -1,
	});
	gsap.to('.hero__robot-hand', {
		ease: 'back.out(1.7)',
		x: 20,
		y: -20,
		rotation: 5,
		duration: 15,
	});
	gsap.to('.hero__human-hand', {
		ease: 'back.out(1.7)',
		x: -20,
		y: 20,
		rotation: -5,
		duration: 15,
	});
	tl.to('.howto__text', {
		x: -200,
		opacity: 1,
	});

	tl.to('.howto__pizza', {
		x: 200,
		opacity: 1,
	});
});

//generate form
//animation
const pcs = document.querySelectorAll('.pcs__part');

pcs.forEach(pc => {
	const rotating = gsap.timeline({});

	rotating.to(pc, {
		ease: 'none',
		rotation: 360,
		duration: 8,
		repeat: -1,
	});

	const createButton = document.querySelector('.prefs__button');

	createButton.addEventListener('click', e => {
		e.preventDefault();

		rotating.reverse();
	});
});
