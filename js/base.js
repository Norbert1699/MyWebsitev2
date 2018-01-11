require('https://code.jquery.com/jquery-3.2.1.min.js');

//AutoScroll down to content
function findOutMore(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#learnMoreContent").offset().top
  }, 750);
  }
