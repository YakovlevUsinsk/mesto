import { openPopup } from "../pages/index.js";

const popupImg = document.querySelector(".popup_img");
const picturePopupImg = popupImg.querySelector(".popup__picture");
const textPopupImg = popupImg.querySelector(".popup__picture-title");

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
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

    _openImg() {
        picturePopupImg.src = this._link;
        picturePopupImg.alt = this._name;
        textPopupImg.textContent = this._name;
        openPopup(popupImg);
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
            this._openImg();
        });
    }

    _deleteCard() {
        this._element.remove();
    }
}
