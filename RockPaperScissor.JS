const options= ["Rock", "Paper", "Scissor"]
const computerChoice= Math.floor(Math.random()*3)
const userChoice= Math.floor(Math.random()*3)

function game(userChoice, computerChoice) {
  if(userChoice == computerChoice) {
    console.log("it's a draw")
  } else if (userChoice == "Rock" && computerChoice == "Scissor") { 
    console.log("You win")
  } else if (userChoice == "Paper" && computerChoice == "Rock"){
    console.log("You win")
  } else if(userChoice == "Scissor" && computerChoice == "Paper") {
    console.log("You win")
  }
  else {
    console.log("You lose")
  }
}

game(userChoice,computerChoice)