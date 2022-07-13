import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import { popupUserInputInters, profileBtnEdit, profileBtnAdd, popupUserFormSave, popupCardsFormSave, initialCards, config, popupUsLerInputName } from "../utils/constants.js";

const cardFormValidator = new FormValidator(config, popupCardsFormSave);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, popupUserFormSave);
editFormValidator.enableValidation();

const popupWithImage = new PopupWithImage(".popup_img");
popupWithImage.setEventListeners();

function cardCreate (item) {
  const card = new Card ({data: item, handleCardClick: () => {
    popupWithImage.open(item);
  }}, '.template');
  const cardElement = card.generadeCards();
  return cardElement
}


const cardArr = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const cardElement = cardCreate(element);
      cardArr.addItem(cardElement);
    },
  },
  ".elements"
);
cardArr.renderItems();

const userInfo = new UserInfo({ nameUserSelector: ".profile__info-name", interesUserSelector: ".profile__info-interest" });
const popupUserInfo = new PopupWithForm(
  {
    popupSelector: ".popup_users",
    handleFormSubmit: (item) => {
      userInfo.setUserInfo(item);
    }
  },
  config
  );

  popupUserInfo.setEventListeners();


profileBtnEdit.addEventListener("click", () => {
  const{"user-name": name, "user-interest": job} = userInfo.getUserInfo();
  popupUsLerInputName.value = name;
  popupUserInputInters.value = job;
  popupUserInfo.open();
});

const popupEditCard = new PopupWithForm(
  {
    popupSelector: ".popup_cards",
    handleFormSubmit: (item) => {
      const data = { name: item["card-name"], link: item["link-place"] };
      const cardElement = cardCreate(data);
      cardArr.addItem(cardElement);
    },
  },
  config
);

popupEditCard.setEventListeners();

profileBtnAdd.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  popupEditCard.open();
});
