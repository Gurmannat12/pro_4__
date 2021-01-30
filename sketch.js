const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ship;
var fire;
var alien1,alien1Img;
var alien2,alien2Img;
var alien3,alien3Img;
var alien4,alien4Img;
var alien5,alien5Img;
var shipImg,alien6Img;
var fireImg;
var divisions = [];
var divisionHeight=300;

function preload() {
    alien1Img = loadImage("a1.png");
    alien2Img = loadImage("a2.png");
    alien3Img = loadImage("a3.png");
    alien4Img = loadImage("a4.png");
    alien5Img = loadImage("a5.png");

    shipImg = loadImage("ufo.png");
    fireImg = loadImage("fire.png");

    //createFire();
}

function setup() {
  createCanvas(785, 800);

  engine = Engine.create();
  world = engine.world;

  ship = createSprite(380,700,50);
  ship.addImage(shipImg);
  ship.scale=0.5;

  fireGroup=new Group();
  

  for (var k = 0; k <=width; k = k + 130)
        {
            divisions.push(new Division(k,height-divisionHeight*2.3,10,divisionHeight));
        }
  
}

function draw() {
  background(0);
  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(keyIsDown(RIGHT_ARROW)){
      ship.x += 10;
  }

  if(keyIsDown(LEFT_ARROW)){
      ship.x -= 10;

  }

  if (keyDown("space")) {
    createFire();
  }

  ship.display();
createFire();
}

function createFire() {
    var fire= createSprite(100, 100, 60, 10);
    fire.addImage(alien1Img);
    fire.y = 700;
    fire.x=ship.x;
    fire.velocityY = -5;
    fire.lifetime = 500;
    fire.scale = 0.5;
    fireGroup.add(fire) ; 
    return fire;
  }