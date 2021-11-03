$(function(){

	$('.reviews-slider').slick({
		 infinite: true,
 		 slidesToShow: 2,
  		slidesToScroll: 2,
  		arrows:false,
  		dots:true,
  		 autoplaySpeed: 1000,
  		 autoplay: true,
         responsive: [
    {
      breakpoint: 1106,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
	});

    $('.btn__menu').on('click', function(){
      $('ul.menu__list').slideToggle(400);
    });


});

  function slowScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 700) ;
    }
        
        $(document).on("scroll", function () {
          if($(window).scrollTop() === 0)
            $("header").removeClass("fixed");
          else
            $("header").attr("class", "fixed");

        });