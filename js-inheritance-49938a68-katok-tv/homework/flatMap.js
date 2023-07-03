/**
 * Напишите функцию, добавляющую полифил метода flatMap
 * к прототипу Array. Полифил должен полностью реализовывать
 * метод (обратите внимание на передачу контекста, индексы и так далее).
 *
 * Описание метода:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 *
 * @param  {*} ArrayConstructor конструктор Array
 * @return {Array} Тот же конструктор с добавленным методом flatMap
 */
export const flatMapPolyfill = (ArrayConstructor = Array) => {
  if (!Object.prototype.hasOwnProperty.call(ArrayConstructor.prototype, 'flatMap')) {
    const descriptors = Object.getOwnPropertyDescriptors(Array.prototype);

    Object.keys(descriptors).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(ArrayConstructor.prototype, key)) {
        Object.defineProperty(ArrayConstructor.prototype, key, descriptors[key]);
      }
    });
    Object.defineProperty(ArrayConstructor.prototype, 'flatMap', {
      value(callbackFn, thisArg) {
        const newArray = [];

        for (let i = 0; i < this.length; i++) {
          const result = callbackFn.call(thisArg, this[i], i, this);

          if (Array.isArray(result)) {
            newArray.push(...result);
          } else {
            newArray.push(result);
          }
        }
        return newArray;
      }
    });
  }
};
