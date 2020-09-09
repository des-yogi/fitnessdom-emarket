// Баннер на главной странице
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

// Бранд-слайдер на главной странице
document.addEventListener('DOMContentLoaded', function () {

  var brandsSlider = new Swiper('.brands-slider__container', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
      },
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

// Хиты-Новинки слайдер внутри блока Tabs
document.addEventListener('DOMContentLoaded', function () {

  var newsSlider = new Swiper('#news-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      //loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // autoplay: {
      //   delay: 3000,
      // },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      },
      pagination: {
        el: '.double-tabs__pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.double-tabs__next-hits',
        prevEl: '.double-tabs__prev-hits',
      },
      lazy: true
  });

  var hitsSlider = new Swiper('#hits-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      //loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      },
      pagination: {
        el: '.double-tabs__pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.double-tabs__next-hits',
        prevEl: '.double-tabs__prev-hits',
      },
      lazy: true
  });
});

// Предложение недели слайдер в 2х2
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
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          slidesPerColumn: 1
        },
        768: {
          slidesPerView: 1,
          slidesPerColumn: 2
        },
        1280: {
          slidesPerView: 2,
          slidesPerColumn: 2
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

// Последнее из блога слайдер
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

// Популярное слайдер
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

// Слайдер Товара
document.addEventListener('DOMContentLoaded', function () {

  var galleryThumbs = new Swiper('.prod-slider__thumbs', {
      spaceBetween: 20,
      slidesPerView: 4,
      centerInsufficientSlides: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
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

// Слайдер Спецификация Товара
document.addEventListener('DOMContentLoaded', function () {

  var swiperSpecification = new Swiper('.prod-specification__container', {
    spaceBetween: 20,
    //effect: 'fade',
    autoHeight: true,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.prod-specification__pagination',
      clickable: true,
    }
  });

  (function () {

    const slides = document.querySelectorAll('.prod-specification__slide');
    const paginationItems = document.querySelectorAll('.prod-specification__pagination span');

    for (var i = 0; i < slides.length; i++) {

      for (var j = 0; j < paginationItems.length; j++) {

        if ( j === i ) {
          paginationItems[j].innerText = slides[i].dataset.title;
        }
      }
    }

  }());

});

// Слайдер Вместе Дешевле
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
