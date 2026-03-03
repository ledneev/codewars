Array.prototype.sameStructureAs = function(other) {
  if (Array.isArray(this) && !Array.isArray(other)) return false;
  if (!Array.isArray(this) && Array.isArray(other)) return false;
​
  if (!Array.isArray(this) && !Array.isArray(other)) return true;
​
  if (this.length !== other.length) return false;
​
  for (let i = 0; i < this.length; i++) {
    if (!sameStructure(this[i], other[i])) {
      return false;
    }
  }
​
  return true;
};
​
function sameStructure(a, b) {
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (!Array.isArray(a) && !Array.isArray(b)) return true;
  if (a.length !== b.length) return false;
​
  for (let i = 0; i < a.length; i++) {
    if (!sameStructure(a[i], b[i])) return false;
  }
  return true;
}