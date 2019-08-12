$( document ).ready(function() {

  var itemCol = document.querySelectorAll('.col-1-2-3'); // &--fullwidth
  var btnContainer = document.querySelector('.filter-controls-block__display');
  var btns = document.querySelectorAll('.filter-controls-block__btn-view');

  var listView = function () {
    Array.prototype.forEach.call(itemCol, function (item) {
       item.classList.add('col-1-2-3--fullwidth');
    });
  };

  var cardView = function () {
    Array.prototype.forEach.call(itemCol, function (item) {
       item.classList.remove('col-1-2-3--fullwidth');
    });
  };

  var btnClickHandler = function (e) {

    Array.prototype.forEach.call(btns, function (btn) {
      if (btn === e.target) {
        btn.classList.add('filter-controls-block__btn-view--selected');
      } else {
          btn.classList.remove('filter-controls-block__btn-view--selected');
      }
    });

    if ( this.classList.contains('btn-list-view') ) {
      listView();
    } else {
        cardView();
    }
  };

  Array.prototype.forEach.call(btns, function (btn) {
    if (btn) {
      btn.addEventListener('click', btnClickHandler);
    }
  });
});

