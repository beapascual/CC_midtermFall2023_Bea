let option = 1
var array = [];
let city = [];
let building;

function setup() {
  createCanvas(800, 800);
  background(255);
  for (i = 0; i < 8; i++){
    array[i] = random(300, 550);
  }
  for (i = 0; i < 8; i++){
      city[i] = new building(i*100, height - array[i], 100, array[i])
    }
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
    fill(0);
    // rect(0, 600, 100, 200);
    for (i = 0; i < 8; i++){
      city[i].display();
      city[i].windows();
    }
  }//night sky
  
  if(option === 4){
    background(178,190,136,150);
  }// breathing

  class building{
    constructor(x, y){
      this.x = x;
      this.y = y;
  
    }
    
    display(){
      fill(0);
      rect(this.x,this.y,this.w,this.h);
    }
    
    windows(col, row){
      fill(255,255,0)
      for (i = 0; i < col; i++){
        for(j = 0; j < row; j++){
          rect(this.x + (j*10), this.y + (i*10), 20, 20)
        }
      }
    }
  }
  
  
    
  
} // ripple scene


function keyPressed(){
  option++;
    if(option > 4){
      option = 1;
    }
  }