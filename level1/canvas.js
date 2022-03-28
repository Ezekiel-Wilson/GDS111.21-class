//define a var to access canvas properties by ID name from HTML
var canvas = document.getElementById("canvas")

//define the drawing context of the canvas element
var ctx = canvas.getContext("2d") //canvas var is the object!

ctx.stroke()

//DRAW A CIRCLE
//requires a context.beingPath(), then context.arc(x, y, radius, startAngle,endAngle, isCounterClockwise)
//starting x y is the CENTER of the circle; radius is half of the diameter
//isCounterClockwise is a BOOLEAN --> TRUE or FALSE
ctx.beginPath()
ctx.arc(400,300,50,0,(2*Math.PI), false)
ctx.lineTo(450,250)
ctx.closePath()
ctx.fill() //fills the above shape