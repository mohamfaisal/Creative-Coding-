let player; // Player object
let fallingObjects = []; // Falling objects (balls)
let score = 0; // Player's score
let gameOver = true; //to indicate if the game is over

let bowlImage; //To hold the bowl image
let ballImage; // To hold the ball image
let bgImage; //to hold the background image

//to load assets like images (bowl,ball,bakcground)
function preload() {
  // Load the bowl image
  bowlImage = loadImage('bowl.png');
  // Load the ball image
  ballImage = loadImage('Small Ball.png');
  // Load the background image
  bgImage = loadImage('background.jpg');
}

function setup() {
  createCanvas(500, 400); // Create a canvas
  player = new Player(); // Create a new player object
}

function draw() {
  image(bgImage, 0, 0, width, height); // Display the background image

  //Check if the game is over
  if (gameOver) {
    displayStartMessage(); //Display start message
  } else {
    player.update(); // Update player position
    player.display(); //Display player

    // Add ball as falling object
    if (frameCount % 60 == 0) {
      fallingObjects.push(new FallingObject());
    }

    for (let i = fallingObjects.length - 1; i >= 0; i--) {
      fallingObjects[i].update(); //Update ball position
      fallingObjects[i].display(); // Display ball

      // Check if ball hits the bowl
      if (fallingObjects[i].hits(player)) {
        score++; // Increment score
        fallingObjects.splice(i, 1); // Remove the ball
      } else if (fallingObjects[i].y > height) {
        gameOver = true; // If ball reaches bottom then game over
      }
    }

    displayScore(); // Display player's score
  }
}

//Code to display start message
function displayStartMessage() {
  fill(0); // Text color to black
  textSize(32); // Text size
  textAlign(CENTER, CENTER); //aalign text to center
  text("Press Enter to Start", width / 2, height / 2); // Display start message
  textSize(16); // Text size for "Faisal's Creation"
  text("Faisal's Creation", width / 2, height - 10); // Display "Faisal's Creation" at the bottom
}

//Code to display player's score
function displayScore() {
  fill(0); // Text color to black
  textSize(32); // Text size
  text("Score: " + score, 10, 40); // Display player's score
  textAlign(LEFT); // Align text to left
}

//Code to handle enter key
function keyPressed() {
  // Check if the Enter key is pressed and the game is over
  if (keyCode === ENTER && gameOver) {
    startGame(); // Start the game
  }
}

//Code to display game over message
function displayGameOver() {
  fill(0); // Text color to black
  textSize(64); // Text size
  textAlign(CENTER, CENTER); // Align text to center
  text("Game Over", width / 2, height / 2 - 40); // Display "Game Over" message
  textSize(32); // Set text size
  text("Score: " + score, width / 2, height / 2 + 20); // Display player's score
  text("Press Enter to Restart", width / 2, height / 2 + 60); // Display restart message
}

//code to start the game
function startGame() {
  gameOver = false; // Game over to false
  score = 0; //Reset score
  fallingObjects = [];
}

// Bowl class
class Player {
  constructor() {
    this.x = width / 2; // X position
    this.y = height - 30; // Y position
    this.size = 60; // Size of the bowl
  }

  //Code to update bowl position
  update() {
    this.x = mouseX; // Update X position based on mouse movements
  }

  //Code to display bowl
  display() {
    // Display the bowl image
    image(bowlImage, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}

// Falling Object class (ball)
class FallingObject {
  constructor() {
    this.x = random(width); // X position
    this.y = 0; // Y position
    this.size = 40; // Size of the ball
    this.speed = 7; // Speed of the ball
  }

  // Code to update ball position
  update() {
    this.y += this.speed; // Move ball downwards
  }

  // Code to display ball
  display() {
    // Display the ball image
    image(ballImage, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  // Code to check if falling object hits the bowl
  hits(player) {
    let d = dist(this.x, this.y, player.x, player.y); // Calculate distance between ball and bowl
    return d < this.size / 2 + player.size / 2;
  }
}

