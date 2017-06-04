(function ($) {
    'use strict';
    var $this = $('.request-a-call-back');

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i+=1) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    function goToByScroll(id) {
        $('html,body').animate({
                scrollTop: $("#" + id).offset().top},
            'slow');
    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function isPhoneNumber(number) {
        var regex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
        return regex.test(number);
    }

    $this.find('.input').on('focus', function (event) {
        $(event.currentTarget).closest('.container').addClass('input-active').addClass('focus');
    });

    $this.find('.input').on('blur', function () {
        var $input = $(event.currentTarget);
        if ($input.val() === '') {
            $(event.currentTarget).closest('.container').removeClass('input-active');
        }
        $(event.currentTarget).closest('.container').removeClass('focus');
    });

    $this.find('.call-back-form').on('submit', function (event) {
        var $form = $(event.currentTarget),
            formInError = false;
        $form.removeClass('server-error');

        $form.find('.input').each(function () {
            var $input = $(this),
                inputInError = false;
            if ($input.hasClass('mandatory')) {
                if ($input.val() === '') {
                    $input.closest('.container').addClass('in-mandatory-error');
                    inputInError = true;
                } else {
                    $input.closest('.container').removeClass('in-mandatory-error');
                }
            }
            if (!inputInError) {
                if ($input.attr('name') === 'email') {
                    if (!isEmail($input.val())) {
                        $input.closest('.container').addClass('in-email-error');
                        inputInError = true;
                    } else {
                        $input.closest('.container').removeClass('in-email-error');
                    }
                } else if ($input.attr('name') === 'phone-number') {
                    if ($input.val() !== '' && !isPhoneNumber($input.val())) {
                        $input.closest('.container').addClass('in-phone-number-error');
                        inputInError = true;
                    } else {
                        $input.closest('.container').removeClass('in-phone-number-error');
                    }
                }
            }
            if (inputInError) {
                $input.closest('.container').addClass('in-error');
                formInError = true;
            } else {
                $input.closest('.container').removeClass('in-error');
            }

        });

        if (formInError) {
            event.preventDefault();
            goToByScroll('request-a-call-back');
        }
    });

    if(getUrlParameter('error') === 'true') {
        $this.find('.call-back-form').addClass('server-error');
        goToByScroll('request-a-call-back');
    }
    $('.call-back-form').find('.input').each(function() {
        var $input = $(this);
        if($input.val() !== '') {
            $input.closest('.container').addClass('input-active');
        }
    });
})(jQuery);