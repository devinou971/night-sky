/**
 * @summary Creates a snowflake. It's used to draw snowflakes on the differents canvases
 * 
 * @description Create a snowflake from it's position, radius, transparency and speed.
 * 
 * @file Snowflake.js
 * @author devinou971
 */
class Swnoflake{
    /**
     * Gives the snowflake all his parameters
     * @class
     * @param {Number} x The position of the snowflake on the x axis
     * @param {Number} y The position of the snowflake on the y axis
     * @param {Number} radius The radius of the circle that will represent the snwoflake
     * @param {Number} alpha The transparency of the circle
     * @param {Number} speed The movement speed of the circle.
     * @param {CanvasRenderingContext2D} ctx The context the Snowflake will be drawn in
     */
    constructor(x, y, radius, alpha, speed, ctx){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = [255, 255, 255]
        this.alpha = alpha
        this.speed = speed
        this.ctx = ctx
    }
    
    /**
     * 
     * @param {Number} angle The angle the snowflake going be going towards. It's used to simulate wind 
     * @param {Number} speedMulti A speed multiplier that can be set in the parameters in the UI.
     */
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

    /**
     * Draws the snowflake on the ctx.
     */
    draw(){
        this.ctx.fillStyle = 'rgba(' + this.color[0].toString() + ", " + this.color[1].toString() + ", " + this.color[2].toString() + ", " + this.alpha + ")" 
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        this.ctx.fill()
    }
    
}