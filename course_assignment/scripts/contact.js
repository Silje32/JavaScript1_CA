// refer to question 4 before development starts for scope document

//Validating that "name" and "last name" inputs are not empty.
function validateFirstName(name) {
   var firstNameError = document.querySelector("#firstNameError");

   if (name.length === 0) {
       firstNameError.style.display = "block";
   }
   else {
       firstNameError.style.display = "none";
   }
 }

 function validateLastName(lastname) {
    var lastNameError = document.querySelector("#lastNameError");

    if (name.length === 0) {
        lastNameError.style.display = "block";
    }
    else {
        lastNameError.style.display = "none";
    }
  }


 //Validating that the phone number is correct.
 function validatePhone(phone) {
   var phoneError = document.querySelector("#phoneError");

   if (phone === /^\d{3}\ \d{3}\ \d{4}\$/); {
       phoneError.style.display = "block";
   }
   else {
       phoneError.style.display = "none";
   }
 }


 //Validating that the e-mail adress is correct.
 function validateEmail(email) {
   var emailError = document.querySelector("#emailError");

   if (email ===  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/); {
     emailError.style.display = "block";
   }
   else {
     emailError.style.display = "none";
   }
 }


 //the function will be called inside the form's eventListener
 var form = document.querySelector('form');

 form.addEventListener('submit', function(event) {

   event.preventDefault();

   validateFirstName(this.firstName.value);
   validateLastName(this.lastName.value);
   validatePhone(this.phone.value);
   validateEmail(this.email.value);
 });
