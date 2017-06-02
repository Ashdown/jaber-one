(function($, window) {

    'use strict';

    var $this = $('.load-more-link');

    $this.on('click', function(event) {
        event.preventDefault();
        var $currentTarget = $(event.currentTarget),
            $list = $($currentTarget.attr('href')),
            $invisibleImageLinks = $list.find('.article-image-link.hidden'),
            counter,
            interval;
        for(counter = 0; counter < 3; counter+=1) {
            $invisibleImageLinks.eq(counter).addClass('invisible').removeClass('hidden');
        }
        if($invisibleImageLinks.length <= 3) {
            $currentTarget.addClass('hidden');
        }

        function revealImageLink(index) {
            $invisibleImageLinks.eq(index).removeClass('invisible');
        }
        counter = 0;

        interval = window.setInterval(function(){
            if(counter >= 3) {
                clearInterval(interval);
            } else {
                revealImageLink(counter++);
            }
        },200);
    });

    //turn on links if they are needed

    $this.each(function() {
        var $list = $($(this).attr('href')),
            $invisibleImageLinks = $list.find('.article-image-link.hidden');
        if($invisibleImageLinks.length > 0) {
            $(this).removeClass('hidden');
        }
    });

})(jQuery, window);