/*
   lab.js - This simple JavaScript loop

   Requirements: loop.

   Author: Simona Trentchev
   Date: 11/24/24
*/


function fizzBuzz() {
  let oneLongString = ""; // Initialize an empty string
  
  // Loop through numbers 1 to 200
  for (let num = 1; num <= 200; num++) {
    let output = `${num}: `; // Start with the number
    
    if (num % 3 === 0) {
      output += "Fizz";
    }
    if (num % 5 === 0) {
      output += "Buzz";
    }
    if (num % 7 === 0) {
      output += "Boom";
    }
    
    // Check if no conditions matched
    if (output === `${num}: `) {
      output = `${num}`; // Just the number itself
    }
    
    oneLongString += output + "<br>"; // Add to the result string
  }

  // Add the output to the div (ensure correct selector)
  $("#output").html(oneLongString);
}

// Ensure jQuery waits for the DOM to be fully loaded 
$(document).ready(function () { 
  fizzBuzz(); // Call your function here
});
