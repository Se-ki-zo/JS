/*

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

*/

//N

function findOdd(arr) {
    let mass = arr.sort();
    let res = [];
    let a = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            res.push(i); // index
        }
    }

    res = res.reverse();

    for (let i = 0; i < res.length; i++) {
        if ((res[i] - res[i + 1]) % 2 != 0) {
            a = res[i];
            a
            return mass[a];
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 2, 2, 4, 20, 4, -1, -2, 5])); // 5
//console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 6, 6, 5])); //-1
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
// console.log(findOdd([10])); //10
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //10
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
//console.log(findOdd([5, 4, 3, 2, 2, 2, 1, 1, 7, 7, 11, 11, 5, 4, 3, 2, 2, 2, 10])); // 10