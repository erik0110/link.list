var bookmarkCounter = 0;

$('.enter').on('click', addCards)


$('#right-half').on('click', '#delete', removeCard)
                .on('click', '#read', readEnabled );

$('#inputs').on('keydown', validateEnter);
function removeCard(e) {
  $(e.target).parent().remove();
}
function readEnabled(e) {
  $(e.target).toggleClass('read-enabled')
}
function addCards(e) {
  e.preventDefault();
  var newSite = $('#websites').val();
  var newUrl = $('#urlInput').val();
  bookmarkCounter++;
  appenBookmark(bookmarkCounter, newSite, newUrl)
  }
function appenBookmark(bookmarkCounter, newSite, newUrl){
  $('#right-half').append(`
    <div id="book-${bookmarkCounter}" class="bookmark">
      <p id="web-${bookmarkCounter}" class="titles">${newSite}</p>
      <hr />
      <p id="url-${bookmarkCounter}" class="urls underlined">${newUrl}</p>
      <hr />
      <button id="read" class="right-buttons underlined">Read</button>
      <button id="delete" class="right-buttons underlined">Delete</button>
    </div>
    `)
}
function validateEnter() {
  var newSite = $('#websites').val();
  var newUrl = $('#urlInput').val();
  if ((newSite === "") || (newUrl === "")) {
    $('.enter').attr('disabled', true);
  }
  else { $('.enter').attr('disabled', false)
  }
}
