let profileForm = document.querySelector ('.profile__info');
let profileName = profileForm.querySelector ('.profile__info-name');//строка имени блока профиля
let profileInterest = profileForm.querySelector ('.profile__info-interest');//строка интересов блока профиля
let btnEdit = profileForm.querySelector ('.profile__btn-edit');//выделение в переменную кнопки edit
let popupBlock = document.querySelector ('.popup');//выделение блока popup в переменную
let clsPopup = popupBlock.querySelector ('.popup__btn-close');//выделение в переменную кнопки close

function toogleForm () {//фунция переключения класса 
    popupBlock.classList.toggle ('popup_opened');
}

clsPopup.addEventListener ('click', toogleForm);
btnEdit.addEventListener ('click', toogleForm);

let formElement = popupBlock.querySelector ('.popup__content');//форма в DOM
let nameInput = formElement.querySelector ('#name-user');//выделение строки ввода имени
let jobInput = formElement.querySelector ('#name-interest');//выделение строки ввода хобби

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = nameInput.value; //присвоение 
    profileInterest.textContent = jobInput.value;
    toogleForm ();
}

formElement.addEventListener('submit', formSubmitHandler); //обработка события submit