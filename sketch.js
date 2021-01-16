function preload(){
tomHunting = loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
backgroundImg = loadImage("garden.png")
jerryLaughing = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png")
tomImg = loadAnimation("tomOne.png","tomTwo.png")
jerryImg = loadAnimation("jerryOne.png")
}
function setup(){
canvas = createCanvas(800,800)
background = createSprite(100,200,5000,7000)
background.addImage(backgroundImg)
background.scale = 3
tom = createSprite(550,550,90,90)
tom.shapeColor = "black";
tom.addAnimation("hunting",tomHunting)
tom.scale = 0.15
jerry = createSprite(250,550,80,80)
jerry.shapeColor= "brown";
jerry.addAnimation("laughing",jerryLaughing)
jerry.scale = 0.15;
}
function draw(){
tom.velocityX = 0;
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
tom.changeAnimation("stop",tomImg)
}
drawSprites();
}
function keyPressed(){
if(keyCode===LEFT_ARROW){
tom.velocityX=-5
}
if(keyCode===RIGHT_ARROW){
  tom.velocityX=5
  }
}