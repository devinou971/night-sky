class Swnoflake{
    constructor(x, y, radius, alpha, speed, ctx){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = [255, 255, 255]
        this.alpha = alpha
        this.speed = speed
        this.ctx = ctx
    }
    
    move(angle, speedMulti=1){
        if (this.y > window.innerHeight + this.radius){
            this.y = -10
            this.x = window.innerWidth * Math.random()
        }
        
        if(this.x < -10){
            this.x = window.innerWidth
        }

        else if(this.x > window.innerWidth + this.radius){
            this.x = -10
        }

        this.y += (this.speed * speedMulti * Math.sin(angle)) 
        this.x += (this.speed * speedMulti * Math.cos(angle))
    }

    draw(){
        this.ctx.fillStyle = 'rgba(' + this.color[0].toString() + ", " + this.color[1].toString() + ", " + this.color[2].toString() + ", " + this.alpha + ")" 
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        this.ctx.fill()
    }
    
}