function fibonacci(num) {
    let fibiFirst = 0;
    let fibiSecond = 1;
    let fibiResult = 0;

    for (let i = 0; i < num - 1; i++) {
            fibiFirst = fibiSecond;
            fibiSecond = fibiResult;
            fibiResult = fibiFirst + fibiSecond;
        }
    console.log(fibiResult);
}

fibonacci(7);


/* 
function fibonacci(num) {
    let fibiFirst = 0;
    let fibiSecond = 1;
    let fibiResult = 0;
    let fibiMas = [];

    for (let i = 0; i < num; i++) {
        if (i == 0) {
            fibiMas.push(fibiResult);
        } else {
            fibiFirst = fibiSecond;
            fibiSecond = fibiResult;
            fibiResult = fibiFirst + fibiSecond;
            fibiMas.push(fibiResult);
        }
    }
    console.log(fibiMas);
    console.log('Your number is -', fibiResult);
}

fibonacci(10);
*/