(function($){

    'use strict';

    var $this = $('.news-menu');

//    $this.find('.link').on('click', function(event) {
//        event.preventDefault();
//        var $newContent = $($(event.currentTarget).attr('href'));
//        $('.news-menu-content').removeClass('visible');
//        $newContent.addClass('visible');
//    });


    $this.find('.menu-link').on('click', function(event) {
        event.preventDefault();
        $this.toggleClass('open');
    })

})(jQuery);