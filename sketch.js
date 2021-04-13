var paperObject;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crumble paper ball
	paperObject = new paper(50, 50);

	//ground
	ground = new Ground(600, 600, 1200, 20);

	// Left box
	boxPosition = 590 - 100;
	boxY = 540;
	boxleftSprite = new dustbin(boxPosition - 10, boxY, 20, 100);

	// Center box
	boxBase = new dustbin(boxPosition + 100, boxY + 40, 200, 20);

	// Right box
	boxrightSprite = new dustbin(boxPosition + 200, boxY, 20, 100);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	//Displaying all sprites.
	paperObject.display();

	ground.display();

	boxleftSprite.display();
	boxBase.display();
	boxrightSprite.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });
	}
}

