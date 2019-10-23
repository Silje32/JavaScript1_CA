// refer to question 2 before development starts for scope document
// get URL query string
fetch('https://api.magicthegathering.io/v1/cards/3b072bac-4508-5bfa-adc3-13a9163284d3')
  .then(function(response) {
  return response.json ()
})
   // the second .then calls the function.
  .then(function(json) {
   console.log(json);
   getQueryStringValue("id");
})

function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");
