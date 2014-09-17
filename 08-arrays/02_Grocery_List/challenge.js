module.exports.addItem = function(item, someArray){
  var addItem = true;
  for(i=0; i < someArray.length; i++){
    if (someArray[i] == item){
      addItem = false;
    }
  } if (addItem){
    someArray.push(item);
  }
  return someArray;
};

module.exports.reverseSortedList = function(someArray){
  return someArray.sort().reverse();
};