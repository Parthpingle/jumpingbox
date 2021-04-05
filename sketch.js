var canvas,block1,block2,block3,block4,ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";
    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "blue";
    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "green";
    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "brown";
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "pink";
        music.play();
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "purple";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "orange";
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "black";
    }
    drawSprites();

    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
