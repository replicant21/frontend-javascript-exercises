module.exports.newArray = function(one, two, three, four){
  return [one, two, three, four];
};

module.exports.firstAndLast = function(array1){
  var newArray = [array1[0], array1[array1.length-1]];
  return newArray;
};