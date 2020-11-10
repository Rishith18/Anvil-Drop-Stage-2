const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player,ground, back, boxArray = [];
var flag = 0;
var anvilArray = [];

function preload() {
    //back = loadImage("minecraftB.jpg");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    player = new Player(200,200);
    ground = new Ground()
    for (var i=50; i<1000; i = i+100) {
        anvilArray.push(new Anvil(i,50));
    }

}

function draw(){
    background(0);
    /*if (back) {
        background(back);
    }*/
    Engine.update(engine);
    console.log(player.body.position.y);

    ground.display();

    move();
    if (second()%10 === 0) {
        boxCreate();
    }
    for (var i=0; i<boxArray.length; i++) {
        boxArray[i].display();
    }
    for (var i=0; i<anvilArray.length; i++) {
        anvilArray[i].display();
    }
}

function move() {
    if (keyIsDown(RIGHT_ARROW)) {
        Matter.Body.setPosition(player.body,{
            x : player.body.position.x + 3,
            y : player.body.position.y
        })
        player.displayRight();
    } else if (keyIsDown(LEFT_ARROW)) {
        Matter.Body.setPosition(player.body,{
            x : player.body.position.x - 3,
            y : player.body.position.y
        })
        player.displayLeft();
    } else {
        player.displayFront();
    }
} 

function keyPressed() {
    if (keyCode === UP_ARROW && player.body.position.y >= 500 ) {
        Matter.Body.applyForce(player.body,player.body.position,{x:100,y:-200});
    }
    if (keyCode === DOWN_ARROW && player.body.position.y >= 500 ) {
        Matter.Body.applyForce(player.body,player.body.position,{x:-100,y:-200});
    }
    /*if (keyCode === RIGHT_ARROW) {
        player.displayRight();
    }
    if (keyCode === LEFT_ARROW) {
        player.displayLeft();
    }*/
}

function boxCreate() {
    if (flag === 0) {
        boxArray.push(new Block(random(50,500),300));
        flag = 1;
    }  else if (flag === 1) {
        boxArray.push(new Block(random(550,950),300));
        flag = 2;
    }     
}

    