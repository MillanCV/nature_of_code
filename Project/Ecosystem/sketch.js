let fishes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  fish = new Fish()

  for (let i = 0; i< 50; i++ ){
    fishes.push(new Fish())
  }
}

function draw() {
  background(50);

  for (let i = 0; i < fishes.length; i++ ){
    if (mouseIsPressed){
      let wind = createVector(1,1)
      fishes[i].applyForce(wind)
    }
  

    fishes[i].update()
    fishes[i].draw()
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

