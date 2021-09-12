class Point {
  x: number;      // By default public
  y: number;      // By default public 
  
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

class Point2 {
  /* Typescript compiler generates a field with exact same name and initialize it
     Because we have used private access modifier. */ 
  constructor(private x?: number, private y?: number) { }

  draw = () => console.log(`X: ${this.x}, Y: ${this.y}`);

  getDistance(another : Point) {
    // ...
  }
}

let point1 = new Point(5, 6);
point1.x = 7; point1.y = 9; // Because x and y are public 

let point2: Point2 = new Point2(10, 11);

point1.draw();
point2.draw();