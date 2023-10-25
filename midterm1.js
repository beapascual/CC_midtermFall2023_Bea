let option = 1; // to change scenes

let tall = [];
let tall2 = [];
let tall3 = [];
let city = [];
let city2 = [];
let city3 = []; // for city


let c1, c2, c3, c4, c5; // colors


let circleX;
let circleY;
let circleSize; // for ripples


function setup() {
  createCanvas(800, 800);
  background(255);

  c1 = color(157, 94, 156);
  c2 = color(251, 233, 113); // for gradient

  c3 = color(32, 31, 70);
  c4 = color(45, 43, 111);
  c5 = color(55, 55, 149); // for city

  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0; // for ripples


    for (i = 0; i < 9; i++) {
    tall[i] = random(575, 650);
    tall2[i] = random (475, 550);
    tall3[i]= random (300,450);
  } // heights of buildings (city)
  for (i = 0; i < 9; i++) {
    city3[i] = new building(
      i * 100 - 100,
      height - tall3[i] ,
      100,
      tall3[i],
      c5
    );
    city2[i] = new building(
      i * 100 - 50,
      height - tall2[i],
      100,
      tall2[i],
      c4
    );
    city[i] = new building(i * 100 - 30, height - tall[i], 100, tall[i], c3);
  } // placements of buildings (city)
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
} // gradient background of sunset

function draw() {
  if (option === 1) {
    background(0);

    if (mouseIsPressed === true) {
      circleX = mouseX;
      circleY = mouseY;
      circleSize = 0;
    }
    noFill();
    strokeWeight(5);
    stroke(255);

    circleSize += 5;

    circle(circleX, circleY, circleSize);
    circle(circleX, circleY, circleSize * 0.75);
    circle(circleX, circleY, circleSize * 0.5);
  } // ripples

  if (option === 2) {
    setGradient(c1, c2);
  } // sunset scene

  if (option === 3) {
    background(2, 16, 89);
    stroke(0);
    strokeWeight(1);
  for (i = 0; i < 9; i++) {
    city[i].display();
    city2[i].display();
    city3[i].display();
    }
  } //night city

  if (option === 4) {
    background(178, 190, 136, 150);
  } // breathing
}

function keyPressed() {
  option++;
  if (option > 4) {
    option = 1;
  }
} // to change scenes
