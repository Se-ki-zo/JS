/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, num) {
    
    let arrRes = [];
    let res = false;

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        for (let j = 0; j < arr.length; j++) {
            let b = arr[j];
            if (i != j) {
                let c = a + b;
                arrRes.push(c);
            }
        }
    }

    for (let i = 0; i < arrRes.length; i++) {
        if (arrRes[i] == num) {
            res = true;
        } 
    }
    
    return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false