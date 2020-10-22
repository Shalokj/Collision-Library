var fixedRect, movingRect,Rect1,Rect2,Rect3,Rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

Rect1=createSprite(100,100,30,30);
Rect1.shapeColor="blue";
Rect2=createSprite(200,100,30,30);
Rect2.shapeColor="blue";
Rect3=createSprite(300,100,30,30);
Rect3.shapeColor="blue";
Rect4=createSprite(400,100,30,30);
Rect4.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,Rect3))
{
movingRect.shapeColor="red";
Rect3.shapeColor="red";

}
else{
movingRect.shapeColor="blue";
Rect3.shapeColor="blue";
}


  
  drawSprites();

}




