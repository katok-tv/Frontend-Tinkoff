/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export default function rle(input) {
  let counter = 1;

  let prevChar = input[0];

  let output = '';

  for (let index = 1; index <= input.length; index++) {
    if (input[index] === prevChar) {
      counter += 1;
    } else {
      output += prevChar;
      output += counter === 1 ? '' : counter;
      counter = 1;
      prevChar = input[index];
    }
  }

  return output;
}
