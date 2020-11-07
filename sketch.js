
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper,wall1,wall2,wall3,dustbinImg,dustbinPng;
var ground;


function preload()
{
dustbinPng = loadImage("sprites/dustbingreen.png")	;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustBin1=createSprite(600,680,150,20);
	//dustBin1.shapeColor=color("yellow");
	//dustBin2=createSprite(525,630,20,120);
	//dustBin2.shapeColor=color("yellow");
	//dustBin3=createSprite(670,630,20,120);
	//dustBin3.shapeColor=color("yellow");
	
	ground = new Ground(width/2,660,width,20);

	wall1 = new Ground(350,-34600,20,70000);
	wall2 = new Ground(275,35400,20,70000);
	wall3 = new Ground(425,35400,20,70000)

	
	paper = new Paper(100,600,50,50);
	
	dustbin1 = new Dustbin(600,620,150,20);
	dustbin2 = new Dustbin(523,560,20,140);
	dustbin3 = new Dustbin(673,560,20,140);

	

	Engine.run(engine);
	dustbinImg =  createSprite(600,540 ,150,90);
	dustbinImg.addImage(dustbinPng);
	dustbinImg.scale = 0.5;

  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  Engine.update(engine);
 
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
wall1.display();
wall2.display();
wall3.display();
drawSprites();



 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:3,y:-80});
	  
	}
  }



