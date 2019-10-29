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

	if (lastname.length === 0) {
		lastNameError.style.display = "block";
	}
	else {
		lastNameError.style.display = "none";
	}
}


//Validating that the phone number is correct.
 function validatePhone(phone) {
	var phoneError = document.querySelector("#phoneError");
	var phonePattern = /^\d{3}\ \d{3}\ \d{4}$/;

/* The exclamation mark checks if the pattern doesn't match so if it doesn't
   match display the error otherwise hide the error */
	if (!phone.match(phonePattern)) {
		phoneError.style.display = "block";
	}
	else {
		phoneError.style.display = "none";
	}
}


 //Validating that the e-mail adress is correct.
 function validateEmail(email) {
	 var emailError = document.querySelector("#emailError");
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

/* The exclamation mark checks if the pattern doesn't match so if it doesn't
	 match display the error otherwise hide the error */
	 if (!email.match(emailPattern)) {
		 emailError.style.display = "block";
	 }
	 else {
		 emailError.style.display = "none";
	 }
 }


 //The function will be called inside the form's eventListener
 var form = document.querySelector('form');

 form.addEventListener('submit', function(event) {

	 event.preventDefault();

	 validateFirstName(this.firstName.value);
	 validateLastName(this.lastName.value);
	 validatePhone(this.phone.value);
	 validateEmail(this.email.value);
 });
