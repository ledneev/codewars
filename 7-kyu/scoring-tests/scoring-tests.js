function scoreTest(str, right, omit, wrong) {
  return str.reduce((sum, item) => {
    switch (item) {
      case 0:
        return sum + right;
      case 1:
        return sum + omit;
      case 2:
        return sum - wrong;
      default:
        return sum;
    }
  }, 0);
}