$(document).ready(function() {
  $('.images').slick({
    centerMode: false,
    centerPadding: '1px',
    slidesToShow: 3,
    initialSlide: 4,
    dots: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
