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
function checkPhone(phone) {
  var myPhone = /^d\d\d\d\d\d\d\d\d\d$/;
  if (phone.match(myPhone)) {
     return true;
  }  else {
     alert( "This field cannot be blank" );
     return false;
  }

//Validating that the e-mail adress are correct.
function checkEmail(email) {
  var myEmail = /\w+\.\w+\/;
  if (email.match(myEmail)) {
     return true;
  }) else {
     alert( "This field cannot be blank" );
     return false;
  }
}

// when the submit button is clicked, call a function
mySubmitBtn.addEventListener('click', valid);

function Valid () {
  if  {
     return error;
  }) else {
     alert( "If the value of the textbox is valid, hide the error message" );
     return false;
  }
}
