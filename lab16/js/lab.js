/*
   lab.js - API

   Requirements: API

   Author: Simona Trentchev
   Date: 12/10/24
*/


// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  contentType: "application/json", // Payload type
  data: {
    api_key: "RS6fF4P1nouqFYsOR9wikuHvxCgsjjOE0U7r3C0J", // API token
 
  },
  success: function(data) { // Success handler
    //console.log(data); 
    $("#output").append("<h2>" + data.title)
    $("#output").append("<p>" + data.explanation)
     $("#output").append("<img src='" + data.url + "'/>");
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};


// Send the AJAX request
$.ajax(ajaxConfig);

