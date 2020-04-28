/*

Make a program that filters a list of strings and returns a list with only your arr name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

https://www.codewars.com/kata/55b42574ff091733d900002f

*/

function friend(arr) {
    let res = [];
    //let arr = arr.split('');
    for (i = 0; i < arr.length; i++) {
        let a = arr[i];
        if (a.length == 4) {
            res.push(a);
        }
    }

    for (let i = 0; i < res.length; i++) {
        if (!isNaN(parseInt(res[i]))) { // ищет число
            res.splice(i, 1);
        }
    }

    return res;
}

console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", 'asdd', "1231", 'dsaa', "4", "Cool Man"])); // ["Ryan"]
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // ["Jimm", "Cari", "aret"]
console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]
