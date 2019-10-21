// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

function makeCards(json) {
    var cardArray = json.cards;
// get your cards array from the json object and then loop through them.

console.log()
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
