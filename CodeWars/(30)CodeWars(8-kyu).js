/*
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(count, string) {
    let str = string;
    for(let i = 1; i < count; i++) {
        string+=str;
    }
    return string;
}

repeatStr(3, "*"); // "***"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
//repeatStr(6, "I") // "IIIIII"