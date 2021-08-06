const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
bob = Bodies.circle(200,50,10,ball_options);
World.add(world,bob);

bob2 = Bodies.circle(200,50,10,ball_options);
World.add(world,bob2);

bob3 = Bodies.circle(200,50,10,ball_options);
World.add(world,bob3);

bob4 = Bodies.circle(200,50,10,ball_options);
World.add(world,bob4);

bob5 = Bodies.circle(200,50,10,ball_options);
World.add(world,bob5);

rope1=new rope(bob1,roof,-80,0);

rope2=new rope(bob2,roof,-80,0);

rope3=new rope(bob3,roof,-80,0);

rope4=new rope(bob4,roof,-80,0);

rope5=new rope(bob5,roof,-80,0);


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display()
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;

	  strokeWeight(2);

  }

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,10);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keycode==RIGHT_ARROW)
	{
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
	}
}