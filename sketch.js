var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

  thickness=random(28,83)

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0)

if(wall.x-bullet.x < bullet.width/2+wall.width/2){
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation >180){
  bullet.shapeColor=color(255,0,0);
}
if(deformation < 180 && deformation>100){
  bullet.shapeColor=color(230,230,0);
}
if(deformation < 100){
  bullet.shapeColor=color(0,255,0);
}
}
if(hasCollied(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}


if(damage<10){
  wall.shapeColor=color(0,255,0);
}


}
  drawSprites();
}

function hasCollied(lbullet,lwall){
bulletRightEdge=p1.x + p1.width;
wallLeftEdge=p2.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
else(){
  return false 
}

}









