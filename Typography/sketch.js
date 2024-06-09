var font;
var backgroundImage;

function preload() {
  font = loadFont('KdamThmorPro-Regular.ttf');
  backgroundImage = loadImage('BG.jpg'); //background image
}

var points;

function setup() {
  createCanvas(1200, 1000);
  stroke(0);
  points = font.textToPoints('BATH SPA UNIVERSITY', 50, 300, 100, { sampleFactor: 0.15 }); //Set text alignments through texttopoints
  
  //background image
  image(backgroundImage, 0, 0, width, height);
  
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    ellipse(p.x, p.y, 20, 20);
  }
}

