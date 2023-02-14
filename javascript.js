// Rock Paper Scissors

const paperButton = document.getElementById('paper');
const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const announcement = document.querySelector('.announcement');
const choiceComputer = document.querySelector('.computer-choice');
const choicePlayer = document.querySelector('.player-choice');
const playerCounter = document.querySelector('.player-counter');
const computerCounter = document.querySelector('.computer-counter');
const instructionsElement = document.querySelector('.instructions');

const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "1px solid black",
    backgroundColor: "lightgray",
    fontSize: "24px",
    padding: "12px",
    width: "200px",
    height: "100px",
    padding: "15px",
    borderRadius: "8px",
    margin: "20px",
    boxShadow: "rgba(0, 0, 0, 0.25) 1 8px 15px"
};


let newGameButton = document.createElement('button');
newGameButton.textContent = "New Game";
Object.assign(newGameButton.style, styles);


newGameButton.addEventListener('click', function () {
    computerScore = 0;
    playerScore = 0;
    computerCounter.innerHTML = computerScore;
    playerCounter.innerHTML = playerScore;
    announcement.innerHTML = "Let's play again!";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
});


let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const MAX_ROUNDS = 5;

    function playRound() {
        computerChoice = getComputerChoice();
        let roundWinner = determineWinner(computerChoice, playerChoice);
        round(roundWinner);
        score(roundWinner);
    }

        // Get computer choice function
    function getComputerChoice() {

        //  randomly choose value 1, 2, 3
        computerChoice = Math.floor(Math.random() * 3) + 1;

        //  converts to 1, 2, 3 
        if (computerChoice == 1) {
            computerChoice = "rock";
        } else if (computerChoice == 2) {
            computerChoice = "scissors";
        } else {
            computerChoice = "paper";
        }

        return computerChoice;
    }

    // Check who wins - takes two values
    function determineWinner (computerChoice, playerChoice) {
        let roundWinner;
        choicePlayer.innerHTML = playerChoice;
        choiceComputer.innerHTML = computerChoice;
        // Switch statement

        switch (computerChoice + playerChoice) {
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                roundWinner = 2;
                break;
            
            case "paperrock":
                roundWinner = 0;
                break;
            
            case "paperscissors":
                roundWinner = 1;
                break;

            case "rockscissors":
                roundWinner = 0;
                break;

            case "rockpaper":
                roundWinner = 1;
                break;

            case "scissorspaper":
                roundWinner = 0;
                break;

            case "scissorsrock":
                roundWinner = 1;
                break;

            default: 
                roundWinner = 10;
        }
        return roundWinner;
    }

    function round(roundWinner) {
        if (roundWinner == 0) {
            announcement.innerHTML = 'Computer wins this round!';
            console.log('Computer wins this round!');
        } else if (roundWinner == 1){
            announcement.innerHTML = 'You win this round!';
            console.log('You win this round!');
        } else if (roundWinner == 2) {
            announcement.innerHTML = "It's a tie! Try again"
            console.log('It is a tie! Try again!')
        } else {
            console.log('Something went horribly wrong!');
        }
    }

    function score(roundWinner) {
        if (roundWinner == 0) {
            ++computerScore;
            computerCounter.innerHTML = computerScore;
        } else if (roundWinner == 1) {
            ++playerScore;
            playerCounter.innerHTML = playerScore;
        } else {}
        resetScores(computerScore, playerScore);
    }

    function resetScores (computerScore, playerScore) {
        if (computerScore === MAX_ROUNDS || playerScore === MAX_ROUNDS) {
            if (computerScore > playerScore) {
                announcement.innerHTML = "Sorry you lose!";
                instructionsElement.replaceWith(newGameButton);
            } else {
                announcement.innerHTML = "Congrats! You win!";
                instructionsElement.replaceWith(newGameButton);
            }
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorsButton.disabled = true;
        }
    }

rockButton.addEventListener("click", function() {
    playerChoice = 'rock';
    playRound();
    return playerChoice;
});

paperButton.addEventListener("click", function() {
    playerChoice = 'paper';
    playRound();
    return playerChoice;
});

scissorsButton.addEventListener("click", function() {
    playerChoice = 'scissors';
    playRound();
    return playerChoice;
});