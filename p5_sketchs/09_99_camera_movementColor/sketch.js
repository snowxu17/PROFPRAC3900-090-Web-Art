
let camera;
let canvas;
function setup() {

    canvas = createCanvas( 1280, 960 );
    canvas.parent( 'sketch-holder' );
    background( 51 );

    camera = createCapture( VIDEO );
    camera.size( 1280, 960 );
    camera.hide();

    noStroke();
    fill( 0 );

}

function draw() {

    background( 255 );
    camera.loadPixels();

    let d = pixelDensity();
    let stepSize = round( constrain( mouseX / 8, 16, 64 ) );

    for ( let y = 0; y < height; y += stepSize ) {
        for ( let x = 0; x < width; x += stepSize ) {

            let index = ( y * width + x ) * 4;

            let darkness = ( 255 - camera.pixels[ index ] ) / 255;
            let color = [
                        camera.pixels[ index + 0 ],
                        camera.pixels[ index + 1 ],
                        camera.pixels[ index + 2 ]
                    ]
            let radius = stepSize * darkness;

            fill( color );
            ellipse( x, y, radius, radius );

        }
    }
    //image(camera, 0, 0, 640, 480);
}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );
}
