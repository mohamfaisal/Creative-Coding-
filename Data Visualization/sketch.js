let gamesData;

function preload() {
  gamesData = loadTable("games.csv", "csv", "header"); //"games.csv" CSV file name
}

function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  let totalParticipants = 0;
  for (let i = 0; i < gamesData.getRowCount(); i++) {
    totalParticipants += int(gamesData.getNum(i, "Participants")); 
  }

  let pieStartAngle = 0;
  let games = gamesData.getColumn("Game"); //to acces Game coloum
  let participants = gamesData.getColumn("Participants"); // to access Participants coloumn

  for (let i = 0; i < games.length; i++) {
    let percentage = int(participants[i]) / totalParticipants;
    let pieEndAngle = pieStartAngle + TWO_PI * percentage;

    fill(color(gamesData.getString(i, "Color")));
    arc(width / 2, height / 2, width * 0.8, height * 0.8, pieStartAngle, pieEndAngle, PIE);
    pieStartAngle = pieEndAngle;
  }

  let legendX = width * 0.8;
  let legendY = height * 0.2;
  let legendSpacing = 20;

  for (let i = 0; i < games.length; i++) {
    fill(color(gamesData.getString(i, "Color")));
    rect(legendX, legendY + i * legendSpacing, 15, 15);
    textSize(14);
    fill(0);
    text(games[i], legendX + 20, legendY + i * legendSpacing + 15);
  }
}

