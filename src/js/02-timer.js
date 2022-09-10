import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

const inputDate = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let countDownTimer = null;

start.addEventListener('click', startTimer);

start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates) < Date.parse(new Date())) {
      Notiflix.Notify.failure('❌ Цей день вже минув...');
    } else {
      countDownTimer = Date.parse(selectedDates[0]) - Date.parse(new Date());
      start.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

function startTimer() {
  start.disabled = true;
  let timer = setInterval(() => {
    countDownTimer = countDownTimer - 1000;
    if (countDownTimer >= 0) {
      const { days, hours, minutes, seconds } = convertMs(countDownTimer);
      const strD = String(days);
      const strH = String(hours);
      const strM = String(minutes);
      const strS = String(seconds);

      daysRef.textContent = strD.length > 1 ? strD : addLeadingZero(strD);
      hoursRef.textContent = strH.length > 1 ? strH : addLeadingZero(strH);
      minutesRef.textContent = strM.length > 1 ? strM : addLeadingZero(strM);
      secondsRef.textContent = strS.length > 1 ? strS : addLeadingZero(strS);
    } else {
      clearInterval(timer);
    }
  }, 1000);
  Notiflix.Notify.success('GO GO GO');
}
