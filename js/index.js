$(document).ready(function() {
  $('.about, .projects, .contact, .press').css({'visibility':'hidden'});

  $(window).scroll(function() { 
    var height = $(window).scrollTop();

    if (height > 190) {
      $('.about').css({"visibility": "visible"}).addClass('animated fadeIn');
      $('.press').css({"visibility": "visible"}).addClass('animated fadeIn');
    }

    if (height > 1190) { 
      $('.projects').css({"visibility": "visible"}).addClass('animated fadeIn');
    }

    if (height > 2500) {
      $('.contact').css({"visibility": "visible"}).addClass('animated fadeIn');
    }

  });

  /* Main button clicks */
  $('body').on('click', '#about', function() {
    $('html, body').animate({
          scrollTop: $(".about").offset().top
    }, 500);
    return false;
  });

  $('body').on('click', '#contact', function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 500);
    return false;
  });

  $('body').on('click', '#projects', function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 500);
    return false;
  });


});
