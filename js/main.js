(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
        function isotopeInit() {
            $('.project_items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.project_filter_menu ul li').on('click', function () {
                $('.project_filter_menu ul li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.project_items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //10. Client Slider Initialize
        function client_carouselInit() {
            $('.owl-carousel.client_carousel').owlCarousel({
                loop: true,
                margin: 30,
                items: 5,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 2
                    },
                    575:{
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }
        client_carouselInit();

        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);
//   12. slike sliber
$(document).ready(function() {
    $('.slider-active').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.slider-active').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);    
    });
    $('.slider-active').slick({
       autoplay: true,
       autoplaySpeed: 10000,
       dots: true,
       fade: true,
       arrows:true,
       prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
       nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
       responsive:[{
            breakpoint:767, setting:{ dots:false, arrows:false}
       }]

    
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});

// progressbar
$('.skill-area').on('inview', function(event, visible) {
    if (visible) {
        
        $('.project-percent').each(function(){
            var $this = $(this);
            var percent = $this.attr('percent');
            $this.css("width",percent+'%');
            $({animatedValue: 0}).animate({animatedValue: percent},{
                duration: 2000,
                step: function(){
                    $this.attr('percent', Math.floor(this.animatedValue) + '%');
                },
                complete: function(){
                    $this.attr('percent', Math.floor(this.animatedValue) + '%');
                }
            });
        });
        $(this).unbind('inview');
    }
});
// counter 
$('.counter_area').on('inview', function(event, visible) {
    if (visible) {
        $(this).find('.count').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).unbind('inview');
    }
});
// snake
$(".snake").snakeify({
    speed: 200
});
// niceSelect
$(document).ready(function() {
    $('select').niceSelect();
  });
// logo carousel 
  function client_carouselInit() {
    $('.owl-carousel.logo-carousel').owlCarousel({
        loop: true,
        margin: 130,
        items: 5,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            575:{
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });
}
client_carouselInit();

function testi_carousel() {
    $('.owl-carousel.testimonial-slider').owlCarousel({
        nav:false,
        loop: true,
        dots: true,
        margin: 30,
        stagePadding: 2,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,

    });
}
testi_carousel();