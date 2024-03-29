// refer to question 3 before development starts for scope document

// Assign it to a variable so you can use it
var aboutTextContainer = document.querySelector('#aboutText');

// To get the html inside it
var aboutTextHtml = aboutTextContainer.innerHTML;

// We can use the function
aboutTextContainer.innerHTML = swapText(aboutTextHtml);

function swapText(text){
  var replaceMagic = text.replace(/magic/ig, "something");
  return replaceMagic;
}

var moreInfoContent = document.querySelector('#moreInfoContent');

var moreInfoTrigger = document.querySelector('#moreInfoTrigger');

moreInfoTrigger.addEventListener('click', function() {

  if(moreInfoContent.style.display === "none") {
    moreInfoContent.style.display = "block";
  }
  else {
    moreInfoContent.style.display = "none";
  }

});
