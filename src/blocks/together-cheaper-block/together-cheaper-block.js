document.addEventListener('DOMContentLoaded', function () {

  var togetherCheaper = new Swiper('.together-cheaper-block', {
      spaceBetween: 20,
      slidesPerView: 1,
      centeredSlides: true,
      effect: 'fade',
      lazy: true,
      grabCursor: true,
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
