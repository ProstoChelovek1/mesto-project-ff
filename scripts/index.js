const content = document.querySelector('.content');

const placesContainer = content.querySelector('.places__list');

// @todo: Темплейт карточки


// @todo: DOM узлы

function creatCard(initialCardsLocal, delelteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = initialCardsLocal.name;
    cardElement.querySelector('.card__image').src = initialCardsLocal.link;
    cardElement.querySelector('.card__image').alt = "Фото";


    const delelteButton = cardElement.querySelector(".card__delete-button");
    delelteButton.addEventListener("click", delelteCard);

    return cardElement;
}
// @todo: Функция создания карточки

function addCard(initialCardsLocal, delelteCard) {
    placesContainer.append(creatCard(initialCardsLocal, delelteCard));
}
// @todo: Функция удаления карточки

 function delelteCard(evt) {
    evt.target.closest(".card").remove();
}

// @todo: Вывести карточки на страницу

for (let i = 0; i < initialCards.length; i++) {
    const initialCardsLocal = { 
        name: initialCards[i].name, 
        link: initialCards[i].link 
    }; 
    addCard(initialCardsLocal, delelteCard);
}