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

  c1 = color(0, 0, 153);
  c2 = color(204, 51, 0);
  c3 = color(32, 31, 70, 100);
  c4 = color(54, 40, 78);
  c5 = color(55, 55, 149);

  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0; // for ripples

  for (i = 0; i < 9; i++) {
    tall[i] = random(425, 500);
    tall2[i] = random(325, 400);
    tall3[i] = random(200, 300);
  }
  for (i = 0; i < 9; i++) {
    city3[i] = new building(
      i * 100 - 100,
      height - tall3[i],
      100,
      tall3[i],
      c5
    );
    city2[i] = new building(i * 100 - 50, height - tall2[i], 100, tall2[i], c4);
    city[i] = new building(i * 100 - 30, height - tall[i], 100, tall[i], c3);
  }
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
    frameRate(1);
    strokeWeight(1);
    setGradient(c1, c2);
    for (var j = 0; j < 50; j++) {
      var x = random(width);
      var y = random(height - 500);
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 3, 3);
    }
    // for (i = 0; i < 9; i++) {
    //   stroke(1);
    //   city[i].display();
    //   city2[i].display();
    //   city3[i].display();
    // }
    
  }
  //night city

  if (option === 3) {
    frameRate(60);
    background(178, 190, 136, 150);
  
  
    push();
   translate(width/2,height/2);
   if (frameCount <= 800){
     polygon(0, 0, 120, frameCount/100);
   }
   else{
     polygon(0, 0, 120, 8);
   }
   pop();
   
    push();
   translate(width/2,height/2);
   if (frameCount <= 700){
     polygon(0, 0, 110, frameCount/100);
   }
   else{
     polygon(0, 0, 110,7 );
   }
   pop();
   
    push();
   translate(width/2,height/2);
   if (frameCount <= 600){
     polygon(0, 0, 100, frameCount/100);
   }
   else{
     polygon(0, 0, 100, 6);
   }
   pop();
   
    push();
   translate(width/2,height/2);
   if (frameCount <= 500){
     polygon(0, 0, 90, frameCount/100);
   }
   else{
     polygon(0, 0, 90, 5);
   }
   pop();
   
    push();
   translate(width/2,height/2);
   if (frameCount <= 400){
     polygon(0, 0, 80, frameCount/100);
   }
   else{
     polygon(0, 0, 80, 4);
   }
   pop();
   
   push();
   translate(width/2,height/2);
   if (frameCount <= 300){
     polygon(0, 0, 70, frameCount/100);
   }
   else{
     polygon(0, 0, 70, 3);
   }
   pop();
   
  } // breathing
}

function polygon(x, y, radius, npoints) {
  fill(255);
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed() {
  option++;
  if (option > 3) {
    option = 1;
  }
} // to change scenes
