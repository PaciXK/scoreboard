var broadcastChannel = new BroadcastChannel("scoreboard");

// Example usage
// Function to update the score and timer displays
function updateDisplays(message) {
    var scoreElement1 = document.getElementById("score1");
    var scoreElement2 = document.getElementById("score2");
    var timerElement = document.getElementById("timer");
    var minutes = Math.floor(message.timerValue / 60).toString().padStart(2, '0');
    var seconds = (message.timerValue % 60).toString().padStart(2, '0');

    scoreElement1.textContent = message.score1;
    scoreElement2.textContent = message.score2;
    timerElement.textContent = `${minutes}:${seconds}`;
}

// Function to start the timer
function startTimer() {
    broadcastChannel.postMessage({ action: "startTimer" });
}

// Function to pause/stop the timer
function pauseTimer() {
    broadcastChannel.postMessage({ action: "pauseTimer" });
}

// Function to reset the timer
function resetTimer() {
    broadcastChannel.postMessage({ action: "resetTimer" });
}

// Function to increase the score for a specific team
function increaseScore(team) {
    broadcastChannel.postMessage({ action: "increaseScore", team: team });
}

// Function to reset the score for a specific team
function resetScore(team) {
    broadcastChannel.postMessage({ action: "resetScore", team: team });
}

// Function to update the team name
function updateTeamName(team) {
    var teamNameInput = document.getElementById("teamName" + team);
    var teamName = teamNameInput.value;
    broadcastChannel.postMessage({ action: "updateTeamName", team: team, teamName: teamName });
    teamNameInput.value = "";
}

// Listen for messages from the display view
broadcastChannel.onmessage = function (event) {
    var message = event.data;
    updateDisplays(message);
};