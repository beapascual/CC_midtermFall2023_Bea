let s;
let j;

class building{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  display(){
    fill(0);
    rect(this.x,this.y,this.w,this.h);
    fill(255,255,0)
    for(s=0; s< this.w; s = this.x + 10){
      for(j=0; j<this.h; j = this.y + 10){
        rect(this.x,this.y,20,20);
  }
}
  }
}

  /*windows(){
    fill(255,255,0)
    for(i=0; i< this.w; i = this.x + 10){
      for(j=0; j<this.h; j = this.y + 10){
        rect(this.x,this.y,20,20);
      }
    }
  }
}*/
  
  /*windows(col, row){
    fill(255,255,0)
    for (i = 0; i < col; i++){
      for(j = 0; j < row; j++){
        rect(this.x + (j*10), this.y + (i*10), 20, 20)
      }
    }
  }
}*/



