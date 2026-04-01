/**
 * document ready
 */
(function ($) {
    $(document).ready(function () {

        /** header */
        $("body").headroom({
            tolerance: {
                up: 14,
                down: 16
            }
        });

        if($('.btn').length){
            $('.btn').each(function () {
                initPopupButtons($(this));
            });
        }

        /** navigation toggle */
        if($('.header').length){
            $('.header').each(function(){
                navigationToggle($(this));
            });
        }

        /** textarea autogrow */
        if($('textarea').length){
            $('textarea').each(function(){
                let thisEl = $(this),
                    thisTextAreaHeight = thisEl.outerHeight();
                thisEl.autogrow();
                thisEl.css("height", thisTextAreaHeight);
            });
        }

        /** cookie popup */
        if (!$.cookie("user-cookies-accepted") && $('.cookiePopupWrapper').length) {
            setTimeout(function () {
                $('.cookiePopupWrapper').addClass('show');
            }, 3000);
            $('.cookiePopup .accept').click(function () {
                $.cookie("user-cookies-accepted", true, {
                    expires: 365,
                    path: "/",
                    secure: false
                });
                $('.cookiePopupWrapper').removeClass('show');
            });
        }

        if ($('.main-slider').length) {
            $('.slider').each(function () {
                initSlider(this);
            });
        }

        if ($('.customBlock .animate').length) {
            $('.animate').each(function () {
                initAnimation($(this));
            });
        }

        if ($('.customBlock .tab').length) {
            $('.tab').each(function () {
                initTabAutoClicker($(this));
            });
        }


    });
})(jQuery);
