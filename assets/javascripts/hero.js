(function($) {

    "use strict";

    $('.hero').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            }
        ]
    });

})(jQuery);