(function($){

    'use strict';

    var $this = $('.news-menu'),
        $page  = $('.page');

    function openContent(href) {
        var $newContent = $(href.slice(href.indexOf('#')));
        $newContent.addClass('invisible');
        $('.news-menu-content').removeClass('visible');
        $newContent.addClass('visible');
        //close news menu if it is open (applies to mobile only)
        $this.removeClass('open');
        window.setTimeout(function(){
            $newContent.removeClass('invisible');
        }, 100);
    }

    $this.find('.menu-link').on('click', function(event) {
        event.preventDefault();
        $this.toggleClass('open');
    });

    $this.find('.main-menu .link-item .link').on('click', function(event) {

        var href = $(event.currentTarget).attr('href');

        $this.find('.main-menu .link').removeClass('selected');
        $(event.currentTarget).addClass('selected');


        if($page.hasClass('news-page')) {
            event.preventDefault();
            openContent(href);
        }
    });

    //open content if page is deeplinked

    if($page.hasClass('news-page')) {
        var href = window.location.href;
        if(href.indexOf('#') > 0) {
            openContent(href);
            setTimeout(function() {
                window.scrollTo(0, 0);
            }, 1);
        }
    }


})(jQuery);