const validConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button-save',
  buttonDisabledClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};



// поиск и перебор форм + валдации
function enableValidation (config) {
  const formSeries = Array.from(document.querySelectorAll(config.formSelector));
  formSeries.forEach((form) => {
    enableFormValidation(form, config);
  });
}

// функция проверки кнопки, 
function toggleButton (form, config) {
  const submitButton = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();
  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle(config.buttonDisabledClass, !isFormValid);
}

// функция дизейбл кнопки отправки
function disableSubmit (event) {
  event.preventDefault();
}

// валидация
function enableFormValidation(form, config) {
  
  form.addEventListener('submit', disableSubmit);
  form.addEventListener('input', () => {
    toggleButton(form, config);
  });
  addInputListeners(form, config);
  toggleButton(form, config);
}



//функция проверки инпута => добавление или удаление класса и текста ошибки
function handleFormInput (event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
}



// функция ахождени и перебор всех инпутов
function addInputListeners (form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config)
    });
  });
}

enableValidation(validConfig);