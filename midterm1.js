let option = 1;
let tall = [];
let city = [];

function setup() {
  createCanvas(800, 800);
  background(255);
  for (i = 0; i < 8; i++) {
    tall[i] = random(300, 550);
  }
  for (i = 0; i < 8; i++) {
    city[i] = new building(i * 100, height - tall[i], 100, tall[i]);
  }
}

function draw() {
  if (option === 1) {
    background(0);
  } // ripple scene

  if (option === 2) {
    background(255, 206, 200, 180);
  } // waterfall scene

  if (option === 3) {
    background(2, 16, 89);
    fill(0);
    // rect(0, 600, 100, 200);
    for (i = 0; i < 8; i++) {
      city[i].display();
      //city[i].windows();
    }
  } //night sky

  if (option === 4) {
    background(178, 190, 136, 150);
  } // breathing
} // ripple scene

function keyPressed() {
  option++;
  if (option > 4) {
    option = 1;
  }
}


