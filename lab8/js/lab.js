// index.js - Lab 8 Anon Functions and Callbacks
// Author: Simona Trentchev
// Date: 11/2/24


// Constants

var numbers = [10,14,166,39,68];

// Functions


function Meowww(x) { 
  return x * x;
 }

// use map on our numbers array 

var MeowwwResult = numbers.map(Meowww);
console.log("OThe array is: ", numbers);
console.log("The array squared is: ", MeowwwResult);

// use an anonymous function as a call back with map to do a different operation on numbers array

var additionResult = numbers.map(function(x) {return x + x;});

console.log("The array added with itself is: ", additionResult);