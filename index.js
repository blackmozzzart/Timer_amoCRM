const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timer = 0;

  return (seconds) => {
    clearInterval(timer);
    let lastSeconds = seconds;

    timer = setInterval(() => {
      if (!lastSeconds) {
        clearInterval(timer)
        return;
      }

      const date = new Date(1970, 0, 1);
      lastSeconds -= 1;
      date.setSeconds(lastSeconds);
      timerEl.textContent = date.toLocaleTimeString();
    }, 1000);
    console.log(timer);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  event.currentTarget.value = event.currentTarget.value.replace(/\D+/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});