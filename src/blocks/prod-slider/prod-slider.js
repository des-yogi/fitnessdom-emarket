document.addEventListener('DOMContentLoaded', function () {

  var galleryThumbs = new Swiper('.prod-slider__thumbs', {
      spaceBetween: 20,
      slidesPerView: 4,
      centerInsufficientSlides: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 4
        },
        480: {
          slidesPerView: 5
        },
        576: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 6
        },
        992: {
          slidesPerView: 8
        },
        1280: {
          slidesPerView: 5
        }
      }
  });

  var galleryTop = new Swiper('.prod-slider__top', {
      spaceBetween: 20,
      lazy: true,
      navigation: {
        nextEl: '.prod-slider__next',
        prevEl: '.prod-slider__prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
  });

});

(function () {
  const colorModule = document.querySelector('.prod-slider__color');
  if (!colorModule) { return; }
  const colorInputArr = colorModule.querySelectorAll('.prod-slider__color-input');
  const colorNameArr = colorModule.querySelectorAll('.prod-slider__color-name');

  const inputStateHandler = function (e) {
    Array.prototype.forEach.call(colorNameArr, function (elem) {
      elem.classList.remove('prod-slider__color-name--selected');
    });
    this.parentNode.classList.add('prod-slider__color-name--selected');
  };

  Array.prototype.forEach.call(colorInputArr, function (item) {
    item.addEventListener('change', inputStateHandler);
    item.parentNode.style = `color: ${item.value};`;
  });

})();
