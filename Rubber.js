class Rubber{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':3
        }
        this.body = Bodies.circle(x, y, radius,options );
        World.add(world, this.body);
}

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x-50, pos.y-50);
        //rotate(angle);
        //ellipseMode(RADIUS);
        
        stroke("purple");
        fill("yellow");
        ellipse(100,100, 100);
        //rect(0, 0, this.width, this.height);
        pop();
      }
    
}
