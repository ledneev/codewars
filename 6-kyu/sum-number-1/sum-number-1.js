function sum(a) {
  if (a === undefined) return 0;
  return function next(b) {
    if (b === undefined) {
      return a;
    }
    return sum(a + b);
  };
}