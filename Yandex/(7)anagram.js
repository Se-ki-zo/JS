/*

    Задача 7: «Анаграмма»
    Два слова называют анаграммами, если они состоят из одних и тех же букв.
    Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения). Важны только символы: пробелы и знаки препинания не учитывайте.

*/

function anagram(firstWord, secondWord) {
    let a = firstWord.toLowerCase().split('').sort().join();
    let b = secondWord.toLowerCase().split('').sort().join();

    if (a == b) {
        console.log(true);
    } else {
        console.log(false);
    }
}

anagram('finder', 'Friend'); // true
anagram('hello', 'bye'); // false
anagram('ara', 'ara');