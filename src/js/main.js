/*
let c = document.querySelector("#canvas")
let ctx = c.getContext("2d")

ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(30, 30, 50, 50);
*/

window.onload = ()=>{
    for(let o of document.querySelectorAll("canvas")){
        o.style.width = window.innerWidth.toString() + "px"
        o.style.height = window.innerHeight.toString() + "px"
        console.log("")
    }
}



