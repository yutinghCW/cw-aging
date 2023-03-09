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
  $('.slick-gallery-img').each(function(key) {
    const sliderIdName = `slick-gallery-img-${key}`;
	  const sliderNavIdName = `slick-gallery-text-${key}`;
	  this.id = sliderIdName;
	  $('.slick-gallery-text')[key].id = sliderNavIdName;
	  const sliderId = `#${sliderIdName}`;
	  const sliderNavId = `#${sliderNavIdName}`
    $(sliderId).slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: sliderNavId,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false
          }
        },
      ]
    });
    $(sliderNavId).slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: sliderId,
    });
  });
});