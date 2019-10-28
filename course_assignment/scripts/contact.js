// refer to question 4 before development starts for scope document

//Validating that "name" and "last name" inputs are not empty.
function validateWholeName(name) {
  var namePattern = /(\w+)/s(\w+)/;
  if (name.match(namePattern)) {
     result.innerHTML = 'This field cannot be blank';
  }  else {
     result.innerHTML = 'The last name is <strong>valid!</strong>';
    }
}

//Validating that the phone number is correct.
function validatePhone(phone) {
  var phonePattern = /^\d{3}\ \d{3}\ \d{4}\$/;
  if (phone.match(phonePattern)) {
     result.innerHTML = 'Please enter a correct phone number' ;
  }  else {
     result.innerHTML = 'The phone number is <strong>valid!</strong>';
  }
}

//Validating that the e-mail adress are correct.
function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.match(emailPattern)) {
     result.innerHTML = 'Please enter a correct e-mail address';
  }  else {
     result.innerHTML = 'The e-mail adress is <strong>valid!</strong>';
  }
}

//the function will be called inside the form's eventListener
  var form = document.querySelector('form');
  form.addEventListener('submit', function() {
      validateWholeName(this.name.value);
      validatePhone(this.phone.value);
      validateEmail(this.email.value);
});
