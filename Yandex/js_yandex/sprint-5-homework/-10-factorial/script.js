/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    const arr = [];// можно отказатся от масива
    let sum = 0;
    
    for (i = 0; i < n; i++) {
        arr.push(i + 1);
    }

    for (i = 1; i < arr.length; i++) {
        sum = arr[i] * arr[i - 1];
        arr[i] = sum;
    }

    return sum;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720