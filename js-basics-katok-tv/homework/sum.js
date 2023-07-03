/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 * @param {*} x число или undefined
 * @returns а это уже сами решите
 */
export default function sum(x) {
  let result = x || 0;

  function sumInternal(y) {
    if (y !== undefined) {
      result += y;
      return sumInternal;
    }
    return result;
  }

  if (x !== undefined) {
    return sumInternal;
  }

  return result;
}
