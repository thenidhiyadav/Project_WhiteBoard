// utility fn to handle tool change
let Activetool = "pencil";

const pencilOptions = document.querySelector(".tool-options.pencil");
const eraserOptions = document.querySelector(".tool-options.eraser");
const tools = document.querySelectorAll(".tool");
const inputs = document.querySelectorAll("input[type=range]");

function handleToolChange(tool) {
  if (tool == "pencil") {
    if (Activetool == "pencil") {
      // show options
      pencilOptions.classList.add("show");
    } else {
      Activetool = "pencil";
      eraserOptions.classList.remove("show");
      tools[1].classList.remove("active");
      tools[0].classList.add("active");
      ctx.strokeStyle = "blue";
      ctx.lineWidth = inputs[0].value;

      // source-over: this is the default setting and draws new shapes on top of existing content.
      ctx.globalCompositeOperation = "source-over";
    }
  } else if (tool == "eraser") {
    if (Activetool == "eraser") {
      // show options
      eraserOptions.classList.add("show");
    } else {
      Activetool = "eraser";
      console.log(tool[1].classList);
      tools[0].classList.remove("active");
      tools[1].classList.add("active");
      pencilOptions.classList.remove("show");

      // destination-out: the existing content is kept where it doesnot overlap with the new shape.
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = inputs[0].value;
    }
  } 
}

//***********Undo stack****** */
let undoStack = [];
let redoStack = [];
function undoMaker() {
  if (undoStack.length > 0) {
    redoStack.push(undoStack.pop());
    redraw();
    return true;
  }
  return false;
}

// **********************redo Stack
function redoMaker() {
  if (redoStack.length > 0) {
    undoStack.push(redoStack.pop());
    redraw();
    return true;
  }
  return false;
}
