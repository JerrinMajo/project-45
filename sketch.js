var player,playerImg;
var backgroundImg;

function preload(){
  playerImg=loadImage("assets/hawkeye1.png");
  backgroundImg=loadImage("assets/background.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  player=createSprite(400,450,25,25);
  player.addImage("player",playerImg);
  player.scale=0.9;
}
function draw(){
  background(backgroundImg);

  drawSprites();
}