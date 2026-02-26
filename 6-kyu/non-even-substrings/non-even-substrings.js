function solve(s) {
  let total = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) % 2 === 1) {
      total += i + 1;
    }
  }
  
  return total;
}