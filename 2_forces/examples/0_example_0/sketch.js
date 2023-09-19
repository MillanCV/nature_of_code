let mover

function setup() {
  createCanvas(400, 400);
  mover = new Mover()
  wind = createVector(0.002, 0.001)
}

function draw() {
  background(220);
  mover.applyForce(wind)
  mover.update()
  mover.show()
}
