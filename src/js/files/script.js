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

const pc1 = document.querySelector('.pcs__pc1');

const makePizza = () => {
	const pc1 = document.querySelector('.pcs__pc1');
	const pc2 = document.querySelector('.pcs__pc2');
	const pc3 = document.querySelector('.pcs__pc3');
	const pc4 = document.querySelector('.pcs__pc4');
	const pc5 = document.querySelector('.pcs__pc5');
	const pc6 = document.querySelector('.pcs__pc6');
	const pc7 = document.querySelector('.pcs__pc7');
	const pc8 = document.querySelector('.pcs__pc8');

	mm.add(
		{
			isDesktop: `(min-width: ${breakPoint}px)`,
			isMobile: `(max-width: ${breakPoint - 1}px)`,
			reduceMotion: '(prefers-reduced-motion: reduce)',
		},
		context => {
			let { isDesktop, isMobile, reduceMotion } = context.conditions;

			gsap.to(pc1, {
				ease: 'none',
				duration: 1,
				x: isDesktop
					? function () {
							if (
								document.documentElement.scrollWidth >=
								pizzaContainer.offsetWidth
							) {
								return (pizzaContainer.offsetWidth / 2 - 30).toString();
							} else {
								return (pizzaContainer.offsetWidth / 2 - 30).toString();
							}
					  }
					: '50vw',
			});
			gsap.to(pc8, {
				ease: 'none',
				duration: 1,
				translateY: '-100%',
				x: isDesktop
					? function () {
							if (
								document.documentElement.scrollWidth >=
								pizzaContainer.offsetWidth
							) {
								return (-pizzaContainer.offsetWidth / 2).toString();
							} else {
								return '-50vw';
							}
					  }
					: function () {
							return (-pizzaContainer.offsetWidth / 2).toString();
					  },
			});

			return () => {};
		}
	);
};
makePizza();
