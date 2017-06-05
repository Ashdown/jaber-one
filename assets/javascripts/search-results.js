(function($) {
    'use strict';
    var $this = $('.search-results'),
        $results = $this.find('.search-item'),
        interval,
        counter = 0;

    function revealSearchResult(index) {
        $results.eq(index).addClass('visible');
    }


    $this.find('.read-more-link').on('click', function(event) {
        event.preventDefault();
        var $link = $(event.currentTarget),
            $item = $link.closest('.search-item');
        $item.find('.preview .text').html($item.find('.extract').html());
        $link.addClass('hidden');
    });


    //populate extract from preview
    $this.find('.search-item').each(function() {
        var $item = $(this);
        $item.find('.preview .text').html($item.find('.extract').text().substring(0, 161) + '...');
    });

    //reveal the search results

    interval = window.setInterval(function(){
        if(counter >= $results.length) {
            clearInterval(interval);
        } else {
            revealSearchResult(counter);
            counter += 1;
        }
    },200);

})(jQuery);