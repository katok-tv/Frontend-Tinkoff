/**
 * Напишите функцию rejectOnTimeout(promise, ms), возвращающую
 * промис, отражающий поведение исходного promise, либо
 * отменяющийся со значением 'timeout_error', если исходный
 * промис не завершился в течение ms миллисекунд.
 *
 * Не использовать Promise.race.
 *
 * @param  {Promise} promise исходный промис
 * @param  {Number}  ms время для timeout в миллисекундах
 * @return {Promise} промис с нужным поведением
 */
export const rejectOnTimeout = (promise, ms) => {
  let timeoutId;

  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject('timeout_error');
    }, ms);
  });

  return new Promise((resolve, reject) => {
    for (const prom of [promise, timeoutPromise]) {
      Promise.resolve(prom).then(resolve, reject);
    }
  }).finally(() => {
    clearTimeout(timeoutId);
  });
};
