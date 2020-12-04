const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var ground;
var Pendulum1,Pendulum2,Pendulum3,Pendulum4,Pendulum5;
var Sling1,Sling2,Sling3,Sling4,Sling5;
var roofObject;
var Mouse;

function setup() {
  canvas = createCanvas(windowWidth/2,windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  roofObject = new Roof(width/2,height/4,width/7,20);

  startPendulumPositionX = width/2;
  startPendulumPositionY = height/4+500;

  Pendulum1 = new Pendulum(startPendulumPositionX-PendulumDiameter*2,startPendulumPositionY,PendulumDiameter);
  Pendulum2 = new Pendulum(startPendulumPositionX-PendulumDiameter,startPendulumPositionY,PendulumDiameter);
  Pendulum3 = new Pendulum(startPendulumPositionX,startPendulumPositionY,PendulumDiameter);
  Pendulum4 = new Pendulum(startPendulumPositionX+PendulumDiameter,startPendulumPositionY,PendulumDiameter);
  Pendulum5 = new Pendulum(startPendulumPositionX+PendulumDiameter*2,startPendulumPositionY,PendulumDiameter);

  Sling1 = new Sling(Pendulum1.body,roofObject.body,-PendulumDiameter*2,0);
  Sling2 = new Sling(Pendulum2.body,roofObject.body,-PendulumDiameter*1,0);
  Sling3 = new Sling(Pendulum3.body,roofObject.body,0,0);
  Sling4 = new Sling(Pendulum4.body,roofObject.body,PendulumDiameter*1,0);
  Sling5 = new Sling(Pendulum5.body,roofObject.body,PendulumDiameter*2,0);
}

function draw() {
  background(0);  
  Engine.update(engine);
  Sling1.display();
  Sling2.display();
  Sling3.display();
  Sling4.display();
  Sling5.display();
  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();
 
  roofObject.display();
}

function mouseDragged() {
  Matter.Body.setPosition(Pendulum1.body, {x: mouseX, y: mouseY});
}