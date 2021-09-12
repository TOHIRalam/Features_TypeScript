class Point {
  x: number;      
  y: number;      
  
  // Here, in the constructor x and y are optional
  constructor(x?: number, y?: number) {
    this.x = x ? x : 0; // If x is null then value should be zero
    this.y = y ? y : 0; // If y is null then value should be zero
  }

  draw = () => console.log(`X: ${this.x}, Y: ${this.y}`);

  getDistance(another : Point) {
    // ...
  }
}

let point1 = new Point(5, 6);
let point2: Point = new Point(10, 11);

point1.draw();
point2.draw();