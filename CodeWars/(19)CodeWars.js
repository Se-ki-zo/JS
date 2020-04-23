/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

*/

/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

*/

function generateHashtag(str) {
    let res = str.split(' ');
    let arr = [];

    res.unshift(`#`);

    if (str == false) {
        return false;
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i] != false) {
            arr.push(res[i][0].toUpperCase() + res[i].slice(1));
        }
    }

    arr = arr.join('');

    if (arr.length > 140) {
        return false
    }

    return arr;
}

console.log(generateHashtag("")); // false
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars")); // "#Codewars"
console.log(generateHashtag("Codewars is nice")); // "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // #CodeWars // ERR