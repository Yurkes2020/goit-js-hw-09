function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
console.log(start);
const stop = document.querySelector('[data-stop]');
console.log(stop);
