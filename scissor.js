let user_score = 0;
let comp_score = 0;
let winningScore = 0;

let buttons = document.querySelectorAll(".bt1");
let resultDisplay = document.getElementById("result");
let userScoreEl = document.getElementById("userScore");
let compScoreEl = document.getElementById("compScore");
let resetBtn = document.getElementById("resetBtn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let rand = Math.random();
        let computer;
        if (rand <= 0.3) computer = "Stone";
        else if (rand <= 0.6) computer = "Paper";
        else computer = "Scissor";

        let user = btn.innerText;

        if (user === computer) {
            resultDisplay.innerText = "Draw";
        }
        else if (
            (user === "Stone" && computer === "Scissor") ||
            (user === "Paper" && computer === "Stone") ||
            (user === "Scissor" && computer === "Paper")
        ) {
            user_score++;
            userScoreEl.innerText = user_score;
            resultDisplay.innerText = "User Won";
        }
        else {
            comp_score++;
            compScoreEl.innerText = comp_score;
            resultDisplay.innerText = "Computer Won";
        }

        checkWinner();
    });
});

function startMatch(rounds) {
    winningScore = Math.ceil(rounds / 2);
    user_score = 0;
    comp_score = 0;
    userScoreEl.innerText = 0;
    compScoreEl.innerText = 0;
    resultDisplay.innerText = "";
    document.getElementById("matchSelect").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function checkWinner() {
    if (user_score === winningScore) {
        showWinner("🎉 You Won the Match 🎉");
    }
    if (comp_score === winningScore) {
        showWinner("💻 Computer Won the Match");
    }
}

function showWinner(text) {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("winnerScreen").style.display = "block";
    document.getElementById("winnerText").innerText = text;
}

function newMatch() {
    document.getElementById("winnerScreen").style.display = "none";
    document.getElementById("matchSelect").style.display = "block";
}

resetBtn.addEventListener("click", () => {
    user_score = 0;
    comp_score = 0;
    userScoreEl.innerText = 0;
    compScoreEl.innerText = 0;
    resultDisplay.innerText = "";
});
