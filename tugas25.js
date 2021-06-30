var x= [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("sebelumnya :",x)
console.log("ascending :",x.sort())
console.log("descending :",x.reverse())
var y = x.filter(function(number) {
    return number > 10;
  });
console.log("ascending filter 10 :",y.sort())
console.log("descending filter 10 :",y.reverse())