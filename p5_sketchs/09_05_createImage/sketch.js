//the variable we will store our image in
let img;
let canvas;

let sineValue = 0;

let noiseValue;
let noiseOff = 2;
let noiseStep = 0.01;

function setup() {

    img = createImg( "images/rainbow.jpg" );

    canvas = createCanvas( 300, 500 );
    canvas.position( 300, 50 );

    img.position( 100, 100 );
    img.size( 200, 200 );

}

function draw() {
    background( 255, 0, 0 );

    noiseValue = noise( noiseOff ) * 200;
    sineValue = 100 * ( 0.5 + sin( millis() * 0.003 ) );

    canvas.position( 200 + sineValue, noiseValue );

    img.position( 100 + noiseValue, 100 );
    img.size( sineValue, 200 );

    noiseOff += noiseStep;

}
