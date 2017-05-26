(function($) {

    "use strict";

    $('.homepage-hero').slick({
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

})(jQuery);