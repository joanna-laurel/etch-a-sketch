
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");

let numberChoice = 100;
createGrid(100);
etchASketch();

function etchASketch() {
  newGridButton.addEventListener("click", askForNumber);
  clearGrid();
  createGrid(numberChoice);
  // enableSketching();
  enableGradiatedSketching();
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
  }
}

function addOneRow(num) {
  const row = document.createElement("div");
  row.classList.add("row");
  gridContainer.appendChild(row);
  for (i = 0; i < num; i++) {
    const square = document.createElement("div");
    // square.classList.add("square"); //for enableSketching
    square.classList.add("gradientSquare"); //for enableGradiatedSketching
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

// function enableSketching() {
//   console.log("sketchy")
//   document.querySelectorAll(".square").forEach(item => 
//     item.addEventListener("mousemove", event => 
//       item.classList.add("squareMoused")
//     )
//   )
// }

function enableGradiatedSketching() {
  document.querySelectorAll(".gradientSquare").forEach(item =>
    item.addEventListener("mouseenter", increaseOpacity)
  )
  function increaseOpacity() {
    const computedStyle = window.getComputedStyle(this);
    const currentOpacity = computedStyle.getPropertyValue("opacity");
    if (currentOpacity < 1) {
      const newOpacity = parseFloat(currentOpacity) + .1;
      console.log(newOpacity);
      this.style.opacity = newOpacity;
    }
  }
}