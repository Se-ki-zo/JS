/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    let arr = str.split('');

    for(let i = 0; i < arr.length; i++) {       
        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] == vowels[j]) {
                delete arr[i];
            }
        }
    }

    arr = arr.join('');

    return arr;
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"