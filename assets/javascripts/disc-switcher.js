(function ($) {
    'use strict';

    var $this = $('.disc-switcher');

    function setContainerHeight($currentContainer) {
        $this.css('padding-bottom', $currentContainer.height());
    }

    $this.find('.disc-link').on('click', function (event) {
        event.preventDefault();
        var $currentItem = $(event.currentTarget).closest('.disc-item');
        $this.find('.disc-item').removeClass('selected');
        $currentItem.addClass('selected');
        setContainerHeight($currentItem.find('.container'));
    });

    setContainerHeight($this.find('.disc-item.selected .container'));

})(jQuery);