let canvas;
let h1;

let xPos = 100;
let yPos = 100;

function setup() {

    canvas = createCanvas( 400, 400 );
    canvas.position( 300, 100 );
    canvas.style( 'z-index', -1 );
    canvas.style( 'border-radius', '100px' );

    h1 = createElement( 'h1', 'waiting' );
    h1.style( 'margin:50px' );


}

function draw() {

    background( 100 );
    canvas.position( 300, yPos );

    fill( 255, 0, 0 );
    rect( xPos, yPos, 50, 50 );

    h1.position( xPos, 0 );

    xPos = xPos + random( -5, 5 );
    yPos = yPos + random( -5, 5) ;

}

function mousePressed() {

    h1.html( "Here are my favorite numbers" );

    createP( "my favorite random number is " + random( 10 ) );

}
