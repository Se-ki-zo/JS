/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let b = arr2[j];
            if (a == b) {
                res.push(a);
            }
        }
    }

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (res[i] == res[j] && i != j) {
                res.splice(i, 1);
            }
        }
    }

    return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // [1, 4]