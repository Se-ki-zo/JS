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

    if (firstWord.toLowerCase() === secondWord.toLowerCase()) { 
        /*

        Если учитывать, что под анаграммой подразумеваются исключительно разные слова,

        т.к тренажер выводит ошибку на 'up' & 'UP', если нет, то проверка не нужна.

        */
       
        return false;
    }

    let a = firstWord.toLowerCase().split('').sort().join();
    let b = secondWord.toLowerCase().split('').sort().join();

    if (a === b) {
        return true;
    } else {
        return false;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false