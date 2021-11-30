var canvas = canvas.getElementById("canvas")//store canvas element as a js obkect
var ctx = canvas.getContext("2d") // set up the context object relative to canvas

var tracing= new Image()
tracing.src = "images/shapes.png" //<img src="filepath/filename.ext">

tracing.onload = function () {

    ctx.drawImage(tracing, 0,0,800,800)

    //set up the styling (fill color, stroke color, line width of stroke) before actually drawing
    ctx.fillStyle = "rgba(255,0,0,0.5)"

    //for lines use moveTo to get the cursor to drop the first then lineTo to draw the line
    ctx.moveTo(588,222)
    ctx.lineTo(702,68)
    ctx.stroke()
    
    //draw a rectangle
    //contextObject.fillRect(x,y,width,height)
    ctx.fillRect(66,80,119,541)
    
    ctx.beginPath()
    ctx.arc(422,206,86,0,(2*Math.PI), false)
    ctx.lineTo(475, 141)
    ctx.closePath()
    ctx.fill()

    ctx.strokeStyle = "rgba(0,0,255,0.5)"

    ctx.fillStyle = "rgba(0,0,255,0.5)"
    ctx.beginPath()
    ctx.moveTo(362,448)
    ctx.lineTo(704,326)
    ctx.lineTo(639,683)
    ctx.closePath()
    ctx.fill()

    ctx.strokeStyle = "rgba(180,0,180,0.5)"

    ctx.moveTo(41,749)
    ctx.lineTo(758,749)
    ctx.stroke()



}

