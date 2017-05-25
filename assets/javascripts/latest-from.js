(function($){
    'use strict';
    $('.latest-from .news-articles').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        variableWidth: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: "unslick"
            }
        ]
    });

})(jQuery);