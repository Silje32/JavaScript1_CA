// refer to question 4 before development starts for scope document

//Validating that "name" and "last name" inputs are not empty.
function checkName(name) {
  var myName = /(\w+)/;
  if (name.match(myName)) {
     return true;
  }  else {
     alert( "This field cannot be blank" );
     return false;
  }
}


function checkLastName(lastname) {
  var myLastName = /(\w+)/;
  if (lastname.match(myLastName)) {
     return true;
  }  else {
     alert( "This field cannot be blank" );
     return false;
  }
}


//Validating that the phone number is correct.
function validatePhone(phone) {
  var phonePattern = /^\d{3}\ \d{3}\ \d{4}\$/;
  if (phone.match(phonePattern)) {
     return true;
  }  else {
     alert( "This field cannot be blank" );
     return false;
  }


//Validating that the e-mail adress are correct.
function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.match(emailPattern)) {
     return true;
  }  else {
     alert( "This field cannot be blank" );
     return false;
     console.log(validateEmail('silje24@yahoo.com'));
  }
}



// when the submit button is clicked, call a function
mySubmitBtn.addEventListener('click', valid);

function Valid () {
  if (Valid) {
     return error;
  }  else {
     alert( "If the value of the textbox is valid, hide the error message" );
     return false;
  }
}
