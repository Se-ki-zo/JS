/*

  Задача 5: «Найти гласные»
  Напишите функцию findVowels(str), принимающую на вход кириллическую строку str и возвращающую количество гласных, содержащихся в этой строке. 
  Для вашего удобства вот массив кириллических гласных: ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']

*/

function sumtheword(str) {
  const a = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

  str = str.toLowerCase();
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const b = str[i];

    for (let n = 0; n < a.length; n++) {
      if (b == a[n]) {
        result++;
        break;
      }
    }
  }

  return result;
}

sumtheword('аллергия');

/*
 function findVowels(a, b) {
  b = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) !== -1) {
      result.push(a[i]);
      //console.log(a[i]);
    }
  }
  console.log(result.length);
}

findVowels('здравствуй'); // 2
findVowels('привет'); // 2
findVowels('хеллоу'); // 3

*/