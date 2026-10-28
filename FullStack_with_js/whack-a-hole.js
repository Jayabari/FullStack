const grid = document.getElementById("grid");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

for (let i = 0; i < 9; i++) {
    const cell = document.createElement("button");
    cell.className = "cell";
    cell.dataset.index = i;
    grid.appendChild(cell);
}

let score = 0, time = 30, mole = -1;
let moveTimer, clockTimer, playing = false;

function moveMole() {
    grid.querySelectorAll(".cell").forEach(cell => {
        cell.classList.toggle("active", false);
        cell.textContent = "";
    });

    mole = Math.floor(Math.random() * 9);
    const cell = grid.children[mole];
    cell.classList.toggle("active", true);
    cell.textContent = "🐹";
}

grid.addEventListener("click", event => {
    const cell = event.target.closest(".cell");
    if (!playing || !cell) return;

    if (Number(cell.dataset.index) === mole) {
        score++;
        scoreText.textContent = score;
        moveMole();
    }
});

document.getElementById("start").onclick = () => {
    clearInterval(moveTimer);
    clearInterval(clockTimer);

    score = 0;
    time = 30;
    playing = true;
    scoreText.textContent = score;
    timeText.textContent = time;
    moveMole();

    moveTimer = setInterval(moveMole, 800);

    clockTimer = setInterval(() => {
        time--;
        timeText.textContent = time;

        if (time <= 0) {
            clearInterval(moveTimer);
            clearInterval(clockTimer);
            playing = false;
            mole = -1;
            grid.querySelectorAll(".cell").forEach(cell => {
                cell.classList.toggle("active", false);
                cell.textContent = "";
            });
            alert("Game over! Score: " + score);
        }
    }, 1000);
};