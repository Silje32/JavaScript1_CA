// refer to question 2 before development starts for scope document

// get URL query string
function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

if(!id) {
  alert("No ID set in URL");
}

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

  var cardDetails = document.querySelector("#cardDetails");
  var cardImage = document.querySelector("#cardImage");

  let imageOutput = `<img src="${json.imageURL}">`;
  let detailsOutput = `<h2>${json.name}</h2>
                       <div> <b>About:</b> =${json.text}</div>
                       <div> <b>Rarity</b> =${json.text}</div>
                       <div> <b>Color</b> =${json.color}</div>`;

  document.getElementById('cardImage').innerHTML = imageOutput;
  document.getElementById('cardDetails').innerHTML = detailsOutput;

}
