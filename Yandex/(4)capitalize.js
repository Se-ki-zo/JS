function capitalize(str) {
    let a = str.split(" ");
    let b = "";

    for (let i = 0; i < a.length; i++) {
        let c = a[i];
        let d = c.substring(0, 1).toUpperCase();
        let f = c.substring(1, c.length)
        b += d + f + " ";
    }

    console.log(b)
}

capitalize('молодость всё простит'); // "Молодость Всё Простит"
