module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var newObject = {
    title : courseTitle,
    duration : courseDuration,
    students : courseStudents
  };
  return newObject;
}

module.exports.addProperty = function(object, newProp, newValue){
  if (object[newProp] === undefined){
    object[newProp] = newValue;
  } 
  return object;
}

module.exports.formLetter = function(letter){
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely," + "\n" + letter.sender;
}

module.exports.canIGet = function(item, money){
  var appleProducts = {
    "MacBook Air" : 999,
    "MacBook Pro" : 1299,
    "Mac Pro"     : 2499,
    "Apple Sticker" : 1
  };
  return ( (item === "MacBook Air" &&  money >= appleProducts["MacBook Air"]) || (item === "MacBook Pro" && money >= appleProducts["MacBook Pro"]) || (item === "Mac Pro" &&  money >= appleProducts["Mac Pro"]) || (item === "Apple Sticker" &&  money >= appleProducts["Apple Sticker"]) );
}