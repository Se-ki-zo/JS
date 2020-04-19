/*

    Задача 1: «Палиндром»
    Палиндром — это слово, предложение или последовательность символов, которая читается слева направо так же, как и справа налево. 
    Например, «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
    Напишите функцию palindrome(str), принимающую как аргумент строку. Функция должна вернуть true, если строка — палиндром, и false, если нет.
    Считайте, что на вход всегда передаётся слово: то есть знаков препинания и пробелов в аргументе быть не может.

*/

/*
    function palindrome(str) {
        str = str.toLowerCase();
        let a = str.split("").reverse().join("");
        console.log(a == str);
    }

    palindrome('топот'); // true
    palindrome('Saippuakivikauppias'); // true
    palindrome('привет'); // false

*/

function palindrome(str) {
    str = str.toLowerCase();
    let a = str.split('').reverse().join('');

    if (str == a) {
        console.log(str, "=", a, "it's", true);
    } else {
        console.log(str, "!=", a, "it's", false);
    }
    // console.log(a);
}

palindrome('anna');
palindrome('Anna');
palindrome('Jhon');