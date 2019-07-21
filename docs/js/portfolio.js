$(document).ready(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() < 10) {
            $('.nav-menu > li:nth-child(4) a').css("color", "var(--color-yellow)");
            $('#content-header-all').css("background", "rgba(0, 0, 0, 0.87)");
        } else {
            $('.nav-menu > li:nth-child(4) a').css("color", "var(--color-yellow)");
            $('#content-header-all').css("background", "white");
        }
    });

    $('.portfolio-element-carrousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true
      });

      $('.slick-prev').on('click', function() {
        $(this).css('background', 'rgba(0, 0, 0, 0.5)');
        $('.slick-next').css('background', 'var(--color-negro)');
      });
      $('.slick-next').on('click', function() {
        $(this).css('background', 'rgba(0, 0, 0, 0.5)');
        $('.slick-prev').css('background', 'var(--color-negro)');
      });
});