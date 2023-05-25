var broadcastChannel = new BroadcastChannel("scoreboard");

// Function to update the team name in the display view
function updateTeamName(team, teamName) {
    var teamNameElement = document.getElementById("teamName" + team);
    teamNameElement.textContent = teamName;
}

// Function to update the score display
function updateScoreDisplay(score1, score2) {
    var scoreElement1 = document.getElementById("score1");
    var scoreElement2 = document.getElementById("score2");
    scoreElement1.textContent = score1;
    scoreElement2.textContent = score2;
}

// Function to update the timer display
function updateTimerDisplay(timerValue) {
    var timerElement = document.getElementById("timer");
    var minutes = Math.floor(timerValue / 60).toString().padStart(2, '0');
    var seconds = (timerValue % 60).toString().padStart(2, '0');
    timerElement.textContent = `${minutes}:${seconds}`;
}

// Handle messages from the control view
broadcastChannel.onmessage = function (event) {
    var message = event.data;

    if (message.action === "startTimer") {
        startTimer();
    } else if (message.action === "pauseTimer") {
        pauseTimer();
    } else if (message.action === "resetTimer") {
        resetTimer();
    } else if (message.action === "increaseScore") {
        increaseScore(message.team);
    } else if (message.action === "updateTeamName") {
        updateTeamName(message.team, message.teamName);
    } else if (message.action === "resetScore") {
        resetScore(message.team);
    }
};

// Variables for the timer and scores
var timerInterval;
var timerRunning = false;
var timerValue = 0;
var score1 = 0;
var score2 = 0;

// Function to start the timer
function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(incrementTimer, 1000);
        timerRunning = true;
    }
}

// Function to pause/stop the timer
function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timerValue = 0;
    updateTimerDisplay(timerValue);
}

// Function to increment the timer
function incrementTimer() {
    timerValue++;
    updateTimerDisplay(timerValue);
}

// Function to increase the score for a specific team
function increaseScore(team) {
    if (team === 1) {
        score1++;
    } else if (team === 2) {
        score2++;
    }
    updateScoreDisplay(score1, score2);
}

// Function to reset the score for a specific team
function resetScore(team) {
    if (team === 1) {
        score1 = 0;
    } else if (team === 2) {
        score2 = 0;
    }
    updateScoreDisplay(score1, score2);
}