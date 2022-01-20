function setup_canvases(){
    for(let o of document.querySelectorAll("canvas")){
        o.style.width = window.innerWidth.toString() + "px"
        o.style.height = window.innerHeight.toString() + "px"
        o.width = window.innerWidth
        o.height = window.innerHeight
    }
}
function drawAll(listSnowflakes, angle){
    for(let i = 0; i< listSnowflakes.length; i++){
        for(let j=0; j< listSnowflakes[i].length ; j++){
            listSnowflakes[i][j].move(angle, speedMultis[i])
            listSnowflakes[i][j].draw()
        }
    }
}

function updateSpeed(){
    console.log("updating speed")
    speedInputs = document.querySelectorAll(".speedmulti")
    for(let i=0 ; i < speedInputs.length; i++){
        speedMultis[i] = speedInputs[i].value
    }
}

function updateSize(){
    numberInputs = document.querySelectorAll(".numsnow")
    for(let i=0; i<numberInputs.length; i++){
        numberSnow[i] = parseFloat(numberInputs.value)
    }
}

function createSnowflakes(number, min_speed, max_speed, min_alpha, max_alpha, min_radius, max_radius, ctx){
    var arr = Array(number);
    for (let i = 0; i < arr.length; i++) {
        x_position = Math.random() * window.innerWidth
        y_position = Math.random() * window.innerHeight - 10
        radius = min_radius + (max_radius-min_radius) * Math.random()
        alpha = min_alpha +  (max_alpha-min_alpha) * Math.random() 
        speed = min_speed + (max_speed-min_speed) * Math.random() * 0.25
        arr[i] = new Swnoflake(x_position, y_position, radius, alpha, speed, ctx)
    }
    return arr;
}

var speedMultis = []
var numberSnow = []

window.onload = e=>{
    const FPS = 20;
    let angle = Math.PI/2;
    let burger = document.querySelector("#burger")
    let param = document.querySelector("#param")
    console.log(param)
    param.style.display = "none"
    let canvas = document.querySelectorAll(".drawingCanvas")
    speedMultis = Array()
    numberSnow = Array()
    for (let i=0;  i< canvas.length; i++){
        speedMultis[i] = 1
        numberSnow[i] = 50
    }

    setup_canvases()
    
    let ctxs = []
    for (let c = 0; c<canvas.length; c++){
        ctxs[c] = canvas[c].getContext("2d")
    }

    snowflakes0 = createSnowflakes(number=numberSnow[0], min_speed=0, max_speed=0.25, min_alpha=0.0, max_alpha=1, min_radius=0.0, max_radius=2,ctxs[0])
    snowflakes1 = createSnowflakes(number=numberSnow[1], min_speed=0.2, max_speed=0.7, min_alpha=0.0, max_alpha=0.5, min_radius=1, max_radius=3,ctxs[1])
    snowflakes2 = createSnowflakes(number=numberSnow[2], min_speed=1, max_speed=3, min_alpha=0.5, max_alpha=1, min_radius=2, max_radius=4,ctxs[2])
    snowflakes3 = createSnowflakes(number=numberSnow[3], min_speed=1, max_speed=3, min_alpha=0.5, max_alpha=1, min_radius=3, max_radius=5,ctxs[3])

    burger.onclick = e => {
        let param = document.querySelector("#param")
        if(param.style.display == "none"){
            param.style.display = "block"
        }
        else {
            param.style.display = "none"
        }
    }

    document.addEventListener("mousemove", e=>{
        let body = document.querySelector("body")
        body.style.cursor = "auto"

        burger.style.visibility = "visible"

        let x_mouse = e.clientX 
        let y_mouse = e.clientY

        x_mouse = x_mouse - window.innerWidth/2

        angle = Math.atan(y_mouse/x_mouse)
        if(angle < 0){
            angle = Math.PI + angle
        }
        angle = Math.min(Math.max(angle, Math.PI/6), 5*Math.PI/6)

        setTimeout(e=>{
            body.style.cursor="none"
            burger.style.visibility = "hidden"
        }, 3000)
    })

    setInterval(() => {
        for(let c of ctxs){
            c.clearRect(0, 0, window.innerWidth, window.innerHeight)
            c.clearRect(0, 0, 1000, 1000)
        }
        drawAll([snowflakes0, snowflakes1, snowflakes2, snowflakes3], angle)
    }, 100/FPS);
}