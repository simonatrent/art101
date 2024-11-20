// index.js - Arrays and Objects
// Author: Simona Trentchev
// Date: 10/28/24

// Constants
let myTransportation= ("Subaru","walk","bus","bike");
let myMainRide = (
  make: "Subaru",
  model: "Crosstreck",
  color: "red",
  year: 2015,
  age: function () {
      return 2024 - this.year;
  }
);

// output
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
