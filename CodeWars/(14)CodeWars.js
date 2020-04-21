/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

function moveZeros(arr) {
    let a = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            a.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            a.push(0)
        }
    }

    return a;
}

//console.log(moveZeros([1, 0, 2, 0, 3]));
//console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));
//moveZeros([0, 1, 0, 2]); // [1, 2, 0, 0]
//moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false, 1, 1, 2, 1, 3, "a", 0, 0]