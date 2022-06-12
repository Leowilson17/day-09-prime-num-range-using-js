let b = parseInt(prompt());
console.log('Input : ', b)
for (var k = 2; k <= b; k++) {
    let a = 0;
    for (var j = 2; j <= k / 2; j++) {
        if (k % j == 0) {
            a = 1;
        }
    }
    if (a == 0) {
        console.log(k + 'is a prime number');
    }
}