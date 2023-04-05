// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { gsap, random } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

//global options
const pizzaContainer = document.querySelector('.generate__container');

//gsap options
let mm = gsap.matchMedia(),
	breakPoint = 767;

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
});

//generate form
//animation
const pcs = document.querySelectorAll('.pcs__part');

//!rotating
// pcs.forEach(pc => {
// 	const rotating = gsap.timeline({});
// 	rotating.to(pc, {
// 		ease: 'none',
// 		rotation: 360,
// 		duration: 'random(7, 12)',
// 		repeat: -1,
// 		yoyo: true,
// 	});
// });

const makePizza = () => {
	const pc1 = document.querySelector('.pcs__pc1');
	const pc2 = document.querySelector('.pcs__pc2');
	const pc3 = document.querySelector('.pcs__pc3');
	const pc4 = document.querySelector('.pcs__pc4');
	const pc5 = document.querySelector('.pcs__pc5');
	const pc6 = document.querySelector('.pcs__pc6');
	const pc7 = document.querySelector('.pcs__pc7');
	const pc8 = document.querySelector('.pcs__pc8');
	console.log(
		`width`,
		pc1.offsetWidth + pc2.offsetWidth + pc3.offsetWidth + pc4.offsetWidth
	);

	gsap.to(pc1, {
		ease: 'none',
		duration: 1,
		x: function () {
			return (pizzaContainer.offsetWidth / 2 - 15).toString();
		},
	});
	//!Тут посмотреть какую формулу!
	gsap.to(pc2, {
		ease: 'none',
		duration: 1,
		y: '25%',
		x: function () {
			return (pizzaContainer.offsetWidth / 4).toString();
		},
	});
	gsap.to(pc7, {
		ease: 'none',
		duration: 1,
		translateY: '-50%',
		x: `-100%`,
	});

	gsap.to(pc8, {
		ease: 'none',
		duration: 1,
		translateY: '-100%',
		x: function () {
			return (-pizzaContainer.offsetWidth / 2 + 15).toString();
		},
	});
};
makePizza();
