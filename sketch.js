var box,box1,box2,box3;
var wall,wall1,wall2,wall3;
var car,car1,car2,car3;
var c,c1,c2,c3;
var cloud,cloud1,cloud2;
var cloud3,cloud4,cloud5;
var cloud6,cloud7,cloud8;
var star,star1,star2,star3;
var star4,star5,star6,star7;
var star8,star9,star10,star11;
var star12,star13,star14,star15;
var star16,star17,star17,star18;
var star19,star20,star21,star22;
var star23,star24,star25,star26;
var star27,star28,star29,star30,star31;
var grass,grass1,grass2,grass3,grass4,grass5,grass6,grass7,grass8,grass9,grass10,grass11,grass12,grass13,grass14,grass15,grass16;
var s,s1,s2,s3,s4,s5;
var a,a1,a2,a3,a4,a5,a6;

function setup() {
  createCanvas(600,852);
  box = createSprite(300,110,600,200);
  box.shapeColor="yellow";
  wall = createSprite(580,110,20,200);
  wall.shapeColor="brown";
  box1 = createSprite(300,320,600,200);
  box1.shapeColor = "fuchsia";
  wall1 = createSprite(20,320,20,200);
  wall1.shapeColor="brown";
  box2 = createSprite(300,530,600,200);
  box2.shapeColor="aqua";
  wall2 = createSprite(580,530,20,200);
  wall2.shapeColor="brown";
  box3 = createSprite(300,740,600,200);
  box3.shapeColor="lime"
  wall3 = createSprite(20,740,20,200);
  wall3.shapeColor="brown";

  car = createSprite(50,90,75,25);
  car.shapeColor="black";
  car.velocityX=7;
  car1 = createSprite(550,372,75,25);
  car1.shapeColor="navy";
  car2 = createSprite(50,580,75,25);
  car2.shapeColor="black";
  car3 = createSprite(550,750,75,25);
  car3.shapeColor="navy";

  c = createSprite(50,63,23,23);
  c.shapeColor="navy";
  c.velocityX=7;
  c1 = createSprite(550,345,23,23);
  c1.shapeColor="black";
  c2 = createSprite(50,553,23,23);
  c2.shapeColor="navy";
  c3 = createSprite(550,723,23,23);
  c3.shapeColor="black";

  cloud = createSprite(150,280,150,30);
  cloud.shapeColor='white';
  cloud1 = createSprite(149,260,75,30);
  cloud1.shapeColor="white";
  cloud2 = createSprite(150,245,30,40);
  cloud2.shapeColor="white";

  cloud3 = createSprite(310,275,100,20);
  cloud3.shapeColor='white';
  cloud4 = createSprite(310,260,50,20);
  cloud4.shapeColor="white";
  cloud5 = createSprite(310,245,20,20);
  cloud5.shapeColor="white";

  cloud6 = createSprite(470,280,150,30);
  cloud6.shapeColor='white';
  cloud7 = createSprite(469,260,75,30);
  cloud7.shapeColor="white";
  cloud8 = createSprite(470,245,30,40);
  cloud8.shapeColor="white";

  star = createSprite(50,450,15,15);
  star.shapeColor="blue";
  star1 = createSprite(30,470,15,15);
  star1.shapeColor="blue";
  star2 = createSprite(70,470,15,15);
  star2.shapeColor="blue";
  star3 = createSprite(50,490,15,15);
  star3.shapeColor="blue";

  star4 = createSprite(120,450,15,15);
  star4.shapeColor="blue";
  star5 = createSprite(100,470,15,15);
  star5.shapeColor="blue";
  star6 = createSprite(140,470,15,15);
  star6.shapeColor="blue";
  star7 = createSprite(120,490,15,15);
  star7.shapeColor="blue";

  star8 = createSprite(190,450,15,15);
  star8.shapeColor="blue";
  star9 = createSprite(170,470,15,15);
  star9.shapeColor="blue";
  star10 = createSprite(210,470,15,15);
  star10.shapeColor="blue";
  star11 = createSprite(190,490,15,15);
  star11.shapeColor="blue";  

  star12 = createSprite(260,450,15,15);
  star12.shapeColor="blue";
  star13 = createSprite(240,470,15,15);
  star13.shapeColor="blue";
  star14 = createSprite(280,470,15,15);
  star14.shapeColor="blue";
  star15 = createSprite(260,490,15,15);
  star15.shapeColor="blue";

  star16 = createSprite(330,450,15,15);
  star16.shapeColor="blue";
  star17 = createSprite(310,470,15,15);
  star17.shapeColor="blue";
  star18 = createSprite(350,470,15,15);
  star18.shapeColor="blue";
  star19 = createSprite(330,490,15,15);
  star19.shapeColor="blue";

  star20 = createSprite(400,450,15,15);
  star20.shapeColor="blue";
  star21 = createSprite(380,470,15,15);
  star21.shapeColor="blue";
  star22 = createSprite(420,470,15,15);
  star22.shapeColor="blue";
  star23 = createSprite(400,490,15,15);
  star23.shapeColor="blue";

  star24 = createSprite(470,450,15,15);
  star24.shapeColor="blue";
  star25 = createSprite(450,470,15,15);
  star25.shapeColor="blue";
  star26 = createSprite(490,470,15,15);
  star26.shapeColor="blue";
  star27 = createSprite(470,490,15,15);
  star27.shapeColor="blue";

  star28 = createSprite(540,450,15,15);
  star28.shapeColor="blue";
  star29 = createSprite(520,470,15,15);
  star29.shapeColor="blue";
  star30 = createSprite(560,470,15,15);
  star30.shapeColor="blue";
  star31 = createSprite(540,490,15,15);
  star31.shapeColor="blue";

  grass = createSprite(50,170,20,80);
  grass.shapeColor="green";
  grass1 = createSprite(25,185,20,50);
  grass1.shapeColor="green";
  grass2 = createSprite(75,185,20,50);
  grass2.shapeColor="green";

  grass3 = createSprite(150,176,20,70);
  grass3.shapeColor="green";
  grass4 = createSprite(125,190,20,40);
  grass4.shapeColor="green";
  grass5 = createSprite(175,190,20,40);
  grass5.shapeColor="green";

  grass6 = createSprite(250,165,20,90);
  grass6.shapeColor="green";
  grass7 = createSprite(225,180,20,60);
  grass7.shapeColor="green";
  grass8 = createSprite(275,180,20,60);
  grass8.shapeColor="green";

  grass9 = createSprite(350,170,20,80);
  grass9.shapeColor="green";
  grass10 = createSprite(325,185,20,50);
  grass10.shapeColor="green";
  grass11 = createSprite(375,185,20,50);
  grass11.shapeColor="green";

  grass12 = createSprite(450,176,20,70);
  grass12.shapeColor="green";
  grass13 = createSprite(425,190,20,40);
  grass13.shapeColor="green";
  grass14 = createSprite(475,190,20,40);
  grass14.shapeColor="green";

  grass15 = createSprite(550,165,20,90);
  grass15.shapeColor="green";
  grass16 = createSprite(525,180,20,60);
  grass16.shapeColor="green";

  a = createSprite(320,790,580,15);
  a.shapeColor="red";
  a1 = createSprite(320,805,580,15);
  a1.shapeColor="magenta";
  a2 = createSprite(320,820,580,15);
  a2.shapeColor="orange";
  a3 = createSprite(320,833,580,15);
  a3.shapeColor="yellow";

}

function draw() {
  background("black");  

  if(car.isTouching(wall)){
    car.velocityX=0;
    c.velocityX=0;

    car.shapeColor="red";
    c.shapeColor="red";

    car1.velocityX=-5;
    c1.velocityX=-5;
  }

  if(car1.isTouching(wall1)){
    car1.velocityX=0;
    c1.velocityX=0;

    car1.shapeColor="yellow";
    c1.shapeColor="yellow";

    car2.velocityX=3;
    c2.velocityX=3;
  }
  
  if(car2.isTouching(wall2)){
    car2.velocityX=0;
    c2.velocityX=0;

    car2.shapeColor="green";
    c2.shapeColor="green";

    car3.velocityX=-7;
    c3.velocityX=-7;
  }

  if(car3.isTouching(wall3)){
    car3.velocityX=0;
    c3.velocityX=0;

    car3.shapeColor="red";
    c3.shapeColor="red";
  }

  drawSprites();
}