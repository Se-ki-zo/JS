// function sumOfTwo(arr, num) {

// }

// sumOfTwo([1, 2, 3, 4, 5], 4); // true (так как 1 + 3 === 4)
// sumOfTwo([1, 2, 3, 4, 5], 100); // false



function sumOfTwo(arr, num) {
    let arrRes = [];
    let res = false;

    for (i = 0; i < arr.length; i++) {
        let a = arr[i];
        for (n = 0; n < arr.length; n++) {
            let b = arr[n];
            if (a != b) {
                let c = a + b;
                arrRes.push(c);
            }
        }
    }

    for (i = 0; i < arrRes.length; i++) {
        if (arrRes[i] == num) {
            res = true;
        } 
    }

    console.log(res);
}

sumOfTwo([1, 2, 3], 5); // true (так как 1 + 3 === 4)
//sumOfTwo([1, 2, 3, 4, 5], 100); // false
