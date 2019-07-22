;( function ()
{
/*  function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
      if (typeof document.body[fn] == 'function') {
        matchesFn = fn;
        return true;
      }
      return false;
    })

    var parent;

    // traverse parents
    while (el) {
      parent = el.parentElement;
      if (parent && parent[matchesFn](selector)) {
        return parent;
      }
      el = parent;
    }

    return null;
  }*/

 /* var checkboxArr = document.querySelectorAll( 'input[type="checkbox"]' );
  Array.prototype.forEach.call( checkboxArr, function( input )
  {
    var label = input.parentNode;

    input.addEventListener( 'change', function( e ) {

      this.checked ? label.classList.add('selected') : label.classList.remove('selected');

    });
  });*/
}());
