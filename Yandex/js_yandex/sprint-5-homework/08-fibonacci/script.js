/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
 */

function fibonacci (num) {
    let fibiFirst = 0;
    let fibiResult = 0;
    let fibiSecond = 1;

    for (let i = 0; i < num - 1; i++) {
        fibiFirst = fibiSecond;
        fibiSecond = fibiResult;
        fibiResult = fibiFirst + fibiSecond;
    }

    return fibiResult;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)