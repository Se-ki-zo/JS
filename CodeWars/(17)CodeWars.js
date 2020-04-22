/*

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 

Bob observed that one number usually differs from the others in evenness. 

Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

*/

function iqTest(numbers) {
    let arr = numbers.split(' ');
    let arrNum = numbers.split(' ').sort();
    let num; // положим число
    let countOfOdd = 0; // кол-во нечет
    let countOfEven = 0; // кол-во чет
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arrNum[i] % 2 == 0) {
            countOfEven += 1;
        } else {
            countOfOdd += 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (countOfEven > countOfOdd && arrNum[i] % 2 == 0) {
            delete arrNum[i]
        } else if (countOfOdd > countOfEven && arrNum[i] % 2 == 1) {
            delete arrNum[i]
        }
    }

    num = arrNum.join('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            res = arr.indexOf(arr[i]) + 1;
        }
    }
    return res;
}

console.log(iqTest("1 2 1 1")); // 2
//console.log(iqTest("2 4 7 8 10")); // 3
//console.log(iqTest("1 2 2")); // 1