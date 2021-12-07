//JS file ship 
function Ship() {

    //the this key word references the current object you are inside of (in the code block) EVERYTHING in Javascript is an object SO when we say 'this' we are talking about Ship()

    this.x = 100 //x-axis cord start position
    this.y = 100 //y-axis cord start position
    this.color = "black" //outline color
    this.fillStyle = "orange" //interior color

    //velocity variable for the x and y axis
    this.vx = 0
    this.vy = 0

    //acceleration variables for the x and y axis 
    this.ax = 1
    this.ay = 1

    //function move that will ad velocity to the position of the ship
    this.move = function() {
        
        this.x += this.vx //add velocity value to x coord point
        this.y += this.vy //add velocity to the value of y coord poit
    }
    

    this.draw = function() {
        /* context.save()

        context.translate(this.x, this.y)

        //draw the ship
        context.lineStyle = this.color
        context.fillStyle = this.fillStyle

        //start point at current spot designed on line 32
        context.beginPath()

        //draw the triangle! (ship)
        context.moveTo(25,0)
        context.lineTo(-25,25)
        context.lineTo(-25,-25)

        context.closePath()

        context.stroke()
        context.fill()
        context.restore()

        */

        //image of ship

        var imageObj= new Image()

        imageObj.src = "images/xwing.png" //PNG FOR TRANSPARENCY

        //save the currentstate of the canvas
        context.save()

        //move the point of origin 0,0 to the ships starting x and y coordinates
        context.translate(this.x, this.y)

        //draw the image to the canvas context
        //drawimage(image,x,y) Must be at the 0,0 followed by desired width and height of image
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        context.drawImage(imageObj, -100, -50, 100, 300)
        context.restore()


    }



}