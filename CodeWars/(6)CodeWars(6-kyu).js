/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

https://www.codewars.com/kata/514b92a657cdc65150000006

*/

function solution(number) {
    let res = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            res += i;
        }
    }

    return res;
}

console.log(solution(10)); // 23 = 3 + 5 + 6 + 9
console.log(solution(12)); // 33 = 3 + 5 + 6 + 9 + 10  
console.log(solution(16)); // 60 = 3 + 5 + 6 + 9 + 10 + 12 + 15