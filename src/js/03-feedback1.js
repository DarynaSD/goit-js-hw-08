import throttle from 'lodash.throttle';

// пошук елементів у документі
const formElem = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

//відстежити на формі інпут
formElem.addEventListener('input', throttle(handleInput, 500));
formElem.addEventListener('submit', handleSubmit);

//деструктуризація + об'єкт з даними форми + початкові значення для полів
const { email, message } = formElem.elements;
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
email.value = formData.email || '';
message.value = formData.message || '';


//функція при інпуті
function handleInput() {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
    

//фукція при сабміті 
function handleSubmit(event) {
    event.preventDefault();

    if (!email.value || !message.value) {
        alert('Please fill all fields!')
        return;
    }

    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formElem.reset();
}
