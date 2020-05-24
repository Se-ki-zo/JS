/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
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

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3