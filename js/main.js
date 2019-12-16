// Hello.
//
// This is The Scripts used for MY Theme
//
//

function anchor_locator(hash, pixels = 100){
    var target = $(hash);
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - pixels
        }, 800);
        return false;
    }
}

function main() {

    (function () {
        'use strict';

        /*====================================
         Main Navigation Stick to Top when Scroll
         ======================================*/
        function sticky_relocate() {
            var window_top = $(window).scrollTop();
            var div_top = $('#sticky-anchor').offset().top;
            if (window_top > div_top) {
                $('#tf-menu').addClass('stick');
            } else {
                $('#tf-menu').removeClass('stick');
            }
        }

        $(function () {
            $(window).scroll(sticky_relocate);
            sticky_relocate();
        });


        $(function () {
            $('a[href*=#]:not([href=#])').click(function(){
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                console.log($(this.hash))
                anchor_locator($(this.hash))
            }});


        });

        $(function () {
            var hash = window.location.hash;
            console.log(hash)
            if (hash) anchor_locator(hash)
        });


    }());


}

main();