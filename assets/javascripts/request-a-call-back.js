(function($) {
    'use strict';
    var $this = $('.request-a-call-back');

    $this.find('.input').on('focus', function(event) {
        $(event.currentTarget).closest('.container').addClass('input-active').addClass('focus');
    });

    $this.find('.input').on('blur', function() {
        var $input = $(event.currentTarget);
        if($input.val() === '') {
            $(event.currentTarget).closest('.container').removeClass('input-active');
        }
        $(event.currentTarget).closest('.container').removeClass('focus');
    });
})(jQuery);