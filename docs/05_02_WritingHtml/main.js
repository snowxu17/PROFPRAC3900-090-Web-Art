/*
	Writing to the page - document.write(...)

	Emoji source: http://emojione.com/
*/


// -- HELPER CODE --------------------------------------------------------------

// Helper function for generating random whole numbers between a minimum and a
// maximum value.
function randInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Schedule the page to reload. This tells the browser to refresh the page
// 1000ms (or 1s) in the future.
// setTimeout(location.reload.bind(location), 1000);


// -- YOUR CODE ----------------------------------------------------------------

// Writing HTML to the page with document.write(...)
document.write("<h1>Hello, I am JS.</h1>");

// Inserting a variable into the HTML
// var userName = prompt("What is your name?");
// HTML that we want:
// 	<h1>Greetings, name!</h1>
// document.write("<h1>Greetings, " + userName + "!</h1>");

// Inserting randomness into the HTML. (Turn on the refresher code above.)
var randNum = randInt(50, 150);
document.write("<h1>Here's a random number: " + randNum + "</h1>");

// HTML that we want:
// 	<h1 style="font-size: 30px">I'm a random size!</h1>
document.write("<h1 style='font-size: " + randNum + "px'>I'm a random size!</h1>");

// Creating an image
document.write("<img src='emoji-images/347.png'>");

// Put an image on the page that has a random width. (Use the width attribute.)
//	<img src='emoji-images/10.png' width='300'>
var randWidth = randInt(200, 2000);
document.write("<img src='emoji-images/10.png' width='" + randWidth + "'>");

// Put a random image on the page. (emoji-png/ contains files named from 1.png
// to 1834.png)
var randImageNumber = randInt(1, 1834);
document.write("<img src='emoji-images/" + randImageNumber + ".png'>");
