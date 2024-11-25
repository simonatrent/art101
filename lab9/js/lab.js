/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author:Simona Trentchev
   Date: 11/22/24
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>kurpow</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "kurpow" class to the section
    $("#problems").toggleClass("kurpow");
});