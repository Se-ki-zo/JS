/*

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 

You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

*/

function removeChar(str) {
    let arr = [];

    arr = str.split('');
    arr.shift();
    arr.pop();
    arr = arr.join('');


    console.log(arr)
    return arr;
};


removeChar('eloquent'); //'loquen'
// removeChar('country'); //'ountr'
// removeChar('person'); //'erso'
// removeChar('place'); //'lac'