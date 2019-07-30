$( document ).ready(function() {

  var itemCol = document.querySelectorAll('.content-item-col'); // brands-item-col--fullwidth
  var itemView = document.querySelectorAll('.prod-card-full');
  var listView = document.querySelectorAll('.prod-card-full-list'); //prod-card-full-list
  //filter-controls-block__display
  var btnContainer = document.querySelector('.filter-controls-block__display');
  var btns = document.querySelectorAll('.filter-controls-block__btn-view');

  var listView = function () {
    Array.prototype.forEach.call(itemCol, function (item) {
       item.classList.add('content-item-col--fullwidth');
    });
    Array.prototype.forEach.call(itemView, function (view) {
       view.classList.add('prod-card-full-list');
       view.classList.remove('prod-card-full');
    });
  };

  var cardView = function () {
    Array.prototype.forEach.call(itemCol, function (item) {
       item.classList.remove('content-item-col--fullwidth');
    });
    Array.prototype.forEach.call(itemView, function (view) {
       view.classList.remove('prod-card-full-list');
       view.classList.add('prod-card-full');
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

  /*Array.prototype.forEach.call(btns, function (btn) {
    if (btn) {
      btn.addEventListener('click', btnClickHandler);
    }
  });*/
});

