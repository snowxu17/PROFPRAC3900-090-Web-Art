let canvas;
let img;
let backgroundImage;

let xpos = 0;
let ypos = 0;

function setup() {

    canvas = createCanvas( 600, 400 );

    img = createImg( "https://i.ytimg.com/vi/TUhyPHuEZVo/maxresdefault.jpg" )
    img.position( 0, 0 );
    img.size( 200, 153 );
    img.style( 'z-index', -1 );

}

function draw() {

    background( 54 );

    img.position( xpos-50, ypos+200 );

    xpos = xpos + ( mouseX - xpos ) * .02;
    ypos = ypos + ( mouseY - ypos ) * .02;

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
