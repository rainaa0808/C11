var path;
var pathImg;
var boy;
var boyImg;
function preload(){
  //pre-load images
pathImg =loadImage("path.png");
boyImg= loadAnimation("runner-1.png", "runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200, 200,50,10);
path.addImage(pathImg);
path.velocityY= 5

boy= createSprite(180, 350,10,10);
boy.addAnimation("boy1", boyImg);
boy.scale= 0.05

}

function draw() {
  background(0);

  if (path.y> 400) {
    path.y= height/2
  }

  boy.x= World.mouseX;
  drawSprites();
}
