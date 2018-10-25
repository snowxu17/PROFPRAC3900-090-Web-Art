let canvas;


function setup() {
    canvas = createCanvas( windowWidth - 200, windowHeight - 200);
    canvas.position( 100, 100 );

    canvas.style('z-index',-1);

    // canvas.style('z-index', -1);
    // background(150, 100, 50);

}

function draw() {

    background(100, 0, 0, 20);


    stroke(255, 0 , 0); //stroke sets the color of the stroke
    strokeWeight(3);

    if ( mouseIsPressed ) {

        line( mouseX, mouseY, pmouseX, pmouseY );

    }

}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );

}
