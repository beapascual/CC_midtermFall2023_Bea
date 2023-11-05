let option = 1; // to change scenes

let tall = [];
let tall2 = [];
let tall3 = [];
let city = [];
let city2 = [];
let city3 = []; // for city

let c1, c2, c3, c4, c5; // colors for city
let g1, g2, g3, g4, g5; // colors for sunset


let circleX;
let circleY;
let outerDiam; // for ripples

let angle = 0; // for breathing circle

let heartX, heartY;

function setup() {
  createCanvas(800, 800);
  background(255);

  c1 = color(0, 0, 153);
  c2 = color(204, 63, 77);
  c3 = color(32, 31, 70, 100);
  c4 = color(54, 40, 78);
  c5 = color(55, 55, 149); // colors for city scene

  g1 = color(225, 81, 107);
  g2 = color(233, 136, 63);
  g3 = color(140, 53, 105);
  g4 = color(232, 86, 94);
  g5 = color(13, 29, 134); // colors for sunset scene
  

  circleX = width / 2;
  circleY = height / 2;
  outerDiam = 0; // for ripples

  for (i = 0; i < 9; i++) {
    tall[i] = random(425, 500);
    tall2[i] = random(325, 400);
    tall3[i] = random(200, 300);
  } // arrays for random heights of buildings
  for (i = 0; i < 9; i++) {
    city3[i] = new building(
      i * 100 - 100, // buildings get cut off without this - 100 (idk why)
      height - tall3[i],
      100,
      tall3[i],
      c5
    );
    city2[i] = new building(i * 100 - 50, height - tall2[i], 100, tall2[i], c4);
    city[i] = new building(i * 100 - 30, height - tall[i], 100, tall[i], c3);
  } // creates multiple buildings and staggers building positions

  heartX = 100;
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  } // https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b
} // gradient background for city

function setGradient(g1, g2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, 300, 0, 1);
    var s1 = lerpColor(g1, g2, inter);
    stroke(s1);
    line(0, y, width, y);
  }
}
function setGradient(g3, g4) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, 400, 0, 1);
    var s2 = lerpColor(g3, g4, inter);
    stroke(s2);
    line(0, y, width, y);
  }
}

function draw() {
  if (option === 1) {
    background(199,242,246);
    if (mouseIsPressed === true) {
      circleX = mouseX;
      circleY = mouseY;
      outerDiam = 0;
    }

    outerDiam += 2;

    for (var i = 0; i < 5; i++) {
      var diam = outerDiam - 30 * i;
      if (diam > 0) {
        var fade = map(diam, 0, 600,4 , 0);
        strokeWeight(fade);
        stroke(155,231,231);
        noFill();
        ellipse(circleX, circleY, diam);
      }
    }
  } // ripples
  // https://editor.p5js.org/chjno/sketches/BkbTpyojZ

  if (option === 2) {
    if (mouseY <= 300) {
      setGradient(g1, g2);
    } else if (mouseY <= 500) {
      p1 = lerpColor(g2, g4, map(mouseY, 150, 500, 0, 1));
      background(p1);
    } else if (mouseY <= 600) {
      setGradient(g3, g4);
    } else if (mouseY >= 600) {
      p2 = lerpColor(g4, g5, map(mouseY, 550, 800, 0, 1));
      background(p2);
    }

    push();
    translate(width / 2, mouseY);
    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, 350, 350);
    pop();

    beginShape();
    fill(0);
    noStroke();
    vertex(0, 550);
    vertex(150, 400);
    vertex(225, 450);
    vertex(400, 250);
    vertex(575, 425);
    vertex(650, 350);
    vertex(800, 500);
    vertex(800, 800);
    vertex(0, 800);
    endShape();
  }

  if (option === 3) {
    frameRate(1);
    strokeWeight(1);
    setGradient(c1, c2);
    for (var j = 0; j < 50; j++) {
      var x = random(width);
      var y = random(height - 500);
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 3, 3);
    } // stars https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b
    for (i = 0; i < 9; i++) {
      stroke(1);
      city[i].display();
      city2[i].display();
      city3[i].display();
    }
  }
  //night city

  if (option === 4) {
    frameRate(60);
    push();
    translate(width / 2, height / 2);
    noStroke();
    background(178, 190, 136, 150);

    const r = map(sin(angle), -1, 1, 0, 100);
    const baseRadius = 700;

    const from = color(210, 245, 158);
    const to = color(255);
    colorMode(RGB);
    const interA = lerpColor(from, to, 0.33);
    const interB = lerpColor(from, to, 0.66);
    fill(from);
    ellipse(0, 0, 700);
    fill(interA);
    ellipse(0, 0, 550);
    fill(interB);
    ellipse(0, 0, 400);
    fill(to);
    ellipse(0, 0, 250);

    // fill(210,245,158,);
    // circle(0, 0, 100+baseRadius);

    fill(26, 113, 63, 150);
    circle(0, 0, map(r, 0, 100, 0, baseRadius));

    angle += 0.015;
    pop();

    push();

    translate(width / 2, height / 2 - heartY + 50);
    fill(255, 192, 203);
    noStroke();
    heartX += 0.3;
    heartY = 3 * (cos(heartX / 2) + sin(heartX / 4)) + 110;
    rotate(PI / 4.0);
    square(0, 0, heartY);
    circle(heartY / 2, 0, heartY);
    circle(0, heartY / 2, heartY);
    pop();
  } // breathing circle https://editor.p5js.org/dansakamoto/sketches/H1ICcXXtm (kinda)
}

function keyPressed() {
  option++;
  if (option > 4) {
    option = 1;
  }
} // to change scenes
