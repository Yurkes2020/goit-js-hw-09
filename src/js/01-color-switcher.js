// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const start = document.querySelector('[data-start]');
// const stop = document.querySelector('[data-stop]');

// start.addEventListener('click', changeBodyColor);
// stop.addEventListener('click', stopColorChange);
// stop.disabled = true;

// let interval = null;

// function changeBodyColor() {
//   interval = setInterval(
//     () => (document.body.style.backgroundColor = getRandomHexColor()),
//     1000
//   );

//   start.disabled = true;
//   stop.disabled = false;
// }

// function stopColorChange() {
//   clearInterval(interval);
//   start.disabled = false;
//   stop.disabled = true;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());

//достукатись до кнопок+
//повісити на них події+
//при події клік старт запускати зміну кольору з інтервалом та дізейблити+
//при стоп тормозити зміну кольору та дізейблити+

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let interval = null;

refs.body.addEventListener('click', bodyColorChange);
refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);

function startColorChange(event) {
  // console.log(event);
  event.preventDefault();
  interval = setInterval(() => {
    refs.body.style.background = getRandomHexColor();
  }, 1000);
  // event.target = bodyColorChange();
  // interval = setInterval(() => { bodyColorChange()}, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function stopColorChange() {
  clearInterval(interval);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function bodyColorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
