var gameState;

function setup(){
    canvas=createSprite(800,800);
    gameState="start";
}

function draw(){
    background("blue");
    
    if (gameState==="start"){
      play();
    }
  
    if (gameState==="page1"){
      page1();
    }

    if (gameState==="page2"){
      page2();
    }

    if (gameState==="page3"){
      page3();
    }

    if (gameState==="page4"){
      page4();
    }

    
    
    drawSprites();
}

function play(){
      background("red");
        textSize(30);
        fill(0);
        text("Get Ready For",90,120);

        textSize(30);
        fill(0);
        text("this EYE-Testing process!!",30,160);

        textSize(30);
        fill(0);
        text("Press UP Arrow Key To" ,35,250);

        textSize(30);
        fill(0);
        text("Move To Next Page" ,50,300);

        if(keyDown("UP_ARROW")){
          gameState="page1";
          console.log("check");
         }
        }

   function page1(){
     background("yellow");
     box1=createSprite(110,130,40,40);
  box1.shapeColor="red";

  box2=createSprite(110,190,40,40);
  box2.shapeColor="orange";

  box3=createSprite(110,250,40,40);
  box3.shapeColor="red";

  box4=createSprite(180,130,40,40);
  box4.shapeColor="red";

  box5=createSprite(180,190,40,40);
  box5.shapeColor="red";

  box6=createSprite(180,250,40,40);
  box6.shapeColor="red";

  box7=createSprite(250,130,40,40);
  box7.shapeColor="red";

  box8=createSprite(250,190,40,40);
  box8.shapeColor="red";

  box9=createSprite(250,250,40,40);
  box9.shapeColor="red";

     if(mousePressedOver(box2)){
       gameState="page2";
     }

   }   

   function page2(){
    background("cyan");
    box1=createSprite(110,130,40,40);
 box1.shapeColor="green";

 box2=createSprite(110,190,40,40);
 box2.shapeColor="green";

 box3=createSprite(110,250,40,40);
 box3.shapeColor="green";

 box4=createSprite(180,130,40,40);
 box4.shapeColor="green";

 box5=createSprite(180,190,40,40);
 box5.shapeColor="green";

 box6=createSprite(180,250,40,40);
 box6.shapeColor="green";

 box7=createSprite(250,130,40,40);
 box7.shapeColor="blue";

 box8=createSprite(250,190,40,40);
 box8.shapeColor="green";

 box9=createSprite(250,250,40,40);
 box9.shapeColor="green";
   
   if (mousePressedOver(box7)){
     gameState="page3";
     
   }
}

function page3(){
  background("pink");
  box1=createSprite(110,130,40,40);
  box1.shapeColor="orange";
 
  box2=createSprite(110,190,40,40);
  box2.shapeColor="orange";
 
  box3=createSprite(110,250,40,40);
  box3.shapeColor="orange";
 
  box4=createSprite(180,130,40,40);
  box4.shapeColor="orange";
 
  box5=createSprite(180,190,40,40);
  box5.shapeColor="orange";
 
  box6=createSprite(180,250,40,40);
  box6.shapeColor="orange";
 
  box7=createSprite(250,130,40,40);
  box7.shapeColor="orange";
 
  box8=createSprite(250,190,40,40);
  box8.shapeColor="orange";
 
  box9=createSprite(250,250,40,40);
  box9.shapeColor="#FF69B4"; 
  
  if (mousePressedOver(box9)){
    gameState="page4";
  }
}

function page4(){
  background("blue");
  box1=createSprite(110,130,40,40);
  box1.shapeColor="pink";
 
  box2=createSprite(110,190,40,40);
  box2.shapeColor="pink";
 
  box3=createSprite(110,250,40,40);
  box3.shapeColor="mustard";
 
  box4=createSprite(180,130,40,40);
  box4.shapeColor="pink";
 
  box5=createSprite(180,190,40,40);
  box5.shapeColor="pink";
 
  box6=createSprite(180,250,40,40);
  box6.shapeColor="pink";
 
  box7=createSprite(250,130,40,40);
  box7.shapeColor="pink";
 
  box8=createSprite(250,190,40,40);
  box8.shapeColor="pink";
 
  box9=createSprite(250,250,40,40);
  box9.shapeColor="pink";
 
}




