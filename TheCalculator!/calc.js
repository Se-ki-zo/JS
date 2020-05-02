let result = '';
let resultFiled;

function push(num) { // добавление числа на дисплей
    result = result + num;

    printResult();
}

function printResult() { // выводим число в <p>
    resultFiled.innerHTML = result;
}

function start() {
    resultFiled = document.getElementById('displayFirstNum');
    printResult();
}

start();

function actionPlusMinus() { // смена знака у числа
    // ERR!
    if (parseInt.result >= 0) {
        parseInt.result *= 1;
        start();
    } else {
        parseInt.result *= -1;
        start();
    }

}

function actionComma() { // запятая

}

function actionPlus() { // Действие: Плюс

}

function actionMinus() { // Действие: Минус

}

function actionMulti() { // Действие: Умножение

}

function actionDiv() { // Действие: Деление

}

function actionEq() { // Финальное Действие: Равно

}