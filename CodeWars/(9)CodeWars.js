/* 

You are going to be given a word. Your job is to return the middle character of the word. 

If the word's length is odd, return the middle character.

If the word's length is even, return the middle 2 characters.

*/

function getMiddle(str) {
    let len;
    let res;

    if (str.length % 2 == 0) {
        len = (str.length / 2) - 1;
        res = str.charAt(len) + str.charAt(len + 1);
    } else {
        len = Math.floor(str.length / 2);
        res = str.charAt(len);
    }

    return res;
}

getMiddle("test"); // es
getMiddle("testing"); // t
getMiddle("middle"); // dd