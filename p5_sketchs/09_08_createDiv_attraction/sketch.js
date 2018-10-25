let canvas;

let xpos = 185;
let ypos = 255;

let mx = 0;
let my = 0;

let myDiv;

function setup() {

    canvas = createCanvas( 1000, 800 );

    // create a div
    myDiv = createDiv( "<a href='https://www.google.com'><img src='http://img2.wikia.nocookie.net/__cb20120718031727/mlp/images/6/65/Pinkie_Pie_high_resolution_from_HubWorld.png' id='meh'></a>" );

    myDiv.class( "container" );
    myDiv.position( 185, 255 );
    myDiv.size( 200, 150 );

    // search the container for the id 'meh'
    let img = select( '#meh', 'container' );
    img.size( 200, 153 );

}

function draw() {

    background(100, 50, 50);

    // draw soem fancy background for the pony to live in
    for ( let i = 0; i < height; i++ ) {

        stroke( 0, 0, i % 500 );
        line( 0, i, width, i );

    }

    for ( let i = height / 3 * 2; i < height; i++ ) {

        stroke( 0, i % 255, 0 );
        line( 0, i, width, i );

    }

    // position the pony (he's shy)
    myDiv.position( xpos, ypos);

    // // mouse attraction
    // // distance * magnitude
    // xpos = xpos + ( mouseX - xpos ) * 0.02;
    // ypos = ypos + ( mouseY - ypos ) * 0.02;

    xpos = xpos + (mx - xpos) * 0.02;
    ypos = ypos + (my - ypos) * 0.02;

}


function mouseClicked(){

  mx = mouseX;
  my = mouseY;

}
//the p5.dom library-- https://p5js.org/reference/#/libraries/p5.dom

/*
a few built in create elements:
creatDiv()
createP()
createSpan()
createImg()
createA()

createSlider()
createButton()
createCheckbox()
createSelect()
createRadio()
createInput()
createFileInput()

createVideo()
createAudio()
createCapture()  <-- ceates a <video> element, get audio/video from a webcam

createElement() <--create a generic element
*/
