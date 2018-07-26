$(document).ready(function() {
  $('.images').slick({
    centerMode: false,
    centerPadding: '1px',
    slidesToShow: 3,
    initialSlide: 4,
    dots: true,
    arrows: true,
    infinite: false,
    touchMove: false,
    touchThreshold: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          touchMove: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          touchMove: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
