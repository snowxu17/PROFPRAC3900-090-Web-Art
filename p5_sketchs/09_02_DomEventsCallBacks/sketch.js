// how do you attach a function to a particuar object to bind that event of the function to that object?

let bgColor;
let canvas;
let myButton;

let header;

function setup() {

    canvas = createCanvas( 800, 600 );
    canvas.position(0, 0);
    canvas.style( 'z-index', -1 );

    bgColor = color( 200 );
    myButton = createButton( "yes yes yes" );
    myButton.mousePressed( changeColor );
    
}

function draw() {

    background( bgColor );
    fill( 255, 0, 0 );
    rect( 100, 100, 50, 50 );

}

// function mousePressed() {
//     changeColor();
//
// }

function changeColor() {

    bgColor = color( random( 255 ) );

}
