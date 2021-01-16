
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8 , wall9 ,wall10 , wall11 ,wall12,wall13
  var wall14 , wall15 ,wall16,wall17 ,wall18 , wall19 ,wall20 ,wall21,wall22,wall23
,wall24,wall25,wall26,wall27,wall28;
var wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,
wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54,wall55,wall56,
wall57 ,wall58 ,wall59;

var wallImg ;
var wallImg2;
var wallImg3;
var wallImg4 ,wallImg5,wallImg6 ,wallImg7,wallImg8 ,wallImg9 ;


 var human ,humanImg ,righthumanImg;
 var door , doorImg;
 var corona ,coronaImg;
 var corona2 ,coroonaImg;
 var corona3 ,corona3Img;
 var corona4 , corona5 ,corona6  ,corona7 ,corona8,corona9,corona10,corona11,corona12,corona13,corona14,
 corona15,corona16,corona17,corona18,corona19,corona20,corona21;
  var coronaaImg;

 
 var blackImg;
 var barrierImg ,barrierImg1;

 var GameOver ,Restart, Winner,
  GameOverImg ,RestartImg ,WinnerImg;

 //creating some attractive things
 var handwash ,handwashImg;
 var gloves ,glovesImg;
 var mask ,maskImg;
 
 var blackboard;

 var dot1,dot2,dot3,dot4,dot5,dot6,dot7,dot8,dot9,dot10,dot11,dot12,dot13,dot14,dot15,dot16,dot17,dot18,
 dot19,dot20,dot21,dot22,dot23,dot24,dot25,dot26,dot27,dot28,dot29,dot30;
 var dotImg;


 var dotSound;
 var doorSound;
 var glovesSound;
 var Sound3;
 var sound4;
 var sound5;
 var sound6;
 var sound7;
 var sound8;
 var sound9;



 //////////var sound6;
 var score=0;
 var lifes = 3;
 var gameState = "start";

function preload(){
  wallImg = loadImage("wallphoto.png");
  wallImg2 = loadImage("painting.png");
  wallImg3 = loadImage("wallphoto.png");
  wallImg4 = loadImage("paint.png");
  wallImg5 = loadImage("wallstick.png");
  wallImg6 = loadImage("wallstick1.png");
  wallImg7 = loadImage("wallstick2.png");
  wallImg8 = loadImage("wallstick3.png");
  wallImg9 = loadImage("stick4.png");
  barrierImg1 = loadImage("barrier2.png");


  humanImg = loadAnimation("boy1.png","boy2.png")
   doorImg = loadImage("castle2.png");
   coronaImg = loadImage("corona.png")
   coroonaImg = loadImage("coroona.png");
   corona3Img = loadImage("corona3.png");
   coronaaImg = loadImage("coronaa.png");
   blackImg = loadImage("blackdoor.png");
  


   barrierImg = loadImage("barrier1.png");

   //loading for attractive things 
   handwashImg=loadImage("handwash.png");
   glovesImg=loadImage("gloves.png");
   maskImg=loadImage("mask.png");
  //dots
  dotImg=loadImage("dot.png");

  //gameover,restart,winner
  GameOverImg  = loadImage("gameover1.png");
  RestartImg= loadImage("RESTART.png");
  WinnerImg = loadImage("winner.png");

  dotSound = loadSound("switchy2.mp3");
  doorSound = loadSound("sunrise.mp3");
  glovesSound = loadSound("swing.mp3");

  Sound3 = loadSound("saying.mp3");
  sound4 = loadSound("no.mp3");
  sound5 = loadSound("oh.mp3");
  sound6 = loadSound("aaaa.mp3");
  sound7 = loadSound("win.mp3");
  sound8 = loadSound("plz.mp3");
  sound9 = loadSound("your.mp3");


}

function setup() {
  createCanvas(3200,605);

 // player = new Player();
  //SCORE 
  score = 0;
  textSize(40);
  fill("yellow");
  textStyle(BOLD);
//// LIFES;
   lifes = 3;
  textSize(30);
  fill("yellow");
  textStyle(BOLD);
  

  // the wall 1 at which human stand as game start.....
   wall1 =createSprite(0,80,120,30);
   wall1.addImage(wallImg);
   wall1.scale=0.1;
 // collision for 1 barrier(on 98 line)
   wall53 =createSprite(180,10,80,30);
   wall53.shapeColor="black";
  
  // the second wall from the lhs  of the screen (from the start pt).........
   wall2 =createSprite(70,200,290,50);
   wall2.addImage(wallImg);
   wall2.scale=0.1;

   //dot1 and do2
   dot1 =createSprite(20,170,290,50);
   dot1.addImage(dotImg);
   dot1.scale=0.2;
   dot2 =createSprite(70,170,290,50);
   dot2.addImage(dotImg);
   dot2.scale=0.2;

  // the 3rd wall from the lhs of the screen (fr the starting pt)..
   wall3 =createSprite(70,400,315,50);
   wall3.addImage(wallImg3);
   wall3.scale=0.1;

   //collide wall for corona 
    wall50 = createSprite(138,374,20,20);
    wall50.shapeColor="black";
    wall59 = createSprite(-20,374,20,20);
    wall59.shapeColor="black";

    // create corona before collide wall
    corona18 = createSprite(70,370,20,20);
    corona18.addImage(corona3Img);
     corona18.scale=0.1;
     corona18.velocityX= 1;


  //  beside the (2nd)3rd wall fr lhs (fr staring pt)......
   wall4 =createSprite(160,100,50,90);
   wall4.addImage(barrierImg);
   wall4.scale=0.1;
   wall4.velocityY= 3;

  // beside the (3Rd)3rd wall fr lhs (fr staring pt)...
   wall5 =createSprite(240,380,100,50);
   wall5.addImage(wallImg3);
   wall5.scale=0.1;
  //beside the (2Nd)sec wall fr the lhs of the screen(fr the starting pt);
   wall6 =createSprite(245,200,80,50);
   wall6.addImage(wallImg2);
   wall6.scale=0.2;
  // the fourth wall from the lhs of the screen (fr starting pt)..................
    wall7 = createSprite(30,580,250,50);
    wall7.addImage(wallImg);
    wall7.scale=0.1;

    //mask 
    mask = createSprite(30,540,30,30);
    mask.addImage(maskImg);
    mask.scale=0.2;

    blackboard = createSprite(80,495,10,130);
    blackboard.shapeColor="black";

    corona = createSprite(130,590,80,50);
    corona.addImage(coronaaImg);
    corona.scale=0.2;

  // beside (3rd postion)fourth wall on the screen (after corona on rhs)......
    wall8 = createSprite(220,580,80,50);
    wall8.addImage(wallImg4);
    wall8.scale=0.1;

    //dot3
    dot3 =createSprite(220,550,80,50);
    dot3.addImage(dotImg);
    dot3.scale=0.2;

    dot4 =createSprite(220,530,80,50);
    dot4.addImage(dotImg);
    dot4.scale=0.2;

    dot5 =createSprite(220,490,80,50);
    dot5.addImage(dotImg);
    dot5.scale=0.2;

   //create a human 
   human = createSprite(22,70,40,40);
   human.addAnimation("human",humanImg);
   human.scale=0.1;
   

      // 1st row (2Nd wall on rhs );
        wall9 = createSprite(460,80,180,30);
        wall9.addImage(wallImg);
        wall9.scale=0.1;


      // 3rd row (5th wall on rhs) after 4 wall from lhs;
        wall10 = createSprite(460,340,230,50);
        wall10.addImage(wallImg);
        wall10.scale=0.2;

      // 3rd row (4th position)
        wall11 = createSprite(320,340,30,100);
        wall11.addImage(barrierImg1);
        wall11.scale=0.2;
        wall11.velocityY= -5;

         // collision for 2 barrier(on 150 line)
         wall54 =createSprite(320,10,50,30);
         wall54.shapeColor="black";
         

        // 4th row (5th postion)..... fr lhs to rhs
        wall12 = createSprite(480,580,250,50);
        wall12.shapeColor= "blue";

        //dot6 and dot7
        dot6 =createSprite(480,540,80,50);
        dot6.addImage(dotImg);
        dot6.scale=0.2;

        dot7=createSprite(450,540,80,50);
        dot7.addImage(dotImg);
        dot7.scale=0.2;

        // created second corona on 4th row;
        corona2 = createSprite(317,580,60,50);
        corona2.addImage(coroonaImg);
        corona2.scale=0.2;

        // 3rd row (6th position above the 5th wall at 3rd row).........
        wall13 = createSprite(360,300,50,50);
        wall13.addImage(wallImg2);
        wall13.scale=0.1;


        // 2nd row (3Rd position)......
        wall14 = createSprite(530,200,400,30);
        wall14.addImage(wallImg7);
        wall14.scale=0.2;

        // 3rd row (7th position above the 5th wall at 3rd roww).........
        wall15 = createSprite(475,300,50,50);
        wall15.addImage(wallImg2);
        wall15.scale=0.1;

        // 3rd row (8th position above the 5th wall at 3rd roww).........
         wall16 = createSprite(590,300,70,30);
         wall16.addImage(wallImg2);
         wall16.scale=0.1;


        // created a corona3 (above the 3Rd wall (of 2nd row))....
         corona3 = createSprite(630,140,50,30);
         corona3.addImage(corona3Img);
          corona3.scale=0.2;
          corona3.velocityX = 1;
        //// 2nd row (5th position)......
        wall17 = createSprite(855,200,420,30); 
        wall17.addImage(wallImg7);
        wall17.scale=0.3;
        //wall17.velocityY=1;
        
        //dot11 and12 and 13 and 14
        dot11=createSprite(450,145,20,50);
        dot11.addImage(dotImg);
        dot11.scale=0.2;
        //dot12
        dot12=createSprite(480,145,20,50);
        dot12.addImage(dotImg);
        dot12.scale=0.2;

        //dot13
        dot13=createSprite(480,50,20,50);
        dot13.addImage(dotImg);
        dot13.scale=0.2;
        //dot14
        dot14=createSprite(420,50,20,50);
        dot14.addImage(dotImg);
        dot14.scale=0.2;
        //dot15
        dot15=createSprite(450,50,20,50);
        dot15.addImage(dotImg);
        dot15.scale=0.2;
        //dot16
        dot16=createSprite(450,165,20,50);
        dot16.addImage(dotImg);
        dot16.scale=0.2;
        //dot17
        dot17=createSprite(480,165,20,50);
        dot17.addImage(dotImg);
        dot17.scale=0.2;

        //dot18
        dot18=createSprite(480,270,20,50);
        dot18.addImage(dotImg);
        dot18.scale=0.2;
        //dot19
        dot19=createSprite(530,270,20,50);
        dot19.addImage(dotImg);
        dot19.scale=0.2;
        
        //dot20
        dot20=createSprite(590,270,20,50);
        dot20.addImage(dotImg);
        dot20.scale=0.2;

        //dot21
        dot21=createSprite(800,330,20,50);
        dot21.addImage(dotImg);
        dot21.scale=0.2;

          //dot22
          dot22=createSprite(850,330,20,50);
          dot22.addImage(dotImg);
          dot22.scale=0.2;

            //dot23
            dot23=createSprite(880,330,20,50);
            dot23.addImage(dotImg);
            dot23.scale=0.2;

              //dot24
              dot24=createSprite(900,330,20,50);
              dot24.addImage(dotImg);
              dot24.scale=0.2;

               //dot25
               dot25=createSprite(930,330,20,50);
               dot25.addImage(dotImg);
               dot25.scale=0.2;
                 //dot26
                 dot26=createSprite(950,330,20,50);
                 dot26.addImage(dotImg);
                 dot26.scale=0.2;
                 //dot27
                 dot27=createSprite(980,330,20,50);
                 dot27.addImage(dotImg);
                 dot27.scale=0.2;
                  //dot28
                  dot28=createSprite(1000,330,20,50);
                  dot28.addImage(dotImg);
                  dot28.scale=0.2;

                    //dot29
                    dot29=createSprite(1030,330,20,50);
                    dot29.addImage(dotImg);
                    dot29.scale=0.2;
                      //dot30
                      dot30=createSprite(1110,290,20,50);
                      dot30.addImage(dotImg);
                      dot30.scale=0.2;
                       //dot31
                       dot31=createSprite(1180,290,20,50);
                       dot31.addImage(dotImg);
                       dot31.scale=0.2;
                         //dot32
                         dot32=createSprite(1250,400,20,50);
                         dot32.addImage(dotImg);
                         dot32.scale=0.2;

                          //dot33
                          dot33=createSprite(1440,360,20,50);
                          dot33.addImage(dotImg);
                          dot33.scale=0.2;

                          //dot34
                          dot34=createSprite(1550,300,20,50);
                          dot34.addImage(dotImg);
                          dot34.scale=0.2;
             //dot35
             dot35=createSprite(1550,280,20,50);
             dot35.addImage(dotImg);
             dot35.scale=0.2;
             //dot36
             dot36=createSprite(1700,230,20,50);
             dot36.addImage(dotImg);
             dot36.scale=0.2;
             //dot37
             dot37=createSprite(1850,230,20,50);
             dot37.addImage(dotImg);
             dot37.scale=0.2;
               //dot38
               dot38=createSprite(1790,150,20,50);
               dot38.addImage(dotImg);
               dot38.scale=0.2;
                 //dot39
                 dot39=createSprite(1792,130,20,50);
                 dot39.addImage(dotImg);
                 dot39.scale=0.2;
                  //dot40
                  dot40=createSprite(1794,90,20,50);
                  dot40.addImage(dotImg);
                  dot40.scale=0.2;

                          //dot41
                            dot41=createSprite(2000,270,20,50);
                            dot41.addImage(dotImg);
                            dot41.scale=0.2;
                             //dot42
                             dot42=createSprite(2155,150,20,50);
                             dot42.addImage(dotImg);
                             dot42.scale=0.2;
                              //dot43
                              dot43=createSprite(2280,150,20,50);
                              dot43.addImage(dotImg);
                              dot43.scale=0.2;
                               //dot44
                               dot44=createSprite(2310,150,20,50);
                               dot44.addImage(dotImg);
                               dot44.scale=0.2;
                          //dot45
                          dot45=createSprite(2310,480,20,50);
                          dot45.addImage(dotImg);
                          dot45.scale=0.2;
                              //dot46
                              dot46=createSprite(2310,500,20,50);
                              dot46.addImage(dotImg);
                              dot46.scale=0.2;
                              //dot47
                              dot47=createSprite(2280,480,20,50);
                              dot47.addImage(dotImg);
                              dot47.scale=0.2;
                              //dot48
                              dot48=createSprite(2280,500,20,50);
                              dot48.addImage(dotImg);
                              dot48.scale=0.2;
                              //dot49 
                              dot49=createSprite(2180,480,20,50);
                              dot49.addImage(dotImg);
                              dot49.scale=0.2;
                               //dot50
                               dot50=createSprite(2180,500,20,50);
                               dot50.addImage(dotImg);
                               dot50.scale=0.2;
                               //dot51
                               dot51=createSprite(2210,480,20,50);
                               dot51.addImage(dotImg);
                               dot51.scale=0.2;
                                //dot52
                                dot52=createSprite(2210,500,20,50);
                                dot52.addImage(dotImg);
                                dot52.scale=0.2;
                                  //dot53
                                  dot53=createSprite(2230,480,20,50);
                                  dot53.addImage(dotImg);
                                  dot53.scale=0.2;
                                   //dot54
                                   dot54=createSprite(2230,500,20,50);
                                   dot54.addImage(dotImg);
                                   dot54.scale=0.2;
                                    //dot55
                                  dot55=createSprite(2255,480,20,50);
                                  dot55.addImage(dotImg);
                                  dot55.scale=0.2;
                                    //dot56
                                    dot56=createSprite(2255,500,20,50);
                                    dot56.addImage(dotImg);
                                    dot56.scale=0.2;
        //dot57
        dot57=createSprite(2390,450,20,50);
        dot57.addImage(dotImg);
        dot57.scale=0.2;
        //dot58
        dot58=createSprite(2410,450,20,50);
        dot58.addImage(dotImg);
        dot58.scale=0.2;
         //dot59
         dot59=createSprite(2430,450,20,50);
         dot59.addImage(dotImg);
         dot59.scale=0.2;
         //dot60
         dot60=createSprite(2500,420,20,50);
         dot60.addImage(dotImg);
         dot60.scale=0.2;
           //dot61
           dot61=createSprite(2635,400,20,50);
           dot61.addImage(dotImg);
           dot61.scale=0.2;
             //dot62
             dot62=createSprite(2750,400,20,50);
             dot62.addImage(dotImg);
             dot62.scale=0.2;
              //dot63
              dot63=createSprite(3000,430,20,50);
              dot63.addImage(dotImg);
              dot63.scale=0.2;
               //dot64
               dot64=createSprite(2970,430,20,50);
               dot64.addImage(dotImg);
               dot64.scale=0.2;
                //dot65
                dot65=createSprite(2950,430,20,50);
                dot65.addImage(dotImg);
                dot65.scale=0.2;
                 //dot66
                 dot66=createSprite(2930,430,20,50);
                 dot66.addImage(dotImg);
                 dot66.scale=0.2;
                    //dot67
                    dot67=createSprite(3030,430,20,50);
                    dot67.addImage(dotImg);
                    dot67.scale=0.2;
                      //dot68
                      dot68=createSprite(3050,430,20,50);
                      dot68.addImage(dotImg);
                      dot68.scale=0.2;
                       //dot69
                       dot69=createSprite(3070,430,20,50);
                       dot69.addImage(dotImg);
                       dot69.scale=0.2;
                       //dot70
                       dot70=createSprite(3080,430,20,50);
                       dot70.addImage(dotImg);
                       dot70.scale=0.2;
                        //dot71
                        dot71=createSprite(3098,430,20,50);
                        dot71.addImage(dotImg);
                        dot71.scale=0.2;
                   //dot72
                   dot72=createSprite(3098,530,20,50);
                   dot72.addImage(dotImg);
                   dot72.scale=0.2;
                   //dot73
                   dot73=createSprite(3080,530,20,50);
                   dot73.addImage(dotImg);
                   dot73.scale=0.2;
                    //dot74
                    dot74=createSprite(3060,530,20,50);
                    dot74.addImage(dotImg);
                    dot74.scale=0.2;
                       //dot75
                       dot75=createSprite(3040,530,20,50);
                       dot75.addImage(dotImg);
                       dot75.scale=0.2;
                       //dot76
                       dot76=createSprite(3020,530,20,50);
                       dot76.addImage(dotImg);
                       dot76.scale=0.2;
                       //dot77
                       dot77=createSprite(3000,530,20,50);
                       dot77.addImage(dotImg);
                       dot77.scale=0.2;
                       //dot78
                       dot78=createSprite(1098,530,20,50);
                       dot78.addImage(dotImg);
                       dot78.scale=0.2;
                       //dot79
                       dot79=createSprite(1080,530,20,50);
                       dot79.addImage(dotImg);
                       dot79.scale=0.2;
                       //dot80
                       dot80=createSprite(1060,530,20,50);
                       dot80.addImage(dotImg);
                       dot80.scale=0.2;
                       //dot81
                       dot81=createSprite(1040,530,20,50);
                       dot81.addImage(dotImg);
                       dot81.scale=0.2;
                       //dot82
                       dot82=createSprite(1020,530,20,50);
                       dot82.addImage(dotImg);
                       dot82.scale=0.2;
                       //dot83
                       dot83=createSprite(1000,530,20,50);
                       dot83.addImage(dotImg);
                       dot83.scale=0.2;
                        //dot84
                        dot84=createSprite(1120,530,20,50);
                        dot84.addImage(dotImg);
                        dot84.scale=0.2;
                         //dot85
                       dot85=createSprite(1140,530,20,50);
                       dot85.addImage(dotImg);
                       dot85.scale=0.2;
                        //dot86
                        dot86=createSprite(1160,530,20,50);
                        dot86.addImage(dotImg);
                        dot86.scale=0.2;
                         //dot87
                       dot87=createSprite(1180,530,20,50);
                       dot87.addImage(dotImg);
                       dot87.scale=0.2;

                        //dot88
                        dot88=createSprite(1200,530,20,50);
                        dot88.addImage(dotImg);
                        dot88.scale=0.2;
                         //dot89
                       dot89=createSprite(1220,530,20,50);
                       dot89.addImage(dotImg);
                       dot89.scale=0.2;
                       //dot90
                       dot90=createSprite(1240,530,20,50);
                       dot90.addImage(dotImg);
                       dot90.scale=0.2;
                        //dot91
                        dot91=createSprite(1260,530,20,50);
                        dot91.addImage(dotImg);
                        dot91.scale=0.2;
                         //dot92
                       dot92=createSprite(1280,530,20,50);
                       dot92.addImage(dotImg);
                       dot92.scale=0.2;
                        //dot93
                        dot93=createSprite(1300,530,20,50);
                        dot93.addImage(dotImg);
                        dot93.scale=0.2;
                         //dot94
                       dot94=createSprite(1380,530,20,50);
                       dot94.addImage(dotImg);
                       dot94.scale=0.2;
                         //dot95
                         dot95=createSprite(1400,530,20,50);
                         dot95.addImage(dotImg);
                         dot95.scale=0.2;
                           //dot96
                       dot96=createSprite(1420,530,20,50);
                       dot96.addImage(dotImg);
                       dot96.scale=0.2;
                         //dot97
                         dot97=createSprite(1440,530,20,50);
                         dot97.addImage(dotImg);
                         dot97.scale=0.2;
                           //dot98
                       dot98=createSprite(1460,530,20,50);
                       dot98.addImage(dotImg);
                       dot98.scale=0.2;
                           //dot99
                           dot99=createSprite(1500,530,20,50);
                           dot99.addImage(dotImg);
                           dot99.scale=0.2;   
                            //dot100
                           dot100=createSprite(1520,530,20,50);
                           dot100.addImage(dotImg);
                           dot100.scale=0.2;    
                           //dot101
                           dot101=createSprite(1540,530,20,50);
                           dot101.addImage(dotImg);
                           dot101.scale=0.2;   
                            //dot102
                           dot102=createSprite(1560,530,20,50);
                           dot102.addImage(dotImg);
                           dot102.scale=0.2;

                               //dot103
                               dot103=createSprite(1800,530,20,50);
                               dot103.addImage(dotImg);
                               dot103.scale=0.2;
                          //dot104
                           dot104=createSprite(1820,530,20,50);
                           dot104.addImage(dotImg);
                           dot104.scale=0.2;
                               //dot105
                               dot105=createSprite(1840,530,20,50);
                               dot105.addImage(dotImg);
                               dot105.scale=0.2;
                                   //dot106
                                  dot106=createSprite(1880,530,20,50);
                                  dot106.addImage(dotImg);
                                  dot106.scale=0.2;
                                   //dot107
                                   dot107=createSprite(1900,530,20,50);
                                   dot107.addImage(dotImg);
                                   dot107.scale=0.2;

                                   //CREATE CORONA 19
                                   corona19=createSprite(1980,530,20,50);
                                   corona19.addImage(corona3Img);
                                   corona19.scale=0.2;
                                   corona19.velocityX= -2;

                        // 4th row (after 5th wall (a  new wall))......
                          wall21 = createSprite(880,540,80,50);
                          wall21.addImage(wallImg2);
                          wall21.scale=0.2;


                          //CREATE CORONA20
                          corona20=createSprite(500,540,20,50);
                          corona20.addImage(coronaImg);
                          corona20.scale=0.1;
                          corona20.velocityX= -2;

        //2nd row (6th position)......
        corona4 = createSprite(880,135,50,30);
        corona4.addImage(coronaImg);
        corona4.scale=0.2;
        corona4.velocityX= -1;

        //collide wall for corona3 and 3
        wall51= createSprite(1050,130,20,50);
        wall51.shapeColor="black";
        wall52 = createSprite(420,145,20,50);
        wall52.shapeColor="black";


        // 3rd row (9th position in the 3rd roww).........
        wall18 = createSprite(920,380,300,50);
        wall18.addImage(wallImg7);
         wall18.scale=0.3;
        //  4th row ( above the 5th wall (6th position))..... fr lhs to rhs
        wall19 = createSprite(680,450,50,50);
        wall19.addImage(wallImg2);
        wall19.scale=0.1;

        //dot 8
        
        dot8=createSprite(680,430,80,50);
        dot8.addImage(dotImg);
        dot8.scale=0.2;

       //  4th row ( above the 5th wall (7th position))..... fr lhs to rhs
        wall20 = createSprite(550,500,50,50);
        wall20.addImage(wallImg2);
        wall20.scale=0.1;
    
      // 4th row (after the a new wall (attached to 5th wall))......
        wall22 =  createSprite(1240,580,1650,50);
        wall22.shapeColor= "blue";
               //wall22.velocityY= -1;

        //dot9 and 10
         dot9=createSprite(780,540,80,50);
         dot9.addImage(dotImg);
         dot9.scale=0.2;
         dot10=createSprite(740,540,80,50);
         dot10.addImage(dotImg);
         dot10.scale=0.2;
      // 3rd row (10th position in the 3rd roww (attached to 9th wall of 3rd row))....
        wall23 =  createSprite(1120,350,100,50);
        wall23.addImage(wallImg2);
        wall23.scale=0.2;

      //3rd row (11th position in the 3rd roww (below(but not exactly) 10th wall of 3rd row)).
        wall24 =  createSprite(1259,440,100,50);
        wall24.addImage(wallImg2);
        wall24.scale=0.2;

      // 3rd row (12 th position in 3rd row).....
        wall25 =  createSprite(1440,400,80,40);
        wall25.addImage(wallImg2);
        wall25.scale=0.2;

      // 3rd row (13 th position in 3rd row).....(above(bt nt exactly (12th wall)))
        wall26 =  createSprite(1550,340,80,40);
        wall26.addImage(wallImg2);
        wall26.scale=0.2;
      // 3rd row (14th position in 3rd row).....(above(bt nt exactly (12th wall))....
        wall27 =  createSprite(1700,270,150,40);
        wall27.addImage(wallImg);
        wall27.scale=0.1;
      // 3rd row (15th position in 3rd row)....
        wall28 =  createSprite(1850,270,80,40);
        wall28.addImage(wallImg);
        wall28.scale=0.1;
        // 3rd row (16th position in 3rd row (btwn 14th and 15 th wall))....
        wall29=  createSprite(1800,180,80,20);
         wall29.shapeColor="blue";
        //3rd row (17th position in 3rd row(below the16th(as abarrier) ))....
        wall30=  createSprite(1775,260,30,80);
        wall30.addImage(barrierImg1);
        wall30.scale=0.2;
        wall30.velocityY=2;

        //3rd row (18th position (just after 17 th wall))....
        wall31 = createSprite(2000,320,145,40);
        wall31.addImage(wallImg);
        wall31.scale=0.1;
        //4th row (attached to 5th Wall in 4th row).....
        corona5 =  createSprite(2100,565,50,50);
        corona5.addImage(coroonaImg);
        corona5.scale=0.2;
      //4th row (attached to corona5 in 4th row ).
        wall32 = createSprite(2240,580,20,50);
        wall32.addImage(wallImg2);
        wall32.scale=0.4;
      
      // 3rd row (a barrier after 18 th position wall(barrier4))
        wall33 = createSprite(2090,320,40,100);
        wall33.addImage(barrierImg1);
        wall33.scale=0.2;
        wall33.velocityY= -2;
        
          //collision for barrier4
          wall56 = createSprite(2060,100,80,30);
          wall56.shapeColor="black";

      // in 3rd row (attached to barrier);
        wall34 = createSprite(2165,370,80,50);
        wall34.shapeColor="blue";

      //handwash
        handwash = createSprite(2165,320,20,30);
        handwash.addImage(handwashImg);
        handwash.scale=0.2;



         // in 3rd row (20th position(a barrier(5barrier)));
        wall35 = createSprite(2235,370,40,100);
        wall35.addImage(barrierImg1);
        wall35.scale=0.2;
        wall35.velocityY = -2;

        // 3rd row (21 position);
        wall36 = createSprite(2300,340,80,50);
        wall36.shapeColor="blue";

        //gloves
        gloves = createSprite(2300,300,80,50);
        gloves.addImage(glovesImg);
        gloves.scale=0.2;


        //collision for barrier5
        wall55 = createSprite(2250,100,80,30);
        wall55.shapeColor="black";

       // 3rd row (above the 21 position);
        wall37 = createSprite(2300,200,80,50);
        wall37.addImage(wallImg2);
        wall37.scale=0.2;

        // 3rd row (above the 19 th position).........
        wall38 = createSprite(2165,200,80,50);
        wall38.addImage(wallImg2);
        wall38.scale=0.2;

        wall39 = createSprite(2950,580,600,30);
        wall39.shapeColor="blue";
      

        //4th row (above corona6)).
        wall40 = createSprite(2400,500,70,50);
        wall40.addImage(wallImg);
        wall40.scale=0.1;

        //4th row (beside 7th wall);
        wall41= createSprite(2510,470,70,50);
        wall41.shapeColor="blue";
         // the 3 walls under which coronaa is placed....
        wall42 = createSprite(2600,150,300,30);
        wall42.shapeColor="blue";
        wall43 = createSprite(2760,80,30,183);
        wall43.addImage( wallImg9);
        wall43.scale=0.3;
        wall44 = createSprite(2435,80,30,183);
        wall44.addImage( wallImg9);
        wall44.scale=0.3;

        //4th row (beside 7th wall (a barrier6 it attached at 8 th position));
        wall45 = createSprite(2565,450,30,120);
        wall45.addImage(barrierImg1);
        wall45.scale=0.2;
        wall45.velocityY = 2;
       //collision for barrier4 .......
        wall57 = createSprite(2560,560,80,50);
        wall57.shapeColor="black";

       //corona6 attched to wall39(beside7th position (in 4th row))........
        corona6 = createSprite(2380,567,70,50);
        corona6.addImage(coronaImg);
        corona6.scale=0.2;


        //corona7 attach to corona6....
        corona7 = createSprite(2450,567,70,50);
        corona7 .addImage( corona3Img);
        corona7.scale=0.2;

          //corona8 attach to corona7....
          corona8 = createSprite(2530,567,70,50);
          corona8 .addImage( coronaImg);
          corona8.scale=0.2;

        //corona9 attach to corona8....
        corona9 = createSprite(2600,567,70,50);
        corona9 .addImage( corona3Img);
        corona9.scale=0.2;

        corona10 = createSprite(2500,100,300,30);
        corona10 .addImage(coronaImg);
        corona10.scale=0.2;
        corona11 = createSprite(2580,100,300,30);
        corona11 .addImage(coronaaImg);
        corona11.scale=0.2;

        corona12 = createSprite(2630,100,300,30);
        corona12 .addImage(coronaaImg);
        corona12.scale=0.2;

        corona13 = createSprite(2630,50,300,30);
        corona13 .addImage(coronaaImg);
        corona13.scale=0.2;
        corona14 = createSprite(2695,40,300,30);
        corona14 .addImage(coroonaImg);
        corona14.scale=0.2;
        corona15 = createSprite(2500,40,300,30);
        corona15 .addImage(coroonaImg);
        corona15.scale=0.2;
        corona16 = createSprite(2530,40,300,30);
        corona16 .addImage(coroonaImg);
        corona16.scale=0.2;
        corona17 = createSprite(2695,98,300,30);
        corona17 .addImage(corona3Img);
        corona17.scale=0.2;

        //4th row  after barrier (a wall at 9th position).........
        wall58 = createSprite(2630,450,80,50);
        wall58.shapeColor="blue";

       //4th row at 10 position after 9th pos (at step way)
        wall46 = createSprite(2750,430,80,50);
        wall46 .addImage( wallImg2);
        wall46.scale=0.2;

         //4th row at 11position (in front of 10th pos wall).........
        wall47 = createSprite(3000,455,300,30);
        wall47.shapeColor="blue";
        

        // 4th row at the wall (where the door is placed above)..--
        wall48 = createSprite(3100,300,410,30);
        wall48.shapeColor="blue";
      
        

        door = createSprite(3100,215,80,30);
        door.addImage(doorImg);
        door.scale =0.5;

        //(beside the door (noentry board)).......
        wall49 = createSprite(3005,230,30,150);
        wall49 .addImage(blackImg);
        wall49.scale=0.8;


          

  GameOver = createSprite(1500,280,50,50);
  GameOver.addImage(GameOverImg);
  GameOver.visible=false;
  GameOver.scale= 5;
        
 
}

function draw() {
  background(0);
  //textSize(20);
  //text(mouseX+","+mouseY,mouseX,mouseY);
  //camera.position.x = human.x;

    
  

  //create edges
  edges = createEdgeSprites();

//istouching--------------------------------------------------------------- human is touching the dots.
  if(human.isTouching(dot1)){
      dot1.destroy();
      dotSound.play();
      score=score+1; 
}

if(human.isTouching(dot2)){
  dot2.destroy();
  dotSound.play();
  score=score+1; 
}

if(human.isTouching(dot3)){
  dot3.destroy();
  dotSound.play();
  score=score+1; 

}

if(human.isTouching(dot4)){
  dot4.destroy();
  dotSound.play();
  score=score+1; 

}

if(human.isTouching(dot5)){
  dot5.destroy();
  dotSound.play();
  score=score+1; 

}

if(human.isTouching(dot6)){
  dot6.visible = false;
  dotSound.play();
  score=score+1; 

}

if(human.isTouching(dot7)){
  dot7.visible = false;
  dotSound.play();
  score=score+1; 

}

if(human.isTouching(dot8)){
  dot8.destroy();
  dotSound.play();

  score=score+1; 

}
if(human.isTouching(dot9)){
  dot9.destroy();
  dotSound.play();

  score=score+1; 

}

if(human.isTouching(dot10)){
  dot10.destroy();
  dotSound.play();

  score=score+1; 

}
if(human.isTouching(dot11)){
    dot11.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot12)){
    dot12.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot13)){
    dot13.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot13)){
    dot13.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot14)){
    dot14.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot15)){
    dot15.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot16)){
    dot16.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot17)){
    dot17.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot18)){
    dot18.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot19)){
    dot19.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot20)){
    dot20.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot21)){
    dot21.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot22)){
    dot22.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot23)){
    dot23.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot24)){
    dot24.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot25)){
    dot25.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot26)){
    dot26.destroy();
    dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot26)){
  dot26.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot27)){
  dot27.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot28)){
  dot28.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot29)){
  dot29.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot30)){
  dot30.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot31)){
  dot31.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot32)){
  dot32.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot33)){
  dot33.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot34)){
  dot34.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot35)){
  dot35.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot36)){
  dot36.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot37)){
  dot37.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot38)){
  dot38.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot39)){
  dot39.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot40)){
  dot40.destroy();
  dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot41)){
  dot41.destroy();
  dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot42)){
  dot42.destroy();
  dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot43)){
  dot43.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot44)){
  dot44.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot45)){
  dot45.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot46)){
  dot46.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot47)){
  dot47.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot48)){
  dot48.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot49)){
  dot49.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot41)){
  dot41.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot50)){
  dot50.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot51)){
  dot51.destroy();
  dotSound.play();
  score=score+1; 

}if(human.isTouching(dot52)){
  dot52.destroy();
  dotSound.play();
  score=score+1; 

}
if(human.isTouching(dot53)){
  dot53.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot54)){
  dot54.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot55)){
  dot55.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot56)){
  dot56.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot57)){
  dot57.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot58)){
  dot58.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot59)){
  dot59.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot60)){
  dot60.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot61)){
  dot61.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot62)){
  dot62.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot63)){
  dot63.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot64)){
  dot64.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot65)){
  dot65.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot66)){
  dot66.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot67)){
  dot67.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot68)){
  dot68.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot69)){
  dot69.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot70)){
  dot70.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot71)){
  dot71.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot72)){
  dot72.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot73)){
  dot73.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot74)){
  dot74.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot75)){
  dot75.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot76)){
  dot76.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot77)){
  dot77.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot78)){
  dot78.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot79)){
  dot79.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot80)){
  dot80.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot81)){
  dot81.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot82)){
  dot82.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot83)){
  dot83.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot84)){
  dot84.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot85)){
  dot85.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot86)){
  dot86.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot87)){
  dot87.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot88)){
  dot88.destroy();
  dotSound.play();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot89)){
  dot89.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot90)){
  dot90.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot91)){
  dot91.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot92)){
  dot92.destroy();
  dotSound.play();
  score=score+1; 
}
if(human.isTouching(dot93)){
  dot93.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot94)){
  dot94.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot95)){
  dot95.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot96)){
  dot96.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot97)){
  dot97.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot98)){
  dot98.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot99)){
  dot99.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot100)){
  dot100.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot101)){
  dot101.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot102)){
  dot102.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot103)){
  dot103.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot104)){
  dot104.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot105)){
  dot105.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot106)){
  dot106.destroy();
  dotSound.play();
  score=score+1; 
}if(human.isTouching(dot107)){
  dot107.destroy();
  dotSound.play();
  score=score+1; 
}
//for attractive things ---------------------------------------------(different playsound1)
if(human.isTouching(handwash)){
    handwash.destroy();
    sound8.play();
   Sound3.play();

  score=score+100; 
}

if(human.isTouching(gloves)){ //------------------------------------------------(different sound 2)
   gloves.destroy();
   glovesSound.play();
  score=score+100; 
  blackboard.destroy();
  //fill("red");
}

if(human.isTouching(mask)){   //------------------------------------------------(different sound 3)
   mask.destroy();
   sound9.play();
   Sound3.play();
    score=score+350; 
    wall49.destroy();

}
if(human.isTouching(door)){   //------------------------------------------------(different sound 4)
    sound7.play();
}



// to deduct lifes
if(human.isTouching(wall4)){
  human.x=22;
  human.y= 70;
  sound5.play();
  lifes=lifes-1; 
  
}
if(human.isTouching(wall11)){
  human.x=22;
  human.y= 70;
  lifes=lifes-1; 
}if(human.isTouching(wall30)){
  human.x=22;
  human.y= 70;
  lifes=lifes-1; 
}if(human.isTouching(wall33)){
  human.x=22;
  human.y= 70;
  lifes=lifes-1; 
}if(human.isTouching(wall35)){
  human.x=22;
  human.y= 70;
  lifes=lifes-1; 
}if(human.isTouching(wall45)){
  human.x=22;
  human.y= 70;
  lifes=lifes-1; 
}
if(human.isTouching(corona)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona2)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona3)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}
if(human.isTouching(corona4)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona5)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}
if(human.isTouching(corona6)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona7)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona8)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona9)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona10)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona18)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona19)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}if(human.isTouching(corona20)){
  human.x=22;
  human.y= 70;
  sound6.play();
  lifes=lifes-1; 
}
////blackboard;
if(human.isTouching(blackboard)){
    sound4.play();
}



  wall1.display();
  wall2.display();
  wall3.display();
 
// moving wall
  wall4.display();

//fix walls
  wall5.display();
  wall6.display();
  wall7.display();

  corona.display(); 
   
  wall8.display();

  // 1st row on rhs 
  wall9.display();

  wall10.display();
  wall11.display();
  wall12.display();

  corona2.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();

  corona3.display();
  corona4 .display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  corona5.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display();
  wall38.display();
  wall39.display();
  wall40.display();
  wall41.display();
  wall42.display();
  wall43.display();
  wall44.display();
  wall45.display();

  wall57.display();
  corona6.display();
  corona7.display();
  corona8.display();
  corona9.display();
  corona10.display();
  corona11.display();
  corona12.display();
  corona13.display();
  corona14.display();
  corona15.display();
  corona16.display();
  corona17.display();

  wall46.display();
  wall47.display();
  wall48.display();
  wall49.display();
  door.display();
  wall50.display();
  wall51.display();
  wall52.display();
  wall53.display();
  wall54.display();
  wall55.display();
  wall56.display();
  wall57.display();
  wall58.display();

  human.display();
  wall59.display();
  corona18.display();

  //displays all the dots ------------------------------------------------- A DOTS............
  dot1.display();
  dot2.display();
  dot3.display();
  dot4.display();
  dot5.display();
  dot6.display();
  dot7.display();
  dot8.display();
  dot9.display();
  dot10.display();
  dot11.display();
  dot12.display();
  dot13.display();
  dot14.display();
  dot15.display();
  dot16.display();
  dot17.display();
  dot18.display();
  dot19.display();
  dot20.display();


  //create movement for human
       
      /*if (keyDown("DOWN")) {
        human.velocityY=4;
        //human.y=human.y+5;
        
      }*/
      
     
      if (keyDown("SPACE")) {
        human.velocityY= -4;
        ///human.y=human.y-5;
      }
     
      if ( keyWentUp("SPACE")) {
        human.velocityY= 4;
        ///human.y=human.y-5;
      }
      if(keyDown("M")){
        human.velocityX=4;
        
         //doorSound.stop();
       
        }
        if(keyDown("V")){
        human.velocityX=-4;
        //doorSound.play();
       
        }
        if(keyWentUp("V")){
        human.velocityX=0;
        }
        if(keyWentUp("M")){
         human.velocityX=0;
         doorSound.play();
        }

        //add gravity
        human.velocityY = human.velocityY+0.8;

       
 // when life is 0---------------------------------------;
if (lifes===0){
  //gameState = "over";
  GameOver.visible=true;
 
  if (lifes===0){
    gameState = "over";
      textSize(20);
    text("Press 'R' to Restart",100,50);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "start";
    lifes = 3;
    score = 0;
    GameOver.visible = false;
  
  }
}

  drawSprites();
  text("Score = "+ score, 1000,50);
  text("Lifes = "+lifes, 580,50);
  text("Press M = RIGHT , V = LEFT , Space = JUMP" , 700 ,200);

  human.collide(edges);
  human.collide(wall1);
  human.collide(wall2);
  human.collide(wall3);
 // human.collide(wall4);-------------------------------------------------a barrier1
  human.collide(wall5);
  human.collide(wall6);
  human.collide(wall7);
  human.collide(wall8);
  human.collide(wall9);
  human.collide(wall10);
  //human.collide(wall11);---------------------------------------------------------a barrier2
  human.collide(wall12);
  human.collide(wall13);
  human.collide(wall14);
  human.collide(wall15);
  human.collide(wall16);
  human.collide(wall17);
  human.collide(wall18);
  human.collide(wall19);
  human.collide(wall20);
  human.collide(wall21);
  human.collide(wall22);
  human.collide(wall23);
  human.collide(wall24);
  human.collide(wall25);
  human.collide(wall26);
  human.collide(wall27);
  human.collide(wall28);
  human.collide(wall29);
  //human.collide(wall30);---------------------------------------------------------a barrier3
  human.collide(wall31);
  human.collide(wall32);
 // human.collide(wall33);---------------------------------------a barrier4
  human.collide(wall34);
  //human.collide(wall35);----------------------------------------------- a barrier5
  human.collide(wall36);
  human.collide(wall37);
  human.collide(wall38);
  human.collide(wall39);
  human.collide(wall40);
  human.collide(wall41);
  human.collide(wall42);
  human.collide(wall43);
  human.collide(wall44);
  //human.collide(wall45);------------------------------- a barrier6
  human.collide(wall46);
  human.collide(wall47);
  human.collide(wall48);
  human.collide(wall49);
  human.collide(wall58);

  /////for walls
  wall4.bounceOff(corona);
  wall4.bounceOff(wall53);

  wall11.bounceOff(corona2);
  wall11.bounceOff(wall54);
  corona3.bounceOff(wall51);
 corona3.bounceOff(wall52);
 corona4.bounceOff(wall52);
 corona4.collide(wall51);
 wall30.bounceOff(wall22);
 wall30.bounceOff(wall29);
 wall35.bounceOff(wall55);
 wall35.bounceOff(wall32);
 wall33.bounceOff(wall56);
 wall33.bounceOff(corona5);
 wall45.bounceOff(wall57);
 wall45.bounceOff(wall42);

 corona18.bounceOff(wall50);
 corona18.bounceOff(wall59);

 corona19.bounceOff(wall21);
 corona19.bounceOff(corona5);

 corona20.bounceOff(corona2);
 corona20.bounceOff(corona19);


 human.bounceOff(blackboard);
 human.bounceOff(wall49);



        }

