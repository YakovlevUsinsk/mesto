import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgLink = this._popup.querySelector(".popup__picture");
    this._imgText = this._popup.querySelector(".popup__picture-title");
  }

  open({ name, link }) {
    super.open();
    this._imgLink.src = link;
    this._imgText.alt = name;
    this._imgText.textContent = name;
  }
}
