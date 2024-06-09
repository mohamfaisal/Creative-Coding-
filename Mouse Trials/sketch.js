let trail = [];
let saveCounter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 100); // Set a gray background color
}

function draw() {
  // Draw the trails
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    fill(pos.color);
    noStroke();
    ellipse(pos.x, pos.y, pos.size, pos.size); // rings or a large circles
  }
}

function mouseDragged() {

  let colorChoice = color(random(255), random(255), random(255));
  let size = random(100, 80); //size of the ring
  let newPos = { x: mouseX, y: mouseY, color: colorChoice, size: size };
  trail.push(newPos);
}

function keyPressed() {  // save option
  if (key === 's' || key === 'S') {
    saveCanvas('trail_' + saveCounter, 'png');
    saveCounter++;
  }
}
