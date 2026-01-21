​
function wordToBin(str) {
  return [...str].map(char => 
    char.charCodeAt().toString(2).padStart(8, '0')
  );
}
​