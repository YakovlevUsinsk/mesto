import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";

export const initialCards = [
    { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
    { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
    { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
    { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
    { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
    { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__btn-save",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

const arrCloseButtons = document.querySelectorAll(".popup__btn-close");

const popupUser = document.querySelector(".popup_users");
const popupUserInputName = popupUser.querySelector(".popup__input_value_name");
const popupUserInputInters = popupUser.querySelector(".popup__input_value_interest");

const profileBlock = document.querySelector(".profile");
const profileBtnEdit = profileBlock.querySelector(".profile__btn-edit");
const profileBtnAdd = profileBlock.querySelector(".profile__btn-add");
const profileInfoName = profileBlock.querySelector(".profile__info-name"); //строка имени блока профиля
const profileInfoInterest = profileBlock.querySelector(".profile__info-interest");
const popupUserFormSave = popupUser.querySelector(".popup__form");

const popupCards = document.querySelector(".popup_cards");
const textPicture = popupCards.querySelector(".popup__input_value_card-name");
const linkPicture = popupCards.querySelector(".popup__input_value_link-place");
const popupCardsFormSave = popupCards.querySelector(".popup__form");
const containerCards = document.querySelector(".elements");

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    popup.addEventListener("click", closeOverlay);
    document.addEventListener("keyup", handleEscape);
}

function closeOverlay(evt) {
    if (evt.target == evt.currentTarget) {
        closePopup(evt.target);
    }
}

function handleEscape(evt) {
    if (evt.key == "Escape") {
        const activePopup = document.querySelector(".popup_opened");
        closePopup(activePopup);
    }
}

function closePopup(item) {
    item.removeEventListener("click", closeOverlay);
    document.removeEventListener("keyup", handleEscape);
    item.classList.remove("popup_opened");
}

function createCard (obj) {
  return new Card (obj, ".template").generadeCards();
}

arrCloseButtons.forEach((item) => {
    item.addEventListener("click", (evt) => {
        closePopup(evt.target.closest(".popup"));
    });
});

initialCards.forEach((item) => {
    const cardElement = createCard(item);
    containerCards.prepend(cardElement);
});

function openEditPopupProfile() {
    popupUserInputName.value = profileInfoName.textContent;
    popupUserInputInters.value = profileInfoInterest.textContent;
    editFormValidator.resetValidation();
    openPopup(popupUser);
}

function saveDataProfile(evt) {
    evt.preventDefault();
    profileInfoName.textContent = popupUserInputName.value;
    profileInfoInterest.textContent = popupUserInputInters.value;
    closePopup(popupUser);
}

function openAddCard() {
    openPopup(popupCards);
    cardFormValidator.resetValidation();
}

function saveDataCard(evt) {
    evt.preventDefault();
    const cardItem = {};
    cardItem.name = textPicture.value;
    cardItem.link = linkPicture.value;
    const card = createCard(cardItem);
    containerCards.prepend(card);
    closePopup(popupCards);
    popupCardsFormSave.reset();
}

profileBtnEdit.addEventListener("click", openEditPopupProfile);
popupUserFormSave.addEventListener("submit", saveDataProfile);

profileBtnAdd.addEventListener("click", openAddCard);
popupCardsFormSave.addEventListener("submit", saveDataCard);

const cardFormValidator = new FormValidator(config, popupCardsFormSave);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, popupUserFormSave);
editFormValidator.enableValidation();
