$(document).ready(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() < 10) {
            $('.nav-menu > li:nth-child(5) a').css("color", "var(--color-yellow)");
            $('#content-header-all').css("background", "rgba(0, 0, 0, 0.87)");
        } else {
            $('.nav-menu > li:nth-child(5) a').css("color", "var(--color-yellow)");
            $('#content-header-all').css("background", "white");
        }
    });

});