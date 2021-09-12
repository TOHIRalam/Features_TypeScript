interface Point {
  x : number,
  y : number
}

let drawPoint = (point : Point) => {
  return point.x + point.y;
}

console.log(drawPoint({x : 1, y : 2}));