let computerPlay;
let playerPlay;
let winner;
let playerWins = 0;
let computerWins = 0;
let display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerPlay = button.textContent.toLowerCase();
        playRound();
    })
})

function computerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num <= 3) {
        computerPlay = "rock";
    } else if (num > 3 && num <= 6) {
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }
}

function playRound() {
    computerChoice();
    if (playerPlay === "rock") {
        switch(computerPlay) {
            case "rock":
                winner = "draw";
                break;
            case "paper":
                winner = "computer";
                computerWins++;
                break;
            case "scissors":
                winner = "player";
                playerWins++;
                break;
        }
    } else if (playerPlay === "paper") {
        switch(computerPlay) {
            case "rock":
                winner = "player"; 
                playerWins++;
                break;
            case "paper":
                winner = "draw";
                break;
            case "scissors":
                winner = "computer";
                computerWins++;
                break;
        }
    } else if (playerPlay === "scissors") {
        switch(computerPlay) {
            case "rock":
                winner = "computer";
                computerWins++;
                break;
            case "paper":
                winner = "player";
                playerWins++;
                break;
            case "scissors":
                winner = "draw";
                break;                      
        }
    }
    display.innerHTML = `First to five wins!<br>
                        Player plays: ${playerPlay}. Computer plays: ${computerPlay}. <b>Winner: ${winner}</b>.<br>
                        Player: ${playerWins}<br>
                        Computer: ${computerWins}`;
    if (playerWins == 5) {
        alert("Congratulations! You won!");
        playerWins = 0;
        computerWins = 0;
        display.innerHTML = `First to five wins!`;
    } else if (computerWins == 5) {
        alert("Computer Won. Try again!");
        playerWins = 0;
        computerWins = 0;
        display.innerHTML = `First to five wins!`;
    }
}
// function game() {
//     computerChoice();
//     playerChoice();
//     playRound();
//     console.log(`Computer plays ${computerPlay}. Player plays ${playerPlay}. Game ${i + 1} winner: ${winner}`);
//     if (playerWins > computerWins) {
//         console.log("Player Wins!");
//     } else if (computerWins > playerWins) {
//         console.log("Computer Wins!");
//     } else {
//         console.log("Draw");
//     }
// }
// game();   
