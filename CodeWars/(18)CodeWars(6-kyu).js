/*

In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. 

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 

This is only applicable to the natural numbers.

https://www.codewars.com/kata/541c8630095125aba6000c00

*/

digital_root = (num) => {
    let arr = String(num).split('');
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if (sum >= 10) {
        sum = digital_root(sum);
    }

    return sum;
}

console.log(digital_root(16)); //7 
console.log(digital_root(456)); //6 
console.log(digital_root(493193)); // 2