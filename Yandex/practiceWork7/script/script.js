(function () {

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

  const cardsContainer = document.querySelector('.places-list.root__section');

  const divPopupNewCard = document.querySelector('div.root__new-card');
  const divPopupAbout = document.querySelector('div.popup.root__about');
  const divPopupImage = document.querySelector('div.root__image');

  const userName = document.querySelector('h1.user-info__name');
  const userAbout = document.querySelector('p.user-info__job');

  const imgPopup = document.querySelector('.popup__image');

  const inputUserName = divPopupAbout.querySelector('input.popup__input.popup__input_type_user');
  const inputUserAbout = divPopupAbout.querySelector('input.popup__input.popup__input_type_about');

  const userCardName = divPopupNewCard.querySelector('input.popup__input_type_name');
  const userCardURL = divPopupNewCard.querySelector('input.popup__input_type_link-url');


  function addCard(cardContainer) {
    cardsContainer.appendChild(cardContainer);
  }

  function openPopup(popup) {
    popup.classList.add('popup_is-opened');
  }


  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
  }


  function addOrRemoveLike(eventTarget) {
    eventTarget.classList.toggle('place-card__like-icon_liked');
  }


  function deleteCard(eventTarget) {
    eventTarget.closest('.place-card').remove();
  }


  function getPopupInputs(popup) {
    return popup.querySelectorAll('input.popup__input');
  }

  function getPopupWarnings(popup) {
    return popup.querySelectorAll('span.popup__warning');
  }


  /** +++
   * Надо исправить:
   * Валидация URL штатными средствами
   * Класс URL не предназначен для проверки строки на корректность.
   * Вместо этого следует использовать свойство validity.typeMismatch
   * Для этого у инпута должен быть установлен type="url"
   * Также лучше вместо проверки "elemHTML == userCardURL" сделать проверку на type инпута.
   * Прочитать подробнее про валидацию
   * https://developer.mozilla.org/ru/docs/Learn/HTML/Forms/%D0%92%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D1%8B
   * Содержание объека validity:
   * https://gist.githubusercontent.com/meritt/18e9fe88b732e5ec3ea887db472773a0/raw/f477ca58102b5eb266718b7205d1c2a313b2ee5e/4.js
   */
  function checkInputValidity(elemHTML, elemErr) {
    if (elemHTML.validity.valid) {
      elemErr.classList.remove('popup__warning_visible');
      return true;
    } else {
      if (elemHTML.validity.valueMissing) {
        elemErr.textContent = "Это обязательное поле";
      } else if (elemHTML.validity.typeMismatch && elemHTML.getAttribute('type') === 'url') {
        elemErr.textContent = "Введите ссылку на картинку";
      } else if (elemHTML.validity.tooShort || elemHTML.validity.tooLong) {
        elemErr.textContent = "Должно быть от 2 до 30 символов";
      }

      elemErr.classList.add('popup__warning_visible');
      return false;
    }

    // P.S. на сайте MDN указано, что все эти методы не будут работать без определенных атрибутов, 
    // в связи с чем, пришлось навесить minlength="2" maxlength="30" required.
  }



  function setSubmitButtonState(popup, validationSuccess) {
    const btn = popup.querySelector('button.button');

    if (validationSuccess) {
      btn.classList.add('button_active');
      btn.removeAttribute('disabled');
    } else {
      btn.classList.remove('button_active');
      btn.setAttribute('disabled', '');
    }
  }


  function isPopupValid(popup) {
    const fields = getPopupInputs(popup);
    const popupWarnings = getPopupWarnings(popup);

    for (let i = 0; i < fields.length; i++) {
      if (!checkInputValidity(fields[i], popupWarnings[i])) {
        setSubmitButtonState(popup, false);
        return false;
      }
    }

    return true;
  }


  function resetErrors(popup) {
    const fields = getPopupWarnings(popup);

    setSubmitButtonState(popup, isPopupValid(popup));

    for (let i = 0; i < fields.length; i++) {
      fields[i].classList.remove('popup__warning_visible');
    }
  }


  function openNewCardPopup() {
    userCardName.value = '';
    userCardURL.value = '';

    resetErrors(divPopupNewCard);

    openPopup(divPopupNewCard);
  }


  function openEditPopup() {
    inputUserName.value = userName.textContent.trim();
    inputUserAbout.value = userAbout.textContent.trim();

    resetErrors(divPopupAbout);

    openPopup(divPopupAbout);
  }


  function setEventListeners(popup) {
    const fields = getPopupInputs(popup);

    for (let i = 0; i < fields.length; i++) {
      fields[i].addEventListener('input', e => {
        setSubmitButtonState(popup, isPopupValid(popup));
      });
    }
  }


  function editProfile() {
    userName.textContent = inputUserName.value;
    userAbout.textContent = inputUserAbout.value;

    closePopup(divPopupAbout);
  }


  function buildCard(name, imageUrl) {
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

    createDivPlaceCardImage.addEventListener('click', () => {
      imgPopup.setAttribute('src', imageUrl);
      openPopup(divPopupImage);
    });

    createButtonDelete.addEventListener('click', e => {
      e.stopPropagation();
      deleteCard(e.target);
    });

    createButtonLike.addEventListener('click', e => {
      addOrRemoveLike(e.target);
    });

    return createDivPlaceCard;
  }


  function createCards() {
    for (let i = 0; i < initialCards.length; i++) {
      const card = initialCards[i];
      const cardHTML = buildCard(card.name, card.link);
      addCard(cardHTML);
    }
  }


  function createUserCard() {
    const newCard = buildCard(userCardName.value, userCardURL.value);
    addCard(newCard);

    closePopup(divPopupNewCard);
  }


  function start() {
    const buttonCloseNewCardForm = '.root__new-card .popup__close';
    const buttonCloseAboutForm = '.root__about .popup__close';
    const buttonCloseImage = '.root__image .popup__close';
    const buttonOpenNewCardForm = 'button.user-info__button';
    const buttonOpenAboutForm = 'button.user-info__edit';

    const profilePicture = document.querySelector('.user-info__photo');

    cardsContainer.innerHTML = '';

    setEventListeners(divPopupAbout);
    setEventListeners(divPopupNewCard);

    profilePicture.addEventListener('click', () => {
      imgPopup.setAttribute('src', `../../../images/avatar.jpg`);
      openPopup(divPopupImage);
    });

    document.querySelector(buttonCloseImage).addEventListener('click', e => {
      closePopup(divPopupImage);
    });

    document.querySelector(buttonOpenNewCardForm).addEventListener('click', e => {
      openNewCardPopup(divPopupNewCard);
    });

    document.querySelector(buttonCloseNewCardForm).addEventListener('click', e => {
      closePopup(divPopupNewCard);
    });

    document.querySelector(buttonOpenAboutForm).addEventListener('click', e => {
      openEditPopup(divPopupAbout);
    });

    document.querySelector(buttonCloseAboutForm).addEventListener('click', e => {
      closePopup(divPopupAbout);
    });

    divPopupAbout.addEventListener('submit', e => {
      e.preventDefault();
      editProfile();
    });

    divPopupNewCard.addEventListener('submit', e => {
      e.preventDefault();
      createUserCard();
    });

    createCards();
  }


  start();
})();

/**
 * Удалил исправленные замечания
 *
 * Надо исправить:
 * 1. Доработать валидацию поля ввода ссылки
 *
 * Можно лучше:
 * 1. Использовать делегирование событий, тогда вместо множества обработчиков будет один
 *    https://learn.javascript.ru/event-delegation
 */