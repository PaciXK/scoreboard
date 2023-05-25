// Timer functionality
let timerIntervalControl;
let timerRunningControl = false;
let timeInSecondsControl = 0;

function startTimerControl() {
    if (!timerRunningControl) {
        timerIntervalControl = setInterval(incrementTimerControl, 1000);
        timerRunningControl = true;
    }
}

function stopTimerControl() {
    clearInterval(timerIntervalControl);
    timerRunningControl = false;
}

function resetTimerControl() {
    stopTimerControl();
    timeInSecondsControl = 0;
    updateTimerDisplayControl();
}

function incrementTimerControl() {
    timeInSecondsControl++;
    updateTimerDisplayControl();
}

function updateTimerDisplayControl() {
    const timerContainerControl = document.querySelector('.timer-container');
    const minutesControl = Math.floor(timeInSecondsControl / 60).toString().padStart(2, '0');
    const secondsControl = (timeInSecondsControl % 60).toString().padStart(2, '0');
    timerContainerControl.textContent = `${minutesControl}:${secondsControl}`;
}

// Score count functionality
let scoreCountControl = 0;

function incrementScoreCountControl() {
    scoreCountControl++;
    updateScoreCountDisplayControl();
}

function resetScoreCountControl() {
    scoreCountControl = 0;
    updateScoreCountDisplayControl();
}

function updateScoreCountDisplayControl() {
    const scoreCountDisplayControl = document.querySelector('.score-count-display');
    scoreCountDisplayControl.textContent = scoreCountControl;
}

let scoreCount2Control = 0;

function incrementScoreCount2Control() {
    scoreCount2Control++;
    updateScoreCountDisplay2Control();
}

function resetScoreCount2Control() {
    scoreCount2Control = 0;
    updateScoreCountDisplay2Control();
}

function updateScoreCountDisplay2Control() {
    const scoreCountDisplay2Control = document.querySelector('.score-count-display2');
    scoreCountDisplay2Control.textContent = scoreCount2Control;
}

// Event listeners
document.querySelector('.start-timer').addEventListener('click', startTimerControl);
document.querySelector('.stop-timer').addEventListener('click', stopTimerControl);
document.querySelector('.reset-timer').addEventListener('click', resetTimerControl);
document.querySelector('.increment-score').addEventListener('click', incrementScoreCountControl);
document.querySelector('.reset-score').addEventListener('click', resetScoreCountControl);
document.querySelector('.increment-score2').addEventListener('click', incrementScoreCount2Control);
document.querySelector('.reset-score2').addEventListener('click', resetScoreCount2Control);