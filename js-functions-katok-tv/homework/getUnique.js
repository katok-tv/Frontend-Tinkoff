/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {number[]} массив уникальных значений, отсортированный по возрастанию
 */
export function getUnique(input) {
  const copy = input.slice();

  copy.sort((a, b) => a - b);

  const result = [];

  let e = result[0];

  copy.forEach(element => {
    if (element !== e) {
      result.push(element);
      e = element;
    }
  });

  return result;
}
