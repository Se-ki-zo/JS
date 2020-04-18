function reverseWords(str) {
    let a = str.split(" ").reverse().join(" ");
    console.log(a);
}

reverseWords('всегда много путей достичь цель есть'); // "есть цель достичь путей много всегда"
reverseWords('испробовать их все должны вы'); // "вы должны все их испробовать"
