var canvas;
var context;
var timer;
var interval = 1000/60;
var player1;
var ball;
var prevY;
var prevX;
var playerY;
var player2;
var p1wins=0;
var gravity = 1;
var frictionX =.97;
var frictionY =.97;
var ax = 1;
var force = 1;
var vx = 0;









	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	

	
	//Instantiate the Player
	
	var player1 = new GameObject();
	player1.x = canvas.width/2;
	player1.y = 550;
	player1.width = 250;
	player1.height = 40;

	
	ball = new GameObject();
	



	
	//------Declare the Player's speed on the x and y axis------
	ball.vx =5;
	ball.vy = 0
	gravity=1;
	ball.width = 80;
	ball.height = 80;
	ball.force = 2;	
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	
	
	
	//Erase the Screen
	context.clearRect(0,0,canvas.width,canvas.height);	
	ball.vx*frictionX;
	ball.vy*frictionY;
	ball.vy= ball.vy+gravity
	ball.move();


	
	//paddle collision
	//top
	if(ball.hitTestObject(player1))
	{
		p1wins+=1
		ball.y = player1.y - player1.height/2 - ball.height/2
		ball.vy=-35;
		if(ball.x > player1.x + player1.width/6)
		{
			
			ball.vx=ball.force;
			
		}
		if(ball.x < player1.x - player1.width/6)
		{
			
			ball.vx = -ball.force;
			
		}
	
		if(ball.x > player1.x + player1.width/3)
		{
			ball.vx=ball.force*5
			
			
		}
		if(ball.x < player1.x - player1.width/3)
		{
			
			ball.vx = -ball.force*5
			
			
		}
	}
	//Update the Screen

	
	
	//top
	
	
	


	
	if(d)
	{
	player1.vx += player1.ax * player1.force;
	}
	if(a)
	{
	player1.vx += player1.ax * -player1.force;
	}	
	player1.vx*= frictionX
	player1.x += player1.vx

	
	if(player1.x > canvas.width - player1.width/2)
	{
		player1.x = canvas.width - player1.width/2
		
		player1.color="yellow"
	}
	if(player1.x < 0 + player1.width/2)
	{
	player1.x = 0 + player1.width/2
		player1.color="cyan"}
			
	
	
	
		
		//----Movement Using the Player's move() function----
		
		//---------------------------------------------------
		
		//--------------Bounce of Right----------------------
		if(ball.x > canvas.width - ball.height/2)
		{	
		ball.x = canvas.width - ball.width/2 
		ball.color="magenta"
		ball.vx = -ball.vx
		}
		
		
		if(ball.x < 0 + ball.width/2)
		{	
		ball.x = ball.height
		ball.vx = -ball.vx;
		ball.color="pink"
		
		
		}
		if(ball.y > canvas.height - ball.width/2)
		{
			ball.y = canvas.height - ball.width/2
			ball.vy = -ball.vy;
		ball.color="yellow"
		p1wins=0
		}
		if(ball.y < 0 + ball.height/2)
		{ball.vy = -ball.vy
		ball.color="lime"}
			
			
			
			
			//---------------------------------------------------
			context.font = "20px Arial";
			context.fillText("Player One || Player Two" , 400, 25);
			context.fillText(p1wins, 497.5,59);
			ball.drawCircle();
			player1.drawRect();
			
			context.save();
		
			context.beginPath();
			context.moveTo(player1.x,player1.y);
			context.lineTo(ball.x,ball.y);
			context.closePath();
			context.lineWidth = 2;
			context.stroke();
			context.restore();

			

		}


