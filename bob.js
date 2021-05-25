class Bob {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          "isStatic":false
      }
      this.body = Bodies.circle(x, y,r, options);
      this.x = x;
      this.y = y;
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };