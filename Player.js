class Player{
    constructor(){
        this.location = createVector(width/100,20);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0.6);
        this.colour = color('#198BC6');
        this.radius = 30;
        this.side = 0;
        this.speedX = 5;
        this.spt = createSprite(this.location.x,this.location.y,this.radius,this.radius);
        this.spt.shapeColor = "orange";
    }

    applyVelocityGravity(){
        this.spt.velocityY = this.spt.velocityY +2;
    }

    moveLeft(){
        this.spt.x = this.spt.x - 10;
    }

    moveRight(){
        this.spt.x = this.spt.x + 10
    }

    moveUp(){
        this.velocityY = -10;
    }
}