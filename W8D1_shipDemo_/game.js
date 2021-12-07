//JS file that runs the game and connects the functionality ofship.js and controls.js to the HTML 

var canvas 
var context 

//variable for the animation timer 
var timer 

var ship //the ship!

var friction //slows down the velocity

//function to ready the canvas and starting position of the ship
$(document).ready(function(e) {

    //assign the canvas element to the canvas var
    canvas = $("#canvas")//Query version of document.getElementById
    context = canvas.get(0).getContext("2d")

    ship = new Ship() // Ship() was defined in the ship.js

    //friction and POWER
    friction = 0.95
    ship.power = 1
    timer = setInterval("animate();", 33) //33 Frames per Second (1000 would be 1 second)


}) //end of ready()

//LET'S DO STUFF!
function animate() {

    context.clearRect(0,0,canvas.width(), canvas.height())

    //check to see if the keyCode values are up or down [connects to the controls.js]
    if(up) { //if the current value of up is true
    
        //when up key is true (which means we are pressing the key down)
        ship.vy -= ship.ax * ship.power
        //line 39 Same as: ship.vy = ship.vy - ship.ax * ship.power
        //ships velocity is Lowered by its current acceleration and power

    
    }

   

    if(down){

        ship.vy += ship.ax * ship.power
    }

    if(right) {
        ship.vx += ship.ax * ship.power
    }

    if(left) {

        //subtract acceleration
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity
    ship.vx *= friction
    ship.vy *= friction

    //move and redraw the ship .functions() are from ship.js [Ship()]
    ship.move()
    ship.draw()
    //if ship leaves right edge of canvas returns ta left edge
    if(ship.x > canvas.width() + 25) {
        //if the currnet ship x cord is greated than beyond the canvas width + 25 size of the ship 

        //move ship x coord

        ship.x = -25
    }
    //if ship leaves right edge of canvas returns ta left edge
    if(ship.y > canvas.height() + 25) {
        //if the currnet ship y cord is greated than beyond the canvas width + 25 size of the ship 

        //move ship y coord

        ship.y = -25
    }
    if(ship.x < -25) {
        //if the currnet ship x cord is greated than beyond the canvas width + 25 size of the ship 

        //move ship x coord

        ship.x = 825
    }
    if(ship.y <-25) {
        //if the currnet ship x cord is greated than beyond the canvas width + 25 size of the ship 

        //move ship x coord

        ship.y = 825
    }
}
