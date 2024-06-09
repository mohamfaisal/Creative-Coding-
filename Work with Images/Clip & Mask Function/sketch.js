let img;

function preload(){
  img = loadImage("car.jpg");
}

function setup() {
  createCanvas(700, 700);
  background(190, 220, 250);
  
  img.resize(200, 200);
  let cnv7 = createGraphics(200, 200); 
  cnv7.rect(10, 10, 180, 180); 
  cnv7.canvas.getContext("2d").clip();  
  cnv7.image(img, 0, 0); // positioning the image 
  image(cnv7, 350, 225); 
  

  img.resize(200, 200); // resizing the car image 
  let cnv5 = createGraphics(200, 200); // creating a sub canvas
  cnv5.rect(10, 10, 180, 180);
  cnv5.quad(50, 50, 150, 50, 180, 150, 20, 150); 
  img.mask(cnv5);
  image(img, 300, 25); // putting the sub canvas inside the main canvas 
}