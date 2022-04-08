let profileForm = document.querySelector ('.profile__info');
let profileName = profileForm.querySelector ('.profile__info-name');//строка имени блока профиля
let profileInterest = profileForm.querySelector ('.profile__info-interest');//строка интересов блока профиля
let btnEdit = profileForm.querySelector ('.profile__btn-edit');//выделение в переменную кнопки edit
let popupBlock = document.querySelector ('.popup');//выделение блока popup в переменную
let clsPopup = popupBlock.querySelector ('.popup__btn-close');//выделение в переменную кнопки close
let formElement = popupBlock.querySelector ('.popup__form');//форма в DOM
let dataField =formElement.querySelectorAll ('.popup__input-text_field');// массив значения value

function toogleForm () {//фунция переключения класса
  dataField[0].placeholder = profileName.textContent;
  dataField[1].placeholder = profileInterest.textContent;
  popupBlock.classList.toggle ('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  profileName.textContent = dataField[0].value; //присвоение
  profileInterest.textContent = dataField[1].value;
  toogleForm ();
}

btnEdit.addEventListener ('click', toogleForm);
clsPopup.addEventListener ('click', toogleForm);
formElement.addEventListener('submit', formSubmitHandler); //обработка события submit
