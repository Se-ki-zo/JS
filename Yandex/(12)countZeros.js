function countZeros(num) {
    let arrNum = [];
    let arrZero = [];
    let result = [];

    for (let i = 0; i < num; i++) {
        arrNum.push(i + 1);
        console.log(arrNum);
        if (arrNum[i] % 10 == 0) {
            arrZero.push(arrNum[i]);
        }
    }
    arrZero = arrZero.join('').split('');
    for (let n = 0; n < arrZero.length; n++) {
        if (arrZero[n] == 0) {
            result.push(arrZero[n]);
        }
    }

    console.log(result.length);
}

//countZeros(10);
// countZeros(20); // 2 – два нуля, по одному в числах 10 и 20
// countZeros(30);
// countZeros(40);
// countZeros(50);
// countZeros(60);
// countZeros(70); 
// countZeros(80);
// countZeros(90);
// countZeros(100); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
// countZeros(110);



// версия с подсчетом 101, 102 ...
/*
function countZeros(num) {
    let arrNum = [];
    let result = [];

    for (let i = 0; i < num; i++) {
        arrNum.push(i + 1);
    }
    arrNum = arrNum.join('').split('');
    for (let n = 0; n < arrNum.length; n++) {
        if (arrNum[n] == 0) {
            result.push(arrNum[n]);
        }
    }

    console.log(result.length);
}

//countZeros(10);
// countZeros(20); // 2 – два нуля, по одному в числах 10 и 20
// countZeros(30);
// countZeros(40);
// countZeros(50);
// countZeros(60);
// countZeros(70); 
// countZeros(80);
// countZeros(90);
// countZeros(100); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
countZeros(110);
*/
