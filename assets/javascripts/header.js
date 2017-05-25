(function($){
    'use strict';

    var $this  = $('.header');

    $this.find('.menu-link').click(function(event){
        event.preventDefault();
        $this.toggleClass('open-menu');
    });

    $this.find('.search-link').click(function(event){
        event.preventDefault();
        $this.find('.header-search').toggleClass('visible');
    });

})(jQuery);