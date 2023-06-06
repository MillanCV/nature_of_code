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
        let choice = ceil(random(3));
        
        if (choice == 0) {
            this.x++;
        }
        else if (choice == 1) {
            this.x--;
        }
        else if (choice == 2) {
            this.y++;
        }
        else if (choice == 3) {
            this.y--;
        }
    }
  }