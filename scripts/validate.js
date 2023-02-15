const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button-save',
  buttonDisabledClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};


// поиск и перебор форм + валдации
function enableValidation(config) {
  const formSeries = Array.from(document.querySelectorAll(config.formSelector));
  formSeries.forEach((form) => {
    enableFormValidation(form, config);
  });
}

// функция проверки кнопки 
function toggleSubmit(form, config, submit) {
  const isFormValid = form.checkValidity();
  submit.disabled = !isFormValid;
  submit.classList.toggle(config.buttonDisabledClass, !isFormValid);
}

// функция дизейбл кнопки отправки
function disableSubmit(event) {
  event.preventDefault();
}

// валидация
function enableFormValidation(form, config) {
  const submit = form.querySelector(config.buttonSelector);
  form.addEventListener('input', (event) => {
    toggleSubmit(form, config, submit);
    checkFormInput(event, config)
  });
  addInputListeners(form, config);
  toggleSubmit(form, config, submit);
  deactivateButton(form, config, submit);
  
}



//функция проверки инпута => добавление или удаление класса и текста ошибки
function checkFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorItem = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorItem.textContent = '';
  } else {
    input.classList.add(config.inputErrorClass);
    errorItem.textContent = input.validationMessage;
  }
}

//деактивация кнопки - reset
function deactivateButton(form, config, submit) {
  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleSubmit(form, config, submit);
    }, 0);
  });
}



// функция нахождения и перебор всех инпутов
function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
}

enableValidation(validationConfig);