/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Simona Trentchev
   Date: 11/22/24
*/


// Using the core $.ajax() method
$.ajax({
   // The URL for the request
   url: "https://yesno.wtf/api", // API endpoint
  // The data to send (not needed for this API) 
  data: {}, // This API doesn't require additional data
   // Whether this is a POST or GET request
  type: "GET", // This API uses GET requests
  // The type of data we expect back
  dataType: "json", // API responds with JSON
   // What we do when the API call is successful
   success: function(data) { 
      console.log("API Response:", data); 
      // Display the answer and GIF in the console 
      console.log("Answer:", data.answer); 
      console.log("GIF URL:", data.image);

      //Optionaly display the result on a webpage
      $("body").append('
        <h1>Answer: ${data.answer}</h1>
        <img src="${data.image}" alt="${data.answer}">
        ');
        },
     // What we do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
    console.error('Request Failed: ${textStatus), ${errorThrown}`); 
      console.error("Response:", jqXHR.responseText);
    }
});