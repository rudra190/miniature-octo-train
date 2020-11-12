class Paper {
    constructor(x, y, width, height) {
      var options = {
        'isStatic' :false,
        'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.ellipse(x,y, 55, 55, options);
      this.width = 55;
      this.height = 55;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      pop();
    }
  };