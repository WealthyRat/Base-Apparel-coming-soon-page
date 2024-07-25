
const myContainer = document.querySelector('.container');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const validationText = document.createElement('p');
const iconError = document.createElement('img')

function handleSubmit(event) {

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    //
    validationText.classList.add('validation-text');
    iconError.classList.add('icon-error')
    myContainer.appendChild(validationText);
    emailInput.parentNode.insertBefore(iconError, emailInput.nextSibling);
    event.preventDefault();
    emailInput.classList.add('active')

    if(validateEmail(email)) {
        console.log(true)
        validationText.innerHTML = 'Thank you for adding your email!';
        validationText.classList.add('valid-text');
        validationText.classList.remove('invalid-text');
        iconError.remove();
        emailInput.classList.add('my-email');
        emailInput.classList.remove('active');
    } else {
        console.log(false)
        validationText.innerHTML = "Please provide a valid email";
        validationText.classList.remove('valid-text')
        validationText.classList.add('invalid-text')
        iconError.src = 'images/icon-error.svg';
        emailInput.classList.remove('my-email')
        emailInput.classList.add('active');
    }
}

document.querySelector('.my-form').addEventListener('submit', handleSubmit)


