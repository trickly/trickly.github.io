$(document).ready(function() {
  $('#about, #work, #projects, .press, #line-separator-dark').css({'visibility':'hidden'});
  $('.hcaption').hcaptions({
    effect: "fade",
    direction: "bottom"
  });
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    var about = $('#about').position();
    var work = $('#work').position();
    var projects = $('#projects').position();
    var contact = $('#contact').position();
    var line1 = $('#line-1').position();
    var line2 = $('#line-2').position();
    console.log(height);
    var interval = 500;
    if (height > about.top -400) {
      $('#about').css({"visibility": "visible"}).addClass('animated fadeIn');
    }
    if (height > work.top -400) {
      $('#work').css({"visibility": "visible"}).addClass('animated fadeIn');
    }
    if (height > projects.top -400) {
      $('#projects').css({"visibility": "visible"}).addClass('animated fadeIn');
    }
    if (height > line1.top -400) {
      $('#line-1').css({"visibility": "visible"}).addClass('animated fadeIn');
    }
    if (height > line2.top -400) {
      $('#line-2').css({"visibility": "visible"}).addClass('animated fadeIn');
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
  $(window).resize(function() {
    $('.hcaption').hcaptions({
      effect: "fade",
      direction: "bottom"
    });
  });


});
