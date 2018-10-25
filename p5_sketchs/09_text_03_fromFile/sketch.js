
let theText;
let splitString;

let s = 0;
let sz = 100;

let myColor;

let timer = 0.0;
let theta = 0.02;

let canvas;
function preload() {

    theText = loadStrings('assets/candyText.txt');

}

function setup() {

    canvas = createCanvas( windowWidth, windowHeight );
    canvas.position( 0,0 );

    myColor = color( 255, 0, 0 );
    splitString = split( theText[0], " " );

}

function draw() {
    //background(backColor);

    fill( myColor );
    textSize( sz );
    text( splitString[s], 100, 200 );

    timer = timer + 0.05;

    if ( timer > 1.0 ) {
        clear();
        changeWord();
        timer = 0;

    }

}

function changeWord() {
    clear();
    s++;

    if( s == splitString.length ) {

        s = 0;

    }

    myColor = color( random(255), random(255), random(255) );
}
