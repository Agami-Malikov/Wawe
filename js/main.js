$(function () {

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.blog__slider').slick({
    arrows: false,
    dots: true,
  })

  $('.menu__btn, .menu__link').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.header__inner').addClass('header__inner--fixed');
    }
    else {
      $('.header__inner').removeClass('header__inner--fixed');
    }
  });

  var mixer = mixitup('.gallery__photos');

});