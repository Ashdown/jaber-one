(function($) {

    'use strict';

    var $this = $('.load-more-link');

    $this.on('click', function(event) {
        event.preventDefault();
        var $currentTarget = $(event.currentTarget),
            $list = $($currentTarget.attr('href')),
            $invisibleImageLinks = $list.find('.article-image-link.hidden');
        console.log($currentTarget.attr('href'));
        console.log($invisibleImageLinks.length);
        for(var i = 0; i < 3; i+=1) {
            $invisibleImageLinks.eq(i).removeClass('hidden');
        }
        if($invisibleImageLinks.length <= 3) {
            $currentTarget.addClass('hidden');
        }
    });

    //turn on links if they are needed

    $this.each(function() {
        var $list = $($(this).attr('href')),
            $invisibleImageLinks = $list.find('.article-image-link.hidden');
        if($invisibleImageLinks.length > 0) {
            $(this).removeClass('hidden');
        }
    });

})(jQuery);