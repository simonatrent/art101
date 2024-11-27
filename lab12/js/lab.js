/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Simona Trentchev
   Date: 11/22/24
*/

const FALLBACK_IMAGE = 'path/to/fallback-image.jpg';
const IMAGE_PATHS = [
   'img/IMG_7334.jpg',
   'img/IMG_7335.jpg',
   'img/IMG_7336.jpg',
   'img/IMG_7337.jpg'
];

// Array of descriptions corresponding to each image
const IMAGE_DESCRIPTIONS = [
"Gryffindor!",
"Ravenclaw!",
"Slytherin!",
"Huffelpuff!"

];

// Variables
let currentImageIndex = 0; // Track the current image index
let clickTimeout; // Variable to hold the timeout


function sortingHat(str){
 var len = str.length;
    var mod = len % 4;
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
   var  newText = "<p>You have officially been sorted into..." + house + "</p>";  
    document.getElementById("output").innerHTML = newText;
   });

// Clear any existing timeout before setting a new one
clearTimeout (clickTimeout);

showImage (2000);

// Set a timeout to change the image after 2 seconds
clickTimeout = setTimeout(() => {
   currentImageIndex = (currentImageIndex + 1) % IMAGE_PATHS.length;

// Update the index for the next image
   showImage(); // Show the next image
      }, 2500); // 2000 milliseconds = 2 seconds
});

// Function to show the current image and its description
function showImage() {
   const imageContainer = document.getElementById('image');
   imageContainer.style.display = "block"; // Show the image container

   // Clear previous image and description
imageContainer, innerHTML = '';

// Create and display the current image

const imgElement = document.createElement('img');
imgElement.src = IMAGE_PATHS [currentImageIndex];
imgElement.alt = 'Image + (currentImageIndex + 1);
imgElement.style.maxWidth "300px"; // Set max width for images
imgElement.style.margin = "10px"; // Add some margin between images

// Create and display the description
const descriptionElement = document.createElement('p');
descriptionElement.textContent =
IMAGE_DESCRIPTIONS [currentImageIndex];
   descriptionElement.style.textAlign "center"; // Center the description

imageContainer.appendChild(imgElement); // Append image to container
imageContainer.appendChild(descriptionElement); // Append description to container

}