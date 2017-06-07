(function($) {

    "use strict";

    var $this = $('.homepage-hero');

    $this.find('.content-list').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $this.find('.scroll-down-link').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
                scrollTop: $this.height() - $('.header').height()},
            'slow');

    });



})(jQuery);