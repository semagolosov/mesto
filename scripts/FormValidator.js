class FormValidator {
  constructor(validationConfig, formElement){
    this._formElement = formElement;
    this._inputSelector = validationConfig.inputSelector;
    this._buttonSelector = validationConfig.buttonSelector;
    this._buttonDisabledClass = validationConfig.buttonDisabledClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._buttonElement = this._formElement.querySelector(this._buttonSelector);
  }

// функция дизейбл кнопки отправки
_disabledSubmit(event) {
  event.preventDefault();
}


// деактивация кнопки - reset
_addResetEventListener(){
  this._formElement.addEventListener('reset', ()=> {
    setTimeout(() => {
      this._toggleSubmit();
    }, 0);
  })
}


//функция проверки инпута => добавление или удаление класса и текста ошибки
_handleFormInput(event) {
  const input = event.target;
  const inputId = input.id;
  const errorItem = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(this._inputErrorClass);
    errorItem.textContent = '';
  } else {
    input.classList.add(this._inputErrorClass);
    errorItem.textContent = input.validationMessage;
  }
}


//функция проверки кнопки => добавление или удаление класса и текста ошибки
_toggleSubmit(){
  const isFormValid = this._formElement.checkValidity();

  this._buttonElement.disabled = !isFormValid;
  this._buttonElement.classList.toggle(this._buttonDisabledClass, !isFormValid);
}


// функция проверки кнопки 
_addInputListeners(){
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

  inputList.forEach((item) => {
    item.addEventListener('input', (event)=> {
      this._handleFormInput(event)
    });
  });
}



//валидация
enableFormValidation(){
  this._formElement.addEventListener('submit', this._disabledSubmit);
  this._formElement.addEventListener('input', () => {
    this._toggleSubmit();
  });
  this._addResetEventListener();
  this._addInputListeners();
  this._toggleSubmit();
}
}

export { FormValidator };

