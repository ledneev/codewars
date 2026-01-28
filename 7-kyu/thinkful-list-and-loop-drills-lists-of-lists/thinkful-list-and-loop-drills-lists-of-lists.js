function processData(data) {
    return data.reduce((product, [a, b]) => product * (a - b), 1);
}