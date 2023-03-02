export default class Card {
  constructor(data, templateSelector, handleImageClick){
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  //шаблон
  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.places__item')
    .cloneNode(true);

    return cardElement;
  }

  //метод генерации карточки
  generateCard(){
    this._element = this._getTemplate();
    this._photo = this._element.querySelector('.places__image');
    this._title = this._element.querySelector('.places__title');
    this._buttonLike = this._element.querySelector('.places__button-like');
    this._buttonTrash = this._element.querySelector('.places__button-trash');

    this._photo.src = this._link;
    this._title.textContent = this._name;
    this._photo.alt = this._alt;
    
    this._setEventListener();

    return this._element;
  }



//клик на карзину
_handleDeleteCard(){
  this._element.remove();
}

  //клик лайк
  _handleLike(){
    this._buttonLike.classList.toggle('places__button-like_active');
  }

//добавление слушателей 
_setEventListener(){
  this._buttonLike.addEventListener('click', () => {
    this._handleLike();
  });

  this._buttonTrash.addEventListener('click', () => {
    this._handleDeleteCard();
  });

  this._photo.addEventListener('click', () => {
    this._handleImageClick({
      link: this._link,
      name: this._name,
      alt: this._alt,
    });
  })
};
}