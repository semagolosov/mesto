import {FormValidator}  from "./FormValidator.js";
import Card from "./Card.js";
import { initialCards, validationConfig } from "./constants.js";


//кнопки
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');


//попапы + темплейт
const cardTemplate = document.querySelector('.card__template').content;
const popupCard = document.querySelector('.popup_type_place');
const popupProfile = document.querySelector('.popup_type_profile');
const popupImg = document.querySelector('.popup_type_img');

// формы
const formProfile = popupProfile.querySelector('.popup__form_type_profile');
const formCard = popupCard.querySelector('.popup__form_type_place');
const inputName = formProfile.querySelector('.popup__input_type_name');
const inputJob = formProfile.querySelector('.popup__input_type_job');

const inputTitle = formCard.querySelector('.popup__input_type_name');
const linkInput = formCard.querySelector('.popup__input_type_link');

//картинка + заголовок
const elementPopupImg = popupImg.querySelector('.popup__img');
const elementPopupTitle = popupImg.querySelector('.popup__name');



// список для вставки карточкм
const listPlaces = document.querySelector('.places__list');

// данные имени и работы
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//оверлэй
const overlays = document.querySelectorAll('.popup__overlay');

const validateProfileForm = new FormValidator(validationConfig, formProfile);
const validateCardForm = new FormValidator(validationConfig, formCard);
validateCardForm.enableFormValidation();
validateProfileForm.enableFormValidation();

//функция открыте попапа с данными
const createCard =(data) => {
  const card = new Card (data, '.card__template', handleImageClick);
  return card.generateCard(); 
};

//


//функция открытия попапа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

//функция закрытия поапа
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};

// функция открытия попапа с картинкой
const handleImageClick = (photo) => {
  openPopup(popupImg);

  elementPopupTitle.textContent = photo.name;
  elementPopupImg.src = photo.link;
  elementPopupImg.alt = photo.alt;
};

//функция вставки карточки
const prependCard = () => {
  listPlaces.prepend(createCard(
    {
    name: inputTitle.value,
    link: linkInput.value,
    alt: inputTitle.value,
  }
  ));
}

//функция сохранения изменений в форме + закрытие
const handleProfileFormSubmit = (evt) => {
  profileJob.textContent = inputJob.value;
  profileName.textContent = inputName.value;
  closePopup(popupProfile);
};




//функция добавления карточки
const handleCardFormSubmit = () => {
  prependCard();
  closePopup(popupCard);
  formCard.reset();
};


//генерация карточек
initialCards.forEach((element) => {
  listPlaces.append(createCard(element));
});


//открытие попапа профиля с именем и работой
buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});

//открытие попапа создания карточки
buttonAdd.addEventListener('click', () => {
  openPopup(popupCard);
});


//слушатель закрытия попапов по кнопке закрыть
const setButtonsClose = (element) => {
  const buttonClose = element.querySelector('.popup__button-close');
  buttonClose.addEventListener('click', () => {
    closePopup(element);
  });
};
setButtonsClose(popupCard);
setButtonsClose(popupImg);
setButtonsClose(popupProfile)

//esc
function closePopupEsc(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}


//overlay
overlays.forEach((overlay) =>
  overlay.addEventListener("click", (event) =>
    closePopup(event.target.closest(".popup_opened"))
  )
);




formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleProfileFormSubmit();
});

formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleCardFormSubmit();
});



