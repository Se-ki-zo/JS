/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    let res = 0;
    let arr = [];

    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        let a = str[i];
        if (a == 'a' || a == 'e' || a == 'i' || a == 'o' | a == 'u') {
            arr.push(a);
        }
    }

    res = arr.length;

    return res;
}

console.log(getCount("abracadabra"));