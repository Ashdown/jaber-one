(function($){
    'use strict';

    var $this = $('.showcase'),
        $links = $this.find('.link'),
        scrollOffsetTop = 200,
        scrollOffsetBottom = 0;

    //function checks if an element has scrolled into view
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top + scrollOffsetTop,
            elemBottom = elemTop + $(elem).height() - scrollOffsetBottom;

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    function checkForScrolledElements(){
        $links.each(function(){
            var $link = $(this);
            if(elementScrolled($link)) {
                if(!$link.hasClass('animate')) {
                    $link.addClass('animate').addClass('active');
                }
            } else {
                if($link.hasClass('animate')) {
                    $link.removeClass('animate').removeClass('active');
                }
            }
        });
    }

    $(window).scroll(checkForScrolledElements);

    $this.find('.link').mouseenter(function(event) {
        $(event.currentTarget).removeClass('active');
    }).mouseleave(function(event){
        if(elementScrolled($(event.currentTarget))) {
            $(event.currentTarget).addClass('active');
        }
    });

    checkForScrolledElements();

})(jQuery);