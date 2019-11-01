// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

function makeCards(json) {

	console.log(json)
	var cardArray = json.cards;
	let output = "";

	// get your cards array from the json object and then loop through them.
	cardArray.forEach(function(card) {

		// set the imageURl to the placeholder
		let imageUrl = "https://via.placeholder.com/223x310";

		//check if the card has an image
		if(card.imageUrl) {
			// it does have an image
			// set the imageUrl to the one on the card
			imageUrl = card.imageUrl;
		}

		output += `<div class="col-sm-4">
					<div class="card-container">
						<h4>${card.name}</h4>
						<img src="${imageUrl}">
						<a href="card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
					</div>
				</div>`;
	})
	document.getElementById('cards').innerHTML = output;
}


fetch('https://api.magicthegathering.io/v1/cards')
	// the first .then convert the result to JSON format.
	.then(function(response) {
		return response.json ()
	})
	// the second .then calls the function.
	.then(function(json) {
		console.log(json);
		makeCards(json);
	})


// find the button and put it in a variable
var mySearchBtn = document.querySelector('#searchButton');
// this is the same as var mySearchBtn = document.getElementById('searchButton');


// when the button is clicked, call a function
mySearchBtn.addEventListener('click', search); // search is the function we will call

function search() {
	//1. get the value from the search box and put it in a variable.
	var mySearch = document.querySelector('#search');

  	var searchValue = mySearch.value

	//2. do the same API call as above and put the results in a variable as an array.
	fetch('https://api.magicthegathering.io/v1/cards')
		// the first .then convert the result to JSON format.
		.then(function(response) {
			return response.json ()
		})
		// the second .then calls the function.
		.then(function(json) {
			console.log(json);
			makeFilteredCards(json, searchValue);
		})

}

//3. filter the array and get only the cards whose name begins with the value in the search box.
function makeFilteredCards(json, searchValue) {

	// get the card array
	var cardArray = json.cards;

	// filter the card array
	// the filter function loops over an array and creates another array based on the test inside the function
	var filteredCards = cardArray.filter(function(card) {

		// converting the card name and the search string to all lowercase so that the test works
		// if the card name startsWith the searchString, we return true - that means we add it into the new array
		// the new array is filteredCards

		if(card.name.toLowerCase().startsWith(searchValue.toLowerCase())) {
			return true
		}
	})

	console.log(filteredCards)

	let filteredOutput = "";

	//4. loop over filteredCards and create the html like above
	filteredCards.forEach(function(card) {

		// set the imageURl to the placeholder
		let imageUrl = "https://via.placeholder.com/223x310";

		//check if the card has an image
		if(card.imageUrl) {
			// it does have an image
			// set the imageUrl to the one on the card
			imageUrl = card.imageUrl;
		}

		filteredOutput += `<div class="col-sm-4">
					<div class="card-container">
						<h4>${card.name}</h4>
						<img src="${imageUrl}">
						<a href="card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
					</div>
				</div>`;
	})
	document.getElementById('cards').innerHTML = filteredOutput;
}
