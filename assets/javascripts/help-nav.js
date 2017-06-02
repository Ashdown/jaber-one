(function ($) {

    'use strict';

    var $this = $('.help-nav'),
        slickCreated = false,
        slickSettings = {
            infinite: true,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            variableWidth: true
        };

    var checkForSlick = function() {
        if (window.innerWidth < 1024) {

            if(!slickCreated) {
                slickCreated = true;
                $this.slick(slickSettings);
            }
            return;
        }
        if(slickCreated) {
            slickCreated = false;
            return $this.slick('unslick');
        }
    };

    $(window).on('resize', checkForSlick);

    checkForSlick();


})(jQuery);