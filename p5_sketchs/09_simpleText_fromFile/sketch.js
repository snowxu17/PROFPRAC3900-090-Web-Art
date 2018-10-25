var txt;

function preload() {
    txt = loadStrings("candyText.txt");
}

function setup() {
    noCanvas();

    createP(txt);

}

function draw() {

}
