(function($){
    'use strict';

    var $this  = $('.header');

    $this.find('.menu-link').click(function(event){
        event.preventDefault();
        $this.toggleClass('open-menu');
    });

})(jQuery);