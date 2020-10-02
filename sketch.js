const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //box1 is a new object of the class Box
    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);
    ground = new Ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}

/*
OBJECT ORIENTED PROGRAMMING (OOP)
Objects - 1. Properties
          2. Functions
Design --> CLASS


1. rotate - about an angle
2. translate - sliding/slipping without rotation - about the position of the body
*/