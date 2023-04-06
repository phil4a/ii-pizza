// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { gsap, random } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

//global options
const pizzaContainer = document.querySelector('.generate__container');
const pizza = document.querySelector('.generate__pcs');
const makePizzaBtn = document.querySelector('.prefs__button');

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
pcs.forEach(pc => {
	const rotating = gsap.timeline({});
	// rotating.to(pc, {
	// 	ease: 'none',
	// 	rotation: 360,
	// 	duration: 'random(7, 12)',
	// 	repeat: -1,
	// 	yoyo: true,
	// });
	const pc1 = document.querySelector('.pcs__pc1');
	const pc2 = document.querySelector('.pcs__pc2');
	const pc3 = document.querySelector('.pcs__pc3');
	const pc4 = document.querySelector('.pcs__pc4');
	const pc5 = document.querySelector('.pcs__pc5');
	const pc6 = document.querySelector('.pcs__pc6');
	const pc7 = document.querySelector('.pcs__pc7');
	const pc8 = document.querySelector('.pcs__pc8');

	const allWidthFirstRow =
		pc1.offsetWidth + pc2.offsetWidth + pc3.offsetWidth + pc4.offsetWidth;
	const allWidthSecondRow =
		pc5.offsetWidth + pc6.offsetWidth + pc7.offsetWidth + pc8.offsetWidth;

	const pcsGapFirst = pizzaContainer.offsetWidth - allWidthFirstRow;
	const pcsGapSecond = pizzaContainer.offsetWidth - allWidthSecondRow;
	console.log(allWidthFirstRow, allWidthSecondRow, pcsGapFirst);
	const makePizza = () => {
		gsap.to(pc1, {
			ease: 'none',
			duration: 1,
			x: function () {
				return ((pizzaContainer.offsetWidth - 30) / 2).toString();
			},
			// translateY: '3',
		});
		gsap.to(pc2, {
			ease: 'none',
			duration: 1,
			x: function () {
				if (pcsGapFirst <= 32) {
					//mobile
					return (pc2.offsetWidth + pcsGapFirst / 6 - 2).toString();
				} else {
					return (pc2.offsetWidth + pcsGapFirst / 6 + 3).toString();
				}
			},

			y: `24%`,
		});
		gsap.to(pc3, {
			ease: 'none',
			duration: 1,
			x: function () {
				return -(
					pizzaContainer.offsetWidth / 2 -
					(pc3.offsetWidth + pc4.offsetWidth + pcsGapFirst / 3) -
					5
				);
			},
			translateY: `88%`,
		});
		gsap.to(pc4, {
			ease: 'none',
			duration: 1,
			x: function () {
				return -(
					(pizzaContainer.offsetWidth - 30) / 2 -
					pc4.offsetWidth
				).toString();
			},

			translateY: `90%`,
		});

		gsap.to(pc5, {
			ease: 'none',
			duration: 1,
			x: function () {
				return (
					(pizzaContainer.offsetWidth - 30) / 2 -
					pc5.offsetWidth
				).toString();
			},
			y: `-10%`,
		});

		gsap.to(pc6, {
			ease: 'none',
			duration: 1,
			x: function () {
				return (
					pizzaContainer.offsetWidth / 2 -
					(pc5.offsetWidth + pc6.offsetWidth + pcsGapSecond / 3) -
					5
				);
			},
			y: `-12%`,
		});

		gsap.to(pc7, {
			ease: 'none',
			duration: 1,
			translateY: '-80%',
			translateX: function () {
				if (pcsGapFirst <= 32) {
					return (-(pc7.offsetWidth + pcsGapSecond / 6) - 1).toString();
				} else {
					return (-(pc7.offsetWidth + pcsGapSecond / 6) - 9).toString();
				}
			},
		});

		gsap.to(pc8, {
			ease: 'none',
			duration: 1,
			translateY: '-100%',
			x: function () {
				return (-(pizzaContainer.offsetWidth - 30) / 2).toString();
			},
		});
		// gsap.to(pizza, {
		// 	ease: 'none',
		// 	rotation: 360,
		// 	duration: 'random(7, 12)',
		// 	repeat: -1,
		// });
	};
	makePizza();

	makePizzaBtn.addEventListener('click', e => {
		e.preventDefault();
		// rotating.reverse(1);
		makePizza();
	});
});
