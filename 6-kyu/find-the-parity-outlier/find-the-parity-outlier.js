function findOutlier(int) {
    const even = int.filter(a => a % 2 === 0);
    const odd = int.filter(a => a % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}