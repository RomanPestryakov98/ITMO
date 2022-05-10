import * as flsFunction from './functions.js';

flsFunction.spollers();

flsFunction.menuInit();

document.addEventListener('click', function (e) {
	const elementTarget = e.target;
	if (elementTarget.classList.contains('header__link')) {
		const links = document.querySelectorAll('.header__link');
		const link = document.querySelector('.header__link._spoller-active');
		if (link) {
			links.forEach(function (elem) {
				elem.classList.add('_no-active');
			})
		} else {
			links.forEach(function (elem) {
				elem.classList.remove('_no-active');
			})
		}
	}
	if (elementTarget.classList.contains('education__button')) {
		const res = elementTarget;
		const cards = document.querySelectorAll('.card-education');
		cards.forEach(function (card) {
			if (card.classList.contains('card-education_active')) {
				card.classList.remove('card-education_active');
			}
			else {
				card.classList.add('card-education_active');
			}
		})
		if (!res.classList.contains('education__button_active')) {
			document.querySelector('.education__button_active').classList.remove('education__button_active');
			res.classList.add('education__button_active');
		}

	}

})
const moleculs = document.querySelectorAll('.article-publications__molecul');
moleculs.forEach((molecul) => {
	molecul.addEventListener('mouseover', function () {
		molecul.closest('.article-publications').querySelector('.article-publications__action').classList.add('article-publications__molecul_active');
	})
	molecul.addEventListener('mouseout', function () {
		molecul.closest('.article-publications').querySelector('.article-publications__action').classList.remove('article-publications__molecul_active');
	})
})
