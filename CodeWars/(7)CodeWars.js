/*

This time no story, no theory. The examples below show you how to write function accum:

*/

function accum(str) {
    let strLow = str.toLowerCase();
    let res = [];

    for (let i = 0; i < strLow.length; i++) {
        res.push(strLow[i].toUpperCase());

        for (let j = 0; j < i; j++) {
            res.push(strLow[i]);
        }

        if (i != strLow.length - 1) {
            res.push('-');
        }
    }

    res = res.join('');
    return res;
}

console.log(accum("Zpgl")); // Z-Pp-Ggg-Llll
accum("ZpglnRxqenU"); // Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
accum("NyffsGeyylB"); // N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb
accum("MjtkuBovqrU"); // M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu