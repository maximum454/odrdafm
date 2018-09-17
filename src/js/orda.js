//= partials/jquery.min.js
//= partials/jquery.knob.min.js
$(function () {
    /*link*/
    $("a[href='#']").click(function () {
        return false;
    });
    menu();

    $(".dial").knob();
});

function menu() {
    var menuWidth = $('.menu').innerWidth();
    $('.js-menu').on('click', function () {
        $('.menu,.wrp__inner').toggleClass('menu-active');
    });
    $('.js-close').on('click', function () {
        $('.menu,.wrp__inner').removeClass('menu-active');
    });
}

