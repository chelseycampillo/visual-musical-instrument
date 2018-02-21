
// Where is the text
var x, y;

function setup() {
  createCanvas(400, 400);
  // Starts in the middle
  x = width
  y = height/2;
}

function draw() {
  background(183, 211, 242);
  
  // Notes to preferred song
  fill(100);
	textSize(32);
  text('ccggaag ffeeddc ggffeed ggffeed ccggaag ffeeddc',x, y);
  
  // Moving left at a constant speed
  x = x - 1;
  
  // Reset to the right side of the canvas
  if (x < -800) {
    x = width;
  }
}
