//Week 9 Asteroid Avoidance shell Build

//set up starting elements (nescessary)
//these are Global values and will accessible to EVERY function in the file!
var c = document.querySelector('canvas') //grabs element type instead of ID
//var c = document.getElementById("#canvas")
var context = c.getContext("2d")
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array()
var numAsteroids = 10
var gameOver = false
var score = 0

//random value generator function
function randomRange(high, low) {

    return Math.random() * (high - low) + low


}//randomRange() CLOSE

//function for the Asteroids!------------------------ASTEROIDS
function Asteroid() {

    this.radius = randomRange(10, 2)
    this.x = randomRange(c.width - this.radius, 0 + this,radius)
    this.y = randomRange(c.height - this.radius, 0 + this,radius) - c. height
    this.vx = randomRange(-5, -10) // horizontal velocity
    this.vy = randomRange(10, 5) // vertical velocity
    this.color = "red"; 

    this.draw = function () {//draw the asteroid to the canvas! (its just a sphere!)
        context.save()
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x,this.y, this.radius, 0, 2*Math.PI, true)
        context.closePath()
        context.fill()
        context.restore()
    }
    
}//Asteroid()

//for loop to make LOTS OF ASTEROIDS
for(var i = 0; i < numAsteroids; i++){
    //i is the indes of the array this a loop that runs while i less than a value stored to numasteroids, i++ menas i gows +1 each time through the loop

    asteroids[i] = new Asteroid()
    //each time through the loop a new asteroid is created saved in the asteroids array!
}

//function for the PLAYERS SHIP--------------------SHIP---------------------
function Ship() {

    this.x = c.width / 2
    this.y = c.height / 2

    this.w = 20 //width
    this.h = 20 //height
    
    this.vx = 0
    this.vy = 0

    this.up = false
    this.down = false
    this.left = false
    this.right = false


    this.flamelength = 30

    //DRAW THE SHIIIIIIIIIIIIIIIIIIIIIIIP
    this.draw = function() {
        context.save()
        context.translate(this.x, this.y)

        //flame for the ship!
        if(this.up == true) {
            context.save()
            //adjust flame length for flicer effect
            if(this.flamelength == 30){
                this .flamelength = 10
            }
            else {
                this.flamelength = 30
            }

            context.fillStyle = "black" //flame color
            context.beginPath()
            context.moveTo(0, this.flamelength)
            context.lineTo(5,5)
            context.lineTo(-5,5)
            context.lineTo(0, this.flamelength)
            context.closePath()
            context.fill()
            context.restore()

        }

        context.beginPath()
        context.fillStyle = "red" //flame color
        context.moveTo(0, 13)
        context.lineTo(10,10)
        context.lineTo(-10,10)
        context.lineTo(0, -13)
        context.closePath()
        context.fill()
        context.restore()
    }

    this.move = function () {
        this.x += this.vx
        this.y += this.vy
        //adding boundaries to keep ship on screen
        if(this.y > c.height - 20) {
            this.y = c.height - 20
            this.vy = 0
        }

        if(this.y < 0 + 13 ) {
            this.y = 13
            this.vy = 0
        }
        //check to see if we are past right side of canvas 
        //right
        if(this.x > c.width - 10) {
            this.x = c.width - 10
            this.vx = 0
        }
        //left
        if(this.x < 0 + 10) {
            this.x = 10
            this.vx = 0
        }
    }

}//PlayerShip() CLOSE

//create the instance of the ship for the game
var ship = new PlayerShip()

document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)


//Functions for the contorls --------------------------Controls--------------
function keyPressDown(e) {

    //console.log("Key Down" + e.keycode) // tells you the keycodes!
    if(e.keyCode === 38) {
        ship.up = true
    }
    if(e.keyCode === 37) {
        ship.left = true
    }
    if(e.keyCode === 39) {
        ship.right === true
    }
//not coding for down cuz ship no go
}//keyPressDown() CLOSE
//Functions for the contorls --------------------------Controls--------------
function keyPressUp(e) {

    //console.loge("Key Down" + e.keycode) // tells you the keycodes!
    if(e.keyCode === 38) {
        ship.up = false
    }
    if(e.keyCode === 37) {
        ship.left = false
    }
    if(e.keyCode === 39) {
        ship.right === false
    }
//not coding for down cuz ship no go
}//keyPressDown() CLOSE

//the main function! this makes it all happen!------------MAIN--------------
function main(){

    context.clearRect(0,0, c.width, c.height)

    //display score
    context.save()

    context.font= "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score:" + score.toString(), c.width - 150, 30)
    context.restore() 

    //W9D2 show ... gravity stuff-----------------------------------------

    if(ship.up == true) {
        ship.vy = -10
    }
    else {
        ship.vy = 3
    }
    if(ship.left = true) {
        ship.vx = -3
    }
    else if (ship.right == true) {
        ship.vs = 3
    }
    else {
        ship.vx = 0
    }


    for(var i = 0; i < asteroids.length; i++) {
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var dist = Math.sqrt((dX*dX) + (dY*dY))

        //check for collision and if so end game
        if(detectCollision(dist, (ship.h/2 + asteroids [i].radius))){
            //console.log("secret stuff for W9D2")
            gameOver = true
            document.removeEventListener("keydown", keyPressDown)
            document.removeEventListener("keyup", keyPressUp)
        }

        //checks to ee if asteroid is offscreen
        if(asteroids[i].y > c.height + asteroids[i].radius) {
        //Reset Asteroid when True
        asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius) - c.height
        asteroids[i].x = randomRange(c.width - asteroids [i].radius, 0 + asteroids [i].radius)
        }
        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy

        }
        asteroids[i].draw()

        }
    
        ship.draw()
        if(gameOver == false) {
            ship.move()
        }

        while(asteroids.length < numAsteroids) {
            //add a new asteroid to the array
            asteroids.push(new Asteroid())

        }

        timer = requestAnimationFrame(main)


}//main() CLOSE

function scoreTimer() {
    if(gameOver == false){
        score++ //adds +1 to game score on screen
        if(score % 5 == 0) {//if score / 5 has a remainder of 0
        
                numAsteroids += 5 //add More asteroids
                console.log(numAsteroids)
        }
        setTimeout(scoreTimer,1000)
    }
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance //will return TRUE or FALSE value
}