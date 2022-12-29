/*
const popup = document.querySelector('.popup'); //Поиск попапа
const form = popup.querySelector('.popup__form'); //Поиск формы
const buttonEdit = document.querySelector('.profile__edit-button'); //Поиск кнопки редактирования профиля
const popupClose = popup.querySelector('.popup__button-close'); //Поиск кнопки закрытия попапа
let nameInput = popup.querySelector('.popup__input_type_name'); //Поиск поля формы имя попапа
let jobInput = popup.querySelector('.popup__input_type_job'); //Поиск поля формы работа попапа
let profileTitle = document.querySelector('.profile__name'); //Поиск данных имени
let profileSubtitle = document.querySelector('.profile__job'); //Поиск данных работы

//Функция отрытия попапа, подтягивает имя и работу с полей профиля в форму
const formOpen = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
};

//Функция закрытия попапа без сохранения изменений
const formClose = function () {
  popup.classList.remove('popup_opened');
};

//Функция сохранения изменений в полях формы и в профиле с закрытием окна
const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  formClose();
};

//Слушатели событий
buttonEdit.addEventListener('click', formOpen);
popupClose.addEventListener('click', formClose);
form.addEventListener('submit', formSubmitHandler);
*/

const popUp = document.querySelector(".popup");
//ищет попап//
const popForm = document.querySelector(".popup__form");
//ищет форму//
const openPopup = document.querySelector(".profile__edit-button");
//кнопка изменить//
const closePopup = document.querySelector(".popup__button-close");
//закрыть//
const submitPop = document.querySelector(".popup__buttom-save");
//сохранить//
const nameInput = popForm.querySelector(".popup__input_type_name");
//поиск поля для имени//
const jobInput = popForm.querySelector(".popup__input_type_job");
//для работы//
const profileName = document.querySelector(".profile__name");
//данные об имени//
const profileBio = document.querySelector(".profile__job");
//о работе//

//функция сохраниения с закрытием//
function formSubmitHandler(evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileBio.textContent = jobInput.value;
  openClose();
} 

function openClose () {
  popUp.classList.toggle('popup_opened');
}

closePopup.addEventListener("click", () => {
  openClose();
});

openPopup.addEventListener("click", () => {
  openClose();
  nameInput.value = profileName.textContent
  jobInput.value = profileBio.textContent
});


popForm.addEventListener("submit", formSubmitHandler);
