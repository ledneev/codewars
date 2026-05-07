function maxRot(n) {
  let str = n.toString();
  let numbers = [str];
  
  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    numbers.push(str);
  }
  
  return Math.max(...numbers.map(Number));
}
​
​
​
​
​
​
​
​
​
​