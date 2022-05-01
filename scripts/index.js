const initialCards = [
  { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
  { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
  { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
  { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
  { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
  { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

const arrCloseButtons = document.querySelectorAll(".popup__btn-close");

const popupUser = document.querySelector(".popup_users");
const popupUserInputName = popupUser.querySelector(".popup__input_value_name");
const popupUserInputInters = popupUser.querySelector(".popup__input_value_interest");

const popupCards = document.querySelector(".popup_cards");
const textPicture = popupCards.querySelector(".popup__input_value_card-name");
const linkPicture = popupCards.querySelector(".popup__input_value_link-place");

const profileBlock = document.querySelector(".profile");
const profileBtnEdit = profileBlock.querySelector(".profile__btn-edit");
const profileBtnAdd = profileBlock.querySelector(".profile__btn-add");
const profileInfoName = profileBlock.querySelector(".profile__info-name"); //строка имени блока профиля
const profileInfoInterest = profileBlock.querySelector(".profile__info-interest"); //строка интересов блока профиля

const popupImg = document.querySelector(".popup_img");
const picturePopupImg = popupImg.querySelector(".popup__picture");
const textPopupImg = popupImg.querySelector(".popup__picture-title");

const popupUserFormSave = popupUser.querySelector(".popup__form");
const popupCardsFormSave = popupCards.querySelector(".popup__form");

const templateElement = document.querySelector(".template").content;
const containerCards = document.querySelector(".elements");

function createCard(item) {
  const cardElement = templateElement.querySelector(".elements__cards").cloneNode(true);
  const nameCard = cardElement.querySelector(".elements__name");
  const imgCard = cardElement.querySelector(".elements__img");
  const btnLikeCard = cardElement.querySelector(".elements__btn");
  const btnDeleteCard = cardElement.querySelector(".elements__btn-delete");
  imgCard.src = item.link;
  imgCard.alt = item.name;
  nameCard.textContent = item.name;
  btnLikeCard.addEventListener("click", (evt) => toggleBtnLike(evt));
  btnDeleteCard.addEventListener("click", (evt) => deleteCard(evt));
  imgCard.addEventListener("click", () => openImg(item));
  return cardElement;
}

function getCard(item) {
  containerCards.prepend(createCard(item));
}

function render() {
  return initialCards.forEach(getCard);
}

function openAddCard() {
  openPopup(popupCards);
  const inputList = Array.from(popupCards.querySelectorAll(config.inputSelector));
  const buttonElement = popupCards.querySelector(config.submitButtonSelector);
  toogleButtonState (inputList, buttonElement, config);
}

function saveDataCard(evt) {
  evt.preventDefault();
  const itemCard = {};
  itemCard.name = textPicture.value;
  itemCard.link = linkPicture.value;
  const card = createCard(itemCard);
  containerCards.prepend(card);
  closePopup(popupCards);
  popupCardsFormSave.reset();
}

function openEditPopupProfile() {
  popupUserInputName.value = profileInfoName.textContent;
  popupUserInputInters.value = profileInfoInterest.textContent;
  openPopup(popupUser);
}

function saveDataProfile(evt) {
  evt.preventDefault();
  profileInfoName.textContent = popupUserInputName.value;
  profileInfoInterest.textContent = popupUserInputInters.value;
  closePopup(popupUser);
}

function openImg(item) {
  picturePopupImg.src = item.link;
  picturePopupImg.alt = item.name;
  textPopupImg.textContent = item.name;
  openPopup(popupImg);
}

function toggleBtnLike(evt) {
  evt.target.classList.toggle("elements__btn_active");
}

function deleteCard(evt) {
  evt.target.closest(".elements__cards").remove();
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  const popupOpened = document.querySelector('.popup_opened');
  popupOpened.addEventListener('click', closeOverlay);
  document.addEventListener('keyup', closeEscape);
}

function closeOverlay (evt) {
  if(evt.target == evt.currentTarget) {
    closePopup (evt.target);
  }
}

function closeEscape (evt) {
  if(evt.key == 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

function closePopup(item) {
  item.removeEventListener('click', closeOverlay);
  document.removeEventListener('keyup', closeEscape);
  item.classList.remove("popup_opened");
}

arrCloseButtons.forEach((item) => {
  item.addEventListener("click", (evt) => {
    closePopup(evt.target.closest(".popup"));
  });
});
profileBtnEdit.addEventListener("click", openEditPopupProfile);

profileBtnAdd.addEventListener("click", openAddCard);

popupCardsFormSave.addEventListener("submit", saveDataCard);

popupUserFormSave.addEventListener("submit", saveDataProfile);

render();
