(function($) {
    'use strict';

    var $this = $('.disc-switcher');

    $this.find('.disc-link').on('click', function(event) {
        event.preventDefault();
       $this.find('.disc-item').removeClass('selected');
        $(event.currentTarget).closest('.disc-item').addClass('selected');
    });

})(jQuery);