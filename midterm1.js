let option = 1;
let tall = [];
let city = [];
let c1, c2, c3, c4;
let circleX;
let circleY;
let circleSize;
//let circleStatus = false;

function setup() {
  createCanvas(800, 800);
  background(255);

  c1 = color(157, 94, 156);
  c2 = color(251, 233, 113);
  c3 = color(29, 53, 87);
  c4 = color(168, 218, 220);
  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0;

  for (i = 0; i < 8; i++) {
    tall[i] = random(300, 550);
  }
  for (i = 0; i < 8; i++) {
    city[i] = new building(i * 100, height - tall[i], 100, tall[i], c3);
  }

  // for (i = 0; i < 3; i ++){
  //   for (j = 0; j < 8; i++){
  //     city[i][j] = new building(i * 100, height - tall[i], 100, tall[i], c3);
  //   }
  // }
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  if (option === 1) {
    background(0);
    noFill();
    strokeWeight(5);
    stroke(255);

    circleSize += 10;

    stroke(0, 64, 128);
    circle(circleX, circleY, circleSize);
    circle(circleX, circleY, circleSize * 0.75);
    circle(circleX, circleY, circleSize * 0.5);
  } // ripple scene
  
  function mousePressed() {
    circleX = mouseX;
  circleY = mouseY;
  circleSize = 0;
  }

  if (option === 2) {
    setGradient(c1, c2);
  } // sunset scene

  if (option === 3) {
    background(2, 16, 89);
    for (i = 0; i < 8; i++) {
      city[i].display();
      //city[i].windows();
      //city[i].windows();
    }
  } //night sky

  if (option === 4) {
    background(178, 190, 136, 150);
  } // breathing
  // ripple scene
}

function keyPressed() {
  option++;
  if (option > 4) {
    option = 1;
  }
}
