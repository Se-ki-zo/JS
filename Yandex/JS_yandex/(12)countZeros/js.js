/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(num) {
    let arrNum = [];
    let result = [];

    for (let i = 0; i < num; i++) {
        arrNum.push(i + 1);
    }
    
    arrNum = arrNum.join('').split('');

    for (let n = 0; n < arrNum.length; n++) {
        if (arrNum[n] == 0) {
            result.push(arrNum[n]);
        }
    }

    return result.length;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100