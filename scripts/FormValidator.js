export class FormValidator {
  constructor(data, form) {
      this._inputSelector = data.inputSelector;
      this._submitButtonSelector = data.submitButtonSelector;
      this._inactiveButtonClass = data.inactiveButtonClass;
      this._inputErrorClass = data.inputErrorClass;
      this._errorClass = data.errorClass;
      this._formSelector = data.formSelector;
      this._form = form;
      this._inputs = this._form.querySelectorAll(this._inputSelector);
      this._button = this._form.querySelector(this._submitButtonSelector);
  }

  _setEventListeners() {
      this._inputs.forEach((item) => {
          item.addEventListener("input", () => {
              this._toogleButtonState();
              this._isValid(item);
          });
      });
  }

  disableButton() {
      this._inputs.forEach((item) => {
          this._hideInputError(item);
      });
      this._toogleButtonState();
  }

  enableValidation() {
      this._form.addEventListener("submit", (evt) => {
          evt.preventDefault();
      });
      this._setEventListeners();
  }

  _hasInvalidInput() {
      return Array.from(this._inputs).some((inputsElemenent) => {
          return !inputsElemenent.validity.valid;
      });
  }

  _toogleButtonState() {
      if (this._hasInvalidInput()) {
          this._button.setAttribute("disabled", true);
          this._button.classList.add(this._inactiveButtonClass);
      } else {
          this._button.removeAttribute("disabled");
          this._button.classList.remove(this._inactiveButtonClass);
      }
  }

  _isValid(item) {
      if (!item.validity.valid) {
          this._showInputError(item);
      } else {
          this._hideInputError(item);
      }
  }

  _showInputError(item) {
      const errorElement = this._form.querySelector(`.${item.id}-error`);
      item.classList.add(this._inputErrorClass);
      errorElement.textContent = item.validationMessage;
      errorElement.classList.add(this._errorClass);
  }

  _hideInputError(item) {
      const errorElement = this._form.querySelector(`.${item.id}-error`);
      item.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
  }
}
