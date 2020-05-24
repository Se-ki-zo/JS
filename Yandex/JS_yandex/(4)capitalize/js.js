/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
    let a = str.split(' ');
    let b = '';

    for (let i = 0; i < a.length; i++) {
        let c = a[i];
        let d = c.substring(0, 1).toUpperCase();
        let f = c.substring(1, c.length)
        b += `${d + f} `;
    }

    b = b.trim();
    return b;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

capitalize('молодость всё простит'); // "Молодость Всё Простит"
capitalize(' ');
capitalize('слово ');