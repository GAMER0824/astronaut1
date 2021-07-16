var bath1
var background1
var move1
var sleep1
var gym
var eat
var brush


function preload() {
  bath1 = loadAnimation("images/bath1.png","images/bath2.png","images/bath1.png","images/bath2.png")
  background1 = loadImage("images/iss.png")
  move1 = loadAnimation("images/move.png","images/move1.png","images/move.png","images/move1.png")
  sleep1 = loadAnimation("images/sleep.png","images/sleep.png")
  gym = loadAnimation("images/gym11.png","images/gym12.png","images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png","images/eat1.png","images/eat2.png")
  brush = loadAnimation("images/brush.png","images/brush.png")

}


function setup() {
  createCanvas(800,600);
  astona = createSprite(400, 200, 50, 50);
  astona = addAnimation("sleep",sleep1)
  astona.scale = 0.1
}

function draw() {
  background(background1);  
  drawSprites();
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    astona.addAnimation("bath",bath1)
    astona.changeAnimation("bath",bath1)
  }
}
function keyPressed(){
  if (keyCode === M_KEY){
    astona.addAnimation("move",move1)
    astona.changeAnimation("move",move1)
  }
}
function keyPressed(){
  if (keyCode === DOWN_KEY){
    astona.addAnimation("move",move1)
    astona.changeAnimation("move",move1)
  }
}
function keyPressed(){
  if (keyCode === RIGHT_KEY){
    astona.addAnimation("eating",eat)
    astona.changeAnimation("eating",eat)
  }
}
function keyPressed(){
  if (keyCode === UP_KEY){
    astona.addAnimation("brushing",brush)
    astona.changeAnimation("brushing",brush)
  }
}