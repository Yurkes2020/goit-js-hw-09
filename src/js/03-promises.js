import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise(function (resolve, reject) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
  });

btnRef = document.querySelector('button');
inpDelay = document.querySelector('input[name="delay"]');
inpStep = document.querySelector('input[name="step"]');
inpAmount = document.querySelector('input[name="amount"]');

btnRef.addEventListener('click', createPromise);
