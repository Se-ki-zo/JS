/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(arr) {

    let resOne = arr.slice();
    let resTwo = arr.slice();

    for (let i = 0; i < arr.length; i++) {
        if ((resTwo[i] % 2 == 0) || ((resTwo[i] * -1) % 2 == 0)) {
            delete resTwo[i];
        }
        if ((resOne[i] % 2 == 1) || ((resOne[i] * -1) % 2 == 1)) {
            delete resOne[i];
        }
    }

    resTwo = resTwo.join('');
    resOne = resOne.join('');
    
    if (resOne.length < resTwo.length) {
        return Number(resOne);
    } else {
        return Number(resTwo);
    }
}

// console.log(findOutlier([0, 1, 2])); // 1
// console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([ 1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7 ])); // 3
//console.log(findOutlier([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 1000])); // 0