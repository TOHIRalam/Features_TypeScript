/*
  By default the data type of message variable is string.
*/
let message = "Hello World";
let endsWith_World = message.endsWith("World");
let endsWith_d = message.endsWith('d');
let endsWith_Hello = message.endsWith("Hello");

console.log(`message: ${message}`)
console.log(`message ends with 'World': ${endsWith_World}`);   // true 
console.log(`message ends with 'World': ${endsWith_d}`);       // true
console.log(`message ends with 'World': ${endsWith_Hello}\n`);   // false

/*
  Here, the data type of message2 variable is set to any.
  So, we won't get any intellisense suggestion for string function.
  In this case we have to explicitly tell the typescript complier that 
  this message2 variable is actually a string. This is called type assertion.
  There are two ways to do type assertions.
*/

let message2;
message2 = "Hello World";
let endsWith_World2 = message2.endsWith("World");
let endsWith_d2 = message2.endsWith('d');
let endsWith_Hello2 = message2.endsWith("Hello");

console.log(`message2: ${message2}`)
console.log(`message2 ends with 'World': ${endsWith_World2}`);   // true 
console.log(`message2 ends with 'World': ${endsWith_d2}`);       // true
console.log(`message2 ends with 'World': ${endsWith_Hello2}\n`);   // false


/* Type assertions */

let message3;
message3 = "Hello World";
let endsWith_World3 = (<string>message3).endsWith("World");
let endsWith_d3 = (message3 as string).endsWith('d');
let endsWith_Hello3 = message3.endsWith("Hello");

console.log(`message3: ${message3}`)
console.log(`message3 ends with 'World': ${endsWith_World2}`);   // true 
console.log(`message3 ends with 'World': ${endsWith_d2}`);       // true
console.log(`message3 ends with 'World': ${endsWith_Hello2}\n`);   // false


