
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var roof;
var string1;
var string2;
var string3;
var string4;
var string5;
var string6;
var string7;


function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(450,200,600,15);
	
	ball1 = new Ball(135,390,41);
	ball2 = new Ball(220,390,41);
	ball3 = new Ball(305,390,41);
	ball4 = new Ball(400,390,41);
	ball5 = new Ball(585,390,41);
	ball6 = new Ball(670,390,41);
	ball7 = new Ball(755,390,41);

	string1 = new String(ball1.body,roof.body,-150*2,0);
	string2 = new String(ball2.body,roof.body,-100*2,0);
	string3 = new String(ball3.body,roof.body,-50*2,0);
	string4 = new String(ball4.body,roof.body,+0*2,0);
	string5 = new String(ball5.body,roof.body,+50*2,0);
	string6 = new String(ball6.body,roof.body,+100*2,0);
	string7 = new String(ball7.body,roof.body,+150*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(45,125,100));
  	
 	fill(rgb(43,56,89));
	roof.display();
	fill(rgb(225,225,225));
	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
	string6.display();
	string7.display();

	fill(rgb(47,12,76));
	ball1.display();
	fill(rgb(98,45,12));
	ball2.display();
	fill(rgb(20,90,60));
	ball3.display();
	fill(rgb(20,50,100));
	ball4.display();
	fill(rgb(75,100,125));
	ball5.display();
	fill(rgb(25,50,175));
	ball6.display();
	fill(rgb(90,12,56));
	ball7.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-150,y:-10});
	}
}
