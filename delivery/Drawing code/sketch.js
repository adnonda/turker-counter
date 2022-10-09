let canvas;
let w,h;
let drawing = [];
let names=[];
let currentPath = [];
let clear=false;
let initializeApp,getDatabase,ref,set,onValue,prom=false;
let Sendbutton,ClearButton;
let userId;
let isDrawing=false;
let name='default';
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
  background("#white"); 
  w=width;
  h=height;
  //cfd();
}
function startPath() {
  isDrawing= true;
  currentPath = [];
  drawing.push(currentPath);
}
function endPath(){
  isDrawing=false;
}

function draw() {
  
  stroke(0);
  strokeWeight(4);

  if (isDrawing==true ) {
    let point = {
      x: mouseX,
      y: mouseY,
    };
    currentPath.push(point);
  }
  noFill();
  for (let i = 0; i < drawing.length; i++) {
    let path = drawing[i];
    beginShape();
    for (let j = 0; j < path.length; j++) {
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
  prom=false;
  userId= int(random(1000,9999));
  // if (mouseIsPressed === true) {
  //   line(mouseX, mouseY, pmouseX, pmouseY);
  // }
  // if(document.getElementById("sendittome").mousePresse==true){
  //   Clear()
  // }
  if(clear==true){
    background(255);
    clear=false;
    drawing=[];
  }
}
function saveSketch(){

  
  
}
function Clear() {
  background(255);
  drawing = [];
  }
// function Save() {
//   prom = true;
//   let person = prompt(
//     "Please enter your name(keep it random as it may orverwrite if already exist)"
//   );
//   name=namecheck(person);
//   console.log(name);
//   data1= drawing;
//   Add();
//   names.push(name);
//   addName();
 
// }
// function namecheck(person){
//   for (let i = 0; i < dataReceived.names.length; i++) {
//     console.log(dataReceived.names[i]);
//     if (person == dataReceived.names[i]) {
//       let person1 = prompt("this name is taken");
//       console.log(person1);
//       namecheck(person1);
//     }
//     person1=person;
//     return person;
//   }
// }