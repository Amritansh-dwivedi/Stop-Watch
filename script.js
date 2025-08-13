let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    let h = hours.toString().padStart(2, "0");
    let m = minutes.toString().padStart(2, "0");
    let s = seconds.toString().padStart(2, "0");
    display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

startStopBtn.addEventListener("click", () => {
    if (!isRunning) {
        startStopwatch();
        isRunning = true;
        startStopBtn.textContent = "Pause";
    } else {
        clearInterval(timer);
        isRunning = false;
        startStopBtn.textContent = "Start";
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    startStopBtn.textContent = "Start";
});

updateDisplay();

