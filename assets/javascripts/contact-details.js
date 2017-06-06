(function ($, window) {
    'use strict';

    var $this = $('.contact-details');

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    //get query param

    if (getParameterByName('show-contact-information') === 'true') {
        $this.find('#contact-list-container').addClass('hidden');
        $this.find('#contact-information-container').removeClass('hidden');
    }


})(jQuery, window);