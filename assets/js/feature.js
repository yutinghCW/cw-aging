$(document).ready(() => {
  $('.slick-opening').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.slick-gallery').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});