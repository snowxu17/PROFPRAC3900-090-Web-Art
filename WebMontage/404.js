var bd = document.body;
bd.style.backgroundColor = "salmon";

var headerElement = document.createElement('h1');
headerElement.textContent = "There is nothing but paranoia, phantoms and ghosts here."
headerElement.style.color = "white";
bd.appendChild(headerElement);

// var graabed = document.getElementById("a");
// graabed.style.color = "red";

for(let i = 0; i < 5; i++)
{
  var newImage = document.createElement("img");
  newImage.src = "Images/ghost.png";
  newImage.style.position = "absolute";
  newImage.style.opacity = "10%";
  newImage.style.marginLeft = String(i * Math.floor(Math.random() * 100)) + "px";
  newImage.style.marginTop = String(i * 1000) + "px";
  // newImage.style.zIndex = "-2";
  document.body.appendChild(newImage);
}

var count = 404;
for (let i = 1; i < count; i++){
  var flipped = 255 - i;
  var temp = document.createElement('h2');

  temp.textContent = "I'm ghost # " + String(i);
  temp.style.color = "hsl(" + (360 * i / count) + ", 100%, 50%)";
  temp.style.backgroundColor = "hsl(" + (1800 * flipped / count) + ", 100%, 50%)";
  temp.style.opacity = "0.8";
  temp.style.padding = String(Math.floor(Math.random() * 40)) + "px";
  temp.style.borderRadius = "100%";
  temp.style.marginLeft = String(Math.floor(Math.random() * 600) + 200) + "px";
  temp.style.marginRight = String(Math.floor(Math.random() * 600) + 200) + "px";
  bd.appendChild(temp);
}


//////////
var header = document.createElement('h1');
document.body.appendChild(header);

header.style.display = "block";
header.style.position = "relative";
header.style.marginLeft = 0;

var canvas;
var shape;

var positions = [];
var bubbles = [];

function setup() {

  canvas = createCanvas( windowWidth, windowHeight);
  canvas.style('display', 'block');
  canvas.position(0,0);

  shape = 1;

  // createCanvas(800, 8);
}

function mouseDragged() {
  // push adds objects to end of array index
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {

  var time = millis();
  var freq = 0.002;

  var sinVal = sin(time * freq);

  var r = 127 + 127 * sin(time * freq);
  var g = 127 + 127 * sin(time * freq * 1.2);
  var b = 127 + 127 * sin(time * freq * 1.1);

  console.log("sinVal= " + sinVal);

  // background(127 + 127 * sinVal, g, b);

  header.style.marginLeft = String (r * 2) + "px";
  header.style.marginTop = String (g * 2) + "px";
  header.style.letterSpacing = String(b - 127) + "px";

  stroke(random(255), random(255), random(255), random(255));
  fill(r, g, b, random(255));
  strokeWeight(random(10));
  strokeCap(ROUND);

  if(shape == 1){
    ellipse(mouseX, mouseY, r/2, g/2);

    stroke(random(255), random(255), random(255), random(255));
    ellipse(mouseX - b/10 + r, mouseY + g, b/3, r/3);

    // stroke(random(255), random(255), random(255), random(255));
    // ellipse(mouseX - g/3, mouseY + b/2, g/2, b/3);

    // background(0);
    // for ( var i = 0; i < bubbles.length; i++)
    // {
    //   bubbles[i].move();
    //   bubbles[i].display();
    // }

  }

  // if(shape == 2){
  //   triangle(mouseX, mouseY, mouseX-10, mouseY+10, mouseX+10, mouseY+10);
  // }
}

function windowResized() {

  canvas.resize(windowWidth, windowHeight);
}


function keyPressed() {

  if (key == '1'){
    shape = 1;
  }

  if (key == '2'){
    bubbles.splice(0, bubbles.length);
  }

}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke(255);
    fill(255, 0, 150, 50);
    ellipse(this.x, this.y, 50, 50);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
