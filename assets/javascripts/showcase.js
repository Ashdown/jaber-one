(function($){
    'use strict';

    var $this = $('.showcase');

    $this.find('.link').mouseenter(function(event) {
        $(event.currentTarget).addClass('animate');
    }).mouseleave(function(event){
        $(event.currentTarget).removeClass('animate');
    });

})(jQuery);