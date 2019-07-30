document.addEventListener('DOMContentLoaded', function () {

  var specOfferSlider = new Swiper('.special-offer-slider__container', {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20,
      //autoHeight: true,
      //loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // autoplay: {
      //   delay: 3000,
      // },
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        1280: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: '.special-offer-slider__pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.special-offer-slider__next',
        prevEl: '.special-offer-slider__prev',
      },
      lazy: true
  });

});
