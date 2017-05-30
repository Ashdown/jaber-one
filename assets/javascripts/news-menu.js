(function($){

    'use strict';

    var $this = $('.news-menu');

    $this.find('.link').on('click', function(event) {
        event.preventDefault();
        var $newContent = $($(event.currentTarget).attr('href'));
        $('.news-menu-content').removeClass('visible');
        $newContent.addClass('visible');
    });

})(jQuery);