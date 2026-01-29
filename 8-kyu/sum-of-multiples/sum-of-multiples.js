function sumMul(n,m){
    if (n <= 0 || m <= 0 || n >= m) {
        return "INVALID";
    }
    return n * (Math.floor((m - 1) / n)) * ((Math.floor((m - 1) / n)) + 1) / 2;
}