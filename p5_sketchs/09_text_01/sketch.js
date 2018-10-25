
let theString = "There are a lot of words in the English Dictionary.";
let words;

let s = 0;

function setup() {

    createCanvas(600, 600);
    background(0);

    words = split(theString, " ");

}

function draw() {

    textSize( 32 );
    fill( 0, 102, 153 );
    text( words[s], 5 + ( s*50 ), 100 + ( 49 * s ), width, height );

}

function mousePressed() {

    s++;

    if ( s == words.length ) {
        s = 0;

    }

    background( random( 255 ) );

}
