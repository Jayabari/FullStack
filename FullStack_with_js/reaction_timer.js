
let box = document.getElementById("box");
let result = document.getElementById("result");
let startBtn = document.getElementById("startBtn");
let startTime;
let timer;
let ready = false;
let playing = false;
startBtn.addEventListener("click", function() {
    clearTimeout(timer);
    ready = false;
    playing = true;
    startBtn.disabled = true;
    box.style.backgroundColor = "red";
    box.innerText = "Wait for Green!";
    result.innerText = "Get Ready...";
    let delay = Math.floor(Math.random() * 3000) + 2000;
    timer = setTimeout(function() {
        box.style.backgroundColor = "green";
        box.innerText = "CLICK NOW!";
        startTime = Date.now();
        ready = true;
    }, delay);
});
box.addEventListener("click", function() {
    if (!playing) {
        return;
    }
    if (!ready) {
        clearTimeout(timer);
        result.innerText = "Too early! Try again.";
        box.innerText = "Too Early!";
        playing = false;
        startBtn.disabled = false;
        return;
    }
    let reactionTime = Date.now() - startTime;
    result.innerText = "Reaction Time: " + reactionTime + " ms";
    box.innerText = "Well Done!";
    playing = false;
    ready = false;
    startBtn.disabled = false;
    let best = localStorage.getItem("bestTime");
    if (best === null || reactionTime < Number(best)) {
        localStorage.setItem("bestTime", reactionTime);
    }
    result.innerText +=
        " | Best: " + localStorage.getItem("bestTime") + " ms";
});
