var $ = function (id) {
    return document.getElementById(id);
}; //$

var startCalculator = function () {
    var intSelection, i, floatFirst, floatSecond, runningTotal, floatBase, floatExponent, floatResult, intCounter, nextEntry;

    for (;;) {

        intSelection = parseInt(prompt("Please select one of the following:" + "\n" + "1. Add" + "\n" + "2. Subtract" + "\n" + "3. Multiply" + "\n" + "4. Divide" + "\n" + "5.Exponent" + "\n" + "6. Mean" + "\n" + "7. Quit")); //get selection

        for (;isNaN(intSelection) || intSelection > 7 || intSelection < 1;) {
            alert("Sorry! Please select a number between 1-7");
            break;
        } //for

        if (intSelection == 7) {
            alert("Thanks for using the calculator!");
            break;
        } //if

        if (intSelection == 1) {
            floatFirst = parseFloat(prompt("Please enter the first number:"));
            for (; isNaN(floatFirst);) {
                floatFirst = parseFloat(prompt("Error: please enter a number:"));
            }//validate first number 
            floatSecond = parseFloat(prompt("Please enter the second number:"));
            for (; isNaN(floatSecond);) {
                floatSecond = parseFloat(prompt("Error: please enter a number:"));
            }//validate second number
            floatResult = floatFirst + floatSecond;
            $("resultBox").value = floatResult;
        } //if

        if (intSelection == 2) {
            floatFirst = parseFloat(prompt("Please enter the first number:"));
            for (; isNaN(floatFirst);) {
                floatFirst = parseFloat(prompt("Error: please enter a number:"));
            }// validate first number
            floatSecond = parseFloat(prompt("Please enter the second number:"));
            for (; isNaN(floatSecond);) {
                floatSecond = parseFloat(prompt("Error: please enter a number:"));
            }// validate second number
            floatResult = floatFirst - floatSecond;
            $("resultBox").value = floatResult;
        } //if

        if (intSelection == 3) {
            floatFirst = parseFloat(prompt("Please enter the first number:"));
            for (; isNaN(floatFirst);) {
                floatFirst = parseFloat(prompt("Error: please enter a number:"));
            }// validate first number
            floatSecond = parseFloat(prompt("Please enter the second number:"));
            for (; isNaN(floatSecond);) {
                floatSecond = parseFloat(prompt("Error: please enter a number:"));
            }// validate second number
            floatResult = floatFirst * floatSecond;
            $("resultBox").value = floatResult;
        } //if

        if (intSelection == 4) {
            floatFirst = parseFloat(prompt("Please enter the first number:"));
            for (; isNaN(floatFirst);) {
                floatFirst = parseFloat(prompt("Error: please enter a number:"));
            }// validate first number
            floatSecond = parseFloat(prompt("Please enter the second number:"));
            for (; isNaN(floatSecond);) {
                floatSecond = parseFloat(prompt("Error: please enter a number:"));
            }//validate second number
            floatResult = floatFirst / floatSecond;
            $("resultBox").value = floatResult;
        } //if

        if (intSelection == 5) {
            floatBase = parseFloat(prompt("Please enter the base number:"));
            for (; isNaN(floatBase);) {
                floatBase = parseFloat(prompt("Error: please enter a number:"));
            }//validate base
            floatExponent = parseFloat(prompt("Please enter the exponent:"));
            for (; isNaN(floatExponent);) {
                floatExponent = parseFloat(prompt("Error: please enter a number:"));
            }// validate exponent
            floatResult = Math.pow(floatBase, floatExponent);
            $("resultBox").value = floatResult;
        } //if

        if (intSelection == 6) {
            runningTotal = 0;
            intCounter = 0;
            for (;;) {
                nextEntry = prompt("Enter inputs as numbers. Enter *** when finished.");
                if (nextEntry === "***")
                    break;
                if (!isNaN(parseFloat(nextEntry))) {
                    intCounter++;
                    runningTotal = runningTotal + parseFloat(nextEntry);
                    floatResult = runningTotal / intCounter;
                } //if
            } //for
            $("resultBox").value = floatResult;
        } //if

    } //big for

    return false;
}; //function

window.onload = function () {
    "use strict";
    $("resultBox").value = "";
}; //window
