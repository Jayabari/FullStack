
let num = Math.floor(Math.random() * 100) + 1;
let life = 7;
let guess = document.getElementById("guess");
let btn = document.getElementById("guessBtn");
btn.addEventListener("click", function() {
    let userGuess = Number(guess.value);

    if (userGuess < 1 || userGuess > 100 || guess.value === "") {
        document.getElementById("message").innerText =
            "Enter a number between 1 and 100";
    }
    else if (userGuess === num) {
        document.getElementById("message").innerText =
            "Correct! You won!";
    }
    else {
        life--;
        if (userGuess < num) {
            document.getElementById("message").innerText =
                "Too low! Try again.";
        }
        else {
            document.getElementById("message").innerText =
                "Too high! Try again.";
        }
        document.getElementById("lives").innerText = life;
    }
    if (life === 0 && userGuess !== num) {
        document.getElementById("message").innerText =
            "Game Over! Number was " + num;
        btn.disabled = true;
    }
});
