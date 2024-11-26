/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Simona Trentchev
   Date: 11/22/24
*/


function sortingHat(str){
 len = str.length;
     mod = len % 4;
     if (mod == 0) {
          return "Gryffindor";
   } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
       return "Slytherin";
    }else if (mod == 3) {
      return "Hufflepuff";
    }
   }
   
   // getting the button and storing it in "myButton"
   var myButton = document.getElementById("button");
   // assigning a function to myButton
   myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";  
   document.getElementById("output").innerHTML = newText;
   });

