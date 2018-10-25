
let capture;
let tintValue = 0;
let theta = 0.0;
let speed = 0.1;

let xSize = 20;
let ySize = 20;

function setup() {

    createCanvas( 640, 480 );
    background( 74 );

    capture = createCapture( VIDEO );
    capture.size( 32, 24 );

}

function draw() {

    for ( let x = 0; x < xSize; x++ ) {

        for ( let y = 0; y < ySize; y++ ) {

            let rAmp = map( x, 0, xSize, 0, 127);
            let gAmp = map( y, 0, ySize, 0, 127);
            let bAmp = map( winMouseX, 0, windowWidth, 0, 127);

            tint( 127 + rAmp * sin( theta * 1.1 ),
                  127 + gAmp * sin( theta * 1.4 ),
                  127 + bAmp * sin( theta * 1.2 ) );

            image( capture, capture.width * x, capture.height * y );

        }
    }

    theta += speed;

}
