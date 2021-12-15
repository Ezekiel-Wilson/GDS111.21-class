var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array();
var numAsteroids = 10
var gameOver = true
var score = 0
var invincible = false
var powerUp = new Array()
var numPowerUp = 1
 
 
 
 
var gameStates= []
var currentState= 0
var ship
 
var shipSprite = new Image()
shipSprite.src = "images/ship.png"
shipSprite.onload = function (){
 
}
 
var asteroidSprite = new Image()
asteroidSprite.src = "images/goldfish.png"
asteroidSprite.onload = function(){
 
}
 
var powerSprite = new Image()
powerSprite.src = "images/pow.png"
powerSprite.onload = function (){
 
}
 
var gStart = new Image()
gStart.src = "images/start.jpg"
gStart.onload = function(){
 
}
 
var gOver = new Image()
gOver.src = "images/end.jpg"
gOver.onload = function() {
 
}
 
function randomRange(high, low){
    return Math.random() * (high-low) + low;
}
 

function Asteroid(){
    this.radius = randomRange(33,10);
    this.x = randomRange(c.width - this.radius, 0 + this.radius) + c.width
    this.y = randomRange(c.height - this.radius, 0 + this.radius)
    this.vx = randomRange(-8, -15)
    this.vy = randomRange(15,8)
    this.color = "white";
 
    this.draw = function(){
      
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
      
        context.drawImage(asteroidSprite, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2)
        context.closePath();
        context.fill();
        context.restore();
    }
}
 
function Powerup(){
    this.radius = randomRange(30,29);
    this.x = randomRange(c.width - this.radius, 0 + this.radius) + c.width
    this.y = randomRange(c.height - this.radius, 0 + this.radius)
    this.vx = randomRange(-8, -15)
    this.vy = randomRange(15,8)
    this.color = "purple"
 
    this.draw = function(){
      
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
      
        context.drawImage(powerSprite, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2)
        context.closePath();
        context.fill();
        context.restore();
    }
}
 
function gameStart(){
 
    for(var i = 0; i<numPowerUp; i++){
        powerUp[i] = new Powerup();
        
        
        ship = new PlayerShip()
    }
 
}
 
 
 
 
 
function gameStart(){
   
    for(var i = 0; i<numAsteroids; i++){
        asteroids[i] = new Asteroid(); 
        
   
        ship = new PlayerShip()
    }
 
}
 

function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;
 
    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        
        if(this.up == true){
            context.save();
          
            if(this.flamelength == 150){
                this.flamelength = 130;
            }
            else{
                this.flamelength = 150;
            }
            context.fillStyle = "purple";
            context.beginPath();
            context.moveTo(0, this.flamelength);
            context.lineTo(5, 5);
            context.lineTo(-5, 5);
            context.lineTo(0, this.flamelength);
            context.closePath();
            context.fill();
            context.restore();
        }
        context.drawImage(shipSprite, -20,-20,80,50)
        console.log("shipSprite drawImage")
        context.restore()
        
    }
 
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
       
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0;
        }
        
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
   
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        
        if(this.x < 0 + 10){
            this.x =  10;
            this.vx = 0;
        }
    }
}
 

 
document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);
 
function keyPressDown(e){
    console.log("key press down()")
   
    
    if(gameOver == false){
        if(e.keyCode === 38){
            ship.up = true;
        }
        if(e.keyCode === 40){
            ship.left = true;
        }
        if(e.keyCode === 39){
            ship.right = true;
        }
        
    }
 
   
    if(gameOver == true) {
        console.log("gameOver === true")
      
        if(e.keyCode === 13){
            console.log("recog enter key")
            console.log("current state", currentState)
        
            if(currentState == 2) {
                console.log("current state is 2")
                score = 0
                numAsteroids = 10
                asteroids = []
                gameStart()
 
                currentState = 0
            }
 
            
 
            else{
 
                gameStart()
                gameOver = false
               
                currentState = 1
                setTimeout(scoreTimer, 1000)
            }
        }
    }
}
 
function keyPressUp(e){
    
    
    if(e.keyCode === 38){
        ship.up = false;
    }
    if(e.keyCode === 40){
        ship.left = false;
    }
    if(e.keyCode === 39){
        ship.right = false;
    }
    
}
 

 
gameStates[0] = function(){
    context.save()
    context.drawImage(gStart,0,0,800,600)
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("Challenger Mission", c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("Press ENTER to Start!", c.width/2, c.height/2 + 20)
    context.restore()
    
}
 
gameStates[1] = function(){
    context.save();
    
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30);
    context.restore();
 
  
 
    if(ship.up == true){
        ship.vy = -5;
    }
    else{
        ship.vy = 0;
    }
 
    if(ship.left == true){
        ship.vy = 5;
    }
    else if(ship.right == true){
        ship.vx = 5;
    }
    else{
        ship.vx = -4;
    }
 
    for(var i = 0; i<asteroids.length; i++){
       
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));
        
     
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius)) && invincible == false){
           
            gameOver = true
            currentState = 2 
        }
 
        
        if(asteroids[i].y > c.height + asteroids[i].radius){
        
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
        }
        if(gameOver == false){
            asteroids[i].x += asteroids[i].vx;
        }
        asteroids[i].draw();
    }
 
    ship.draw();
    if(gameOver == false){
      ship.move();  
    }
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }
 
    for(var i = 0; i<powerUp.length; i++){
        
        var dX = ship.x - powerUp[i].x;
        var dY = ship.y - powerUp[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));
        
        
        if(detectCollision(dist, (ship.h/2 + powerUp[i].radius)) && invincible == false){
          
            gameOver = false
            invincible = true
            if(invincible == true){
                
                setTimeout(TimeInterval, 5000)
            }
            
        }
 
        
        if(powerUp[i].y > c.height + powerUp[i].radius){
            
            powerUp[i].y = randomRange(c.height - powerUp[i].radius, 0 + powerUp[i].radius)-c.height;
            powerUp[i].x = randomRange(c.width - [i].radius, 0 + powerUp[i].radius);
        }
        if(gameOver == false){
            powerUp[i].x += powerUp[i].vx;
        }
        powerUp[i].draw();
    }
 
    ship.draw();
    if(gameOver == false){
      ship.move();  
    }
    while(powerUp.length < numPowerUp){
        powerUp.push(new Powerup());
    }
 
}
 
gameStates[2] = function() {
    context.save()
    context.drawImage(gOver,0,0,800,600)
    context.font = "30px Arial"
    context.fillStyle = "gold"
    context.textAlign = "center"
    context.fillText("You blew up: " + score.toString(), c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("Press ENTER to Play Again!", c.width/2, c.height/2 + 20)
    context.restore()
 
}
 
 
function main(){
    context.clearRect(0,0, c.width, c.height);
 
    
   
    gameStates[currentState]() 
 
    timer = requestAnimationFrame(main);
}
 
function scoreTimer(){
    if(gameOver == false){
        score++;
        
        if(score % 2 == 0){
            numAsteroids += 10;
           
            console.log(numAsteroids);
            
        }
        if(score % 10 == 0){
            numPowerUp += 1
            console.log(numPowerUp)
        }
 
        setTimeout(scoreTimer,1000)
    }
}

 
 
function TimeInterval(){
 
    invincible = false
    clearTimeout()
}
 
function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}
