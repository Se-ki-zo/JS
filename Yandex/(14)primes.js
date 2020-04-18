function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function checkAllNumbers(max) {
    let res = [];

    for (let i = 1; i <= max; i++) {
        //console.log( 'Number ' + i + ' is prime = ' + isPrime(i) );
        if (isPrime(i) == true) {
            res.push(i);
        }
    }
    console.log(res);
}

checkAllNumbers(10);