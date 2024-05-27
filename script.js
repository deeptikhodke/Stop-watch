let seconds = 0;
let tens = 0;
let minutes = 0;
let interval;
let isRunning = false;

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
const displayMilliseconds = document.querySelector('.milliseconds');

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        interval = setInterval(startTimer, 10);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    tens = 0;
    minutes = 0;
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
    displayMilliseconds.textContent = '00';
});

function startTimer() {
    tens++;
    if (tens >= 100) {
        tens = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            displayMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        }
        displaySeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    displayMilliseconds.textContent = tens < 10 ? '0' + tens : tens;
}
