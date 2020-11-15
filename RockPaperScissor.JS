const userSelection = document.getElementById("userChoice");
const computerSelection = document.getElementById("computerChoice");
const Result = document.querySelector(".result");
const rockImg = document.getElementById("Rock");
const paperImg = document.getElementById("Paper");
const scissorImg = document.getElementById("Scissor");
const selectionButtons = document.querySelectorAll("data-select");

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    selectionName = selectionButton.dataset.selection;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  console.log(selection);
}
const getComputerChoice = () => {
  const selection = ["Rock", "Paper", "Scissor"];
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  return selection[computerChoice];
};

getComputerChoice();
