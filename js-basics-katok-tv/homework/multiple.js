/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

export default function multiple(a, b) {
  let res = 0;

  if (Number.isFinite(a) && Number.isFinite(b)) {
    const value = b >= 0 ? a : -a;

    for (let index = 0; index < Math.abs(b); index++) {
      res += value;
    }
  } else if (a === b) {
    res = Infinity;
  } else if (a === 0 || b === 0) {
    res = NaN;
  } else if (a === -Infinity || b === -Infinity) {
    res = -Infinity;
  } else {
    res = Infinity;
  }

  return res;
}
