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

    if (firstNum == '0' && num == '0' && symbol == null) { // Запрет на нули // ERR -> 0 + num -> num +
        firstNum = '0';
        return displayFirstNum.innerHTML = firstNum;
    } else if (firstNum == '0' && num != '0' && symbol == null) {
        firstNum = num;
        return displayFirstNum.innerHTML = firstNum;
    } else if (secondNum == '0' && num == '0' && symbol != null) { // Запрет на нули
        secondNum = '0';
        return displaySecondNum.innerHTML = secondNum;
    } else if (secondNum == '0' && num != '0' && symbol != null) {
        secondNum = num;
        return displaySecondNum.innerHTML = secondNum;
    }

    if (symbol == null && firstNum.length < maxNumLength) { // Запись первого числа и вывод его на экран
        firstNum += num;
        displayFirstNum.innerHTML = firstNum;
    } else if (symbol != null && secondNum.length < maxNumLength) { // Запись второго числа и вывод его на экран, если знак был применен
        secondNum += num;
        displaySecondNum.innerHTML = secondNum;
    }
}


function action(sym) {

    if (firstNum != '' && firstNum != '-') { // Проверка на 1ое число

        displayAction.innerHTML = sym; // Добавление знака на экран и запись в переменную
        symbol = sym;

        if (isFinite(result) == true) { // Очистка экрана и переменных после повторного запуска знака 
            firstNum = result;
            lowClear();
        }
    }
}


function comma() {

    if (!result) {
        if (firstNum == '' && symbol == null && commaFirst == 0) {
            firstNum = '0.';
            commaFirst = 1;
            return displayFirstNum.innerHTML = firstNum;
        } else if (firstNum != '' && symbol == null && commaFirst == 0) {
            firstNum += '.';
            commaFirst = 1;
            return displayFirstNum.innerHTML = firstNum;
        } else if (secondNum == '' && symbol != null && commaSecond == 0) {
            secondNum = '0.';
            commaSecond = 1;
            return displaySecondNum.innerHTML = secondNum;
        } else if (secondNum != '' && symbol != null && commaSecond == 0) {
            secondNum += '.';
            commaSecond = 1;
            return displaySecondNum.innerHTML = secondNum;
        }
    }
}


function plusMinus() {

    if (isFinite(result) == true) { // Очистка экрана и переменных после повторного запуска знака 
        firstNum = result * -1;
        displayAction.innerHTML = '';
        symbol = null;
        lowClear();
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

    if (symbol != null) { // Проверка на первое число и знак

        if (secondNum == '' && symbol != null) { // Запуск выполнения действия если нет 2ого числа
            secondNum = firstNum;
            displaySecondNum.innerHTML = secondNum;
        }

        if (!result) {
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

        } else if (result) { // ERR
            if (symbol === '+') {
                firstNum = result;
                result = undefined;
                result = parseFloat(firstNum) + parseFloat(secondNum);
                displayFirstNum.innerHTML = firstNum;
                displayAction.innerHTML = symbol;
                displaySecondNum.innerHTML = secondNum;
                if (Number.isInteger(result) == true) {
                    displayEq.innerHTML = `= ${result}`;
                } else {
                    displayEq.innerHTML = `= ${(result)}`;
                }
            } else if (symbol === '-') {
                firstNum = result;
                result = undefined;
                result = parseFloat(firstNum) - parseFloat(secondNum);
                displayFirstNum.innerHTML = firstNum;
                displayAction.innerHTML = symbol;
                displaySecondNum.innerHTML = secondNum;
                if (Number.isInteger(result) == true) {
                    displayEq.innerHTML = `= ${result}`;
                } else {
                    displayEq.innerHTML = `= ${(result)}`;
                }
            } else if (symbol === '/') {
                firstNum = result;
                result = undefined;
                result = parseFloat(firstNum) / parseFloat(secondNum);
                displayFirstNum.innerHTML = firstNum;
                displayAction.innerHTML = symbol;
                displaySecondNum.innerHTML = secondNum;

                if (Number.isInteger(result) == true) {
                    displayEq.innerHTML = `= ${result}`;
                } else {
                    displayEq.innerHTML = `= ${(result)}`;
                }
            } else if (symbol === 'x') {
                firstNum = result;
                result = undefined;
                result = parseFloat(firstNum) * parseFloat(secondNum);
                displayFirstNum.innerHTML = firstNum;
                displayAction.innerHTML = symbol;
                displaySecondNum.innerHTML = secondNum;
                if (Number.isInteger(result) == true) {
                    displayEq.innerHTML = `= ${result}`;
                } else {
                    displayEq.innerHTML = `= ${(result)}`;
                }
            }
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

function lowClear() {
    secondNum = ''; // +
    result = undefined; // +
    commaFirst = 0; // +
    commaSecond = 0; // +
    displaySecondNum.innerHTML = ''; //+
    displayEq.innerHTML = ''; //+
    return displayFirstNum.innerHTML = firstNum; //+
}

function backSpace() {
    if (symbol == null && !result) {
        firstNum = firstNum.split('');
        firstNum.pop();
        firstNum = firstNum.join('');
        displayFirstNum.innerHTML = firstNum;

    } else if (symbol != null && !result) {
        secondNum = secondNum.split('');
        secondNum.pop();
        secondNum = secondNum.join('');
        displaySecondNum.innerHTML = secondNum;
    }
}