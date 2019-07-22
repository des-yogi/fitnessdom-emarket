// https://github.com/sonnyt/downCount

$('.countdown').downCount({
  date: '12/31/2019 24:00:00', //формат m:d:Y
  offset: +3 // зимнее время +2, летнее +3
}, function () {
  //alert('Время истекло!');
});
