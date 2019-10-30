// refer to question 2 before development starts for scope document

// get URL query string
function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

console.log("id", id)

var url = "https://api.magicthegathering.io/v1/cards/" + id;


fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    makeTheCard(json);
  });


function makeTheCard(json) {
  console.log(json);

// We need to get the card from the json first
  var card = json.card;

  // this will be the image content
  let imageOutput = "No image";

  // if there is an imageUrl, replace the image content with this
  if(card.imageUrl) {
    imageOutput = `<img src="${card.imageUrl}">`;
  }

  let detailsOutput = `<h2>${card.name}</h2>
                       <div> <b>About:</b> =${card.text}</div>
                       <div> <b>Rarity</b> =${card.rarity}</div>
                       <div> <b>Color</b> =${card.colors.toString()}</div>`;  //toString() to print it out

  document.getElementById('cardImage').innerHTML = imageOutput;
  document.getElementById('cardDetails').innerHTML = detailsOutput;


}
