
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject,groundObject;
var world;


function setup() {
	createCanvas(1600, 800);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dustbinObj=new dustbin(1200,650);
  paperObject=new paper(200,450,70);
  groundObject=new ground(width/2,670,width,20);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });



  Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
	  
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	   
	      }
   }
   


