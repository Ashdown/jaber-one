(function($){
    'use strict';

    var $this = $('.latest-from .news-articles'),
        slickCreated = false,
        slickSettings = {
            infinite: true,
            arrows: false,
            dots: true,
            centerMode: false,
            variableWidth: true,
            slidesToShow: 2
        };

    var checkForSlick = function() {
        if (window.innerWidth < 1024) {

            if(!slickCreated) {
                slickCreated = true;
                $this.slick(slickSettings);
            }
            return
        }
        if(slickCreated) {
            slickCreated = false;
            return $this.slick('unslick');
        }
    };

    $(window).on('resize', checkForSlick);

    checkForSlick();

})(jQuery);