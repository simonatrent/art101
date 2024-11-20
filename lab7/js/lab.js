// index.js - Functions
// Author: Simona Trentchev
// Date: 10/28/24

//sortUserName a function that takes user input and sorts the letters
// of their name

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

//split string to array
var nameArray = userName.split('');
console.log("nameArray") =", name Array)";

//sort the array
var nameArraySort = nameArray.sort();
consolog("nameArraySort=", nameArraySort);

//join array back to a string
var namedSorted = namedArraySort.join('');
console.log("nameSorted=", nameSorted);

return nameSorted;
}

//output
document.writeln("Oh hey I've fixed your name:
  sortUserName(), "</br>");
