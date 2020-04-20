/*

Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function even_or_odd(number) {
    if (number % 2 == 0) {
        return 'Even';
    }
    return 'Odd';
}

console.log(even_or_odd(1)); // odd
console.log(even_or_odd(2)); // even
console.log(even_or_odd(3)); // odd
console.log(even_or_odd(4)); // even
console.log(even_or_odd(51)); // odd
console.log(even_or_odd(-3)); // odd