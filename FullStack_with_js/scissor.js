function play(user) {
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[Math.floor(Math.random() * 3)];
    if (user == computer) {
        document.getElementById("result").innerText =
            "Draw! Computer chose " + computer;
    }
    else if (
        (user == "rock" && computer == "scissors") ||
        (user == "paper" && computer == "rock") ||
        (user == "scissors" && computer == "paper")
    ) {
        document.getElementById("result").innerText =
            "You Win! Computer chose " + computer;
    }
    else {
        document.getElementById("result").innerText =
            "You Lose! Computer chose " + computer;
    }
}
