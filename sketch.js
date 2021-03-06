const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18;
var box19, box20, box21, box22, box23, box24;
var  slingShot, polygon;

function preload(){
  polygon_img = loadImage("polygon1.png");
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(400,360,180,20);
  stand2 = new Ground(640,180,210,20);

  //level2
  fill(255,158,241);
  box1 = new Box(580,160,30,30);
  box2 = new Box(610,160,30,30);
  box3 = new Box(640,160,30,30);
  box4 = new Box(670,160,30,30);
  box5 = new Box(700,160,30,30);
  box6 = new Box(595,130,30,30);
  box7 = new Box(625,130,30,30);
  box8 = new Box(655,130,30,30);
  box9 = new Box(685,130,30,30);

  
  box10 = new Box(610,100,30,30);
  box11 = new Box(640,100,30,30);
  box12 = new Box(670,100,30,30);
  box13 = new Box(625,70,30,30);
  box14 = new Box(655,70,30,30);

  //level1
  box15 = new Box(340,340,30,30);
  box16 = new Box(370,340,30,30);
  box17 = new Box(400,340,30,30);
  box18 = new Box(430,340,30,30);
  box19 = new Box(355,310,30,30);
  box20 = new Box(385,310,30,30);
  box21 = new Box(415,310,30,30);
  box22 = new Box(370,280,30,30);
  box23 = new Box(400,280,30,30);
  box24 = new Box(385,250,30,30);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
}

function draw() {
  background(0);  
  //drawSprites();
  Engine.update(engine);

  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  
  slingShot.display();
}