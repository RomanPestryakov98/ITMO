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
})