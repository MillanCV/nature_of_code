// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A Mover and an Attractor
let mover;
let attractor;

// Gravitational constant (for global scaling)
let G = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
}

function draw() {
  background(250);

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();

  attractor.show();
  mover.show();
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() { 
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}