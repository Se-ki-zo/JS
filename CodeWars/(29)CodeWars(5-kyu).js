/*
https://www.codewars.com/kata/589d26f3e8afb7532f000078/train/javascript

Task
Find the last k digits of the number nn. It is guaranteed that the length of number nn is not less than k.

Example
For n = 5, k = 3, the result should be "125"

5^5 = 3125, last 3 digits is "125"

Input / Output
[input] integer n

1 ≤ N ≤ 10^9

[input] integer k

1 ≤ k ≤ 9

[output] a string

string of length k ---> last k digits of n^n
*/

function n2n(n, k) {
    console.log(process.versions);
    return String((BigInt(n) ** BigInt(n))).split('').slice(-k).join('');
}


console.log(n2n(999, 3));
//console.log(n2n(3, 1));