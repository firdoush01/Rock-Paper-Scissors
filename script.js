

        // const score = {
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        // };

        let score = JSON.parse(localStorage.getItem('score'))

        // if (score === null)
        if (!score)
        {
            score = {
                wins: 0,
                losses: 0,
                 ties: 0
            }
        }

        updateScoreElement()

    //    console.log(JSON.parse(localStorage.getItem('score')));

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = "";
        if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You Won.";
          }


        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You Won.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose.";
          }


        } else if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
          } else if (computerMove === "paper") {
            result = "You Won.";
          } else if (computerMove === "scissors") {
            result = "Tie.";
          }
        }

        if (result === 'You Won.'){
            score.wins += 1;
        }else if( result === 'You lose.'){
            score.losses += 1
        }else if (result === 'Tie.'){
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement()

        document.querySelector('.js-result').innerHTML = `${result}`
        document.querySelector('.js-moves').innerHTML = `You picked <img src="images/${playerMove}-emoji.png" class = "move-icon">
        Computer picked <img src="images/${computerMove}-emoji.png" class = "move-icon">`

//         alert(
//           `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
//         );
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

      }
      function pickComputerMove() {
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }
