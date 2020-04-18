function factorial(n) {
    a = [];
    let b = 0;

    if (n == 0 || n == 1) {
        return 1;
    }
    for (i = 0; i < n; i++) {
        a.push(i + 1);
    }

    console.log(a);
    for (i = 1; i < a.length; i++) {
        b = a[i] * a[i - 1];
        console.log(b);
        a[i] = b;
        console.log(a[i]);
    }
    console.log(b);
}

factorial(6);