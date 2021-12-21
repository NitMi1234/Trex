var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;




function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
console.log(random(5,100))
console.log(Math.round(random(5,100)))
  
}

function draw() {
  background(180);
  
  
  //If key pressed trex jumps 
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  //gravity
  trex.velocityY = trex.velocityY + 0.8

  //ground infinite
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //so it doesnt go below ground
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  drawSprites();
}
           

//create function spawn clouds
function spawnClouds(){
  //creating clouds at a intervel of 60 fps
  //mod or modulus(%) is usec to find the remainder
  if(frameCount%60===0){
    cloud=createSprite(600,100)
    //add image to the cloud sprite
    cloud.addImage("cloud",cloudImage)
    cloud.velocityX = -4;
    //reduce the size of the clouds
    cloud.scale=0.5
    //make the y position random
    cloud.y=Math.round(random(5,100))
    //to make the trex ahead of the cloud
    trex.depth=cloud.depth
    trex.depth+=1

  }

  
}

