var siteInput = document.getElementById('websites');

var urlInput = document.getElementById('url')

var siteOne = document.getElementById('web1');

var submitButton = document.getElementById('enter')

var urlOne = document.getElementById('url1')

submitButton.addEventListener('click', function() {
  var newWebsite = siteInput.value;
  var newUrl = urlInput.value;
  siteOne.innerText = newWebsite;
  urlOne.innerText = newUrl;
})
