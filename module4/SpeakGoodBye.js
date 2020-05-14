/*
var speakWord = {};
speakWord.speak=function(name) {
  console.log("Good Bye " + name);
}
(function (name) {
  var speakWord = {};
  speakWord.name = name;
  var greeting = "Good Bye ";
  yaakovGreeter.speak = function () {
    console.log(greeting + speakWord.name);
  }

})();

*/
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(speakWord + " " + name);
}