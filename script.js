const clock = document.querySelector('.clock');
const period = document.querySelector('.period');
const btn = document.querySelector('.switch__btn');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');

const opt1 = {
  hour: '2-digit',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};

const opt2 = {
  month: 'long',
  year: 'numeric',
  weekday: 'long',
  day: 'numeric',
};

setInterval(function () {
  const now = new Date();
  const time = new Intl.DateTimeFormat(navigator.language, opt1).format(now);
  clock.textContent = time;

  const days = new Intl.DateTimeFormat(navigator.language, opt2).format(now);
  period.textContent = days;
}, 1000);

btn.addEventListener('click', function () {
  if (opt1.hour12) opt1.hour12 = false;
  else if (!opt1.hour12) opt1.hour12 = true;

  msg1.classList.toggle('active');
  msg2.classList.toggle('active');
});
