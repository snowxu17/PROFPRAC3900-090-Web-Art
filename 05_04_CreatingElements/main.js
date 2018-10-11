/*
	Creating elements without document.write(...)
*/


// -- HELPER CODE --------------------------------------------------------------

// Helper function for generating random whole numbers between a minimum and a
// maximum value.
function randInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function for generating random numbers (including numbers with
// decimals) between a minimum and a maximum value.
function randNum(min, max) {
	return Math.random() * (max - min) + min;
}

// Schedule the page to reload. This tells the browser to refresh the page
// 1000ms (or 1s) in the future.
// setTimeout(location.reload.bind(location), 500);


// -- YOUR CODE ----------------------------------------------------------------
// Creating an h1 with an id:
// 	<h1 id="main-greeting">Welcome!</h1>
var newHeader = document.createElement("h1");
newHeader.textContent = "Welcome!";
newHeader.id = "main-greeting";
var bodyElement = document.body;
bodyElement.appendChild(newHeader);
newHeader.style.backgroundColor = "rgb(0, 0, blueValue)";

// // Creating an img with a class:
// // 	<img class="thumbnail" src="http://i.giphy.com/dTJd5ygpxkzWo.gif">
var newImage = document.createElement("img");
newImage.className = "thumbnail";
newImage.src = "http://i.giphy.com/dTJd5ygpxkzWo.gif";
document.body.appendChild(newImage);
//
// // Creating an element and giving it style:
// // 	<p style="color: deepskyblue; font-size: 12px; width: 300px; margin: 0 auto">Styled Text</p>
var styledParagraph = document.createElement("p");
styledParagraph.textContent = "Styled Text!";
styledParagraph.style.color = "deepskyblue";
styledParagraph.style.backgroundColor = "red";
styledParagraph.style.fontSize = "30px";
styledParagraph.style.width = "300px";
styledParagraph.style.margin = "0 auto";
styledParagraph.style.padding = "20px";
document.body.appendChild(styledParagraph);
//
// // Creating an element and giving it random style:
// // 	<p style="color: deepskyblue; font-size: 12px; width: 300px; margin: 0 auto">Styled Text</p>
var randomParagraph = document.createElement("p");
randomParagraph.textContent = "Random style paragraph!";
randomParagraph.style.fontSize = randNum(20, 100) + "px";
randomParagraph.style.color = "hsl(" + randNum(0, 360) + ", 100%, 50%)";
document.body.appendChild(randomParagraph);
//
// // Exercise: create a paragraph with some different random styling. Some CSS
// // properties you could manipulate:
// // 	background-color, letter-spacing, transform
var randomParagraph2 = document.createElement("p");
randomParagraph2.textContent = "Random #2!";
randomParagraph2.style.color = "white";
randomParagraph2.style.fontSize = "50px";
randomParagraph2.style.width = "800px";
randomParagraph2.style.margin = "0 auto";
randomParagraph2.style.padding = "20px";
randomParagraph2.style.backgroundColor = "hsl(0, " + randInt(25, 100) + "%, 50%)";
randomParagraph2.style.letterSpacing = randInt(0, 20) + "px";
randomParagraph2.style.transform = "rotate(" + randInt(0, 360) + "deg)";
document.body.appendChild(randomParagraph2);
//
// // Exercise: create an image that is randomly placed on the page using absolute
// // positioning. You'll want the following CSS properties:
// // 	position, left, top
var randomImage = document.createElement("img");
randomImage.src = "http://i.giphy.com/KNFADd9ZdxJGU.gif";
randomImage.style.position = "absolute";
randomImage.style.top = randInt(0, 100) + "%";
randomImage.style.left = randInt(0, 100) + "%";
randomImage.style.transform = "translate(-50%, -50%)";
document.body.appendChild(randomImage);
