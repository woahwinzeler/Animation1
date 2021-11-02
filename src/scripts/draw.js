
window.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  initialize(); 
    
  function initialize(){
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
  }
    
  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawbackground(); 
  }

  function drawbackground(callback){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  
  ctx.lineWidth = 20;
  ctx.strokeStyle = 'white';
  ctx.stroke();

});

// let Animated = new Animated(){}
// DrawAnimaline(startingx, startingy, finishingx, finishingy, timeInSeconds)

class Animated{
  constructor(ctx, canvasWidth, canvasHeight, timeToDrawFigure){
    this.ctx = ctx;
    this.timeToDrawFigure = timeToDrawFigure; 
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth; 
  }
  DrawLine(startingx, startingy, finishingx, finishingy, timeInSeconds){
    
  }

  DrawPortionOfLine(x1, x2, stroke){
    this.ctx.rect(x, y)

  }

  
  
}

