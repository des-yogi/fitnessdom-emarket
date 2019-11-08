(function() {
  var searchField = document.getElementById('site-search');
  var searchClearBtn = document.getElementById('site-search-clear');
  var searchFieldHandler = function (e) {
    if ( searchField.value ) {
      searchClearBtn.classList.add('field-search__clear--visible');
    } else {
      searchClearBtn.classList.remove('field-search__clear--visible');
    }
  };
  var searchClearHandler = function (e) {
    searchField.value = '';
    //searchField.focus();
    searchClearBtn.classList.remove('field-search__clear--visible');
  };

  searchField.addEventListener('input', searchFieldHandler);
  searchClearBtn.addEventListener('click', searchClearHandler);
}());

var swiperSearch = new Swiper('.field-search__container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.field-search__scrollbar',
  },
  mousewheel: true,
});
