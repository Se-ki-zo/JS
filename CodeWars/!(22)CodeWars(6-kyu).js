/*

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

*/

function findOdd(A) {

    A.sort();
    let arr = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 1 || A[i] % 2 == -1) {
            arr.push(A[i])
        }
    }
    console.log(arr)
    let prev = arr[0];
    let index = 0;
    let bestNum = arr[0];
    let bestCount = 1;


    for (let i = 1; i < arr.length; i++) {
        if (prev != arr[i]) {
            let count = i - index;
            index = i;

            if (count > bestCount) {
                bestNum = prev;
                bestCount = count;
            }

            prev = arr[i];
        }
    }

    console.log(prev);
    console.log(index);
    console.log(bestNum);
    console.log(bestCount);
}

//findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
 findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);  //-1
// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);  // 5
// findOdd([10]);  //10
// findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1],);  //10
// findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);  // 1