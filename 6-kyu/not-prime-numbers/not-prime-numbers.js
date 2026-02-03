function notPrimes(a, b) {
    const digits = [2, 3, 5, 7];
    const result = [];
    (function generate(n) {
        if (n >= b) return;
        if (n >= a && !isPrime(n)) result.push(n);
        digits.forEach(d => generate(n * 10 + d));
    })(0);
    
    return result.sort((x, y) => x - y);
}
​
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++)
        if (n % i === 0) return false;
    return true;
}