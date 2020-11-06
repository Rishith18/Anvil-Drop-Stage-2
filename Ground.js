class Ground {
    constructor() {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(500,600,1000,30,options);
        this.width = 1000;
        this.height = 30;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}