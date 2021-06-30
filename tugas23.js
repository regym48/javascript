var x = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

var y = x.filter(function(number) {
  return number > 15;
});
console.log(y)