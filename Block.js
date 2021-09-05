class Block {
    constructor(xinput, yinput, widthinput, heightinput) {
        var options = {
            restitution: 0.4,
            friction: 1.0
        }

        this.body = Bodies.rectangle(xinput, yinput, widthinput, heightinput, options);
        this.width = widthinput;
        this.height = heightinput;
        World.add(userWorld, this.body);
    }
    display() {

        var angle = this.body.angle;
        var pos = this.body.position;

        if (this.body.speed < 6){
       
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
            World.remove(userWorld,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility)
            pop();
        }
    }
    score(){
        if(this.Visibility <0 && this.Visibility >-105){
            score ++;
        }
    }
}