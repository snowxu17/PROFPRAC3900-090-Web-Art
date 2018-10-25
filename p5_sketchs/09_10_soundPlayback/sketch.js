
// start by declaring some variables for our sounds
let moog1;
let moog2;
// these variables will be for our slider elements
let soundRate;
let soundVolume;
// this is for our button
let button;

// preload function to load our sounds BEFORE the rest of the page loads
function preload() {

    moog1 = loadSound( "moog/000_Mighty Moog C2.wav" )
    moog2 = loadSound( "moog/004_Mighty Moog G2.wav" )

    console.log( 'loaded' );

}

function setup() {

    //create a canvas... for some reason
    createCanvas( 300, 300 );
    background( 60 );

    //start our sounds in loop mode.
    moog1.loop();
    moog2.loop();

    // create our slider objects
    // one will be for our playback rate, the other for volume
    soundRate = createSlider( 0.0, 4.0, 1.0, 0 );
    soundVolume = createSlider( 0.0, 1.0, 0.5, 0 );

    // create a button, with the text 'stop'
    button = createButton( 'stop' );
    // attach a listener to out button that will call the function 'togglePlaying'
    // whenever we press on the button
    button.mousePressed( togglePlaying );

}

//this is the function that is called whenever we press on the button
function togglePlaying() {

    //if the sound is not playing
    if ( !moog1.isPlaying() ) {  //dont forget all the ()... :)

        // then play our sounds
        moog1.play();
        moog2.play();

        // and change the text in out button to 'stop'
        button.html( 'stop' );

        //log in the console that the sound should be playing
        //(just to make sure we entered the code block)
        console.log( "should be playing" );

    } else {
        // if our sounds are playing when we hit the button..

        // then stop the sounds
        moog1.stop();
        moog2.stop();

        // and chanhe the text in out button to play
        button.html( 'play' );

    }

}


function draw() {

    // in our draw loop we will use the sliders to set the rate
    // and volume of our sounds
    // we can get the value of each slider by using .value() on our buttons
    moog1.rate( soundRate.value() );
    moog1.setVolume( soundVolume.value() );

    moog2.rate( soundRate.value() );
    moog2.setVolume( soundVolume.value() );

}
