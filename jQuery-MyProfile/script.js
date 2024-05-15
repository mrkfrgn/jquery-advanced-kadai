$('#carousel-section').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplayspeed: 3000,
  arrows: false,
});

$(function () {
  $('#title').on('mouseover', function() {
    $(this). animate({
      opacity: 0.5,
    },100);
  });

  $('#title').on('mouseout', function() {
    $(this). animate({
      opacity: 1.0,
    }, 100);
  });
});

$(function () {
  $('.menu').on('mouseover', function() {
    $(this). animate({
      opacity: 0.5,
    },100);
  });

  $('.menu').on('mouseout', function() {
    $(this). animate({
      opacity: 1.0,
    }, 100);
  });

  $(window).scroll(function () {
    if($(window).scrollTop() > 1) {
      $('#back-btn').fadeIn(300).css('display', 'flex')
    } else if($(window).scrollTop () == 0) {
      $('#back-btn').fadeOut(300);
    }
  });

  $(function () {
   $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href ==="" ? 'html' :href);
    const position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
   });
  });

  $(window).scroll(function () {
    $('.fade-out').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight()/4;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window > bottom_of_object){
        $(this).addClass('fade-in');
      }
      });
     });
});

