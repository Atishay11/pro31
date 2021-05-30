const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var particles =[];
var plinkos=[];
var divisions =[];
var divisionHeight=300
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(475,height,1200,20);
  for(var y = 0; y <=width; y= y+80){
    divisions.push(new Divisions(y, height-divisionHeight/2,10,divisionHeight))
}
for (var j = 40;j <=width;j=j+50){
plinkos.push(new Plinko(j,75))
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j=35;j<=width-20;j=j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j=50;j<=width-30;j=j+50){
  plinkos.push(new Plinko(j,375));
}


  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  for (var j=0; j< plinkos.length; j++){
    plinkos[j].display();
  }
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10) )
  }
  for (var r=0; r< particles.length; r++){
    particles[r].display();
  }
  for (var y=0; y< divisions.length; y++){
    divisions[y].display();
  }
}