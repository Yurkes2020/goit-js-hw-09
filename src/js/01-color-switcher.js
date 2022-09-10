function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', changeBodyColor);
stop.addEventListener('click', stopColorChange);
stop.disabled = true;

let interval = null;

function changeBodyColor() {
  interval = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );

  start.disabled = true;
  stop.disabled = false;
}

function stopColorChange() {
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
