/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
export const promiseAll = promises => new Promise((resolve, reject) => {
  const results = [];

  let remaining = promises.length;

  if (remaining === 0) {
    resolve(results);
    return;
  }

  const handleResult = (index, result) => {
    results[index] = result;
    remaining -= 1;
    if (remaining === 0) {
      resolve(results);
    }
  };

  const handleError = error => {
    reject(error);
  };

  promises.forEach((promise, index) => {
    Promise.resolve(promise).then(result => {
      handleResult(index, result);
    }).catch(error => {
      handleError(error);
    });
  });
});
