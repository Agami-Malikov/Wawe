$(function() {
  
  $(".menu a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.blog__slider').slick({
    arrows: false,
    dots: true,
  })
  
  $('.menu__btn, .menu__link').on('click', function(){
    $('.header__inner').toggleClass('header__inner--active');
  });
  
  
  var mixer = mixitup('.gallery__photos'); 
});