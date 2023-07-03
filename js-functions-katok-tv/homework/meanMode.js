/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  const sum = numbers.reduce((acc, curr) => acc + curr);
  const mean = sum / numbers.length;

  const countMap = new Map();

  let maxCount = 0;

  let mode;

  for (const num of numbers) {
    const count = (countMap.get(num) || 0) + 1;

    countMap.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      mode = num;
    } else if (count === maxCount) {
      mode = null;
    }
  }

  return mean === mode;
}
