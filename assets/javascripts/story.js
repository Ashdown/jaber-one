(function($){
    var $this = $('.story'),
        pageHeight = 336,
        offset = 0,
        maxHeight = $this.find('.story-content').height(),
        $pagination = $this.find('.story-pagination');
        $previous =  $pagination.find('.previous'),
        $next = $pagination.find('.next'),
        pageCount = Math.ceil(maxHeight / pageHeight),
        pageNumber = 1;

    function updateNavigation() {

        if(offset >= 0) {
            $previous.addClass('hidden');
        } else {
            $previous.removeClass('hidden');
        }
        if(offset <= -(maxHeight - pageHeight)) {
            $next.addClass('hidden');
        }else {
            $next.removeClass('hidden');
        }
        $pagination.find('.page-number').html(pageNumber);
    }

    $next.on('click', function(event) {
        event.preventDefault();
        $this.find('.story-content').css('top', offset -= pageHeight);
        pageNumber++;
        updateNavigation();
    });

    $previous.on('click', function(event) {
        event.preventDefault();
        $this.find('.story-content').css('top', offset += pageHeight);
        pageNumber--;
        updateNavigation();
    });

    if(maxHeight >= pageHeight) {
        $pagination.find('.page-count').html(pageCount);
        updateNavigation();
    }



})(jQuery);