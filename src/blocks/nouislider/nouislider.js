// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  var priceSlider = document.getElementById('price-slider');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];

  if (!priceSlider) { return; }

  noUiSlider.create(priceSlider, {
      start: [5000, 80000],
      connect: true,
      range: {
          'min': 0,
          'max': 100000
      }
  });

  priceSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        priceSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {
      var values = priceSlider.noUiSlider.get();
      var value = Number(values[handle]);
    });
  });

}());
