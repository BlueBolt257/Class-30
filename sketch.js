//NameSpacing - nicknames
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var rope;
var fruit;
var fruitCON;

function setup() {
  createCanvas(500,700);

  //Creating an universe & a world that we can manipulate
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 680, 600, 20)

  rope = new Rope(7, {x: 250, y: 30})

  fruit = Bodies.circle(300, 300, 20)
  Matter.Composite.add(rope.body, fruit)
  fruitCON = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() {
  background(50);  
  Engine.update(engine);
  ground.display();
  rope.display();
  ellipse(fruit.position.x, fruit.position.y, 20, 20)
}