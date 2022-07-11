export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
  { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
  { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
  { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
  { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
  { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
  { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

export const arrCloseButtons = document.querySelectorAll(".popup__btn-close");
export const popupUsLerInputName = document.querySelector(".popup__input_value_name");
const popupUser = document.querySelector(".popup_users");
export const popupUserInputInters = document.querySelector(".popup__input_value_interest");

export const profileBlock = document.querySelector(".profile");
export const profileBtnEdit = profileBlock.querySelector(".profile__btn-edit");
export const profileBtnAdd = profileBlock.querySelector(".profile__btn-add");
export const popupUserFormSave = popupUser.querySelector(".popup__form");

export const popupCards = document.querySelector(".popup_cards");
export const textPicture = popupCards.querySelector(".popup__input_value_card-name");
export const linkPicture = popupCards.querySelector(".popup__input_value_link-place");
export const popupCardsFormSave = popupCards.querySelector(".popup__form");
export const containerCards = document.querySelector(".elements");
