import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }, { formSelector, inputSelector }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._element = this._popup.querySelector(this._formSelector);
    this._inputList = this._element.querySelectorAll(this._inputSelector);


  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._element.addEventListener("submit", this._handelSubmit);
  }

  _handelSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  };

  close() {
    this._element.reset();
    super.close();
  }
}
