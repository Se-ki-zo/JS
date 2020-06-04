/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(num) {
    let count = 0;

    for (let i = 10; i <= num; i++) {
        let numAsArr = String(i).split('');

        for(let j = 0; j < numAsArr.length; j++)
            if(numAsArr[j] == '0')
                count++;
    }

    return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(0));
console.log(countZeros(9));
console.log(countZeros(10));
console.log(countZeros(342));