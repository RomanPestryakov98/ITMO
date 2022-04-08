const industrialCards = document.querySelectorAll('.card-industrial__container');
const popupIndustrial = document.querySelector('.popup-industrial');
const crossClose = document.querySelector('.popup__close');

industrialCards.forEach(function (card) {
	card.addEventListener('click', openPopupIndustrial);
})

crossClose.addEventListener('click', closePopupIndustrial);

function openPopupIndustrial() {
	popupIndustrial.classList.add('popup_open');
}

function closePopupIndustrial() {
	popupIndustrial.classList.remove('popup_open');
}

popupIndustrial.addEventListener('click', function (evt) {
	if (evt.target === document.querySelector('.popup')) {
		closePopupIndustrial()
	}
});