//This will load a text file into a a variable
//Which you will be able to access in a dynamic way

//what we will load our text file into
let txt;

// the split text tile
let splitTxt;

//the static string
let myString= "I like to eat ";

//the <p> element we will create for our static text
let paragraph;

//the <p> element foro the dynamic text
let foodWord;

//the index in our splitTxt array
let w = 0;

//the color of out dynamic text
let myColor;

//preload executes BEFORE setup
function preload() {

    //load our text file
    txt = loadStrings( "candyText.txt" );

}

function setup() {

    //We dont need our createCanvas this time, so we call...
    noCanvas();

    // create a <p> element, with the content from myString
    // store it in our variable paragraph
    paragraph = createP( myString );

    //position out <p> element
    paragraph.position( 100, 100 );

    //we can style our <p> elemnt using .style,
    //the same way we would in our CSS
    paragraph.style( "display", "inline-block" );
    paragraph.style( "width", "600px" );
    paragraph.style( "font-size", "100px" );


    //split our the text in our .txt file on the spaces
    // so now we have the individual words in an array
    splitTxt = split( txt[0], " " );

    //create a <p> element for our word
    foodWord =  createP( splitTxt[w] );
    //give it a position
    foodWord.position( 200, 200 );
    //and style it
    foodWord.style( "font-size", "100px" );
    foodWord.style( "color", "rgb(150, 52, 150)" );

}

function draw() {
//nothing to see here!
}

//I created a function to change my word
function changeWord() {

    //set a random color
    myColor = color( random(255), random(255), random(255) );

    //advance our index in our word (splitTxt) array
    w++;

    //remove the previous foodWord<p> element
    foodWord.remove();

    //create a new <p> element with a new word from out array
    foodWord =  createP( splitTxt[w] );
    foodWord.position( 200, 200 );
    foodWord.style( "display", "inline-block" );
    foodWord.style( "font-size", "100px" );
    foodWord.style( "color", myColor );

    // if we are at the end of our array,
    // go back to the first index
    if ( w > splitTxt.length ) {

        w = 0;

    }

}

function mousePressed() {

    // calling mousePressed will call our changeWord function
    changeWord();

}
