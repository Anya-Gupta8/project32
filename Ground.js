class Ground {
    constructor(xInput, yInput, widthInput, heightInput) {
        //construction of ground using matter.js
        var options = {
          isStatic: true,
        };
        this.width = widthInput;
        this.height = heightInput;
        this.body = Bodies.rectangle(
          xInput,
          yInput,
          widthInput,
          heightInput,
          options
        );
        World.add(userWorld, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        stroke("black");
        strokeWeight(1);
        fill("red");
        
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}