var background, backgroundImg;
var laser, laserImg, laserGroup;
var spaceship, spaceshipImg;
var score;
var rock, rockImg, rocksGroup;

function preload() {
  backgroundImg = loadImage("universe0.png");
  laserImg = loadImage("laser0.png");
  spaceshipImg = loadImage("spaceship0.png");
  rockImg = loadImage("asteroid0.png");
}

function setup() {
  createCanvas(400, 400);
  
  // creating the background
  background = createSprite(0, 0, 400, 400);
  background.addImage(backgroundImg);
  background.scale = 2.5;
  
  // creating the spaceship
  spaceship = createSprite(200, 380, 60, 60);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 1;
  
  score = 0;
  rocksGroup = new Group();
  laserGroup = new Group();
}

function draw() {
  background(220);
  
  // moving spaceship
  if (keyDown("left")) {
    spaceship.x = spaceship.x - 2;
  }
  
  if (keyDown("right")) {
    spaceship.x = spaceship.x + 2;
  }
  
  if (keyDown("space")) {
    fire();
  }
  
  if (frameCount % 100 == 0) {
    
  }
  
  if (laserGroup.isTouching(rocksGroup)) {
    rocksGroup.destroyEach();
    laserGroup.destroyEach();
    score = score + 1;
  }
  
  drawSprites();
  
  fill(255, 255, 255);
  text("Score: " + score, 50, 50);
}

function spawnRocks() {
  rock = createSprite(Math.round(random(20, 370)), 0, 45, 45);
  rock.addImage(rockImg);
  rock.velocityY = 3;
  rock.lifetime = 150;
  rock.scale = 0.5;
  rocksGroup.add(rock);
}

function fire() {
  laser = createSprite(spaceship.x, 380, 10, 60);
  laser.addImage(laserImg);
  laser.velocityY = -4;
  laser.scale = 0.2;
  laserGroup.add(laser);
}