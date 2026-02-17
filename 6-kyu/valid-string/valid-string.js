function validWord(dictionary, s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  
  for (let i = 0; i < n; i++) {
    if (!dp[i]) continue;
    
    for (const word of dictionary) {
      const len = word.length;
      if (i + len <= n && s.substring(i, i + len) === word) {
        dp[i + len] = true;
      }
    }
  }
  
  return dp[n];
}
​
​