let data = [40,120,80,200,150]

function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();


  // Create gradient
  let grad = drawingContext.createLinearGradient(50,90,270,40)

  grad.addColorStop(0, 'red')
  grad.addColorStop(1, 'blue')

drawingContext.fillStyle = grad;
  data.length = 10

  let barWidth = 30;
  let barHeight = 100;
  let spacing = 1;
  let startX = 25;
  let startY = 150;
  let baseline = height - 40;

  for (let i = 0; i < data.length; i++) {

let x = startX + i * (barWidth + spacing);
    let h = data[i];
    let y = baseline - h;

    rect(x, startY, barWidth, barHeight);


    
  }
}