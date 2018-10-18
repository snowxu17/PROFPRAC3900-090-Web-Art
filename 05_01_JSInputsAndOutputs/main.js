// /*
//  	Inputs and outputs - your first program!
//
//  			  ( ゜︶゜)人(゜︶ ゜)
// */
//
//
// // -- OUTPUT -------------------------------------------------------------------
//
// // console.log(...) is a JavaScript function that let's us print out a message
// // to the developer console.  Say hello to the console.
// console.log("Hi :)");
//
// // Let's print something else to the console
// console.log("Our first JavaScript.");
//
// // Let's make a mistake and see what happens
//console.log(hi);
//
// // Alerts are pop up boxes with a message, try using an alert(...) instead of
// // console.log(...)
// alert("ANNOYING POPUP NOW");
//
//
// // -- STRING VARIABLES ---------------------------------------------------------
//
// // Create a string variable and use it to print out to the console
// var message = "Hello sir or madam.";
// alert(message);
//
// // Prompts allow us to get string input from a user and store it in a variable.
// // Ask the user of your webpage for their name and store it in a variable.
// var userName = prompt("What's your name?");
// console.log(userName);
//
// // Concatenation is the process of adding strings together
// console.log("Hello, " + userName + "!");
//
// // Ask the user where they were born and store the response in a variable. Print
// // out a message to the console that looks like:
// // 		You were born in New Jersey.
// // (Don't use the variable name "location" - that's a reserved keyword)
// var birthLocation = prompt("Where were you born?");
// console.log(userName + ", you were born in " + birthLocation + ".");
//
// // Create a variable without explicitly giving it a value. What is its value?
// var annoucement;
// console.log(annoucement);
//
// // You can change the value of a previously defined variable
// annoucement = "LISTEN UP";
// console.log(annoucement);
//
//
//
// // -- NUMBER VARIABLES ---------------------------------------------------------
//
// // Create an integer variable and print it to the console
// var numDaysWithoutSun = 12;
// console.log(numDaysWithoutSun);
//
// // Create a decimal variable and print it to the console
// var taxFraction = 0.06;
// console.log(taxFraction);
//
// // Numbers and strings can be added together to create strings
// console.log("The tax is: " + taxFraction);
//
// // We can add numbers together - calculate the total cost of three items:
// // 	- Book, $25.75
// // 	- Pack of pencils, $2.10
// // 	- Notebook, $
// var bookCost = 25.75;
// var pencilCost = 2.10;
// var notebookCost = 2.25;
// var totalCost = bookCost + pencilCost + notebookCost;
// console.log("The total cost is: " + totalCost);
// // Alternate way to do this:
// console.log("The total cost is: " + (25.75 + 2.10 + 2.25));
//
// // We can do division as well - calculate the average of 75, 80 and 92
// var sum = 75 + 80 + 92;
// var average = sum / 3;
// console.log("The average is: " + average);
//
// // Multiplications works too - calculate the sale price of a textbook.  It's
// // normally 35.99, but it is currently 25% off.
// var fullPrice = 35.99;
// var saleFraction = 0.25;
// var salePrice = fullPrice - fullPrice * saleFraction;
// console.log("The sale price is: " + salePrice);
//
// // Prompts always return strings. If we want a number from a prompt, we need to
// // convert it using Number(...)
var number1 = prompt("What is number 1?");
var number2 = prompt("What is number 2?");
var sum = Number(number1) + Number(number2);
console.log("The sum is: " + sum);
