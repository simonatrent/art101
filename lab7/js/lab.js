// index.js - Functions
// Author: Simona Trentchev
// Date: 10/28/24

//sortUserName a function that takes user input and sorts the letters
// of their name


<html>
<head>
  <title>Fix Your Name</title>
</head>
<body>
  <button onclick="fixUserName()">Fix Your Name</button>
  <p id="output"></p>

  <script>
    function fixUserName() {
      // Prompt user for name
      var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
      console.log("userName =", userName);

      // Split string into an array
      var nameArray = userName.split('');
      console.log("nameArray =", nameArray);

      // Sort the array
      var nameArraySort = nameArray.sort();
      console.log("nameArraySort =", nameArraySort);

      // Join the array back into a string
      var nameSorted = nameArraySort.join('');
      console.log("nameSorted =", nameSorted);

      // Output the sorted name
      document.getElementById("output").innerHTML = "Oh hey, I've fixed your name: " + nameSorted;
    }
  </script>
</body>
</html>
