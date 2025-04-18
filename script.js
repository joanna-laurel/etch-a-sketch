
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");
newGridButton.addEventListener("click", askForNumber);
// const numberPrompt = askForNumber();
  
function askForNumber() {
  clearGrid();
  // const numberPromptDiv = document.createElement("div");
  // const numberPrompt = document.createElement("prompt");
  // numberPromptDiv.classList.add("numberPromptDiv");
  // numberPrompt.classList.add("numberPrompt");
  // numberPrompt.type = "number";
  // numberPromptDiv.textContent = "Enter a number from 10 to 100:";
  // numberPromptDiv.appendChild(numberPrompt);
  // gridContainer.appendChild(numberPromptDiv);
  let userSelection = prompt("Please enter a number from 10 to 100 to create a new grid.");
  validateSelection(userSelection);
  function validateSelection(selection) {
    if (selection === null) {
      askForNumber();
    } else {
      selection = parseInt(selection);
      if (!isNaN(selection) && selection >= 10 && selection <= 100) {
        createGrid(selection);
      } else {
        alert("That's not a valid entry. Try again!");
      }
  }
  } 
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
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
} 

createGrid(100);