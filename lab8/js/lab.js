// index.js - Lab 8 Anon Functions and Callbacks
// Author: Simona Trentchev
// Date: 11/2/24

function Meowww(x){
  results = x*x
  return results;
}

// test function- 
console.log("Meowww1", Meowww(1)); 
console.log("Meowww2", Meowww(2));-

array [10,14,166,39,68]- 
console.log("My array", array);-

var result = array.map(Meowww);- 
// should return [100, 196, 27556, 1521, 4624]

console.log("Test of squarness of array:", result);

var result = array.map(function(x){-
 return x * x;-
})-
