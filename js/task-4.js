var form = document.querySelector('form');
var onFormSubmit = function (evt) {
  evt.preventDefault();
  var emailValue = this.elements.email.value.trim();
  var passwordValue = this.elements.password.value.trim();

  var formIsNotFilled = !emailValue || !passwordValue;
  if (formIsNotFilled) {
    alert('All form fields must be filled in');
  } else {
    console.log({
      email: emailValue,
      password: passwordValue,
    });
    this.reset();
  }
};
form.addEventListener('submit', onFormSubmit);
