document.addEventListener('DOMContentLoaded', function () {

  var mainSlider = new Swiper('.main-slider__container', {
      slidesPerView: 1,
      spaceBetween: 20,
      //grabCursor: true,
      lazy: true,
      pagination: {
        el: '.main-slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
});

