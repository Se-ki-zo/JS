function intersection(arr1, arr2) {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i];
        for (let n = 0; n < arr2.length; n++) {
            let b = arr2[n];
            if (b == a) {
                res.push(b);
            }
        }
    }
    console.log(res);
}

intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]); // [4, 1]
intersection([1, 5, 4, 2], [7, 12]); // []