/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
    const arr = str.split(' ');
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];

        if(word == ''){
            result += ' ';
        } else {
            result += `${word.substring(0, 1).toUpperCase() + word.substring(1, word.length)} `;
        }
    }

    result = result.trim();
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize(' '));
console.log(capitalize('слово '));