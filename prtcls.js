const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

var mouseX, mouseY;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

console.log(ctx);

window.addEventListener('resize', function(){

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

function getMousePos(canvas, evt) {

    var rect = canvas.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

setInterval(function(){drawRect()}, 1);

function drawRect() {

    ctx.reset();

    var pos = getMousePos();
    
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.fillRect(pos.x, pos.y, 50, 50);
    ctx.stroke();
}
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fillRect(0, 0, 50, 50);
ctx.stroke();