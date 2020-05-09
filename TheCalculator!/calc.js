let firstNum = '';
let secondNum = '';
let result;
let symbol = null; // || + || - || / || * ||

const displayFirstNum = document.getElementById('displayFirstNum');
const displaySecondNum = document.getElementById('displaySecondNum');
const displayAction = document.getElementById('displayAction');
const displayEq = document.getElementById('displayEq');
const maxNumLength = 10;


function push(num) {

    if (symbol == null && firstNum.length < maxNumLength) { // if (num[0] !=0)
        firstNum += num;
        displayFirstNum.innerHTML = firstNum;
    } else if (secondNum.length < maxNumLength) {
        secondNum += num;
        displaySecondNum.innerHTML = secondNum;
    }
    // clear(2);

}


function action(sym) {

    displayAction.innerHTML = sym;
    symbol = sym;

    if (isFinite(result) == true) {
        if (Number.isInteger(result) == true) {
            firstNum = result;
        } else {
            firstNum = (result).toFixed(3);
        }

        displayFirstNum.innerHTML = firstNum;
        secondNum = '';
        displaySecondNum.innerHTML = '';
        displayEq.innerHTML = '';
    }
    // clear(1);
}


function sum() {

    if (secondNum == '') {
        secondNum = firstNum;
        displaySecondNum.innerHTML = secondNum;
    }

    if (symbol === '+') {
        result = parseFloat(firstNum) + parseFloat(secondNum);
    } else if (symbol === '-') {
        result = parseFloat(firstNum) - parseFloat(secondNum);
    } else if (symbol === '/') {
        result = parseFloat(firstNum) / parseFloat(secondNum);
    } else if (symbol === 'x') {
        result = parseFloat(firstNum) * parseFloat(secondNum);
    }

    if (Number.isInteger(result) == true) {
        displayEq.innerHTML = `= ${result}`;
    } else {
        displayEq.innerHTML = `=&nbsp${(result).toFixed(3)}`;
    }
}


// function clear(ver) { //Err

//     if (isFinite(result) == true && ver == 1) {
//         if (Number.isInteger(result) == true) {
//             firstNum = result;
//         } else {
//             firstNum = (result).toFixed(3);
//         }

//         displayFirstNum.innerHTML = firstNum;
//         secondNum = '';
//         displaySecondNum.innerHTML = '';
//         displayEq.innerHTML = '';

//     } else if (isFinite(result) == true && ver == 2) {
//         displayFirstNum.innerHTML = firstNum;
//         secondNum = '';
//         symbol = null;
//         displayAction.innerHTML = '';
//         displaySecondNum.innerHTML = '';
//         displayEq.innerHTML = '';

//     }
// }
