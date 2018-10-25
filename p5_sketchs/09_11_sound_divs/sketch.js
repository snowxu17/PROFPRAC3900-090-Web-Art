//This sketch is an example of how we can attach a listener to and change a div
// that was created in our html (rather than in our JS)

//a div was created in out html, and has the id='soundContainer'
//it is styled in CSS
let sound1;
let divSelect;

function setup() {

    //Here we load the sound in setup(), using a callback function
    //(instead of loading in preload)
    //this way the rest of the page is allowed to load while the sounds are
    // loading
    //Once the sounds are loaded, the ready fucntion is called
    //This is known as a callback function
    sound1 = loadSound("sounds/a.wav", ready);

    //Here is where we select an element from the html
    //we select here based on the element's id
    divSelect = document.getElementById( 'soundContainer' );

    //just to see what we got
    console.log( divSelect );
    //console.log() is good for debugging!

    // we will add event listeners to the selected div
    // notive we need to use regular JS
    // not p5 methods
    divSelect.addEventListener( 'mouseover', playSound );
    divSelect.addEventListener( 'mouseout', stopSound );

}

function draw() {

}

// This is called when are sounds are ready
// it just writes "ready" to the console, nothing else.
function ready() {

    console.log( "ready" );
    
}

// this function is called when we mouse over the selected div
function playSound() {

    sound1.play();
    console.log("play");

}

// when we mouse out
function stopSound() {

    sound1.stop();
    console.log( "not playing" );

}
