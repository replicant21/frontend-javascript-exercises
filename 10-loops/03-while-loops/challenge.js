module.exports.stream = function(conditionalFn, actionFn){
    actionFn = function() { console.log("Hello!"); };
    counter = 10;
      conditionalFn = function() { 
        counter--;
        return counter; 
      };
    while(counter > 0){
      actionFn();
      conditionalFn();
    }
};

module.exports.sumNumbers = function(sumArray){
  var i = 0;
  var sum = 0;
  while(i < sumArray.length){
    sum = sum + sumArray[i];
    i++;
  }
  return sum;
};