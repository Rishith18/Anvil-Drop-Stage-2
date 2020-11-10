class Block {
   constructor(x,y) {
       var options = {
           isStatic : true
       }
       this.body = Bodies.rectangle(x,y,100,100,options);
       this.width = 100;
       this.height = 100;
       World.add(world,this.body);
   } 

   display() {
       var pos = this.body.position;
       push();
       rectMode(CENTER);
       rect(pos.x, pos.y, this.width, this.height);
   }
}