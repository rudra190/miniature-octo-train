class Dustbin {
    constructor(x, y,width, height) {
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = 20;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
       rectMode(CENTER);
          rect(0, 0, this.width, this.height);
      pop();
    }
  };
  