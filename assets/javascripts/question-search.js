(function($) {
    'use strict';
    var $this = $('.question-search');

    $this.find('.input').on('focus', function(event) {
        $(event.currentTarget).closest('.container').addClass('input-active');
    });

    $this.find('.input').on('blur', function() {
        var $input = $(event.currentTarget);
        if($input.val() === '') {
            $(event.currentTarget).closest('.container').removeClass('input-active');
        }
    });
})(jQuery);