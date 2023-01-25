//кнопки
const buttonClose = document.querySelectorAll('.popup__button-close');
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






//функция открытия попапа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened'); 
};


//функция закрытия поапа
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened'); 
};

// функция открытия попапа с картинкой
const setOpenImgPopupEventListener = (element) => {
  element.addEventListener('click', (evt) => {

    openPopup(popupImg);
    elementPopupTitle.textContent =
      evt.target.closest('.places__item').textContent;
    elementPopupImg.src = element.src;
    elementPopupImg.alt = element.alt;
  });
};

//удаление карточки
const setDeleteCardEventListener = (element) => {
  element.addEventListener('click', (evt) => {
    const listItem = evt.target.closest('.places__item');
    listItem.remove(); 
  });
};


//лайк диздайк 
const setToggleLikeEventListener = (element) => {
  element.addEventListener('click', (evt) => {
    evt.target.classList.toggle('places__button-like_active');
  });
};


//функция сохранения изменений в форме + закрытие
const submitEditProfileForm = () => {
  profileJob.textContent = inputJob.value;
  profileName.textContent = inputName.value;
  
  closePopup(popupProfile);
};



//функция создания карточки 
const createCard = (name, link) => {
  
  
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector('.places__button-like');  
  const cardImg = cardElement.querySelector('.places__image'); 
  const cardTitle = cardElement.querySelector('.places__title'); 
  const trashButton = cardElement.querySelector('.places__button-trash'); 



  cardTitle.textContent = name; 
  cardImg.src = link; 
  cardImg.alt = name; 

  setToggleLikeEventListener(likeButton); 
  setOpenImgPopupEventListener(cardImg); 
  setDeleteCardEventListener(trashButton); 
  
  return cardElement; 
};

//создание карточек из массива
initialCardsElement.forEach((element) => {
  listPlaces.append(createCard(element.name, element.link)); 
});

//закрытие попапа
buttonClose.forEach((element) => {
  element.addEventListener('click', (evt) => {
    const popupItem = evt.target.closest('.popup');
    closePopup(popupItem);
  });
});

//функция добавления карточки
const addCard = () => {
  
  listPlaces.prepend(
    createCard(inputTitle.value, linkInput.value)
  );
  closePopup(popupCard); 
  formCard.reset(); 
};

//открытие попапа создания карточки
buttonAdd.addEventListener('click', () => {
  openPopup(popupCard);
});


//открытие попапа профиля с именем и работой
buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});



formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitEditProfileForm();
});

formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard();
});



