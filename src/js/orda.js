//= partials/jquery.min.js
$(function () {
    /*link*/
    $("a[href='#']").click(function () {
        return false;
    });
    menu();
});

function menu() {
    var menuWidth = $('.menu').innerWidth();
    console.log(menuWidth);
    $('.js-menu').on('click', function () {
        $('.menu,.wrp').toggleClass('menu-active');
    });
    $('.js-close').on('click', function () {
        $('.menu,.wrp').removeClass('menu-active');
    });
}

