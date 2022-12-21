var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rabbit, rabbitImg
let rabbitEating, rabbitEatingImg

var wall1, wall2, wall3, wall4, wallImg

let frame, frameImg

var foodImg, food

let backgroundImg, background1;

var score;
var gameOverImg, restartImg
var jumpSound, checkPointSound, dieSound

function preload() {
  snakeImg = loadImage('rabbit.png')
  foodImg = loadImage('carrot.png')
  rabbitEatingImg = loadImage('rabbitEating.png')
  wallImg = loadImage('wall.png')
  frameImg = loadImage('frame.png')
}

function setup() {
  createCanvas(1000, 1000);

  rabbit = createSprite(500, 500)
  rabbit.addImage(snakeImg)
  rabbit.scale = 0.3

  food = createSprite(300, 400)
  food.addImage(foodImg)
  food.scale = .09

  frame = createSprite(500, 500)
  frame.addImage(frameImg)
  frame.scale = 2.7

  wall1 = createSprite(500, 1120)
  wall1.addImage(wallImg)
  wall1.scale = 5

  wall2 = createSprite(500, -117)
  wall2.addImage(wallImg)
  wall2.scale = 5

  /*wall3 = createSprite(500,1100)
  wall3.addImage(wallImg)
  wall3.scale = 5

  wall4 = createSprite(500,1100)
  wall4.addImage(wallImg)
  wall4.scale = 5*/

}

function draw() {
  background('black')

  snakeControls()

  //spawnObstacle()

  if (rabbit.isTouching(food)) {
    food.visible = false
  }


  drawSprites()
}

function reset() {


}

function snakeControls() {
  if (keyIsDown(DOWN_ARROW)) {
    rabbit.velocityY = 2
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rabbit.velocityX = 2
  }

  if (keyIsDown(LEFT_ARROW)) {
    rabbit.velocityX = -2
  }

  if (keyIsDown(UP_ARROW)) {
    rabbit.velocityY = -2
  }
}

/*function spawnObstacle() {
  if (frameCount % 10 === 0) {
    food = Math.round(random(100, 900))
  }
  //if (food.visible = false) {
  //food.x = Math.round(random(100, 900))
  //}*/

function end(){ 
  /*wall1.remove()
  wall2.remove()
  frame.remove()
  rabbit.remove()*/
  swal({
    title: `Game Over`,
    text: "Oops you lost the game ....!!",
    imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks for Playing"
  })


}

function play(){

}
