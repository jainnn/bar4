function setup(){ 
    createCanvas(windowWidth, windowHeight); 
    background(30,80,250);
    noStroke();
    smooth(); 
}
 
function draw(){

    for (var i = 0; i < width; i+=12) { 
       // fill(255, 255, 255, 30); 
         colorMode(RGB);
       fill(30, random(100,255), random(100,255))
       // ellipse(i, noise(i*0.09, frameCount*0.007) * height, 9, 9); 
      rectMode(CENTER);
 // rect(i, noise(i*0.5, frameCount*0.005) * height, 10,10);
    }
    
    
    for (var i = 0; i < width; i+=40) { 
  fill(255)
  rect(i, noise(i*0.02, frameCount*0.01) * height, 30,70);

    }
    
for (var i = 0; i < width; i+=100) { 
  fill(30,80,250)
  rect(i, noise(i*0.03, frameCount*0.02) * height, 120,180);

    }
    
    
for (var i = 0; i < width; i+=155) { 
  fill(0,255,255,150)
  rect(i, noise(i*0.1, frameCount*0.05) * height, 10,20);

    }
}