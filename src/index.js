module.exports = function reverse (n) {
    const num = `${Math.abs(n)}`;
    let result = '';
    let i = num.length - 1;

    while(i >= 0) {
        result += num[i];
        i -= 1;
    }
    
    return -(-result);
}
