(function($){
    'use strict';

    var $this  = $('.header'),
        searchBarActive = false;

    function openSearch() {
        $this.find('.header-search').addClass('visible');
        $this.find('.keyword-field').focus();
        searchBarActive = true;
    }

    function closeSearch() {
        $this.find('.header-search').removeClass('visible');
        searchBarActive = false;
    }

    $this.find('.menu-link').click(function(event){
        event.preventDefault();
        $this.toggleClass('open-menu');

    });

    $('.header-search').on('click', function(event) {
        event.stopPropagation();
    });

    $('.all-content').on('click', function() {
        closeSearch();
    }).on('click', '.search-link', function(event) {
        event.stopPropagation();
        if(!searchBarActive) {
            openSearch();
        } else {
            closeSearch();
        }
    });

})(jQuery);