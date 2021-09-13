class Point {
  constructor(private x?: number, private y?: number) { }

  draw = () => console.log(`X: ${this.x}, Y: ${this.y}`);
  
  // Getter and Setter function
  getX = () => this.x;
  getY = () => this.y;

  setX(value : number) {
    if (value < 0) {
      throw new Error("Value cannot be less than zero!");
    } else {
      this.x = value;
    }
  }

  setY = (value : number) => this.y = value < 0 ? 1 : value;
}

class Point2 {
  constructor(private x: number, private y: number) { }

  draw = () => console.log(`X: ${this.x}, Y: ${this.y}`);
  
  // get and set properties
  get X() {
    return this.x;
  }
  get Y() {
    return this.y;
  }

  set X(value : number) {
    if (value < 0) {
      throw new Error("Value cannot be less than zero!");
    } else {
      this.x = value;
    }
  }

  set Y (value : number) {
    this.y = value < 0 ? 1 : value;
  }
}

let point1 = new Point();

point1.setX(4);
point1.setY(-3);


let point2 = new Point2(0, 0);

point2.X = 4;
point2.Y = -3;

point1.draw();
point2.draw();
