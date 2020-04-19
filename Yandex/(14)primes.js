/*

Задача 14: «Простые числа»
Напишите функцию primes(n). Её единственный аргумент — целое число n. Функция должна возвращать массив простых чисел от 2 до n.

*/

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function checkAllNumbers(max) {
    let res = [];

    for (let i = 1; i <= max; i++) {
        //console.log( 'Number ' + i + ' is prime = ' + isPrime(i) );
        if (isPrime(i) == true) {
            res.push(i);
        }
    }
    return res;
}

checkAllNumbers(10);