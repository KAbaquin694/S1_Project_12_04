"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Khalel Abaquin
   Date:   3.1.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

// This line of code declares the variable 'reporHTML' & sets its value to a text string with the 'raceTitle' array added in the middle.
var reportHTML = "<h1>" + raceTitle + "</h1>";

// This block of code creates a for loop that loops until it is less than the length of the 'race' array. Within the for loop, the variable 'totalVotes' is set the value of 0, each item in the 'votes' array is being calculated with the 'calcSum' function, & 2 text strings & a function is added to the value of 'reportHTML'.
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}

// This line of code grabs the only 'section' tag in the HTML file & replaces its inner HTML with the value(s) of 'reportHTML'.
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

// This section of code creates a function that has a for loop within another for loop nested within itself. The variable 'rowHTML' is set to an empty text string wihtin the function.
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    // Inside the first for loop, 4 variables are created & given similar values as well as a text string in being added to the value of 'rowHTML'. 
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + " (" + candidatePercent.toFixed(1) + "%)</td>";
        // Inside the second for loop, the function 'createBar' is added to the value of 'rowHTML'.
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>";
    }
    return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

// This line of code creates a switch statement nested within the function 'createBar'. If case one of the cases are true, then the given text string will be the value of 'barHTML'.
function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
    return barHTML;
}