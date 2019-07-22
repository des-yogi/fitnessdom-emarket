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
