function rotate(data, n) {
  const L = data.length;
  
  if (L === 0 || n === 0) return data;
  
  let k = ((n % L) + L) % L;
  
  if (k === 0) return data;
  
  return data.slice(-k).concat(data.slice(0, -k));
}
​