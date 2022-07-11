import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}, {formSelector, inputSelector}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formSelector = formSelector;
        this._inputSelector = inputSelector;
        this._element = document.querySelector(popupSelector)
        .querySelector(this._formSelector);
    }
    _getInputValues() {
        
        this._inputList = this._element.querySelectorAll(this._inputSelector);
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
          
          return this._formValues;
    }

    setEventListeners () {
        super.setEventListeners();
        this._element.addEventListener('submit', this._handelSubmit)
       
    }

    _handelSubmit = (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    }

    close() {
        this._element.reset();
        this._element.removeEventListener('submit', this._handelSubmit);
        super.close();
    }

}