(function($){

    'use strict';

    var $this = $('.search-form-container');
    $this.find('.open-filters-link').on('click', function(event) {
        event.preventDefault();
        $this.toggleClass('filters-open');
    });

})(jQuery);