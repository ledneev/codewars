function add(num1, num2) {
  const sNum1 = num1.toString(), sNum2 = num2.toString();
  const len = Math.max(sNum1.length, sNum2.length);
  let res = '';
  
  for (let i = 1; i <= len; i++) {
    const sum = (+sNum1[sNum1.length - i] || 0) + (+sNum2[sNum2.length - i] || 0);
    res = sum + res;
  }
  
  return +res;
}