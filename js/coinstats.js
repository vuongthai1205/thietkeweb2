"use strict";

/**
 * Example JavaScript code that gets coin stats
 */

/**
 * Setup the orchestra
 */

function initStats() {

    console.log("Initializing coin stats");
    refreshStats()
}

function refreshStats(){
    getCurrentPrice();
    /*
    var intervalId = window.setInterval(function(){
        getCurrentPrice();
      }, 20000);
    */
}

// Get price from Pancakeswap API
function getCurrentPrice(){
    
    //$.getJSON("http://165.227.182.195/api/price", function( result ) {
    $.getJSON("https://api.pancakeswap.info/api/v2/tokens/0x7Abf7f54F30a45c7c43D728A75d6741440d7c591", function( result ) {
       
       const price = parseFloat(result.data.price).toFixed(9);
       //const price = parseFloat(result.price).toFixed(9);
        if (document.querySelector(".currentPrice")) {
         document.querySelector(".currentPrice").textContent = '$' +price
        }

       const cap = numeral(price * 10**12).format(',');

       if (document.querySelector(".marketCap")) {
           document.querySelector(".marketCap").textContent = '$' + cap
       }

    });
}

/**
 * Main entry point.
 */
 window.addEventListener('load', async () => {
    initStats();
  });