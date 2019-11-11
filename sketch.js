var canvasWidth = 750;
var canvasHeight = 750;
var midX = canvasWidth/2;     
var midY = canvasHeight/2;     

var confetti = [];

var initializer = 0;

var grav;

function setup()
{
  createCanvas(canvasWidth, canvasHeight);

  background(215,215,255);

  for (var i = 0; i < 75; i++)
  {
      confetti[i] = new Confetti();
  }
}

function draw()
{
  if (initializer == 1)
  {
    for (var i = 0; i < confetti.length-1; i++)
    {
      if(confetti[i].y < canvasHeight)
      {
        confetti[i].move();
        confetti[i].display();
      }
    }
  }

}

function mouseClicked()
{
  background(215,215,255);
  initializer = 1;
  grav = random(0.1, 1);
  for (var i = 0; i < confetti.length-1; i++)
  {
    confetti[i].initialize(mouseX,mouseY);
  }
}

function Confetti()
{
  var velX;
  var velY;
  var diameter;
  var r;
  var g;
  var b;

  this.initialize = function(x,y)
  {
    this.x = x;
    this.y = y;
    velX = random(-8,8);
    velY = random(-15, 5);
    diameter = random(6, 25);
    r = random(0,255);
    g = random(0,0);
    b = random(0,255);
  }

  this.move = function()
  {
    velY += grav; 
    this.x += velX;
    this.y += velY;
  }

  this.display = function()
  {
    noStroke();
    fill(r,g,b);
    ellipse(this.x, this.y, diameter)
  }
}