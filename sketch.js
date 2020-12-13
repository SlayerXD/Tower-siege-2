const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground, ground1;
var ball, rope
var ground3
var box21, box22, box23, box24

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(760, 600, 1550, 20);
  ground2 = new Ground(625,400,200,20);
  ground3 = new Ground(1250, 200, 200, 20);

  box1 = new Box(550, 375, 25, 25);
  box2 = new Box(575, 375, 25, 25);
  box3 = new Box(575, 375, 25, 25);
  box4 = new Box(600, 375, 25, 25);
  box5 = new Box(600, 375, 25, 25);
  box6 = new Box(600, 375, 25, 25);
  box7 = new Box(625, 375, 25, 25);
  box8 = new Box(625, 375, 25, 25);
  box9 = new Box(625, 375, 25, 25);
  box10 = new Box(650, 375, 25, 25);
  box11 = new Box(650, 375, 25, 25);
  box12 = new Box(675, 375, 25, 25);
  box13 = new Box(1175, 175, 25, 25);
  box14 = new Box(1200, 175, 25, 25);
  box15 = new Box(1200, 175, 25, 25);
  box16 = new Box(1225, 175, 25, 25);
  box17 = new Box(1225, 175, 25, 25);
  box18 = new Box(1225, 175, 25, 25);
  box19 = new Box(1250, 175, 25, 25);
  box20 = new Box(1250, 175, 25, 25);
  box21 = new Box(1250, 175, 25, 25);
  box22 = new Box(1275, 175, 25, 25);
  box23 = new Box(1275,175,25,25);
  box24 = new Box(1300, 175, 25, 25);

  ball = new Ball(500, 200, 40, 40);
  rope = new Rope(ball.body, { x: 200, y: 350 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased(){
  rope.fly();
  
}

function keyPressed(){
    if(keyCode === 32 ){
        Matter.Body.setPosition(ball.body,{x: 200, y: 50});
        rope.attach(ball.body);
    }
}

