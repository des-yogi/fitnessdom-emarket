document.addEventListener('DOMContentLoaded', function () {

  var brandsSlider = new Swiper('.brands-slider__container', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3
        },
        576: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 5
        },
        992: {
          slidesPerView: 6
        }
      },
      lazy: true
    });
});

