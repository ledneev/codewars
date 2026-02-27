function add(a, b) {
  let result = [];
  let carry = 0;
​
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, '0');
  b = b.padStart(maxLen, '0');
​
  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
  }
​
  if (carry) {
    result.push(carry);
  }
​
  return result.reverse().join('');
}