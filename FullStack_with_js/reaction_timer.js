const box = document.getElementById("box");
const result = document.getElementById("result");
let timer = null, startTime = 0, state = "idle";

function updateBest() {
    const best = localStorage.getItem("reactionBest");
    document.getElementById("best").textContent =
        best === null ? "--" : best;
}

document.getElementById("start").onclick = () => {
    clearTimeout(timer);
    state = "waiting";
    box.classList.remove("ready");
    box.textContent = "Wait for green...";
    result.textContent = "";

    timer = setTimeout(() => {
        state = "ready";
        box.classList.add("ready");
        box.textContent = "CLICK NOW!";
        startTime = Date.now();
    }, 2000 + Math.random() * 3000);
};
box.onclick = () => {
    if (state === "waiting") {
        clearTimeout(timer);
        state = "idle";
        box.textContent = "Too early! Start again.";
        result.textContent = "Wait until the box turns green.";
    } else if (state === "ready") {
        const elapsed = Date.now() - startTime;
        state = "idle";
        box.textContent = "Done!";
        result.textContent = "Your reaction time: " + elapsed + " ms";

        const best = localStorage.getItem("reactionBest");
        if (best === null || elapsed < Number(best)) {
            localStorage.setItem("reactionBest", elapsed);
            updateBest();
        }
    }
};
updateBest();