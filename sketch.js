let cor;

function setup() {
  createCanvas(600, 600);
  background ("purple");
  cor = "pink";
}

function draw() {
  
  stroke ("pink");
 fill ("pink");


  if(mouseIsPressed){
   circle (mouseX,mouseY,20,30);
  }
}


