class Walker {
    constructor() {
        this.x = width / 2
        this.y = height / 2
    }

    display() {
        stroke(0)
        point(this.x, this.y)
    }
}