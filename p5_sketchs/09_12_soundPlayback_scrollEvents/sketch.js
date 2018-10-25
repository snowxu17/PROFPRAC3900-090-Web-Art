let sound1;
let soundA;

let chomsky;
let button;

let myHappyDiv;

function preload() {

    sound1 = loadSound( 'sounds/000_Mighty Moog C2.wav', soundloaded );
    soundA = loadSound( 'sounds/a.wav' );
    chomsky = loadSound( 'sounds/chomsky1.mp3' );

}

function soundloaded() {

    console.log( "loaded!" );

}

function setup() {

    button = createButton( 'play' );
    button.position( 200, 300 );
    button.mousePressed( toggleSound );

    myHappyDiv = createDiv( "Press me for Sound!" );
    myHappyDiv.position( 200, 400 );
    myHappyDiv.style( 'background-color', 'crimson' );

    myHappyDiv.mouseOver( toggleSound );

    window.addEventListener( 'scroll', playSoundA );

}

function draw() {
    // nothing here!
}

function playSoundA( e ) {

    let ypos = window.scrollY;
    if ( ypos%20 == 0 ) {

        if ( ypos > 1100 ) {

            chomsky.play();

        } else {

            soundA.play();
            chomsky.stop();
            console.log( ypos );

        }

    }

    // console.log("bubble?" + bubble);
}

function toggleSound() {

    if ( !sound1.isPlaying() ) {

    sound1.loop();
    button.html( 'stop' );
    myHappyDiv.html( 'Press, me, stop' );

    console.log( "should be playing" )

    } else {

        sound1.stop();
        button.html( 'play' );
        myHappyDiv.html( 'Press me for Sound' );

        console.log( "should have stopped" )

    }

}
