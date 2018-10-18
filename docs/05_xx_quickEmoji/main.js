
var emoji = document.createElement( "img" );
emoji.src = "emoji-images/1.png";
document.body.appendChild( emoji ) ;

 var i = 1;
 var setInterval = 30;
 var prev = 0;

function loop( time ) {

    let  now = time;
    if ( now - prev > setInterval ) {
        i++;
        emoji.src = "emoji-images/" + i +".png";

        prev = now;
    }

    if ( i >= 1832 ) {
        i = 0;
    }

    window.requestAnimationFrame( loop );
}

window.requestAnimationFrame( loop );
