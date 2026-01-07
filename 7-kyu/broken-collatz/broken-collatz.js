function collatz(n, count = 0) {
  if (n === 1) return count + 1;
  return collatz(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1);
}