

//Instead of loading text from a file,
// how about we have the user select the file?


function loadFile() {

    loadStrings("cupcake.txt", fileLoaded);

}

function fileLoaded( data ) {
    //txt = data;
    createP( join( data, "<br/>" ) );

}

function fileSelected( file ) {

    //console.log(file.name);
    createP( file.name + " " + file.size + " " + file.type );
    createP( file.data );

}

function setup() {

    noCanvas();
    createFileInput( fileSelected );

    let button = select( "#loadfile" );
    button.mousePressed( loadFile );

}
