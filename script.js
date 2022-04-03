let profileForm = document.querySelector ('.profile');
let popupForm = document.querySelector ('.popup');
let btnEdit = profileForm.querySelector ('.profile__btn-edit');
let clsPopup = popupForm.querySelector ('.popup__btn-close');

function openForm () {
    popupForm.classList.remove ('popup_display-none');
}

function closeForm () {
    popupForm.classList.add ('popup_display-none');
}

btnEdit.addEventListener ('click', openForm);
clsPopup.addEventListener ('click', closeForm);

// // Находим форму в DOM
// let formElement = popupForm.querySelector ('.popup__form')// Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = formElement.querySelector (.)// Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);