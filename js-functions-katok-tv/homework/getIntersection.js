/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
  first.sort((a, b) => a - b);
  second.sort((a, b) => a - b);

  const result = [];

  let i = 0;

  let j = 0;

  while (i < first.length && j < second.length) {
    if (first[i] === second[j]) {
      result.push(first[i]);
      i += 1;
      j += 1;
    } else if (first[i] < second[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}
