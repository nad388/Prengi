//slider1

$(document).ready(function(){
    $('.slider1__inner').slick({
        dots: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrowhd-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrowhd-right.svg"</button>',
        responsive: [
            {
                breakpoint: 1890,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });

      //modall
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation').fadeOut('slow');
    });
    //Smooth scroll and page up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
        } else {
        $('.pageup').fadeOut();
        }
    });

    $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });

    new WOW().init();

    
});

  

 



