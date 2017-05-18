var bookmarkCounter = 0;
var readCounter = 0;

$('.enter').on('click', addCards)

$('#right-half').on('click', '#delete', removeCard)
                .on('click', '#read', readEnabled);

$('#inputs').on('keydown', validateEnter);

$('#left-half').on('click', '.clear', removeRead);

$('#urlInput').on('input', function() {
  var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
  if(re.test($(this).val())) {
    $('.enter').attr('disabled', false);
    $('.error-message').text('')
  }
  else { $('.enter').attr('disabled', true);
  $('.error-message').text('This is not a valid URL yet...')
  }
});

function removeRead(e) {
  readCounter=0;
  e.preventDefault();
  $('.read').removeClass('read-enabled')
  $('.read-counter').text("Total Sites Read " + readCounter);
}
function removeCard(e) {
  $(e.target).parent().remove();
  bookmarkCounter--;
  $('.card-counter').text("Total Bookmarks " + bookmarkCounter);
}
function readEnabled(e) {
  if (e.target.classList.contains('read-enabled')) {
    readCounter--;
  }
  else {
    readCounter++;
  }
  $(e.target).toggleClass('read-enabled');
  $('.read-counter').text("Total Sites Read " + readCounter);
}
function addCards(e) {
  e.preventDefault();
  var newSite = $('#websites').val();
  var newUrl = $('#urlInput').val();
    bookmarkCounter++;
    appenBookmark(bookmarkCounter, newSite, newUrl)
    $('.card-counter').text("Total Bookmarks " + bookmarkCounter);
  }
function appenBookmark(bookmarkCounter, newSite, newUrl){
  $('#card-container').append(`
    <div id="book-${bookmarkCounter}" class="bookmark">
      <p id="web-${bookmarkCounter}" class="titles">${newSite}</p>
      <hr />
      <p id="url-${bookmarkCounter}" class="urls underlined" >${newUrl}</p>
      <hr />
      <button id="read" class="read right-buttons underlined">Read</button>
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
