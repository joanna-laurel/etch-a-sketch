// I don't think there's any way to make all the squares take up equal space
// inside a container without splitting them into individual rows. So we need
// a function that appends one row of x squares to containerDiv, then loop that
// function x times while somehow adding starting a new row each time

const grid = document.getElementById("containerDiv");

function addOneRow(num) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
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

createGrid(50);