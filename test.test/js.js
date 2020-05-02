let result = '';
let resultFiled;

function onClikc(btn) {
    result = result + btn;

    printResult();
}

function printResult() {
    resultFiled.innerHTML = result;
}

function start() {
    resultFiled = document.getElementById('result3');
    printResult();
}

start();