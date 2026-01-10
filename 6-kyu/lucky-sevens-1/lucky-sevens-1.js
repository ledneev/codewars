function luckySevens(arr) {
  const isCube = n => {
    const r = Math.round(Math.cbrt(n));
    return r * r * r === n;
  };
​
  return arr.reduce((total, row, i) => 
    total + row.reduce((count, cell, j) => {
      if (cell !== 7) return count;
      
      const neighbors = [
        [i-1, j], [i+1, j], [i, j-1], [i, j+1]
      ];
      
      const sum = neighbors.reduce((s, [ni, nj]) => {
        const row = arr[ni];
        const val = row && row[nj];
        return typeof val === 'number' ? s + val : s;
      }, 0);
      
      return count + (isCube(sum) ? 1 : 0);
    }, 0), 0);
}