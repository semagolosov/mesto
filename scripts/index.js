const popUp = document.querySelector(".popup");
//ищет попап//
const popForm = document.querySelector(".popup__form");
//ищет форму//
const openPopup = document.querySelector(".profile__edit-button");
//кнопка изменить//
const closePopup = document.querySelector(".popup__button-close");
//закрыть//
const nameInput = popForm.querySelector(".popup__input_type_name");
//поиск поля для имени//
const jobInput = popForm.querySelector(".popup__input_type_job");
//для работы//
const profileName = document.querySelector(".profile__name");
//данные об имени//
const profileJob = document.querySelector(".profile__job");
//о работе//




function openClose () {
  popUp.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  openClose();
}  

closePopup.addEventListener("click", () => {
  openClose();
});

openPopup.addEventListener("click", () => {
  openClose();
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
});



popForm.addEventListener("submit", formSubmitHandler);
