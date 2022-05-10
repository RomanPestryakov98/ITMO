new Swiper('.words-about-us__slider', {

	navigation: {
		nextEl: '.words-about-us__arrow_type-next',
		prevEl: '.words-about-us__arrow_type-prev',
	},

	pagination: {
		el: '.words-about-us__pagination',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 4,
	},
	slidesPerView: 3,
	spaceBetween: 8,
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	setWrapperSize: true,
	//autoHeight: true,
	breakpoints: {

		320: {
			slidesPerView: 1,
			spaceBetween: -40,
		},
		767.98: {
			slidesPerView: 2.2,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 8,
		},
	},
});

new Swiper('.publications__slider', {

	navigation: {
		nextEl: '.publications__arrow_type-next',
		prevEl: '.publications__arrow_type-prev',
	},

	pagination: {
		el: '.publications__pagination',
		clickable: true,
	},

	grid: {
		fill: 'column',
		rows: 2
	},
	slidesPerView: 3,
	spaceBetween: 37,
	observer: true,
	observeParents: true,
	speed: 800,
	//loop: true,
	setWrapperSize: true,
	//autoHeight: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			grid: {
				fill: 'column',
				rows: 1
			},
		},
		768: {
			slidesPerView: 2,
			grid: {
				fill: 'column',
				rows: 2
			},
		},
		992: {
			spaceBetween: 37,
			slidesPerView: 3,
			grid: {
				fill: 'column',
				rows: 2
			},
		},
	},
})

new Swiper('.our-team__slider', {

	navigation: {
		nextEl: '.our-team__arrow_type-next',
		prevEl: '.our-team__arrow_type-prev',
	},

	pagination: {
		el: '.our-team__pagination',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 4,
	},
	slidesPerView: 4,
	spaceBetween: 30,
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	setWrapperSize: true,
	//autoHeight: true,
	breakpoints: {

		320: {
			slidesPerView: 2,
			spaceBetween: 8,
		},
		767.98: {
			slidesPerView: 3.27,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});
