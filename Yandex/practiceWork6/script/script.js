const cardsContainer = document.querySelector('.places-list.root__section');
const divPopup = document.querySelector('div.popup');
const userCardName = document.querySelector('input.popup__input_type_name');
const userCardURL = document.querySelector('input.popup__input_type_link-url');

// P.S. "+++" отмечены исправления.
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
  }
];


function addCard(divContainer) { // +++
  cardsContainer.appendChild(divContainer);
}

function openOrCloseForm() { // +++
  divPopup.classList.toggle('popup_is-opened');
}


function addOrRemoveLike(eventTarget) { // +++
  eventTarget.classList.toggle('place-card__like-icon_liked');
}


function deleteCard(eventTarget) { // +++
  eventTarget.closest('.place-card').remove();
}


function buildCard(name, imageUrl) { // +++
  const createDivPlaceCard = document.createElement('div');
  const createDivPlaceCardImage = document.createElement('div');
  const createDivPlaceCardDescription = document.createElement('div');
  const createButtonDelete = document.createElement('button');
  const createH3 = document.createElement('h3');
  const createButtonLike = document.createElement('button');


  createDivPlaceCard.classList.add('place-card');
  createDivPlaceCardImage.classList.add('place-card__image');
  createDivPlaceCardImage.setAttribute('style', `background-image: url(${imageUrl})`);
  createButtonDelete.classList.add('place-card__delete-icon');
  createDivPlaceCardDescription.classList.add('place-card__description');
  createH3.classList.add('place-card__name');
  createH3.textContent = name;
  createButtonLike.classList.add('place-card__like-icon');


  createDivPlaceCard.appendChild(createDivPlaceCardImage);
  createDivPlaceCard.appendChild(createDivPlaceCardDescription);
  createDivPlaceCardImage.appendChild(createButtonDelete);
  createDivPlaceCardDescription.appendChild(createH3);
  createDivPlaceCardDescription.appendChild(createButtonLike);

  createButtonDelete.addEventListener('click', event => {
    deleteCard(event.target);
  });
  createButtonLike.addEventListener('click', event => {
    addOrRemoveLike(event.target);
  });

  return createDivPlaceCard; // return completed card.
}

function createCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const card = initialCards[i];
    const cardhtml = buildCard(card.name, card.link);
    addCard(cardhtml);
  }
}


function createUserCard() { // +++
  openOrCloseForm();
  const newacrd = buildCard(userCardName.value, userCardURL.value);
  addCard(newacrd);

  userCardName.value = '';
  userCardURL.value = '';
}


function start() {
  const buttonOpenForm = 'button.user-info__button';
  const buttonCloseForm = 'img.popup__close';

  cardsContainer.innerHTML = ''; // clear, before use.

  document.querySelector(buttonOpenForm).addEventListener('click', openOrCloseForm);
  document.querySelector(buttonCloseForm).addEventListener('click', openOrCloseForm);
  divPopup.addEventListener('submit', event => { // +++
    event.preventDefault();
    createUserCard();
  });

  createCards();
}


start();


// stringNumber - functionName

// 7 - const initialCards ---
/**
 * Можно лучше:
 * Можно вынести данный массив в отдельный файл и подключать его перед script.js.
 */


// 54 - openOrCloseForm() +++
/**
 * Надо исправить:
 * document.querySelector(divPopup)
 * Этот элемент хорошо бы вынести в переменную и объявить в начале скрипта. Если переменная, внутри которой происходит
 * поиск по DOM, находится внутри функции, то при каждом вызове функции производится повторный поиск.
 * Если эту переменную объявить в области видимости выше, то не придется каждый раз заново искать ее в DOM при вызове
 * функций.
 * Либо вы можете передавать элемент модального окна как параметр в данную функцию, что сделает вашу функцию более
 * гибкой и не привязанной к конкректному модальному окну.
 */


// 59 - addOrRemoveLike() +++
/**
 * Надо исправить:
 * Для определения элемента, инициировавшего событие, используйте объект event:
 *
 *     function addOrRemoveLike(event) {
 *       event.target.classList.toggle('place-card__like-icon_liked');
 *     }
 */


// 64 - deleteCard() +++
/**
 * Надо исправить:
 * Для определения элемента, инициировавшего событие, используйте объект event, и метод .closest() для
 * нахождения карточки, которую нужно удалить.
 */


// 69 - buildCard() +++
/**
 * Надо исправить:
 * Хорошей практикой считается не давать много обязанностей функции. В идеале, одна функция - одна задача.
 * Давайте исправим функцию `addCard` таким образом, что она будет только создавать и возвращать готовый элемент
 * карточки (createDivPlaceCard) не добавляя её в контейнер, а результат выполнения данной функции мы будем добавлять
 * в контейнер в коде. Будем стараться следовать принципу единственной ответственности, это позволит сделать наш код
 * более гибким и устойчивым к дальнейшим изменениям.
 * О принципе единственной ответственности: https://bit.ly/3c0KMEY
 */


// 113 - createUserCard() +++
/**
 * Надо исправить:
 * Функция, декларированная как `function functionName() {}` должна быть объявлена до вызова. Такое декларирование
 * называется function declaration. В JavaScript такие функции 'всплывают'. Это значит, что функцию можно вызывать до
 * ее объявления. Это допустимо, но является не очень логичным. Структурируйте свой код так, чтобы функции, объявленные
 * через function declaration, вызывались бы после объявления.
 * Альтернатива - function expression. При таком объявлении мы присваиваем переменной функцию:
 * `const functionName = () => {}`
 * Если попытаться вызвать такую функцию до объявления, то JavaScript выдаст ошибку в консоли,
 * так как `const` не всплывает.
 */

/** +++
 * Надо исправить:
 * document.querySelector(inputCardName)
 * document.querySelector(inputCardURL)
 * Эти элементы хорошо бы вынести в переменные и объявить в начале скрипта. Если переменная, внутри которой происходит
 * поиск по DOM, находится внутри функции, то при каждом вызове функции производится повторный поиск.
 * Если эту переменную объявить в области видимости выше, то не придется каждый раз заново искать ее в DOM при вызове
 * функций.
 */

/** +++
 * Можно лучше:
 * Используйте объект event, доступный из параметра функции.
 */


// 123 - start() +++
/**
 * Надо исправить:
 * Используйте явно обработчик события submit, вместо того, чтобы вешать обработчик добавления карточки на
 * click кнопки формы и keypress.
 * https://learn.javascript.ru/forms-submit
 */


// general.
/**
 * У вас получилась хорошая работа, функционал, описанный в проектном задании работает без багов, но есть
 * несколько замечаний по организации кода, которые необходимо исправить для того, чтобы работа была принята:
 *  - Используйте event.target в обработчиках событий для иконки лайк и удаления, это позволит значительно
 *    упростить приложение и избавиться от всей логики, связанной с id элементов (генерация и поиск в DOM по id).
 *  - Все комментарии в коде, отмеченные как "Надо исправить".
 */