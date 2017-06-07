(function($){
    'use strict';

    var $this = $('.showcase'),
        $links = $this.find('.link'),
        scrollOffset = 150;

    //function checks if an element has scrolled into view
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top + scrollOffset,
            elemBottom = elemTop + $(elem).height() - scrollOffset;

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    $(window).scroll(function(){
        $links.each(function(){
            var $link = $(this);
            if(elementScrolled($link)) {
                $link.addClass('animate');
            } else {
                $link.removeClass('animate');
            }
        });

    });

    $this.find('.link').mouseenter(function(event) {
        $(event.currentTarget).addClass('hover');
    }).mouseleave(function(event){
        $(event.currentTarget).removeClass('hover');
    });

})(jQuery);