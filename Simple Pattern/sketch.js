let bg; // Variable to hold the background image

function preload() {
  bg = loadImage('repetition.png'); // Load the background image
}

function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(bg); // Draw the background image

  // Grid settings
  let cols = 10;
  let rows = 10;
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Randomize the size and color of circles
      let r = random(50, 60);
      let randomColor = color(random(255), random(255), random(255));

      // Decision to change color or size based on position
      if ((i + j) % 2 === 0) {
        fill(randomColor);
      } else {
        fill(0);
        r = random(20, 80);
      }

      // Draw the circle
      ellipse(i * cellWidth + cellWidth / 2, j * cellHeight + cellHeight / 2, r, r);
    }
  }
}
