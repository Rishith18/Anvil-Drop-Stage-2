class Anvil {
    constructor(x,y) {
        var options = {
            restitution : 0.01,
            density : 30,
            friction : 5
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);
        this.width = 100;
        this.height = 100;
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}