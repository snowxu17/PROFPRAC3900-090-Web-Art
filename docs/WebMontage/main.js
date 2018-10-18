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




// --MAIN CODE-------------------------

var message = "~* Welcome to the TOUCH Carnival *~";
alert(message);

var message = "~* Here you are offered the FREEDOM to explore the DELICACY of TOUCH *~";
alert(message);

// var userName = prompt("What's your name?");
// console.log(userName);
//
// document.write("<h1>Hello," + userName + ", This is the Temple of Senses</h1>" );
