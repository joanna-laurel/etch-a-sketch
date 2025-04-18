
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");
// const row = document.createElement("div");
// const square = document.createElement("div");

let numberChoice = 100;
createGrid(10);
etchASketch();

function etchASketch () {
  newGridButton.addEventListener("click", askForNumber);
  clearGrid();
  createGrid(numberChoice);
  enableSketching();
}
  
function askForNumber() {
  
  // const numberPromptDiv = document.createElement("div");
  // const numberPrompt = document.createElement("prompt");
  // numberPromptDiv.classList.add("numberPromptDiv");
  // numberPrompt.classList.add("numberPrompt");
  // numberPrompt.type = "number";
  // numberPromptDiv.textContent = "Enter a number from 10 to 100:";
  // numberPromptDiv.appendChild(numberPrompt);
  // gridContainer.appendChild(numberPromptDiv);
  let userSelection = prompt("Please enter a number from 10 to 100 to create a new grid.", "100");
  userSelection = parseInt(userSelection);
  if (!isNaN(userSelection) && userSelection >= 10 && userSelection <= 100) {
    numberChoice = userSelection;
    // createGrid(selection);
  } else {
    alert("That's not a valid entry. Try again!");
  
  
  // validateSelection(userSelection);
  // function validateSelection(selection) {
  //   // if (selection === null) {
  //   //   alert("Please choose a number.")
  //   // } else {
  //     selection = parseInt(selection);
  //     if (!isNaN(selection) && selection >= 10 && selection <= 100) {
  //       numberChoice = selection;
  //       // createGrid(selection);
  //     } else {
  //       alert("That's not a valid entry. Try again!");
  //     // }
    }
  // } 
}

function addOneRow(num) {
  const row = document.createElement("div");
  row.classList.add("row");
  gridContainer.appendChild(row);
  for (i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
}

function createGrid(num) {
  for (x = 0; x < num; x++) {
    addOneRow(num);
  }
  // sketch();
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
} 

function enableSketching() {
  console.log("sketchy")
  //grab all the squares and put event listeners on each one?
  document.querySelectorAll(".square").forEach(item => 
    item.addEventListener("mousemove", event =>
      item.classList.add("squareMoused")
    ))
}