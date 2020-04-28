/*

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

*/

function squareDigits(num) {
    let arr = String(num).split('');
    let arrRes = [];
    
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(arr[i]**2);
    }

    arrRes = parseInt(arrRes.join(''));

    return arrRes;
}

squareDigits(9119); // 811181