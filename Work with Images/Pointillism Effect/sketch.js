var img, x, y;  //image

function preload() {
  img = loadImage("tree-1.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  x = random(width);
  y = random(height);
  var c = img.get(x, y);
  fill(c[0], c[1], c[2], 50);

  //triangle
  let size = 30;
  triangle(
    x, y - size / 2,     // Top point
    x - size / 2, y + size / 2,  // Bottom left point
    x + size / 2, y + size / 2   // Bottom right point
  );
}
