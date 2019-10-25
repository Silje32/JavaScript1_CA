// refer to question 2 before development starts for scope document

// get URL query string
function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

var url = "https://api.magicthegathering.io/v1/cards/" + id;

fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    makeTheCard(json);
  })


function makeTheCard(json) {
  console.log(json);

}
