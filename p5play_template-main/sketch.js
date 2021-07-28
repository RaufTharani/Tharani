var ball;
function setup() {
  createCanvas(400,400);

   ball=createSprite(200,200,10,10)
   ball.shapeColor="red";
}

function draw() {
  
  background(0)
  if(keyIsDown(LEFT_ARROW)){
  background("yellow")
  }
drawSprites()
}




