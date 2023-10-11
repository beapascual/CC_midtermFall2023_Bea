function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  // put drawing code here
  background(0);
  fill(255,0,0);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);

  fill(255);
  stroke(0,255,0);
  strokeWeight(3);
  rect(width/2,height/2,40,60);
  fill(0,0,255);
  rect(0,0,50,50)

}
