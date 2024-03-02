const content = document.querySelector('.content');
const popupNew = document.querySelector('.popup_type_new-card')

const placesContainer = content.querySelector('.places__list');
const openButton = content.querySelector('.profile__add-button');

const addButton = popupNew.querySelector('.popup__button');
const closeButton = popupNew.querySelector('.popup__close');


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

function creatCard(placetValue, imageValue) {
    const CardTemplate = document.querySelector('#card-template').content;
    const CardElement = CardTemplate.querySelector('.card').cloneNode(true);

    CardElement.querySelector('.card__title').textContent = placetValue;
    CardElement.querySelector('.card__image').src = imageValue;


    CardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
        if (this.classList.contains('card__like-button_is-active')) {
            evt.target.classList.remove('card__like-button_is-active');
        } else {
            evt.target.classList.add('card__like-button_is-active');
        }
    });

    var delelteButton = CardElement.querySelector(".card__delete-button");
    delelteButton.addEventListener("click", function() {
        delelteCard(CardElement);
    });

    return CardElement;
}
// @todo: Функция создания карточки

function addCard(placetValue, imageValue) {
    placesContainer.append(creatCard(placetValue, imageValue));
}
// @todo: Функция удаления карточки

function delelteCard(CardElement) {
    CardElement.remove();
}

// @todo: Вывести карточки на страницу

addButton.addEventListener('click', function() {
    const place = popupNew.querySelector('.popup__input_type_card-name');
    const image = popupNew.querySelector('.popup__input_type_url');

    addCard(place.value, image.value);

    const initialCardsAdd = {
        name: place.value,
        link: image.value
    };
    initialCards.push(initialCardsAdd);


    place.value = '';
    image.value = '';

    closePopup();
});

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link);
}