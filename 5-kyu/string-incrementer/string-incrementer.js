function incrementString(str) {
​
  const match = str.match(/(\d*)$/);
  
  if (!match) return str + "1";
  
  const prefix = str.slice(0, match.index);
  const suffix = match[0];
​
  if (suffix === "") return str + "1";
  
  const n_len = suffix.length;
  const num = Number(suffix) + 1;
  const newNumStr = String(num);
  
  if (newNumStr.length >= n_len) {
    return prefix + newNumStr;
  } else {
    return prefix + newNumStr.padStart(n_len, '0');
  }
}