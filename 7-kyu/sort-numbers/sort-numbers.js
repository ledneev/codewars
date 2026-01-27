function solution(nums){
  if (nums === null || nums.length === 0) {
    return [];
  }
​
  else {
    return nums.sort(function(a, b) {
      return a - b;
    });
  }
}