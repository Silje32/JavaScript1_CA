// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

function makeCards(json) {
    var cardArray = json.cards;

    let output = "";
// get your cards array from the json object and then loop through them.
cardArray.forEach(function(card) {
console.log(card.name)
output += ` <div class = "col-sm-4">
            <div class = "card-container">
            <h4> Card Name: ${card.name}> <h4>
            <img scr = "${card.imageURL}">
            <a href = "card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
            </div>
            </div> `;
})
document.getElementById('output').innerHTML = output;
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
