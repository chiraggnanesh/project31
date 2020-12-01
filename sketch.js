var particles = [];
var pinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  divisions = new Divisions(200, 390, 200, 20, ground_options);

}

function draw() {
  background(255,255,255); 

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  drawSprites();
}