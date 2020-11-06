const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player,ground

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    player = new Player(200,200);
    ground = new Ground()

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(player.body.position.y);

    player.display();
    ground.display();

    move();
}

function move() {
    if (keyIsDown(RIGHT_ARROW)) {
        Matter.Body.setPosition(player.body,{
            x : player.body.position.x + 3,
            y : player.body.position.y
        })
    }

    if (keyIsDown(LEFT_ARROW)) {
        Matter.Body.setPosition(player.body,{
            x : player.body.position.x - 3,
            y : player.body.position.y
        })
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW && player.body.position.y >= 500 ) {
        Matter.Body.applyForce(player.body,player.body.position,{x:100,y:-200});
    }
    if (keyCode === DOWN_ARROW && player.body.position.y >= 500 ) {
        Matter.Body.applyForce(player.body,player.body.position,{x:-100,y:-200});
    }
}