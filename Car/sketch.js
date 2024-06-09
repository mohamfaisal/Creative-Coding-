function setup() {
  createCanvas(700, 500);
  background(220);
  noStroke();
  
  fill(150, 0, 0); 
  rect(150, 300, 400, 100, 20);

  // Draw the car roof
  fill(200, 0, 0); 
  rect(250, 250, 200, 70, 20); 
  // Draw the windows
  fill(135, 206, 235);
  rect(270, 260, 60, 40); 
  rect(370, 260, 60, 40); 

  // Draw the wheels
  fill(0); // Black color
  ellipse(200, 400, 80, 80); 
  ellipse(500, 400, 80, 80); 

  // Draw the wheel rims
  fill(169, 169, 169);
  ellipse(200, 400, 30, 30); 
  ellipse(500, 400, 30, 30); 

  // Draw the headlights
  fill(255, 255, 0);
  ellipse(150, 330, 30, 30); 
  ellipse(550, 330, 30, 30); 
  fill(255, 0, 0);
  ellipse(150, 370, 30, 30);
  ellipse(550, 370, 30, 30);
  // Draw the door handles
  fill(50);
  rect(310, 330, 40, 10, 5); 
  rect(410, 330, 40, 10, 5); 
}

function draw() {
}
