
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");

etchASketch();

function etchASketch() {
  newGridButton.addEventListener("click", startSketching);

  function startSketching() {
    const number = askForNumber();
    clearGrid();
    createGrid(number);
    enableGradiatedSketching();
  }
}
  
function askForNumber() {
  let numberChoice = prompt("Please enter a number from 10 to 100 to create a new grid.", "100");
  numberChoice = Number.parseInt(numberChoice);
  if (!isNaN(numberChoice) && numberChoice >= 10 && numberChoice <= 100) {
    return numberChoice;
  } else {
    alert("That's not a valid entry. Try again!");
  }
}

// function addOneRow(num) { //black-and-white gradient sketching function
//   const row = document.createElement("div");
//   row.classList.add("row");
//   gridContainer.appendChild(row);
//   for (i = 0; i < num; i++) {
//     const square = document.createElement("div");
//     // square.classList.add("square"); //coordinates with enableSketching function
//     square.classList.add("gradientSquare");
//     row.appendChild(square);
//   }
// }

function addRandomColorsRow(num) {
  const row = document.createElement("div");
  row.classList.add("row");
  gridContainer.appendChild(row);
  for (i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.classList.add("gradientSquareRandomColor");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const randomColor = "(" + r + ", " + g + ", " + b + ")";
    square.style.backgroundColor = ("rgb" + randomColor);
    row.appendChild(square); 
  }
}

function createGrid(num) {
  for (x = 0; x < num; x++) { 
    addRandomColorsRow(num);
  }
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
} 

// function enableSketching() { //pre-gradient sketching function
//   console.log("sketchy")
//   document.querySelectorAll(".square").forEach(item => 
//     item.addEventListener("mousemove", event => 
//       item.classList.add("squareMoused")
//     )
//   )
// }

function enableGradiatedSketching() {
  // document.querySelectorAll(".gradientSquare").forEach(item => //for black-and-white version
  document.querySelectorAll(".gradientSquareRandomColor").forEach(item =>
    item.addEventListener("mouseenter", increaseOpacity)
  )
  function increaseOpacity() {
    const computedStyle = window.getComputedStyle(this);
    const currentOpacity = computedStyle.getPropertyValue("opacity");
    if (currentOpacity < 1) {
      const newOpacity = parseFloat(currentOpacity) + .1;
      this.style.opacity = newOpacity;
    }
  }
} 