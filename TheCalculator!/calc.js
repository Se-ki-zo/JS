let firstNum = '';
let secondNum = '';
let result;
let symbol = null; // || + || - || / || * ||
let commaFirst = 0;
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
        firstNum += num;
        displayFirstNum.innerHTML = firstNum;
    } else if (secondNum.length < maxNumLength) { // Запись второго числа и вывод его на экран, если знак был применен
        secondNum += num;
        displaySecondNum.innerHTML = secondNum;
    }

}


function action(sym) {

    if (firstNum != '') { // Проверка на 1ое число

        displayAction.innerHTML = sym; // Добавление знака на экран и запись в переменную
        symbol = sym;

        if (isFinite(result) == true) { // Очистка экрана и переменных после повторного запуска знака 
            if (Number.isInteger(result) == true) {
                firstNum = result;
            } else {
                firstNum = (result);
            }
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

}


function sum() {

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

        if (result == Infinity) { // Деление на 0
            alert('num / 0 = Err!');
            return fullClear();
        }

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
    result = undefined;
    displayFirstNum.innerHTML = '';
    displaySecondNum.innerHTML = '';
    displayAction.innerHTML = '';
    displayEq.innerHTML = '';
}