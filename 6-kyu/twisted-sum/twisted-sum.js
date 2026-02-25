function twistedSum(n) {
  let total = 0;
​
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num > 0) {
      total += num % 10;
      num = Math.floor(num / 10);
    }
  }
​
  return total;
}