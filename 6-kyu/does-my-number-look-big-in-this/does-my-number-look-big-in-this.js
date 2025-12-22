function narcissistic(value) {
  let res = ('' + value)
  .split('')
  .map(Number)
  .reduce((sum, n, index, array) => {
    return sum + Math.pow(n, array.length);
  }, 0);
​
  return res === value
}
​