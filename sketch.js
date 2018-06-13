var song;
var overImage;
var maskImage;
var yPos = 0;
var introAnimationEnabled = true;
var correctionY;
var correctionX;
var video;
var video2;
var video3;
var video4;
var video5;
var video6;
var isOverCirclec;
var isOverCircle;
var isOverCircle2;
var isOverCircle3;
var isOverCircle4;
var isOverCircle5;
var isOverCircle6;
var buttonc = false;
var playVideo1 = false;
var playVideo2 = false;
var playVideo3 = false;
var playVideo4 = false;
var playVideo5 = false;
var playVideo6 = false;



function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound('assets/robot3.mp3');
  backgroundImage = loadImage("assets/nov.png");
  overImage = loadImage("assets/b4.png");
  video = createVideo(['assets/pies.mp4']);//pie arriba
  video2 = createVideo(['assets/brazo.mp4']);//brazo arriba
  video3 = createVideo(['assets/completo.mp4']);//cuerpo
  video4 = createVideo(['assets/cara.mp4']);//cabeza
  video5 = createVideo(['assets/pies.mp4']);//pie abajo
  video6 = createVideo(['assets/brazo.mp4']);//brazo abajo
}



function setup() {
createCanvas(1280,720);
maskImage = createImage(backgroundImage.width, backgroundImage.height);
song.play();
video.hide();
video2.hide();
video3.hide();
video4.hide();
video5.hide();
video6.hide();
}


function draw() {
  background(0, 0,0);
  drawImage();
  button();
  button2();
  button3();
  button4();
  button5();
  button6();
  video11();
  video22();
  video33();
  video44();
  video55();
  video66();
  mail();
  
  if (introAnimationEnabled == true) {
    updateMask();
  }

  stroke(226, 204, 0);
  strokeWeight(5);
  line(0, yPos, backgroundImage.width, yPos);

}

function mail(){
  noStroke();
  text('ssittond@hotmail.com',1130,610);
}

function buttonclose(){
   var distance = dist(mouseX, mouseY, 1230, 50); 

  if(distance < 50)
  {
    isOverCirclec = true;
  } else {
    isOverCirclec = false;
  }
  ellipseMode(CENTER);
  noStroke();
  fill(255,0,0)
  ellipse(1230, 50, 30, 30);
   
   if (buttonc==true){
     image(overImage,correctionX, correctionY);
     
   }
}

function button(){
   var distance = dist(mouseX, mouseY, 845, 260); 
   
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
  if(distance < 50)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
  ellipseMode(CENTER);
  noStroke();
 fill(255,255,255);
  ellipse(845, 260, 20,20);
   
}
function video11(){
  var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
    if (playVideo1==true){
     image(video,correctionX,correctionY);
    video.play();
    buttonclose();
}else{
     video.stop();
   }
  
  
  
  
  
}
function button2(){
   var distance = dist(mouseX, mouseY, 606, 150); 
   
   var correctionX = (windowWidth/2)- video2.width/2;
   var correctionY = (windowHeight/2)- video2.height/2;
  
  if(distance < 50)
  {
    isOverCircle2 = true;
  } else {
    isOverCircle2 = false;
  }
  
  ellipseMode(CENTER);
  noStroke();
  fill(255,255,255);
  ellipse(606, 150, 20,20);
   
}

function video22(){
  var correctionX = (windowWidth/2)- video2.width/2;
   var correctionY = (windowHeight/2)- video2.height/2;
   
    if (playVideo2==true){
     image(video2,correctionX,correctionY);
     video2.play();
     buttonclose();
   }else{
     video2.stop();
   }
}

function button3(){
   var distance = dist(mouseX, mouseY, 597, 235); 
   
   var correctionX = (windowWidth/2)- video3.width/2;
   var correctionY = (windowHeight/2)- video3.height/2;
  
  if(distance < 50)
  {
    isOverCircle3 = true;
  } else {
    isOverCircle3 = false;
  }
  
  ellipseMode(CENTER);
  noStroke();
  fill(255,255,255);
  ellipse(597, 235, 20,20);
}


function video33(){
  
  var correctionX = (windowWidth/2)- video3.width/2;
   var correctionY = (windowHeight/2)- video3.height/2;
  
    if (playVideo3==true){
     image(video3,correctionX,correctionY);
     video3.play();
    buttonclose();
} else{
     video3.stop();
   }
}
function button4(){
   var distance = dist(mouseX, mouseY, 449, 225); 
   
   var correctionX = (windowWidth/2)- video4.width/2;
   var correctionY = (windowHeight/2)- video4.height/2;
  
  if(distance < 50)
  {
    isOverCircle4 = true;
  } else {
    isOverCircle4 = false;
  }
  
  ellipseMode(CENTER);
  noStroke();
  fill(255,255,255);
  ellipse(449, 225, 20,20);
}

 function video44(){
   
   var correctionX = (windowWidth/2)- video4.width/2;
   var correctionY = (windowHeight/2)- video4.height/2;
   
    if (playVideo4==true){
     image(video4,correctionX,correctionY);
     video4.play();
     buttonclose();
} else{
     video4.stop();
   }
 }

function button5(){
   var distance = dist(mouseX, mouseY, 530, 500); 
   
   var correctionX = (windowWidth/2)- video5.width/2;
   var correctionY = (windowHeight/2)- video5.height/2;
  
  if(distance < 50)
  {
    isOverCircle5 = true;
  } else {
    isOverCircle5 = false;
  }
  ellipseMode(CENTER);
  noStroke();
  fill(255,255,255);
  ellipse(530, 500, 20,20);

}

function video55(){
  var correctionX = (windowWidth/2)- video5.width/2;
   var correctionY = (windowHeight/2)- video5.height/2;
   
   if (playVideo5==true){
     image(video5,correctionX,correctionY);
    video5.play();
    buttonclose();
} else{
     video5.stop();
   }
}


function button6(){
   var distance = dist(mouseX, mouseY, 430, 300); 
   
   var correctionX = (windowWidth/2)- video6.width/2;
   var correctionY = (windowHeight/2)- video6.height/2;
  
  if(distance < 50)
  {
    isOverCircle6 = true;
  } else {
    isOverCircle6 = false;
  }
  
  ellipseMode(CENTER);
  noStroke();
  fill(255,255,255);
  ellipse(430, 300, 20,20);

} 

function video66(){
  
  var correctionX = (windowWidth/2)- video6.width/2;
   var correctionY = (windowHeight/2)- video6.height/2;
   
   if (playVideo6==true){
     image(video6,correctionX,correctionY);
     video6.play();
     buttonclose();
} else{
     video6.stop();
   }
}



function mousePressed(){

if(isOverCirclec == true) {
buttonc = false;
playVideo1 = false;
playVideo2 = false;
playVideo3 = false;
playVideo4 = false;
playVideo5 = false;
playVideo6 = false;
} 


if(isOverCircle == true) {
  playVideo1= true;
    video.play();
}


if(isOverCircle2 == true) {
    playVideo2= true;
     video2.play();
} 


if(isOverCircle3 == true) {
    playVideo3= true;
     video2.play();
}


if(isOverCircle4 == true) {
    playVideo4= true;
     video4.play();
} 


if(isOverCircle5 == true) {
    playVideo5= true;
     video5.play();
} 


if(isOverCircle6 == true) {
    playVideo6= true;
     video6.play();
} 
}


function drawImage(){
  
 correctionX = (windowWidth/2)- backgroundImage.width/2;
 correctionY = (windowHeight/2)- backgroundImage.height/2;
 image(backgroundImage,correctionX, correctionY);

}


function keyPressed() {

if(keyCode == 32) {
  song.loop();
}
}

function updateMask() {
  var alphaValue = 0;
  maskImage.loadPixels();
  for (var x = 0; x < overImage.width; x++) {
    for (var y = 0; y < overImage.height; y++) {
      if (y <= yPos) {
        alphaValue = 0;
      } else {
        alphaValue = 255;
      }
      maskImage.set(x, y, [255, 255, 255, alphaValue]);
    }
  }
  maskImage.updatePixels();

  yPos= yPos+5;

  if (yPos >= overImage.height) {
    introAnimationEnabled = false;
  }
  overImage.mask(maskImage);
  image(overImage,correctionX, correctionY);
}
