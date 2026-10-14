function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

for(let i = 1; i < 8; i = i + 1) {
   let size = 30;
   let spacing = 50;
  circle(i * (size + 15), size/2 + 150, size)
}


  
}