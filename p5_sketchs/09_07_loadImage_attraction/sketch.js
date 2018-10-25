// reference to our canvas
var canvas;

//reference to our image that we load
let img;
let img2;
let backgroundImg;

let xpos = 0;
let ypos = 0;

let xpos2 = 0;
let ypos2 = 0;

//preload starts BEFORE setup
function preload() {

    //load our image into img it needs a RELATIVE PATH
    img = loadImage( 'images/bee5.png' );
    img2 = loadImage( 'images/bee4.png' );

    backgroundImg = loadImage( 'images/nic_bees1.jpg' );

}

function setup() {

    //create our canvas
    canvas = createCanvas( 600, 400 );
    // we give our canvas a background
    background(59);

}

function draw() {

    image( backgroundImg, 0, 0, width, height );

    // draw out image with image()
    // what do we want to draw, where
    // and how big
    image( img, xpos, ypos, 50, 50 );
    image( img2, xpos2, ypos2, 50, 50 );

    xpos = xpos + ( mouseX - xpos ) / 100;
    ypos = ypos + ( mouseY - ypos ) / 100;

    xpos2 = xpos2 + ( mouseX - xpos2 ) / 50;
    ypos2 = ypos2 + ( mouseY - ypos2 ) / 50;



}








// var canvas;
// var img;
// var backgroundImage;
//
// var xpos = 0;
// var ypos = 0;
//
//
//
// function setup() {
//     canvas = createCanvas(600, 400);
//     backgroundImage = loadImage("images/nic_bees1.jpg")
//
//     img = loadImage("images/bee7.png")
//
// }
//
// function draw() {
//
//     background(54);
//
//     image(backgroundImage, 0, 0, width, height);
//
//     image(img, xpos, ypos, 50, 50);
//
//     xpos = xpos + (mouseX - xpos)/20;
//     ypos = ypos + (mouseY - ypos)/20;
//
// }

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
