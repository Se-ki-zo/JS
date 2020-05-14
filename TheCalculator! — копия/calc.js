let firstNum = '';
let secondNum = '';
let result;
let symbol = null; // || + || - || / || * ||
let commaFirst = 0; // comma switcher
let commaSecond = 0;


const displayFirstNum = document.getElementById('displayFirstNum');
const displaySecondNum = document.getElementById('displaySecondNum');
const displayAction = document.getElementById('displayAction');
const displayEq = document.getElementById('displayEq');
const maxNumLength = 10;


function push(num) {

    if (isFinite(result) == true) { // Очистка экрана и переменных в случае вызова цифры, после равно
        fullClear();
        firstNum += num;
        return displayFirstNum.innerHTML = firstNum;
    }

    if (symbol == null && firstNum.length < maxNumLength) { // Запись первого числа и вывод его на экран

        // if ((firstNum[0] == '0' || firstNum[0] == '.') && num != '.') {
        //     firstNum = '0.';
        //     firstNum += num;
        //     displayFirstNum.innerHTML = firstNum;
        // } else {
        //     firstNum += num;
        //     displayFirstNum.innerHTML = firstNum;
        // }



    } else if (secondNum.length < maxNumLength) { // Запись второго числа и вывод его на экран, если знак был применен
        secondNum += num;
        displaySecondNum.innerHTML = secondNum;
    }

}


function action(sym) {


    if (firstNum != '' && firstNum != '-') { // Проверка на 1ое число // Err?

        displayAction.innerHTML = sym; // Добавление знака на экран и запись в переменную
        symbol = sym;

        if (isFinite(result) == true) { // Очистка экрана и переменных после повторного запуска знака 
            firstNum = result;
            result = undefined;
            secondNum = '';
            displayFirstNum.innerHTML = firstNum;
            displaySecondNum.innerHTML = '';
            displayEq.innerHTML = '';
        }
    }

}

function comma() {

}

function plusMinus() {

    if (isFinite(result) == true) { // Очистка экрана и переменных после повторного запуска знака 
        firstNum = result * -1;
        secondNum = '';
        result = undefined;
        symbol = null;
        displayAction.innerHTML = '';
        displaySecondNum.innerHTML = '';
        displayEq.innerHTML = '';
        return displayFirstNum.innerHTML = firstNum;
    }

    if (!result) {

        if (firstNum != '' && symbol == null) {
            firstNum = (firstNum *= -1).toString();
            displayFirstNum.innerHTML = firstNum;
        } else if (secondNum != '' && symbol != null) {
            secondNum = (secondNum * -1).toString();
            displaySecondNum.innerHTML = secondNum;
        } else if (symbol == null) {
            firstNum = '';
            displayFirstNum.innerHTML = firstNum;
        } else if (symbol != null) {
            secondNum = '';
            displaySecondNum.innerHTML = secondNum;
        }
    }
}


function sum() {

    if (symbol == '/' && secondNum == 0) { // Деление на 0
        alert('num / 0 = Err!');
        return fullClear();
    }

    if (symbol != null) { // Проверка на первое число и знак - иначе Err в консоли

        if (secondNum == '' && symbol != null) { // Запуск выполнения действия если нет 2ого числа
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

        result = result.toString(); // ВСЕ. ЕСТЬ. СТРОКА. (БУГАГАГА)

        if (Number.isInteger(result) == true) {
            displayEq.innerHTML = `= ${result}`;
        } else {
            displayEq.innerHTML = `= ${(result)}`;
        }
    }
}

function fullClear() { // Очистка экрана и переменных
    firstNum = '';
    secondNum = '';
    symbol = null;
    commaFirst = 0; // comma switcher
    commaSecond = 0;
    result = undefined;
    displayFirstNum.innerHTML = '';
    displaySecondNum.innerHTML = '';
    displayAction.innerHTML = '';
    displayEq.innerHTML = '';
}