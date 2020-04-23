/*

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

*/

function findOdd(A) {
    let arrOdd = [];
    let arr = [];
    let res = 0;

    for (let i = 0; i < A.length; i++) {

    }

    console.log(arrOdd);
    console.log(arr);
    console.log(res);
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);  //-1
// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);  // 5
// findOdd([10]);  //10
// findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1],);  //10
// findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);  // 1