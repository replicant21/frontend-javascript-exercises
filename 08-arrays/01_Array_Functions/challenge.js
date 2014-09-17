module.exports.reversePlusOne = function(someArray){
  var newArray = [];
  newArray[0] = 1;
  for (i=someArray.length - 1; i >= 0; i--){
    newArray.push(someArray[i]);
  }
  return newArray;
};

module.exports.plusesEverywhere = function(someArray){
  var newString = someArray[0];
  for(i=1; i < someArray.length ; i++){
    newString = newString + "+" + someArray[i];
  }
  return newString;
};

module.exports.arrayQuantityPlusOne = function(someArray){
  return someArray.length + 1;
};