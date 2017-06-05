(function($){

    'use strict';

    var $this = $('.video-results'),
        $list = $this.find('.video-results-list'),
        slickCreated = false,
        slickSettings = {
            infinite: true,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            centerMode: true,
            variableWidth: true
        };

    var checkForSlick = function() {
        if (window.innerWidth < 1024) {

            if(!slickCreated) {
                slickCreated = true;
                $list.slick(slickSettings);
            }
            return;
        }
        if(slickCreated) {
            slickCreated = false;
            return $list.slick('unslick');
        }
    };

    $(window).on('resize', checkForSlick);

    checkForSlick();

})(jQuery);