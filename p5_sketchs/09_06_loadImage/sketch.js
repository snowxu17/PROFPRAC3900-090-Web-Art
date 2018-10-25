//the variable we will store out image in
let img;
let sizer = 10;
let rotation = 0.0;

function preload() { // good for loading file before setup

    img = loadImage("images/rainbow.jpg");

}

function setup() {

    createCanvas(600, 600);
    //noCanvas();

}

function draw() {

    background( 54 );

    for ( let x = 0; x < width; x += sizer ) {

        for ( let y = 0; y < height; y += sizer ) {

            push()
            translate(x, y);
            rotate(rotation);
            image( img, 0-sizer/2, 0-sizer/2, sizer, sizer );
            pop();

            rotation += ( x + (y * width ) ) / ( (height * width) * TWO_PI ) ;
            if (rotation > TWO_PI ) {
                rotation = 0.0;
            }
        }
    }

    //image(img, 0, 0, 100, 100);
}
