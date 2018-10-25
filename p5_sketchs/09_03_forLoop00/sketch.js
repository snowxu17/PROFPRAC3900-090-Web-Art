let slider;
let canvas;
let paragraphs = document.body.getElementsByTagName( 'p' );

console.log(paragraphs);
function setup() {

    canvas = createCanvas( windowWidth, windowHeight );
    background( 50 );

    //canvas.position(0, 0);
    canvas.parent( "container" );
    canvas.style( 'z-index', -1 );

    slider = createSlider( 0, 255, 133 );
}

function draw() {

    background(50, 2);

    let colorValue = slider.value();
    for ( let i = 0; i< 600; i+= 20 ) {

        stroke(colorValue, 0, colorValue);
        smooth();
        line(i, 0, mouseX, mouseY);

    }

    for ( let i = 0; i< 600; i+= 20 ) {

        stroke(0, colorValue, colorValue);
        smooth();
        line(i, height, mouseX, mouseY);

    }

    for ( let i = 0; i < paragraphs.length; i++ ) {

        // paragraphs[i].style.color = 'rgb(' + String(colorValue) + ')';
        let hexValue = '#' + hex( colorValue, 2 ) + hex( colorValue, 2 ) + hex( colorValue, 2 );
        paragraphs[i].style.color = hexValue;

    }

}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );

}
