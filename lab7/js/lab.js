// index.js - Functions
// Author: Simona Trentchev
// Date: 10/28/24

//sortUserName a function that takes user input and sorts the letters
// of their name

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

  // Split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // Join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Output
document.writeln("Oh hey, I've fixed your name: " + sortUserName() + "</br>");
