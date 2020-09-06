var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet.shapeColor = "white";
  bullet.stroke = "blue";
}

function draw() {
  background(0);
  bullet.velocityX=speed;
 
  function hasCollided(bullet,wall)
  {
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }
   if(hasCollided(bullet,wall))
   {
     bullet.velocity=0;
     var damage=0.5* weight * speed * speed/(thickness*thickness * thickness)
     if (damage>10)
     { 
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
  }