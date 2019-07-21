$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() < 10) {
            $('#label-icon-responsive').css("border", "1px solid white");
            $('.btn-anim-responsive').css("background", "white");
            $('#content-header-all').css("background", "rgba(0, 0, 0, 0.5)");
            $('#content-header-all a').css("color", "white");
            $('header').css("background", "rgba(0, 0, 0, 0.5)");
        } else {
            $('#label-icon-responsive').css("border", "1px solid rgba(0, 0, 0, 0.5)");
            $('.btn-anim-responsive').css("background", "rgba(0, 0, 0, 0.5)");
            $('#content-header-all').css("background", "white");
            $('header').css("background", "white");
            if ($(window).width() < 783) {
                $('#content-header-all a').css("color", "white");
            }
            if ($(window).width() >= 783) {
                $('#content-header-all a').css("color", "black");
            }
            // if ($(window).width() > 800){
            //     $('#content-header-all a').css("color", "black");
            //     console.log("2");
            // }
        }
    });

    $(window).resize(function () {
        if ($(window).scrollTop() < 10) {
            $('#content-header-all a').css("color", "white");
        } else {
            if ($(window).width() < 783) {
                $('#content-header-all a').css("color", "white");
            }
            if ($(window).width() >= 783) {
                $('#content-header-all a').css("color", "black");
            }
        }
    });

    // $('#content-header-all a').mouseover(function () {
    //     $(this).css('color', 'var(--color-yellow)');
    // });
    // $('#content-header-all a').mouseout(function () {
    //     if ($(window).scrollTop() < 10) {
    //         $(this).css('color', 'white');
    //     } else {
    //         if ($(window).innerWidth < 800) {
    //             $(this).css('color', 'black');
    //         } else {
    //             $(this).css('color', 'white');
    //         }
    //     }
    // });

    $('#label-icon-responsive').on('click', function () {
        $('.btn-anim-responsive').toggleClass('anim-responsive-cross');
        $('.cont-nav-menu').toggleClass('anim-responsive-menu');
    });

});