$(document).ready(function(){
 

    // Owl Carousel
    $('.hero-slider').owlCarousel({
        loop:true,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    //  // Owl Carousel
     $('.slider').owlCarousel({
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });


    // for Nav Active Button
    var nav = "ul.nav li a";
        $(nav).on("click", function(){
        $(nav).removeClass("active");
        $(this).addClass("active");
    });

    // For Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1500
      });

    new WOW().init();

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        });
       // filter items on button click
     
        $('.filter-button-group').on( 'click', 'button', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
     
         // filter items on button active
         $(this).addClass('active').siblings().removeClass('active');
         });


});



