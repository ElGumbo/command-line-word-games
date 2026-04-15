const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * 3)];
const playerChoice = process.argv.slice(2)[0];

if (!choices.includes(playerChoice)) {
    console.log(
        "Wrong Input! Please type one of the following: rock, paper, scissors",
    );
    return;
}

const result = getPlayerResult(playerChoice, computerChoice);
printResult(result, playerChoice, computerChoice)


function getPlayerResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function printResult(result, playerChoice, computerChoice) {
    let resultMessage = "";
    switch (result) {
        case "draw":
            resultMessage = "Its a draw!";
            break;
        case "win":
            resultMessage = "You win!";
            break;
        case "lose":
            resultMessage = "You lose!";
            break;
    }
    console.log(
        "# Output: You chose " +
            playerChoice +
            ". Computer chose " +
            computerChoice +
            ". " +
            resultMessage,
    );
}

