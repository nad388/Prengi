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
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

//slider2
      