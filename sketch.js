
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trees,floor,mango1,boy1mango2,mango3,mango4,mango5;
var stone1,sling,gs="play";

function preload()
{
	
}

function setup() {
	createCanvas(1700,1300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trees=new tree(650,1000);
	floor=new ground(700,700,1700,20)
	mango1=new mango(600,300)
	boy1=new boy(1300,620)
	mango2=new mango(300,200)
	mango3=new mango(200,300)
	mango4=new mango(500,200)
	mango5=new mango(190,100)
	mango6=new mango(400,100)
	stone1=new stone(1250,520,50,50)
	sling=new shot(boy.body,{x:200 , y:50});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  trees.display();
  floor.display();
  mango1.display();
  boy1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  sling.display();

}

function mouseDragged(){
    if (gs==="play"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gs="end"
}