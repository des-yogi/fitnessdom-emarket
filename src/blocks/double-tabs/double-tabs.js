document.addEventListener('DOMContentLoaded', function () {

  var newsSlider = new Swiper('#hits-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
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
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        }
      }
      // ,
      // lazy: true
  });

  var hitsSlider = new Swiper('#news-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        }
      }
      // ,
      // lazy: true
  });

  var doubleTabs = document.querySelector('.double-tabs');
  var navLinks = document.querySelectorAll('.nav-link');
  var tabHits = document.querySelector('#hits');
  var tabNews = document.querySelector('#news');

  if (!doubleTabs) { return; }

  const navLinkClickHandler = function (e) {
    newsSlider.update();
    hitsSlider.update();
    /*if ( e.target.id === 'news-tab' ) {
      newsSlider.update();
    }
      hitsSlider.update();*/
  };

  /*tabHits.addEventListener('change', navLinkClickHandler);
  tabNews.addEventListener('change', navLinkClickHandler);*/
  Array.prototype.forEach.call(navLinks, function (link) {
    link.addEventListener('click', navLinkClickHandler);
  });

});

