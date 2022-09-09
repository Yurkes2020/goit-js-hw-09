import Notiflix from 'notiflix';

btnRef = document.querySelector('.form');
inpDelay = document.querySelector('input[name="delay"]');
inpStep = document.querySelector('input[name="step"]');
inpAmount = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function onSubmit(event) {
  event.preventDefault();
  for (let i = 0; i < Number(inpAmount.value); i += 1) {
    createPromise(i + 1, Number(inpDelay.value) + i * Number(inpStep.value))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

btnRef.addEventListener('submit', onSubmit);
