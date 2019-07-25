document.addEventListener('DOMContentLoaded', function () {

  var populatSlider = new Swiper('.popular-slider__container', {
      spaceBetween: 20,
      grabCursor: true,
      autoHeight: true,
      breakpointsInverse: true,
      lazy: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        },
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
});

