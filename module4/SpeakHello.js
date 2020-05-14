
(function (name) {
  var speakWord = {};
  speakWord.name = name;
  var greeting = "Hello ";
  speakWord.speak = function () {
    console.log(greeting + speakWord.name);
  }

})();