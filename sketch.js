
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper ;		
var log,log2,log3;
var world ;

function setup() {
	createCanvas(1200, 500);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log=createSprite(390,650,200,20 ,{isStatic:true});

	log2= createSprite(500,610,20,100, {isStatic:true});
 
	log3= createSprite(300,600,20,100 ,{isStatic:true});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
log.display();
log2.display();
log3.display();

}
function keyPressed(){
if (keyCode=== "UP_arrow") {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
}
	
}





