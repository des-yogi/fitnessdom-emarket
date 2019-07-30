document.addEventListener('DOMContentLoaded', function () {

  var lastFromBlogSlider = new Swiper('.last-from-blog-slider__container', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      //loop: true,
      observer: true,
      observeParents: true,
      // autoplay: {
      //   delay: 3000,
      // },
      breakpointsInverse: true,
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
        }
      },
      pagination: {
        el: '.last-from-blog-slider__pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.last-from-blog-slider__next',
        prevEl: '.last-from-blog-slider__prev',
      },
      lazy: true
  });

});
