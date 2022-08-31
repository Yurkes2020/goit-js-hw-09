function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', changeBodyColor);
stop.addEventListener('click', stopColorChange);
stop.disabled = true;

let interval;

function changeBodyColor() {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    start.disabled = true;
    stop.disabled = false;
  }, 1000);
}

function stopColorChange() {
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
}
