const FPS = 20;

window.onload = e=>{

    for(let o of document.querySelectorAll("canvas")){
        o.style.width = window.innerWidth.toString() + "px"
        o.style.height = window.innerHeight.toString() + "px"
    const FPS = 20;
    o.width = window.innerWidth
        o.height = window.innerHeight
    }

    let canvas = document.querySelectorAll(".drawingCanvas")
    let ctx = []
    for (let c = 0; c<canvas.length; c++){
        ctx[c] = canvas[c].getContext("2d")
    }

    snowflakes0 = []
    for(let i=0; i < 100; i++){
        x_position = Math.random() * window.innerWidth
        y_position = Math.random() * window.innerHeight - 10
        radius = 2 * Math.random()
        alpha = Math.random() * 0.5
        speed = Math.random() * 0.25

        snowflakes0[i] = new Swnoflake(x_position, y_position, radius, alpha, speed, ctx[0])
    }

    snowflakes1 = Array(50)
    for(let i=0; i < snowflakes1.length; i++){
        x_position = Math.random() * window.innerWidth
        y_position = Math.random() * window.innerHeight - 10
        radius = 2+1*Math.random()
        alpha = Math.random() * 0.5
        speed = 0.2 + Math.random() * 0.5

        snowflakes1[i] = new Swnoflake(x_position, y_position, radius, alpha, speed, ctx[1])
    }

    snowflakes2 = Array(50)
    for(let i=0; i < snowflakes1.length; i++){
        x_position = Math.random() * window.innerWidth
        y_position = Math.random() * window.innerHeight - 10
        radius = 2+2*Math.random()
        alpha = 0.5 + Math.random() * 0.5
        speed = 1 + Math.random(2)

        snowflakes2[i] = new Swnoflake(x_position, y_position, radius, alpha, speed, ctx[2])
    }

    snowflakes3 = Array(50)
    for(let i=0; i < snowflakes1.length; i++){
        x_position = Math.random() * window.innerWidth
        y_position = Math.random() * window.innerHeight - 10
        radius = 3+2*Math.random()
        alpha = 0.5 + Math.random() * 0.5
        speed = 1 + Math.random(2)

        snowflakes3[i] = new Swnoflake(x_position, y_position, radius, alpha, speed, ctx[3])
    }

    let angle = Math.PI/2;
    let speedMulti = 1;
    let burger = document.querySelector("#burger")
    let param = document.querySelector("#param")
    console.log(param)
    param.style.display = "none"

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
        for(let c of ctx){
            c.clearRect(0, 0, window.innerWidth, window.innerHeight)
            c.clearRect(0, 0, 1000, 1000)
        }

        for(let snow of snowflakes0){
            snow.move(angle)
            snow.draw()
        }

        for(let snow of snowflakes1){
            snow.move(angle)
            snow.draw()
        }

        for(let snow of snowflakes2){
            snow.move(angle)
            snow.draw()
        }

        for(let snow of snowflakes3){
            snow.move(angle)
            snow.draw()
        }

    }, 100/FPS);
}