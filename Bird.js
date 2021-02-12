class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.arr = [];
  }
  display() {
    super.display();
    push();
    if(this.body.speed > 12 && gameState === "launched"){
      var position = [this.body.position.x,this.body.position.y];
      this.arr.push(position);
    }
    for(var i = 0 ; i < this.arr.length ; i++){
      image(this.image2,this.arr[i][0],this.arr[i][1]);
    }
    pop();
  }
}
