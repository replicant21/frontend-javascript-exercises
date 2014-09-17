module.exports.favoriteNumber = function(faveNumber, guess){
  var answer; 
  if (guess > faveNumber) {
     answer = "Too high";
   } else if (guess < faveNumber){
     answer = "Too low";
   } else answer = "You got it!";
  return answer; 
};

module.exports.checkLock = function(first, second, third, fourth){
  var answer;  
  var firstBool;
  var secondBool;
  var thirdBool;
  var fourthBool;
  
  if ( (first === 3) || (first === 5) || (first === 7) ) {
    console.log("First is true");
    firstBool = true;
  } if (second === 2){
    console.log("Second is true");
    secondBool = true;
  } if ( (third >= 5) && (third <= 100) ){
    console.log("Third is true");
    thirdBool = true;
  } if ( (fourth > 20) || (fourth < 9) ){
    console.log("Fourth is true");
    fourthBool = true;
  } if ( firstBool && secondBool && thirdBool && fourthBool){
    answer = "correct";
  } else answer = "incorrect";
  return answer;
};

module.exports.canIGet = function(item, money){
  var answer; 
  if (  (item === "MacBook Air" && money >= 999)  || (item === "MacBook Pro" && money >= 1299) || (item === "Mac Pro" && money >= 2499) || (item === "Apple Sticker" && money >= 1) ){
     answer = true;
   } else answer = false;
  return answer;
};