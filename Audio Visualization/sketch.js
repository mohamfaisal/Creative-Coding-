let mic, fft;
let backgroundImage;

function preload() {
  // Load the background image
  backgroundImage = loadImage('colored.jpg'); // Replace with the path to your image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  
  // Create an Audio input
  mic = new p5.AudioIn();
  
  // Start the Audio Input.
  mic.start();
  
  // Create the FFT analyzer
  fft = new p5.FFT();
  
  // Connect the mic to the FFT analyzer
  fft.setInput(mic);
}

function draw() {
  // Display the background image
  background(backgroundImage);
  
  let spectrum = fft.analyze();
  
  translate(width / 2, height / 2);
  
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 20, 400); // Adjust the ring size
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke(i, 255, 255 - i);
    ellipse(x, y, r, r);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

