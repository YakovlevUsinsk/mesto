export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__cards").cloneNode(true);

    return cardElement;
  }

  generadeCards() {
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector(".elements__img");
    this._elementName = this._element.querySelector(".elements__name");
    this._elementBtnLike = this._element.querySelector(".elements__btn");
    this._elementBtnDelete = this._element.querySelector(".elements__btn-delete");

    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementName.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _toggleBtnLike() {
    this._elementBtnLike.classList.toggle("elements__btn_active");
  }

  _setEventListeners() {
    this._elementBtnLike.addEventListener("click", () => {
      this._toggleBtnLike();
    });
    this._elementBtnDelete.addEventListener("click", () => {
      this._deleteCard();
    });
    this._elementImg.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _deleteCard() {
    this._element.remove();
  }
}
