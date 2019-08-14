// (function(){
// код
// }());

$(document).ready(function() {

  $('.faq-aside-nav__drop .dropdown-toggle').dropdown({
    display: 'static'
  });
  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $('.faq-aside-nav__drop .dropdown-toggle').dropdown('dispose');
    }
    return;
  });

  /*var dropdownBtn = document.querySelector('.services .dropdown-toggle');
  var servicesMenuItems = document.querySelectorAll('.tabs__link-wrap');
  Array.prototype.forEach.call(servicesMenuItems, function (item, idx) {
    if (idx === 0) {
      dropdownBtn.innerText = item.querySelector('.tabs__link').innerText;
    }

    item.addEventListener('click', function (e) {
      dropdownBtn.innerText = this.querySelector('.tabs__link').innerText;
    });
  });*/

});
