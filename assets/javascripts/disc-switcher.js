(function ($) {
    'use strict';

    var $this = $('.disc-switcher');

    function setContainerHeight($currentContainer) {
        $this.css('padding-bottom', $currentContainer.height() - 10);
    }

    $this.find('.disc-link').on('click', function (event) {
        event.preventDefault();
        var $currentItem = $(event.currentTarget).closest('.disc-item');
        $this.find('.disc-item').removeClass('selected');
        $currentItem.addClass('selected');
        setContainerHeight($currentItem.find('.container'));
    });

    $this.find('.read-more-link').on('click', function(event) {
        event.preventDefault();
        var $container = $(event.currentTarget).closest('.container');
        $container.addClass('open');
        window.setTimeout(function() {
            $container.find('.read-more-link').css('display', 'none');
            setContainerHeight($container);
        }, 200);

    });

    $this.find('.close-link').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
                scrollTop: $this.offset().top - 73},
            'slow');

    });

    $(window).resize(function() {
        setContainerHeight($this.find('.disc-item.selected .container'));
    });

    setContainerHeight($this.find('.disc-item.selected .container'));

})(jQuery);