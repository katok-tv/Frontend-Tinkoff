/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  const firstLow = first.toLowerCase();

  const secondLow = second.toLowerCase();

  const a1 = firstLow.replace(/\s/g, '');

  const a2 = secondLow.replace(/\s/g, '');

  const firstArr = a1.split('');
  const secondArr = a2.split('');

  firstArr.sort();
  secondArr.sort();

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }

  return true;
}
