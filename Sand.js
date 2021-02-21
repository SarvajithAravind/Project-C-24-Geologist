class Sand{
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
        translate(pos.x-95, pos.y-95);
        
        
        stroke("black");
        fill("cyan");
        ellipse(300,100, 10);
        
        pop();
      }
    
}
