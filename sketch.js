var box;

function setup() {
  createCanvas(400,400);
  box = createSprite (100,200.100,10,10)
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 10
  }
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 10
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 10
  }
drawSprites ()
}




