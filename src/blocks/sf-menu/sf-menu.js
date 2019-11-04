$(document).ready(function(){

  $('#sf-menu').superfish({
    animation: {height:'show'}, // slide-down effect without fade-in
    speed:       'fast',
    autoArrows:  true,
    delay:       800     // 1.2 second delay on mouseout
  });

  $('.page-header__catalog-menu-wrapper').on('shown.bs.dropdown', function () {
    $('.main-content').addClass('main-content--overlayed');
  });
  $('.page-header__catalog-menu-wrapper').on('hidden.bs.dropdown', function () {
    $('.main-content').removeClass('main-content--overlayed');
  });

});
