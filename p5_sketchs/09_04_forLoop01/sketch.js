let slider;
let canvas;

function setup() {

    canvas = createCanvas( windowWidth, windowHeight );
    background( 50 );

    //canvas.position(0, 0);
    canvas.parent( 'container' );
    canvas.style( 'z-index', -1 );

    slider = createSlider( 0, 255, 133 );

}

function draw() {

    background( 50, 10 );

    let spacingX = map( mouseX, 0, width, 10, 100 );
    let spacingY = map( mouseY, 0, height, 10, 100 );

    stroke( 124, slider.value(), 255 );
    for ( let x = 0; x < width; x = x + spacingX ) {

        for ( let y = 0; y <height; y = y + spacingY ) {

            ellipse(x, y, 10, 10);

        }

    }

}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );

}
