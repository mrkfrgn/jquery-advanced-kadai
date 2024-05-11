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

  // $(function () {
  //  $('a[href^="#"]').on('click', function () {
  //   $(window).fadeIn(300).
  //  });
  // })

  // $(window).scroll(function () {
  //   if($(window).scrollTop() > 1) {
  //     $('#about-contents').fadeIn(300).css('display', 'flex')
  //   } else if($(window).scrollTop () == 0) {
  //     $('#about-contents').fadeOut(300);
  //   }
  // });
  // $(window).scroll(function () {
  //   if($(window).scrollTop() > 10) {
  //     $('.index-h1').fadeIn(300)
  //   } else if($(window).scrollTop () == 0) {
  //     $('.index-h1').fadeOut(300).css('visibility', 'hidden');
  //   }
  // });
  // $(window).scroll(function () {
  //   if($(window).scrollTop() > 1) {
  //     $('#works').fadeIn(300)
  //   } else if($(window).scrollTop () == 0) {
  //     $('#works').fadeOut(300).css('visibility', 'hidden');
  //   }
  // });
  
});