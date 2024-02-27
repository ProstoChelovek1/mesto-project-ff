const content = document.querySelector('.content');
const popup = document.querySelector('.popup')
const popupNew = document.querySelector('.popup_type_new-card')
const popupEdit = document.querySelector('.popup_type_edit')

const placesContainer = content.querySelector('.places__list');
const openButton = content.querySelector('.profile__add-button');

const addButton = popupNew.querySelector('.popup__button');
const closeButton = popupNew.querySelector('.popup__close');
const delelteButton = popupNew.querySelector('.card__delete-button');

  
// @todo: Темплейт карточки
openButton.addEventListener('click', openPopup); 
function openPopup() {
	popupNew.classList.add('popup_is-opened');
}

closeButton.addEventListener('click', closePopup); 
function closePopup() {
	popupNew.classList.toggle('popup_is-opened');
}

// @todo: DOM узлы

// @todo: Функция создания карточки

function addCard(placetValue, imageValue) {
	const CardTemplate = document.querySelector('#card-template').content;
	const CardElement = CardTemplate.querySelector('.card').cloneNode(true);
	const initialCardsAdd = {name: placetValue, link: imageValue};

	CardElement.querySelector('.card__title').textContent = placetValue;
	CardElement.querySelector('.card__image').src = imageValue;

	initialCards.push(initialCardsAdd);

	placesContainer.append(CardElement);

	CardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
		if(this.classList.contains('card__like-button_is-active')) {
			evt.target.classList.remove('card__like-button_is-active');
		} else {
			evt.target.classList.add('card__like-button_is-active');
		}
	  }); 


	CardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
		console.log(evt);
	  }); 
	closePopup();
}
console.log(1);
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


addButton.addEventListener('click', function () {
	place = popupNew.querySelector('.popup__input_type_card-name');
	const image = popupNew.querySelector('.popup__input_type_url');

	addCard(place.value, image.value);

	place.value = '';
	image.value = '';
});



for (let i = 0; i < 6; i++) {
	addCard(initialCards[i].name, initialCards[i].link)
}