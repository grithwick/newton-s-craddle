
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(150,520,20);
	bob2=new Bob(250,520,20);
	bob3=new Bob(350,520,20);
	bob4=new Bob(450,520,20);
	bob5=new Bob(550,520,20);
	roof=new Roof(400,200,600,30);
	rope1=new Rope(bob1.body,{x:150,y:200});
	rope2=new Rope(bob2.body,{x:250,y:200});
	rope3=new Rope(bob3.body,{x:350,y:200});
	rope4=new Rope(bob4.body,{x:450,y:200});
	rope5=new Rope(bob5.body,{x:550,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



