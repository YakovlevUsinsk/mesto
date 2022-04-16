const initialCards = [
  { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
  { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
  { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
  { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
  { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
  { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

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

const popupUserBtnSave = popupUser.querySelector(".popup__btn-save");
const popupCardsBtnSave = popupCards.querySelector(".popup__btn-save");

const templateElement = document.querySelector(".template").content;
const containerCards = document.querySelector(".elements");

function getCard(item) {
  const cardElement = templateElement.querySelector(".elements__cards").cloneNode(true);
  const nameCard = cardElement.querySelector(".elements__name");
  const imgCard = cardElement.querySelector(".elements__img");
  const btnLikeCard = cardElement.querySelector(".elements__btn");
  const btnDeleteCard = cardElement.querySelector(".elements__btn-delete");
  imgCard.src = item.link;
  imgCard.alt = item.name;
  nameCard.textContent = item.name;
  containerCards.prepend(cardElement);
  imgCard.addEventListener("click", openPopupImg);
  btnLikeCard.addEventListener("click", (evt) => {
      toggleBtnLike(evt);
  });
  btnDeleteCard.addEventListener("click", (evt) => {
      deleteCard(evt);
  });
  return cardElement;
}

function toggleBtnLike(evt) {
  const like = evt.target;
  like.classList.toggle("elements__btn_active");
}

function deleteCard(evt) {
  const deleteElem = evt.target.closest(".elements__cards");
  deleteElem.remove();
}

function render() {
  return initialCards.forEach(getCard);
}

function saveDataUserProfile(evt) {
  evt.preventDefault();
  profileInfoName.textContent = popupUserInputName.value;
  profileInfoInterest.textContent = popupUserInputInters.value;
  deletePopup(popupUser);
}

function openPopupForm(elem) {
  elem.classList.add("popup_opened");
  if (elem.classList.contains("popup__user")) {
      popupUserInputName.value = profileInfoName.textContent;
      popupUserInputInters.value = profileInfoInterest.textContent;
  }
  const popupBtnClose = elem.querySelector(".popup__btn-close");
  popupBtnClose.addEventListener("click", () => deletePopup(elem));
}

function saveDataCard(evt) {
  evt.preventDefault();
  const itemCard = {};
  itemCard.name = textPicture.value;
  itemCard.link = linkPicture.value;
  getCard(itemCard);
  deletePopup(popupCards);
}

function deletePopup(elem) {
  elem.classList.remove("popup_opened");
}

function closesButton(evt) {
  const btnClos = evt.target.closes(".popup");
  return btnClos.classList.contains("popup_users");
}

function openPopupImg(evt) {
  const popupImg = document.querySelector(".popup_img");
  popupImg.classList.add("popup_opened");
  const openImg = evt.target;
  const activeCard = openImg.parentElement;
  const activeCardBtnClose = popupImg.querySelector(".popup__btn-close");
  const activePictureTitle = activeCard.querySelector(".elements__name");
  const popupPicture = popupImg.querySelector(".popup__picture");
  const popupPictureTitle = popupImg.querySelector(".popup__picture-title");
  popupPicture.src = openImg.src;
  popupPicture.alt = activePictureTitle.textContent;
  popupPictureTitle.textContent = activePictureTitle.textContent;
  activeCardBtnClose.addEventListener("click", () => deletePopup(popupImg));
}

render();

profileBtnEdit.addEventListener("click", () => openPopupForm(popupUser));

profileBtnAdd.addEventListener("click", () => openPopupForm(popupCards));

popupCardsBtnSave.addEventListener("click", (evt) => saveDataCard(evt));

popupUserBtnSave.addEventListener("click", (evt) => saveDataUserProfile(evt));
