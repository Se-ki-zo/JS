/*

    Задача 13: «Сумма двух»
    Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr и целое число num. 
    Функция должна вернуть true, если в переданном массиве есть какие-то два числа, чья сумма равна num. 
    Если же такой пары чисел нет, функция должна вернуть false.

*/

function sumOfTwo(arr, num) {
    let arrRes = [];
    let res = false;

    for (i = 0; i < arr.length; i++) {
        let a = arr[i];
        for (n = 0; n < arr.length; n++) {
            let b = arr[n];
            if (a != b) {
                let c = a + b;
                arrRes.push(c);
            }
        }
    }

    for (i = 0; i < arrRes.length; i++) {
        if (arrRes[i] == num) {
            res = true;
        }
    }
    return res;
}

sumOfTwo([1, 2, 3], 5); // true (так как 1 + 3 === 4)
//sumOfTwo([1, 2, 3, 4, 5], 100); // false
