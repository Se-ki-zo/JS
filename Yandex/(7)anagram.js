function anagram(firstWord, secondWord) {
    let a = firstWord.toLowerCase().split('').sort().join();
    let b = secondWord.toLowerCase().split('').sort().join();
    
    if (a == b) {
        console.log(true);
    } else {
        console.log(false);
    }
}

anagram('finder', 'Friend'); // true
anagram('hello', 'bye'); // false
anagram('ara', 'ara');