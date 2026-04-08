let user_score = 0;
let comp_score = 0;
let winningScore = 0;
let roundsPlayed = 0;

const buttons = document.querySelectorAll(".bt1");
const resultDisplay = document.getElementById("result");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const resetBtn = document.getElementById("resetBtn");
const targetScoreEl = document.getElementById("targetScore");
const roundInfoEl = document.getElementById("roundInfo");
const userChoiceEl = document.getElementById("userChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const gameArea = document.getElementById("gameArea");
const matchSelect = document.getElementById("matchSelect");
const winnerScreen = document.getElementById("winnerScreen");
const winnerText = document.getElementById("winnerText");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const user = btn.getAttribute("data-choice") || btn.innerText;
        const computer = getComputerChoice();

        userChoiceEl.innerText = user;
        computerChoiceEl.innerText = computer;

        if (user === computer) {
            resultDisplay.innerText = "Draw";
            resultDisplay.style.backgroundColor = "#6c757d";
        }
        else if (isUserWinner(user, computer)) {
            user_score++;
            userScoreEl.innerText = user_score;
            resultDisplay.innerText = "You Won this Round";
            resultDisplay.style.backgroundColor = "#28a745";
        }
        else {
            comp_score++;
            compScoreEl.innerText = comp_score;
            resultDisplay.innerText = "Computer Won this Round";
            resultDisplay.style.backgroundColor = "#dc3545";
        }

        roundsPlayed++;
        roundInfoEl.innerText = `${roundsPlayed}`;
        checkWinner();
    });
});

function getComputerChoice() {
    const rand = Math.random();
    if (rand <= 0.33) return "Stone";
    if (rand <= 0.66) return "Paper";
    return "Scissor";
}

function isUserWinner(user, computer) {
    return (
        (user === "Stone" && computer === "Scissor") ||
        (user === "Paper" && computer === "Stone") ||
        (user === "Scissor" && computer === "Paper")
    );
}

function startMatch(rounds) {
    winningScore = Math.ceil(rounds / 2);
    user_score = 0;
    comp_score = 0;
    roundsPlayed = 0;
    userScoreEl.innerText = 0;
    compScoreEl.innerText = 0;
    userChoiceEl.innerText = "-";
    computerChoiceEl.innerText = "-";
    resultDisplay.innerText = "Pick your move to start.";
    resultDisplay.style.backgroundColor = "#7599ff";
    targetScoreEl.innerText = winningScore;
    roundInfoEl.innerText = roundsPlayed;
    matchSelect.style.display = "none";
    gameArea.style.display = "block";
    winnerScreen.style.display = "none";
}

function checkWinner() {
    if (user_score === winningScore) {
        showWinner("🎉 You Won the Match! 🎉");
    }
    else if (comp_score === winningScore) {
        showWinner("💻 Computer Won the Match");
    }
}

function showWinner(text) {
    gameArea.style.display = "none";
    winnerText.innerText = text;
    winnerScreen.style.display = "block";
}

function newMatch() {
    winnerScreen.style.display = "none";
    gameArea.style.display = "none";
    matchSelect.style.display = "block";
}

resetBtn.addEventListener("click", () => {
    user_score = 0;
    comp_score = 0;
    roundsPlayed = 0;
    userScoreEl.innerText = 0;
    compScoreEl.innerText = 0;
    roundInfoEl.innerText = 0;
    userChoiceEl.innerText = "-";
    computerChoiceEl.innerText = "-";
    resultDisplay.innerText = "Score reset. Pick your move.";
    resultDisplay.style.backgroundColor = "#7599ff";
});
