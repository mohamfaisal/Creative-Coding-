function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(220);
  push();
  translate(width / 2, height / 2);
  scale(1.5);
  rotate(PI / 6);

  // Body
  fill(34, 139, 34);
  beginShape();
  vertex(-50, 100);
  bezierVertex(-100, 50, -100, -50, -50, -100);
  bezierVertex(0, -150, 50, -100, 50, -50);
  bezierVertex(100, 0, 100, 50, 50, 100);
  bezierVertex(0, 150, -50, 100, -50, 100);
  endShape(CLOSE);

  // Eyes
  fill(255); 
  ellipse(-30, -50, 30, 40);
  ellipse(30, -50, 30, 40);

  fill(0);
  ellipse(-30, -50, 10, 20);
  ellipse(30, -50, 10, 20);


  fill(255, 0, 0); 
  beginShape();
  vertex(-20, 30);
  bezierVertex(-10, 50, 10, 50, 20, 30);
  bezierVertex(10, 40, -10, 40, -20, 30);
  endShape(CLOSE);
  stroke(0);
  strokeWeight(2);
  line(-50, -100, -80, -140);
  fill(144, 238, 144);
  ellipse(-80, -140, 15, 15);

  line(34, -100, 80, -140);
  fill(144, 238, 144);
  ellipse(80, -140, 15, 15);

  // Hands
  strokeWeight(5);
  line(-50, 50, -100, 100);
  fill(34, 139, 34);
  ellipse(-100, 100, 20, 20);

  line(50, 50, 100, 100);
  fill(34, 139, 34);
  ellipse(100, 100, 20, 20);

  // Legs
  strokeWeight(4);
  line(-30, 100, -30, 160);
  fill(34, 139, 34);
  ellipse(-30, 160, 20, 20);

  line(30, 100, 30, 160);
  fill(34, 139, 34); 
  ellipse(30, 160, 20, 20);
  
  pop();
}

