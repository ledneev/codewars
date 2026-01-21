function arrange(s) {
  const result = [];
  const n = s.length;
  
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (i % 2 === 0) {
      result.push(s[i], s[n - 1 - i]);
    } else {
      result.push(s[n - 1 - i], s[i]);
    }
  }
  if (n % 2 === 1) {
    const middleIndex = Math.floor(n / 2);
    result.push(s[middleIndex]);
  }
  
  return result;
}
​