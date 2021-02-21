
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
var ground;
var stone;
var hammer;



function preload()
{
	
}

function setup() {
	
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;

	/* var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 400,
		  wireframes: false
		}
	  }); */
	
	//Create the Bodies Here.
	ground = new Plane(698,698,1400,5);
	stone = new Stone(200,475,70,70);
	hammer = new Hammer(100,100,200,90);
	rubber = new Rubber(200,100,100);
	sand1 = new Sand(300,100,10);
	sand2 = new Sand(310,100,10);
	sand3 = new Sand(320,100,10);
	sand4 = new Sand(330,100,10);
	sand5 = new Sand(340,100,10);
	iron = new Iron(140,475,30,45)
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("orange");
  
  drawSprites();
 ground.display();
  rubber.display();
 stone.display();
 hammer.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
iron.display();
}



