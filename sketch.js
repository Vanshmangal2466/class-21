var fixedRect1, movingRect;
var fixedRect2,fixedRect3,fixedRect4;
function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(500, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(400, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  fixedRect4 = createSprite(300, 400, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (vansh(movingRect,fixedRect1)){
  movingRect.shapeColor="blue";
  fixedRect1.shapeColor="blue";
}
  else if (vansh(movingRect,fixedRect2)){
    movingRect.shapeColor="blue";
    fixedRect2.shapeColor="blue";
  }
  else if (vansh(movingRect,fixedRect3)){
    movingRect.shapeColor="blue";
    fixedRect3.shapeColor="blue";
  }
  else if (vansh(movingRect,fixedRect4)){
    movingRect.shapeColor="blue";
    fixedRect4.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="red";
    fixedRect1.shapeColor="red";
    fixedRect2.shapeColor="red";
    fixedRect3.shapeColor="red";
    fixedRect4.shapeColor="red";

  }
  drawSprites();
}
function vansh(obj1,obj2){
if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2&&obj2.x-obj1.x < obj2.width/2 + obj1.width/2
    &&obj1.y - obj2.y< obj2.height/2 + obj1.height/2&&obj2.y-obj1.y< obj2.height/2 + obj1.height/2) {
    return true;
  }
  else {
return false;
  }

}