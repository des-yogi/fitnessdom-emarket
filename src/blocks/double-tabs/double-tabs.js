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
      breakpointsInverse: true,
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
      breakpointsInverse: true,
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

  // var doubleTabs = document.querySelector('.double-tabs');
  // var navLinks = document.querySelectorAll('.nav-link');
  // var tabHits = document.querySelector('#hits');
  // var tabNews = document.querySelector('#news');
  // var nextBtn = document.querySelector('.double-tabs__next-hits');
  // var prevBtn = document.querySelector('.double-tabs__prev-hits');


  // if (!doubleTabs) { return; }

/*  const navLinkClickHandler = function (e) {

    if (e.target.id === 'hit-tab') {

      nextBtn.classList.remove('double-tabs__next-news');
      prevBtn.classList.remove('double-tabs__prev-news');
      nextBtn.classList.add('double-tabs__next-hits');
      prevBtn.classList.add('double-tabs__prev-hits');
    }
    else {
      nextBtn.classList.remove('double-tabs__next-hits');
      prevBtn.classList.remove('double-tabs__prev-hits');
      nextBtn.classList.add('double-tabs__next-news');
      prevBtn.classList.add('double-tabs__prev-news');
    }

    setTimeout( function() {

    }, 400);

  };*/

  /*Array.prototype.forEach.call(navLinks, function (link) {
    link.addEventListener('click', navLinkClickHandler);
  });*/

});

