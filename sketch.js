var City
var boy
var BoyRunning
var barricade

function preload(){
  City =loadImage("City Bg For School Runner Game.png");
  Running = loadImage("Boy_Running.PNG")
  Obstacle.loadImage("Barricade.png")
}




function setup() {
  createCanvas(2500,730);
  Bg = createSprite(750,250,2500,1080)
  Bg.addImage(City)
  Boy = createSprite(200,850,20,50);
  Boy.addImage(Running)
  Boy.scale=0.5
  Bg.scale=1.0

}

function draw() {
  background(0); 

  drawSprites();
}