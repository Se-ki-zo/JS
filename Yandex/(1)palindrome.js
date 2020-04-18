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