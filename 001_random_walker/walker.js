function hello(){
    console.log('hello');
}



class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.prob = [-1, 1, 1]
    }
  
    display() {
        stroke(0);
        point(this.x, this.y);
    }
  
    step() {
        /* allows the walker to step randomly to any of the 8 pixels surrounding it */
        let index_x = floor(random(this.prob.length));
        let index_y= floor(random(this.prob.length));
        
        this.x += this.prob[index_x]
        this.y += this.prob[index_y]
    }
  }