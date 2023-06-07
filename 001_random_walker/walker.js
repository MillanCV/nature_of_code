function hello(){
    console.log('hello');
}



class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }
  
    display() {
        stroke(0);
        point(this.x, this.y);
    }
  
    step() {
        /* allows the walker to step randomly to any of the 8 pixels surrounding it */
        let step_x = (random(-1,1));
        let step_y= (random(-1,1));
        
        this.x += step_x
        this.y += step_y
    }
  }