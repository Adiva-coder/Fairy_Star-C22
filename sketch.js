var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var starBodyOptions;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.2;

	star = createSprite(650, 30);
	star.addImage(starImg);
	star.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
  background(bgImg);

 star.x = starBody.position.x;
 star.y = starBody.position.y;

 //fairyVoice.play()

keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("left_arrow")){
		fairy.x = fairy.x - 3;
	}

	if(keyDown("right_arrow")){
		fairy.x = fairy.x + 3;
	}

	if(keyDown("down_arrow")){
		Matter.Body.setStatic(starBody, false);
	}

	if(starBody.position.y > 470){
		Matter.Body.setStatic(starBody, true);
		//fairyVoice.stop();
	}
}
