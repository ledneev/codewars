function selfDescriptive(num) {
  const digits = [...String(num)];
  const counts = digits.reduce((acc, d) => (acc[d] = (acc[d] || 0) + 1, acc), []);
  return digits.every((digit, i) => digit == (counts[i] || 0));
}