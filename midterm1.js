let option = 1

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  if (option === 1){
    background(0);
  }// ripple scene
  
  if(option === 2){
    background(255, 206, 200, 180);
  }// waterfall scene
  
  if(option === 3){
    background(2,16,89);
  }//night sky
  
  if(option === 4){
    background(178,190,136,150);
  }// breathing
  
  
    
  
} // ripple scene


function keyPressed(){
  option++;
    if(option > 4){
      option = 1;
    }
  }