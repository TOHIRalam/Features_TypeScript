// Datatypes
let a : number;
let b : string;
let c : boolean;
let d : any;
let e : number[];
let f : number[] = [1,2,3,4];
let g : any[] = [1, true, "Hello World", 5.66];

// Constants
const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

// enum
enum Color { Red, Green, Blue }
let backGroundColor = Color.Red;
console.log(backGroundColor);

enum Color2 { Red = 2, Green, Blue, Purple }
let foreGroundColor = Color2.Blue;
console.log(foreGroundColor);