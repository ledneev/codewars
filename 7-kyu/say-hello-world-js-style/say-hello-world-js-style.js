function say(firstWord) {
  return function(secondWord){
    return firstWord + " " + secondWord;
  };
}