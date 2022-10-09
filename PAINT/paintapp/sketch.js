
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#white");
}


function draw() {
    stroke(0);
    strokeWeight(4); 
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
   
 
  }



  

 