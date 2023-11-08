let option = 1; // to change scenes

let circleX;
let circleY;
let outerDiam; // for ripples

let g1, g2, g3, g4, g5; //for sunset

let tall = [];
let tall2 = [];
let tall3 = []; // arrays for heights of buildings
let city = [];
let city2 = [];
let city3 = []; // arrays for creating multiple buildings in a row and their positions
let c1, c2, c3, c4, c5; //for city

let angle = 0;
let heartX, heartY; // for breathing circle

function setup() {
  createCanvas(800, 800);
  background(255);

  circleX = width / 2;
  circleY = height / 2;
  outerDiam = 0; // base values for ripples

  g1 = color(232, 86, 94);
  g2 = color(232, 170, 69);
  g3 = color(140, 53, 105);
  g4 = color(225, 81, 107);
  g5 = color(13, 29, 134); // colors for sunset scene

  c1 = color(0, 0, 153);
  c2 = color(204, 63, 77);
  c3 = color(32, 31, 70, 100);
  c4 = color(54, 40, 78);
  c5 = color(55, 55, 149); // colors for city scene

  for (i = 0; i < 9; i++) {
    tall[i] = random(425, 500); // row 1
    tall2[i] = random(325, 400); // row 2
    tall3[i] = random(200, 300); // row 3
  } // arrays for random heights of buildings -- makes each building a random height within a range (range depends on the row)

  for (i = 0; i < 9; i++) {
    city[i] = new building(i * 100 - 30, height - tall[i], 100, tall[i], c3); // row 1
    city2[i] = new building(i * 100 - 50, height - tall2[i], 100, tall2[i], c4); // row 2
    city3[i] = new building(i * 100 - 100 /*buildings get cut off without the (-100)*/, height - tall3[i],100, tall3[i], c5); // row 3
  } // arrays -- creates multiple buildings in the row and staggers building positions

  heartX = 100; // base value for beating heart
}

 //https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b (used for all gradients)
function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) { // as y increases inter increases, creating a smooth gradient
    var inter = map(y, 0, 300, 0, 1); // from y=0 to y=300, color will change completely from g1 to g2
    var s1 = lerpColor(g1, g2, inter); // lerp color makes color change from 1 to 2, inter makes smooth gradient
    stroke(s1); // each line is a different color to make gradient ^^
    line(0, y, width, y); // makes the color appear
  }
} // first gradient for sunset
function setGradient(g4, g5) { // works the same way as last gradient
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, 400, 0, 1);// from y=0 to y=400, color will change completely from g4 to g5
    var s2 = lerpColor(g4, g5, inter);
    stroke(s2);
    line(0, y, width, y);
  }
} // second gradient for sunset

function setGradient(c1, c2) { // works the same way as last gradient
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);// from y=0 to y=800, color will change completely from c1 to c2
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
} // gradient background for city


function draw() {
  if (option === 1) {
    background(199,242,246);
    if (mouseIsPressed === true) { // makes ripple appear if mouse is pressed
      circleX = mouseX; 
      circleY = mouseY;
      outerDiam = 0; // restarts the ripple when mouse is pressed
    }

    outerDiam += 2; // causes ellipses to increase in size -> creates ripple

    for (var i = 0; i < 5; i++) { //makes 5 ellipses appear in the ripple
      var diam = outerDiam - 30 * i; //makes smaller circle appear within bigger circle as they grow in size
      if (diam > 0) {
        var fade = map(diam, 0, 700 ,4 , 0); // makes stroke weight decrease as circles get bigger (for diam <= 700)
        strokeWeight(fade);
        stroke(22,131,174,68);
        noFill();
        ellipse(circleX, circleY, diam); // draws ellipses where mouse is pressed, diam makes multiple ellipses appear to make ripple effect
      }
    }
  } // ripples scene -->  https://editor.p5js.org/chjno/sketches/BkbTpyojZ

  if (option === 2) {
    if (mouseY <= 325) {// when mouseY is 0 - 325, background is sunset gradient
      setGradient(g1, g2); //sunset gradient
    } else if (mouseY <= 500) { // when mouseY is 325 - 500 background is changing color from g1 - g4 depending on mouseY position
      p1 = lerpColor(g1, g4, map(mouseY, 325, 500, 0, 1)); // lets the sky change color as the sun moves, color of the sky ranges from g1-g4 when mouseY = 325-500
      background(p1);
    } else if (mouseY <= 600) {// when mouseY 500 - 600, background is darker sunset gradient
      setGradient(g3, g4);
    } else if (mouseY >= 600) {// when mouseY is 600 - 800 background is changing color from g3 - g5 depending on mouseY position
      p2 = lerpColor(g3, g5, map(mouseY, 600, 800, 0, 1));// lets the sky change color as the sun moves, color of the sky ranges from g3-g5 when mouseY = 600-800
      background(p2);
    } //the sky changing colors based on the sun's position is supposed to mimic a sun setting

    push();
    translate(width / 2, mouseY); // allows sun to stay in the center and move up and down with the mouse
    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, 350, 350); // the sun
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
    endShape(); // mountain silhouettes
  } // sunset scene

  if (option === 3) {
    frameRate(1); // so stars change positions slowly
    setGradient(c1, c2); // color of the sky

    for (var j = 0; j < 50; j++) { // allows stars to keep changing positions
      var x = random(width); // stars can have any random x value within the width
      var y = random(300); // stars can have any random y value from 0 - 300
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 3, 3); // stars
    } // stars --> https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b

    for (i = 0; i < 9; i++) {
      stroke(0);
      strokeWeight(1); //to see buildings
      city[i].display(); // row 1
      city2[i].display(); // row 2
      city3[i].display(); // row 3
    } // arrays of buildings from setup (individual buildings are from a class in the other tab)
  } //night city scene

  if (option === 4) {
    frameRate(60);// brings framerate back to normal from city scene
    background(178, 190, 136, 150);
    push();
    translate(width / 2, height / 2); // sets up breathing circle in the center
    noStroke();
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
    // gradient green to white as circles get smaller, color changes in a 0.33 interval
    // this lerp color technique is taken from the p5js references --> https://p5js.org/reference/#/p5/lerpColor

    const r = map(sin(angle), -1, 1, 0, 700); // the range of sin(angle) is originally [-1,1] but is changed to [0,700] to match size of circle (700 is maximum radius)
    fill(26, 113, 63, 150);
    circle(0, 0, r); // r makes circle grow/shrink based on sin(angle); radius of circle ranges from 0-700
    angle += 0.015; // angle grows in 0.015 intervals, which makes sin(angle) change values, allowing circle to grow when sin(angle) is increasing and shrink when sin(angle) is decreasing
    pop(); // breathing circle --> https://editor.p5js.org/dansakamoto/sketches/H1ICcXXtm (kinda)

    push();
    translate(width / 2, height / 2 - heartY + 50); // places heart in center of circles
    fill(255, 192, 203);
    noStroke();
    heartX += 0.3; //since heartX is changing values, heart beats
    heartY = 3 * (cos(heartX / 2) + sin(heartX / 4)) + 110; // the 3 in the front is the amplitude of how much the heart changes size while beating, the value inside the cos and sin determine how fast the heart beats, the 110 at the end is the size of the heart
    rotate(PI / 4.0); // rotates the shapes used to make the heart so that the heart will be upright
    square(0, 0, heartY);
    circle(heartY / 2, 0, heartY);
    circle(0, heartY / 2, heartY);
    // square and circles are the components used to make the heart; their size and positions change depending on heartX and heartY so that heart can beat
    pop(); // beating heart shape --> https://editor.p5js.org/ronikaufman/sketches/zyrZpaSQl
    // purpose of heart is to clarify this is a breathing circle
  } //breathing circle scene
}

function keyPressed() {
  option++;
  if (option > 4) {
    option = 1;
  }
} // to change scenes
