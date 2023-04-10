// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { gsap, random } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
	//global options
	const pizzaContainer = document.querySelector('.generate__container');
	const pizza = document.querySelector('.generate__pcs');
	const makePizzaBtn = document.querySelector('.prefs__button');

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

	//generate form
	//animation
	const pcs = document.querySelectorAll('.pcs__part');

	//!rotating
	pcs.forEach(pc => {
		const rotating = gsap.timeline({});
		rotating.to(pc, {
			ease: 'none',
			rotation: 360,
			duration: 'random(7, 12)',
			repeat: -1,
			yoyo: true,
		});

		const makePizza = () => {
			document.querySelector('.pcs').style.rowGap = 0;
			//pcs
			gsap.to(pc1, {
				ease: 'none',
				duration: 1,
				x: function () {
					return ((pizzaContainer.offsetWidth - 30) / 2 + 1).toString();
				},
				// translateY: '3',
			});
			gsap.to(pc2, {
				ease: 'none',
				duration: 1,
				x: function () {
					if (pcsGapFirst <= 32) {
						//mobile
						return pcsGapFirst / 6 + pc2.offsetWidth + 2;
					} else {
						return pcsGapFirst / 6 + pc2.offsetWidth + 5;
					}
				},
				translateY: `24%`,
			});
			gsap.to(pc3, {
				ease: 'none',
				duration: 1,
				translateX: function () {
					if (pcsGapFirst <= 32) {
						return -(
							pizzaContainer.offsetWidth / 2 -
							(pc3.offsetWidth + pc4.offsetWidth + pcsGapFirst / 3) -
							9
						);
					} else {
						return -(
							pizzaContainer.offsetWidth / 2 -
							(pc3.offsetWidth + pc4.offsetWidth + pcsGapFirst / 3) -
							7
						);
					}
				},
				translateY: function () {
					if (pcsGapFirst <= 32) {
						return `89%`;
					} else {
						return `88%`;
					}
				},
			});
			gsap.to(pc4, {
				ease: 'none',
				duration: 1,
				translateX: function () {
					if (pcsGapFirst <= 32) {
						return -(
							(pizzaContainer.offsetWidth - 30) / 2 -
							pc4.offsetWidth +
							-1
						).toString();
					} else {
						return -(
							(pizzaContainer.offsetWidth - 30) / 2 -
							pc4.offsetWidth +
							-3
						).toString();
					}
				},

				translateY: `90%`,
			});
			gsap.to(pc5, {
				ease: 'none',
				duration: 1,
				translateX: function () {
					if (pcsGapFirst <= 32) {
						return (
							(pizzaContainer.offsetWidth - 30) / 2 -
							pc5.offsetWidth -
							2
						).toString();
					} else {
						return (
							(pizzaContainer.offsetWidth - 30) / 2 -
							pc5.offsetWidth
						).toString();
					}
				},
				translateY: function () {
					if (pcsGapFirst <= 32) {
						return `-7.5%`;
					} else {
						return `-10%`;
					}
				},
			});
			gsap.to(pc6, {
				ease: 'none',
				duration: 1,
				translateX: function () {
					if (pcsGapFirst <= 32) {
						return (
							pizzaContainer.offsetWidth / 2 -
							(pc5.offsetWidth + pc6.offsetWidth + pcsGapSecond / 3) -
							8
						);
					} else {
						return (
							pizzaContainer.offsetWidth / 2 -
							(pc5.offsetWidth + pc6.offsetWidth + pcsGapSecond / 3) -
							5
						);
					}
				},
				translateY: function () {
					if (pcsGapFirst <= 32) {
						return `-11%`;
					} else {
						return `-12%`;
					}
				},
			});
			gsap.to(pc7, {
				ease: 'none',
				duration: 1,
				translateY: function () {
					if (pcsGapFirst <= 32) {
						return '-79.5%';
					} else {
						return '-79%';
					}
				},
				translateX: function () {
					if (pcsGapFirst <= 32) {
						return (-(pc7.offsetWidth + pcsGapSecond / 6) - 3).toString();
					} else {
						return (-(pc7.offsetWidth + pcsGapSecond / 6) - 9).toString();
					}
				},
			});
			gsap.to(pc8, {
				ease: 'none',
				duration: 1,
				translateY: function () {
					if (pcsGapFirst <= 32) {
						return '-102.3%';
					} else {
						return '-100%';
					}
				},
				translateX: function () {
					if (pcsGapFirst <= 32) {
						return (-(pizzaContainer.offsetWidth - 30) / 2).toString() - 2;
					} else {
						return (-(pizzaContainer.offsetWidth - 30) / 2).toString();
					}
				},
			});

			// pizza.append(document.querySelector('.generate__image'));
			// rotating full pizza
			// let pizzaTl = gsap.timeline();
			// pizzaTl
			// 	.to(pizza, {
			// 		ease: 'none',
			// 		rotation: 360,
			// 		duration: '1',
			// 		repeat: -1,
			// 	})
			// 	.to(pizza, {
			// 		ease: 'none',
			// 		rotation: 360,
			// 		duration: '0.5',
			// 		repeat: -1,
			// 	})
			// 	.to(pizza, {
			// 		ease: 'none',
			// 		rotation: 360,
			// 		duration: '0.3',
			// 		repeat: -1,
			// 		opacity: 1,
			// 	})
			// 	.to(pizza, {
			// 		ease: 'none',
			// 		duration: '2',
			// 		opacity: 0,
			// 		repeat: 0,
			// 		display: 'none',
			// 	});
			// .to('.generate__image', {
			// 	display: 'block',
			// })
			// .to('.generate__image', {
			// 	ease: 'none',
			// 	rotation: 360,
			// 	//!Поставить случайные значения длительности вращения последней части
			// 	duration: '0.3',
			// 	repeat: -1,
			// 	opacity: 1,
			// });
		};
		// makePizza();

		makePizzaBtn.addEventListener('click', e => {
			e.preventDefault();
			rotating.reverse(1);
			makePizza();
		});
	});
});
