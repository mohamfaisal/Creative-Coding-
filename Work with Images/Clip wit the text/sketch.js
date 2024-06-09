let img;

function preload(){
  img = loadImage("sunflower.jpg");
}

function setup() {
  createCanvas(700, 700);
  background(190, 220, 250);
  
  img.resize(200, 200);
  let cnv7 = createGraphics(200, 200); 
  cnv7.textSize(150); // Set the text size
  cnv7.textAlign(CENTER, CENTER);
  cnv7.text("TEXT", 100, 100); // Add text to the sub-canvas
  cnv7.canvas.getContext("2d").clip(); // Clip the text
  cnv7.image(img, 0, 0); // Position the image 
  image(cnv7, 350, 225); 
  
  img.resize(200, 200); // Resizing the sunflower image 
  let cnv5 = createGraphics(200, 200); // Creating a sub-canvas
  cnv5.textSize(150); // Set the text size
  cnv5.textAlign(CENTER, CENTER); 
  cnv5.text("TEXT", 100, 100); 
  img.mask(cnv5);
  image(img, 300, 25);
}
