const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.render;
var paper;
var ground;
var dustbin;
var world;




function setup() {
	createCanvas(1600,700);


	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,670,width/20);
paper = new Paper(200,450,40);
dustbin = new Dustbin(1200,650);

var render = Render.create({
  element:document.body,
  engine:engine,
  options:{
    width:1200,
    height:700,
    wireframes:false

  }
});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}



