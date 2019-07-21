$(document).ready(function() {

    $('#cont-carrousel-index').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true
      });

      $(window).scroll(function() {
          $('.nav-menu > li:nth-child(1) a').css("color", "var(--color-yellow)");
    });
    
    $('.acordeon-desc').css('display', 'none');

    $('.acordeon-element:nth-child(1) .acordeon-desc').slideDown();

    $('.acordeon-element').on('click', '.acordeon-title',function() {
      var element = $(this);
      var t = element.next();
      var p = t.parent().siblings().find('.acordeon-desc');
      
      t.slideToggle();
      p.slideUp();
    });

    $('.slick-prev').on('click', function() {
      $(this).css('background', 'rgba(0, 0, 0, 0.5)');
      $('.slick-next').css('background', 'var(--color-negro)');
    });
    $('.slick-next').on('click', function() {
      $(this).css('background', 'rgba(0, 0, 0, 0.5)');
      $('.slick-prev').css('background', 'var(--color-negro)');
    });
  }
);