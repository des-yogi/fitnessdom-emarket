(function () {
  const colorModule = document.querySelector('.prod-slider__color');
  if (!colorModule) { return; }
  const colorInputArr = colorModule.querySelectorAll('.prod-slider__color-input');
  const colorNameArr = colorModule.querySelectorAll('.prod-slider__color-name');

  const inputStateHandler = function (e) {
    Array.prototype.forEach.call(colorNameArr, function (elem) {
      elem.classList.remove('prod-slider__color-name--selected');
    });
    this.parentNode.classList.add('prod-slider__color-name--selected');
  };

  Array.prototype.forEach.call(colorInputArr, function (item) {
    item.addEventListener('change', inputStateHandler);
    item.parentNode.style = `color: ${item.dataset.color};`;
  });

})();
