import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';

import {
    popupUserInputInters,
    profileBtnEdit,
    profileBtnAdd,
    popupUserFormSave,
    popupCardsFormSave,
    initialCards,
    config,
    popupUsLerInputName,
} from '../utils/constants.js';

const cardFormValidator = new FormValidator(config, popupCardsFormSave);
cardFormValidator.enableValidation();


const editFormValidator = new FormValidator(config, popupUserFormSave);
editFormValidator.enableValidation();

const popupWithImage = new PopupWithImage ('.popup_img');
popupWithImage.setEventListeners();

const cardArr = new Section ({items: initialCards, renderer: (element) => {
   const card = new Card ({data: element, handleCardClick: () => {
    popupWithImage.open(element);
   }}, '.template');
   const cardElement = card.generadeCards();
   cardArr.addItem(cardElement);
}}, '.elements');
cardArr.renderItems();


const userInfo = new UserInfo({nameUserSelector: '.profile__info-name', interesUserSelector: '.profile__info-interest'});
const popupUserInfo = new PopupWithForm({popupSelector: '.popup_users', handleFormSubmit: (item) => {
   
userInfo.setUserInfo(item);
popupUserInfo.setEventListeners();

}}, config);


profileBtnEdit.addEventListener('click', () => {

    popupUsLerInputName.value = userInfo.getUserInfo()['user-name'];
    popupUserInputInters.value = userInfo.getUserInfo()['user-interest'];
    popupUserInfo.open();
})



const popupEditCard = new PopupWithForm({popupSelector: '.popup_cards', handleFormSubmit: (item) => {
    const data = {name: item['card-name'], link: item['link-place']};
    const card = new Card ({data, handleCardClick: () =>{
        
        
        popupWithImage.open(data);
    
}}, '.template');
   const cardElement = card.generadeCards();
   cardArr.addItem(cardElement)
    
    }}, config);


profileBtnAdd.addEventListener('click', () => {
    cardFormValidator.resetValidation();
    popupEditCard.open();
});

