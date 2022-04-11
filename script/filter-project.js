const currentPage = document.querySelector('.numbers-pagination__current');
const allPages = document.querySelector('.numbers-pagination__all-pages');
const prev = document.querySelector('.pagination-projects__arrow_type_prev');
const next = document.querySelector('.pagination-projects__arrow_type_next');
const listCards = document.querySelector('.projects-block__cards');
const select = document.querySelector('.projects-block__select');
const btns = document.querySelectorAll('.projects-block__button');


const allCards = [

	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
];

const gazprom = [
	{
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-gazprom' xlink:href='sprite.svg#gazprom'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
];

const rosneft = [
	{
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-rosneft' xlink:href='sprite.svg#rosneft'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
];

const sberbank = [
	{
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	}, {
		logo: "class='logo-sberbank' xlink:href='sprite.svg#sberbank'",
		text: "Направление включает в себя исследованияираз работки тех нологий МО и КТ. Модули дл я внедрения в предметные сетевыепрограммы"
	},
];

let quanityCardInBlock = 4;
let quanityPages;

// Получаем количество страниц
function getQuanityPages(quanityCards, obj) {
	return Math.ceil(obj.length / quanityCards);
}

// Определяем количество карточек на странице
function windowCard() {
	if (window.innerWidth < 1100) {
		quanityCardInBlock = 3;
		allPages.textContent = getQuanityPages(quanityCardInBlock, getActiveButton(searchActiveButton()));
		const currentPage = document.querySelector('.numbers-pagination__current');
		renderCard(getActiveButton(searchActiveButton()), +currentPage.textContent);
	}
	if (window.innerWidth > 1100) {
		quanityCardInBlock = 4;
		allPages.textContent = getQuanityPages(quanityCardInBlock, getActiveButton(searchActiveButton()));
		const currentPage = document.querySelector('.numbers-pagination__current');
		renderCard(getActiveButton(searchActiveButton()), +currentPage.textContent);
	}
	if (window.innerWidth <= 767) {
		quanityCardInBlock = 2;
		allPages.textContent = getQuanityPages(quanityCardInBlock, allCards);
		const currentPage = document.querySelector('.numbers-pagination__current');
		renderCard(getActiveButton(searchActiveButton()), +currentPage.textContent);
	}
}

window.addEventListener('resize', windowCard);
next.addEventListener('click', openNextPage);
prev.addEventListener('click', openPrevPage);

btns.forEach(function (btn) {
	btn.addEventListener('click', function () {
		btns.forEach(function (btn) {
			btn.classList.remove('projects-block__button_active');
		})
		this.classList.add('projects-block__button_active');
		clickProject(this)
	})
})
select.addEventListener('change', chengeSelector);

function chengeSelector() {
	currentPage.textContent = 1;
	allPages.textContent = getQuanityPages(quanityCardInBlock, getActiveButton(searchActiveSelect()));
	if (this.options[this.selectedIndex].dataset.value === 'all') {
		renderCard(allCards, 1);
	}
	if (this.options[this.selectedIndex].dataset.value === 'gos') {
		renderCard(gazprom, 1);
	}
	if (this.options[this.selectedIndex].dataset.value === 'spec') {
		renderCard(rosneft, 1);
	}
	if (this.options[this.selectedIndex].dataset.value === 'dev') {
		renderCard(sberbank, 1);
	}
}

// Следующая страница
function openNextPage() {
	const obj = getActiveButton(searchActiveButton());
	let current = document.querySelector('.numbers-pagination__current');
	if (current.textContent <= getQuanityPages(quanityCardInBlock, getActiveButton(searchActiveButton())) - 1) {
		currentPage.textContent = String(+current.textContent + 1);
		renderCard(obj, (+current.textContent));
	}

}

// Предыдущая страница
function openPrevPage() {
	let current = document.querySelector('.numbers-pagination__current');
	if (current.textContent >= 2) {
		currentPage.textContent = String(+current.textContent - 1);
		const obj = getActiveButton(searchActiveButton());
		renderCard(obj, (current.textContent));
	}

}

// Переключение страниц
function clickProject(button) {
	currentPage.textContent = 1;
	allPages.textContent = getQuanityPages(quanityCardInBlock, getActiveButton(searchActiveButton()));
	if (button.dataset.value === "all") {
		renderCard(allCards, 1);
	}
	else if (button.dataset.value === "gos") {
		renderCard(gazprom, 1);
	}
	else if (button.dataset.value === "spec") {
		renderCard(rosneft, 1);
	} else if (button.dataset.value === "dev") {
		renderCard(sberbank, 1);
	}

}

function getActiveButton(button) {
	if (button.dataset.value === "all") {
		return allCards;
	}
	else if (button.dataset.value === "gos") {
		return gazprom;
	}
	else if (button.dataset.value === "spec") {
		return rosneft;
	} else if (button.dataset.value === "dev") {
		return sberbank;
	}
}

//Поиск активной кнопки
function searchActiveButton() {
	const activeButton = document.querySelector('.projects-block__button_active');
	return activeButton;
}

//Поиск активной selecta
function searchActiveSelect() {
	return select.options[select.selectedIndex];
}

class Card {
	constructor(obj) {
		this._logo = obj.logo;
		this._text = obj.text;
	}

	_getTemplate() {
		return document.querySelector('.template-card-projects-block').content.querySelector('.card-projects-block').cloneNode(true);
	}

	generatedCard() {
		this._element = this._getTemplate();
		this._element.querySelector('.card-projects-block__logo').innerHTML = `<svg><use ${this._logo}></use></svg>`;
		this._element.querySelector('.card-projects-block__text').textContent = this._text;
		return this._element;
	}
}

function renderCard(obj, page) {
	--page;
	page = page * quanityCardInBlock;
	listCards.innerHTML = "";
	let res = obj.slice(page, page + quanityCardInBlock);
	res.forEach((item) => {
		const card = new Card(item);
		let res = card.generatedCard();
		listCards.append(res);
	})
}

renderCard(allCards, 1);

windowCard();