/*

    In this little assignment you are given a string of space separated numbers, 
    and have to return the highest and lowest number.

*/

function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let res = Math.max.apply(Math, arr) + ' ' + Math.min.apply(Math, arr);
    return (res);
}

console.log(highAndLow("-4 5 29 54 4 0 -1")); // 54 -4
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6 11")); // 542 -214