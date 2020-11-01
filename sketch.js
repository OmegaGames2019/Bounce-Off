var fixedRect, movingRect, fixedRect1, movingRect1, thing1,thing2,thing3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  thing1 = createSprite(200, 100, 50, 80);
  thing1.shapeColor = "red";
  thing1.debug = true;

  thing2 = createSprite(200, 400, 50, 80);
  thing2.shapeColor = "red";
  thing2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  thing1.velocityY = 5;
  thing2.velocityY = -5;

}

function draw() {
  background(0,0,0);  
  
  bounceOff(fixedRect, movingRect);
  
  bounceOff(thing1,thing2);

  drawSprites();
}

function bounceOff(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) {
  //&& object3.y - object4.y < object4.height/2 + object3.height/2
  //&& object4.y - object3.y < object4.height/2 + object3.height/2)  {
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
    //object3.velocityY = object1.velocityY * (-1);
    //object4.velocityY = object2.velocityY * (-1);
  }
}