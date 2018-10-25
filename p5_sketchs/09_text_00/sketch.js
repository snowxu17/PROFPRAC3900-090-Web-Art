// the string we are going to display one word at a time
let myString = "I'm feeling jittery today";

// the arry containing myString split into individual words
let wordsCollection;

// this will keep place of what index we are on in the split String array
let word = 0;

// Where the text will be displayed this mouse press (its "home")
let xpos = 100;
let ypos = 200;

// variable to jitter the text around its "home"
let xOff = 0;
let yOff = 0;

function setup() {

    createCanvas( 600, 600 );

    // split the string on a space, and put the parts into wordsCollection
    // the result will be an array of the individual words in myString
    wordsCollection = split(myString, " ");

}

function draw() {

    //draw the background
    background( 255, 255, 5 );

    //draw the text
    fill( 0, 100, 200 );
    textSize( 40 );

    // we display the text one word at a time using an index to access
    // the element of the array.
    text( wordsCollection[word], xpos + xOff, ypos + yOff );


    //jitter our words whereever they happen to be
    xOff = random( -5, 5 );
    yOff = random( -5, 5 );

}

function mousePressed() {

    //put fun stuff here!

    //Everytime we press our mouse we advance our index (what we are accessing
    // in the array) by 1.

    //These will do the same thing
    //word = word +1;
    //word += 1;
    word++;

    //If word(the index we are on) is bigger than the size of our array,
    // go back to (index) zero.
    if ( word >= wordsCollection.length) {

        word = 0;

    }

    //Also, move our words around randomly on the screen
    xpos = random( 40, width - 100 );
    ypos = random( 40, height - 40 );

}
