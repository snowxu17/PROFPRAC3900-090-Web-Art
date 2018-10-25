let synth;

let input;
let inputTxt = "The black cat";

let pitch = 0.5;
let rate = 0.5;

let isLoaded;
let voiceList = [];

function setup() {

    createCanvas( 200, 200 );

    synth = window.speechSynthesis;
    isLoaded = 0;

    synth.onvoiceschanged = function() {

        if ( isLoaded == 0 ) {

            voiceList = synth.getVoices();
            isLoaded = 1;
            console.log("voices loaded");

        }

    }

}

function draw() {

}


function mousePressed() {

    console.log( "speak!" );

    let msg = new SpeechSynthesisUtterance( inputTxt );
    //window.speechSynthesis.speak(msg);
    synth.speak( msg );

}
