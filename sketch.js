var path ,pathImage;
var jake, jake_running;
var invisibleBoundarary1, invisibleBoundarary2;
var coin1,coin2,coin4,coin5, coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15,coin16,coin17,coin18,coin19,coin20,coin21,coin22,coin23,coin24,coin25, coin26,coin27,coin28,coin29,coin30;
var score = (0);

function preload()
{
  pathImage = loadImage("path.png");
  jake_running = loadAnimation("jake1.png","jake4.png");
  coins = loadImage("coin.png");
}

function setup()
{
  createCanvas(400,600);

  //moving background
  path = createSprite(200,600);
  path.addImage(pathImage);
  path.velocityY = 6;
  
  jake = createSprite(150,560,20,20);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.5;
  jake.x = 150;

  //creating invisible boundaries
  invisibleBoundarary1 = createSprite(290,200,20,600);
  invisibleBoundarary1.visible = false;
  invisibleBoundarary2 = createSprite(200,200,20,600);
  invisibleBoundarary2.visible = false;

  //first row of coins
  coin1 = createSprite(25, 175, 50, 50);
  coin1.shapeColor="red";
  coin2 = createSprite(45, 185, 50, 50);
  coin2.shapeColor="blue";
  coin3 = createSprite(65, 195, 50, 50);
  coin3.shapeColor="red";
  coin4 = createSprite(85, 215, 50, 50);
  coin4.shapeColor="blue";
  coin5 = createSprite(105, 225, 50, 50);
  coin5.shapeColor="red";
  coin6 = createSprite(125, 235, 50, 50);
  coin6.shapeColor="blue";
  coin7 = createSprite(145, 245, 50, 50);
  coin7.shapeColor="red";
  coin8 = createSprite(165, 255, 50, 50);
  coin8.shapeColor="blue";
  coin9 = createSprite(185, 265, 50, 50);
  coin9.shapeColor="red";
  coin9 = createSprite(225, 275, 50, 50);
  coin9.shapeColor="red";
  coin10 = createSprite(245, 285, 50, 50);
  coin10.shapeColor="red";

//second row of coins
  coin11 = createSprite(265, 295, 50, 50);
  coin11.shapeColor="blue";
  coin12 = createSprite(285, 125, 50, 50);
  coin12.shapeColor="red";
  coin13 = createSprite(325, 135, 50, 50);
  coin13.shapeColor="blue";
  coin14 = createSprite(345, 145, 50, 50);
  coin14.shapeColor="red";
  coin15 = createSprite(365, 155, 50, 50);
  coin15.shapeColor="blue";
  coin16 = createSprite(375, 165, 50, 50);
  coin16.shapeColor="red";
  coin17 = createSprite(395, 175, 50, 50);
  coin17.shapeColor="red";
  coin18 = createSprite(425, 185, 50, 50);
  coin18.shapeColor="red";
  coin19 = createSprite(225, 195, 50, 50);
  coin19.shapeColor="red";  
  coin20 = createSprite(345, 215, 50, 50);
  coin20.shapeColor="red";

  //third row of coins
  coin21 = createSprite(25, 75, 50, 50);
  coin21.shapeColor="red";
  coin22 = createSprite(75, 75, 50, 50);
  coin22.shapeColor="blue";
  coin23 = createSprite(125, 75, 50, 50);
  coin23.shapeColor="red";
  coin24 = createSprite(175, 75, 50, 50);
  coin24.shapeColor="blue";
  coin25 = createSprite(225, 75, 50, 50);
  coin25.shapeColor="red";
  coin26 = createSprite(275, 75, 50, 50);
  coin26.shapeColor="blue";
  coin27 = createSprite(325, 75, 50, 50);
  coin27.shapeColor="red";
  coin28 = createSprite(375, 75, 50, 50);
  coin28.shapeColor="blue";
  coin29 = createSprite(375, 125, 50, 50);
  coin29.shapeColor="red";
  coin29 = createSprite(375, 125, 50, 50);
  coin29.shapeColor="red";
  coin30 = createSprite(375, 125, 50, 50);
  coin30.shapeColor="red";

}

function draw() 
{
 background(220);

    //code to reset the background
    if(path.y > 400)
     {
        path.y = height/2;
     }

    //Moving the jake with mouse along the x-axis
    jake.x=World.mouseX;

    jake.collide(invisibleBoundarary1);
    jake.collide(invisibleBoundarary2);

    //destroy the coins when ball touches them
    if(jake.isTouching(coin1))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin2))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin3))
    {
       jake.destroy();
       score = score+1;
    }

    if(jake.isTouching(coin4))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin5))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin6))
    {
       jake.destroy();
       score = score+1;
    } 
    
    if(jake.isTouching(coin7))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin8))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin9))
    {
       jake.destroy();
       score = score+1;
    }

    if(jake.isTouching(coin10))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin11))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin12))
    {
       jake.destroy();
       score = score+1;
    } 

    if(jake.isTouching(coin13))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin14))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin15))
    {
       jake.destroy();
       score = score+1;
    }

    if(jake.isTouching(coin16))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin17))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin18))
    {
       jake.destroy();
       score = score+1;
    } 
    
    if(jake.isTouching(coin19))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin20))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin21))
    {
       jake.destroy();
       score = score+1;
    }

    if(jake.isTouching(coin22))
    {
       jake.destroy();
       score = score+1;
    }
    
    if(jake.isTouching(coin23))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin24))
    {
       jake.destroy();
       score = score+1;
    } 

    if(jake.isTouching(coin25))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin26))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin27))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin28))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin29))
    {
      jake.destroy();
      score = score+1;
    }

    if(jake.isTouching(coin30))
    {
      jake.destroy();
      score = score+1;
    }

  drawSprites();

    stroke("yellow");
    text("score : " + score,120,130);
    textSize(125);
    fill("yellow");

}
  
