

var balloon;
var bg,baballoonImage1,balloonImage2;
var database;
var balloonPosition;
var position;
function preload()

{
  bg =loadImage("cityImage.png");
  balloonImage1=loadAnimation("hotairballoon1.png");
  balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
  "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
  "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1500,700);
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;


balloonPosition= database.ref('balloon/height');
  balloonPosition.on("value", readPosition, showError);
}

function draw() {
  background(bg); 
  
  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    
   // balloon.x=balloon.x-10;
    writePosition(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    //balloon.x=balloon.x+10;
    writePosition(+10,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    //balloon.y=balloon.y-10;
    writePosition(0,-10);
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down 
    //balloon.y=balloon.y+10;
    writePosition(0,+10);
  }
  drawSprites();
}

function readPosition(data)
  { position= data.val();
  balloon.x= position.x;
  balloon.y= position.y;
}

function writePosition(x,y)
{
  database.ref('balloon/height').set({

    'x': position.x +x,
    'y': position.y+y
  })
}

function showError()
{
  console.log("error");
}