class Box{
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {restitution: 1};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        //Add new changes/settings
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        fill(255);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //Revert back to the previous setting (without translate & rotate)
        pop();
    }
}

/*
box1--> box1.body
sprite.width, sprite.x
box1.display();

this -- keyword which refers to the object calling that property
*/