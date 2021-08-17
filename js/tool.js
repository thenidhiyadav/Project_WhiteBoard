// Setting up the canvas: its color, improving quality of the drawing line.
// Changing width of pencil and color of pencil

// *********************************Basic Setup
const board = document.querySelector(".board");
board.height = window.innerHeight;
board.width = window.innerWidth;

// canvasRenderingContext2d=> tool or ctx
const ctx = board.getContext("2d");

// ctx.fillStyle = "green"
// ctx.fillRect(0, 0, board.width, board.height);

ctx.strokeStyle = "blue";
ctx.imageSmoothingEnabled = true;
ctx.lineJoin = "round"; // rounded shape will come at the intersection of two lines
ctx.lineCap = "round"; // rounded cap will come at the endpoints of a line
ctx.imageSmoothingQuality = "high";
ctx.lineWidth = 3;

// ************************Change Size**************************//
function sizeChange(value) {
  ctx.lineWidth = value;
}

// ******************handle color****************************
function handleColorChange(color) {
  ctx.strokeStyle = color;
}