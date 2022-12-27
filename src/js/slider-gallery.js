$(document).ready(function () {
  $('.gallery-slider').slick({
    asNavFor: '.gallery-slider-little',
    arrows: false,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          arrows: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $('.gallery-slider-little').slick({
    slidesToScroll: 1,
    asNavFor: '.gallery-slider',
    centerMode: true,
    centerPadding: '320px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '215px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '125px',
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 0,
        },
      },
    ],
  });
});
