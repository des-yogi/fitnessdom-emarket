$(document).ready(function(){

  $('.aside-nav').on('shown.bs.dropdown', function () {
    $('.aside-nav').addClass('aside-nav--overlay');
  });

  $('.aside-nav').on('hidden.bs.dropdown', function () {
    $('.aside-nav').removeClass('aside-nav--overlay');
  });

});
