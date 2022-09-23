var bg,bgImg;
var topground;
var bottomground;
var balloon,balloonImg;
var obstacleTop, obsTop1, obsTop2;
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3;

function preload () {
  bgImg = loadImage("assets/bg.png");

  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

  obsTop1 = loadImage("assets/obsTop1.png");
  obsTop2 = loadImage("assets/obsTop2.png");

  obsBottom1 = loadImage("assets/obsBottom1.png");
  obsBottom2 = loadImage("assets/obsBottom2.png");
  obsBottom3 = loadImage("assets/obsBottom3.png");

}

function setup () {
  
  createCanvas(windowWidth,windowHeight);
//background image
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3;


  //creating top and bottom grounds
  topground = createSprite(200,10,800,20);
  topground.visible = false;

  bottomground = createSprite(200,390,800,20);
  bottomground.visible = false;

//creating balloon
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.2;



}

function draw () {

  background("black");

  //making the hot air balloon jump
  if(keyDown("space")){
    balloon.velocityY = -6;

  }

  //adding gravity
  balloon.velocityY = balloon.velocityY + 2;


  Bars();

  drawSprites();

  //spawning top obstacles
spawnObstaclesOnTop();


}


function spawnObstaclesOnTop()
{
  if(World.frameCOunt % 60 === 0) {
    obstacleTop = createSprite(400,50,40,50);

    //obstacleTop.addImage(obsTop1);

    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10, 100));

    //generate random top obstacles
    var rand = Math.rpund(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

    //assign lifetime to the variable
    obstacleBottom.lifetime = 100;

    balloon.depth = balloon.depth + 1;

    }
}

function Bars()
{
  if(World.fameCount % 60 === 0)
  {
    var bars = createSprite(400,200,10,800);
   bars.velocityX = -6;
   bars.depth = balloon.depth;
   bars.lifetime = 70;
   bars.visible = false;
  }
}


