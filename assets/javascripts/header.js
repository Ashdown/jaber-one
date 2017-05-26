(function($){
    'use strict';

    var $this  = $('.header');

    $this.find('.menu-link').click(function(event){
        event.preventDefault();
        $this.toggleClass('open-menu');

    });

    var searchBarActive = false;

    $this.find('.search-link').click(function(event){
        event.preventDefault();
        $this.find('.header-search').toggleClass('visible');
        if(!searchBarActive) {
            $this.find('.keyword-field').focus();
        }
        searchBarActive = !searchBarActive;
    });

})(jQuery);