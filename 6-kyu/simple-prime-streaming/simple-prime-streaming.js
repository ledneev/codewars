function solve(a, b) {
    let buffer = '';
    let num = 2;
    let result = '';
    let needed = a + b;
    
    while (buffer.length < needed) {
        if (isPrime(num)) {
            buffer += num;
        }
        num++;
    }
    
    return buffer.slice(a, a + b);
}
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}