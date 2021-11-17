//define a var to access canvas properties by ID name from HTML
var canvas = document.getElementById("canvas")

//define the drawing context of the canvas element
var ctx = canvas.getContext("2d") //canvas var is the object!

//create a new image to eventually add to the canvas (this is instead of using <img> in html doc)
var galaxy = new Image()

//galaxy is now an image object and we can access any of the image attributes (properties) that we mignt need
galaxy.src = "images/galaxy.jpeg" //wecan access .src because galaxy is an image object!

//now "write" the image to the canvas page! ab event must occur for this to happen...
galaxy.onload = function() {

    console.log("reached galaxy.onload")
    //DRAWING AN IMAGE TO THE CANVAS
    //context.drawImage(imgObject, x, y, width, height)
    ctx.drawImage(galaxy, 0, 0, 800, 600)

    //DRAW A RECTANGLE
    //start with styling choices
    ctx.fillStyle = "rgb(0,0,255)"//the solid fill of the shape 
    ctx.strokeStyle = "white"
    ctx.lineWidth = "5"

    //use .fillRect and .strokeRect once styles have been specified
    ctx.fillRect(30,30,100,100) //context.fill(x,y,width height)
    ctx.strokeRect(30,30,100,100) //context.strokeRect(x,y,width,height)
    //Match fillRech if Applying to the same Rectangle
    //DRAW A LINE
    //first need to move the "drawing cursor" to the starting point (x,y,) of the line
    ctx.moveTo(0,0) //start position
    //next,draw a line to the ending point(x,y) of the line
    ctx.lineTo(800,600)
    ctx.stroke() //draws the line!

    //Draw an oppistire line making an X across the Canvas
    ctx.moveTo(800,0)
    ctx.lineTo(0,600)

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

    //DRAW IRREGULAR SHAPE! :D
    //set up the styling first!
    ctx.fillStyle = "#55ddef"
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = "2"
    

    ctx.beginPath() 
    ctx.moveTo(650,100)
    ctx.lineTo(700,140) 
    ctx.lineTo(675,200) 
    ctx.lineTo(625,200)
    ctx.lineTo(600,140)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //DRAW ANOTHER IMAGE TO THE CANVAS 
    //create an instance of the image 
    var mario = new Image()
    //links to the source of the image file
    mario.src = "images/mario.png"

    //callback function loads the image and draws it to the canvas each time the page loads
    mario.onload = function () {

        ctx.drawImage(mario,629,120,40,80)
    }




}