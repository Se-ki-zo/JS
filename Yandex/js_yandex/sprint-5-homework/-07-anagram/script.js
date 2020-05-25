/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
 */

function anagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length || firstWord.toLowerCase() === secondWord.toLowerCase()) { 
        return false;
    }

    const wordOne = firstWord.toLowerCase().split('').sort().join();
    const wordTwo = secondWord.toLowerCase().split('').sort().join();

    return wordOne === wordTwo;
}

/*
function anagram(firstWord, secondWord) {
    if (firstWord.toLowerCase() === secondWord.toLowerCase() || firstWord.length !== secondWord.length) {
        // Если учитывать, что под анаграммой подразумеваются исключительно разные слова, т.к тренажер выводит ошибку на 'up' & 'UP', если нет, то проверка не нужна.
        return false;
    } else {
        return firstWord.toLowerCase().split('').sort().join() === secondWord.toLowerCase().split('').sort().join();
    }
}
*/

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false