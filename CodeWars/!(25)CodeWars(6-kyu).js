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

function persistence(num) {

    let resNum = num;
    let count = 0;
    let res = 1;
    let arr = (String(num).split(''));

    function loop(arrNum) { // функция для умножения
        count += 1;
        for (let i = 0; i < arrNum.length; i++) {
            arrNum[i] = parseInt(arrNum[i]);
            res *= arrNum[i];
        }
        return res;
    }

    if (resNum > 10) {
        console.log(loop(arr));
    }


    console.log(res);
    console.log(arr);
    console.log(count);
}

(persistence(39)); // 3
//(persistence(4)); // 0
//(persistence(25)); // 2
//(persistence(999)); // 4