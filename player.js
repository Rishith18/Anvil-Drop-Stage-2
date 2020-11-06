class Player {
    constructor(x, y) {
        var options = {
            restitution : 0.5,
            density : 1,
            friction : 5
        }
        this.body = Bodies.rectangle(x,y,85,150,options);
        this.width = 85;
        this.height = 150;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}