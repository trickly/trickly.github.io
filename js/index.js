$(document).ready(function() {
  $('#about, #work, #projects, .press, #line-separator-dark').css({'visibility':'hidden'});

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    var about = $('#about').position();
    var work = $('#work').position();
    var projects = $('#projects').position();
    var contact = $('#contact').position();
    var line1 = $('#line-1').position();
    var line2 = $('#line-2').position();

    var interval = 500;
    if (height > about.top -100) {
      $('#about').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, interval);
    }
    if (height > work.top -100) {
      $('#work').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, interval);
    }
    if (height > projects.top -100) {
      $('#projects').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, interval);
    }
    if (height > line1.top -100) {
      $('#line-1').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, interval);
    }
    if (height > line2.top -100) {
      $('#line-2').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, interval);
    }

  });

  /* Main button clicks */
  $('body').on('click', '#nav-about', function() {
    $('html, body').animate({
          scrollTop: $("#about").offset().top
    }, 500);
    return false;
  });

  $('body').on('click', '#nav-contact', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
    return false;
  });
  $('body').on('click', '#nav-work', function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 500);
    return false;
  });

  $('body').on('click', '#nav-projects', function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500);
    return false;
  });


});
