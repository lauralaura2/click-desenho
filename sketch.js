function setup() {
  createCanvas(600, 600);
  background ("pink");
}

function draw() {
  stroke ("black");
  fill ("purple");
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
    
}
