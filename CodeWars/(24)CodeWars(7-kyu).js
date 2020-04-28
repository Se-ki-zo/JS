/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

*/

function findShort(s){
    let res;
    let len;
    let arr = [];

    arr = s.split(' ');
    len = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (len.length >= arr[i].length) {
            len = arr[i];
            res = arr[i].length;
        }
    }

    return res;
}

findShort("bitcoin take over the world maybe who knows perhaps"); // 3
findShort("turns out random test cases are easier than writing out basic ones"); // 3
findShort('Lisk Classic DarkCoin ProofOfStake Mine Ripple Waves DarkCoin 21inc Monero DarkCoin Steem') // 4