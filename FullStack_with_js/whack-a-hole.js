
let grid = document.getElementById("hero");
let scoreText = document.getElementById("score");
let timeText = document.getElementById("time");
let startBtn = document.getElementById("startBtn");
let cells = document.querySelectorAll(".hole");
let score = 0;
let time = 30;
let moleTime;
let gameTime;
startBtn.addEventListener("click", function() {
    clearInterval(moleTime);
    clearInterval(gameTime);
    score = 0;
    time = 30;
    scoreText.innerText = score;
    timeText.innerText = time;
    startBtn.disabled = true;
    cells.forEach(function(cell) {
        cell.classList.remove("active");
    });
    moleTime = setInterval(function() {
        cells.forEach(function(cell) {
            cell.classList.remove("active");
        });
        let random = Math.floor(Math.random() * 9);
        cells[random].classList.toggle("active");
    }, 800);
    gameTime = setInterval(function() {
        time--;
        timeText.innerText = time;
        if (time <= 0) {
            clearInterval(moleTime);
            clearInterval(gameTime);
            cells.forEach(function(cell) {
                cell.classList.remove("active");
            });
            startBtn.disabled = false;
            alert("Game Over! Your score: " + score);
        }
    }, 1000);
});
grid.addEventListener("click", function(event) {
    if (event.target.classList.contains("active")) {
        score++;
        scoreText.innerText = score;
        
        event.target.classList.remove("active");
    }
});
