/*

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 

Essentially, rearrange the digits to create the highest possible number.

https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

*/

function descendingOrder(n) {

    let res = parseInt(String(n).split('').sort().reverse().join(''));
    
    return res;
}

//   descendingOrder(0); // 0
//   descendingOrder(1); // 1
//   descendingOrder(123456789) // 987654321
//   descendingOrder(21445); // 54421
descendingOrder(145263); // 654321