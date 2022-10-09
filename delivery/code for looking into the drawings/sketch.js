let unit, canvas;
let drawings = [];
let sizes = [];
let names = [];
let sketch=0;
let imageChoosen = false;
let tapped=false;
function setup() {
  if (windowWidth < windowHeight * 1.5) {
    unit = windowWidth / 400;
    canvas = createCanvas(400 * unit, (400 / 16) * 9 * unit);
  } else {
    unit = windowHeight / 225;
    canvas = createCanvas((225 / 9) * 16 * unit, 225 * unit);
  }
  canvas.position((windowWidth - unit * 400) / 2, 0, "fixed");
  canvas.parent('container');
}
function mousePressed(){
  if(tapped==false){
    tapped=true;
    sketch++;
    if(sketch== drawings.length){
      sketch=0;
    }
    addImage(sketch);
    
  }
  setTimeout(function(){
    tapped=false;
  },500);
}
function draw() {
  if (frameCount < 240) {
    background(20);
    fill(240);
    textSize(10 * unit);
    textAlign(CENTER);
    text("Please Wait", width / 2, height / 2);
    imageChoosen=true;
  } else {
    if (imageChoosen == true) {
      
      background(220);
      imageChoosen = false;
      addImage(sketch);
      
      fill(240);
       for(let j=0;j<16;j++){
        let le = createElement('li');
        le.parent('list1');
      }
      for(let i=0;i<names.length;i++){
        let li= createElement('li',names[i]);
        
        li.parent('list'); 
      }
      fill(0);
      
    }
    
  }
}

function addImage( sketch = 1) {
  
  //console.log();
  background(240);
  if (drawings[sketch] != undefined) {
    push();
    let H = sizes[sketch][1];
    let W = sizes[sketch][0];
    //fill(233, 0, 0);
    noFill();
    let nk = (225 * unit) / H;
    let newH = H * nk;
   console.log(newH/H,unit);
    scale((newH/H)/unit);
   // rect(0, 0, H * unit, W * unit);

    let n = drawings[sketch].length;
    for (let i = 0; i < n; i++) {
      if (drawings[sketch][i] != undefined) {
        let n1 = drawings[sketch][i].length;
        beginShape();
        for (let j = 0; j < n1; j++) {
          //console.log(drawings[sketch][i][j]);
          let pos = drawings[sketch][i][j];
          vertex(pos.x * unit, pos.y * unit);
        }
        endShape();
      }
    }
    pop();
    fill(20);
    textSize(8*unit);
    textAlign(CENTER);
    text(names[sketch],width/2,10*unit);
  } else {
    console.log("failed");
  }

  // fill(0);
  // textSize(4*unit);
  // let arr=[];
  // arr=drawings[sketch];
  // for(let i=0;i<arr.length;i++){
  //   let arr2= [];
  //   arr2=arr[i];
  //   for(let j=0;j<arr2.length;j++){
  //     console.log(arr2[j].x);
  //   }
  // }
  let x = sizes[0][0] * unit;
  let y = sizes[0][1] * unit;
  // console.log([1][0].x);
}

