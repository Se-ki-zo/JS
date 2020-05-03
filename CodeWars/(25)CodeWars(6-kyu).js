/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number

 https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

 */

//ERR!

function persistence(number) {
    let num = String(number).split('');
    let sum = 1;
    let count = 0;

    if (number < 10) {
        return count;
    }

    for (let i = 0; i < num.length; i++) {
        sum *= num[i];
    }

    console.log(sum);

    count += 1;

    while (sum > 9) {
        count += 1;
        let arr = String(sum).split('');
        console.log(arr)
        sum = 1;

        for (let i = 0; i < arr.length; i++) {
            sum *= arr[i];
        }
    }

    return count;
}

persistence(39); // 3
//persistence(4); // 0
//persistence(25); // 2
//persistence(999); // 4
//persistence(10); // 1