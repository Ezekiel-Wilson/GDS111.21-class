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
var gravity = 1









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
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	
	ball.vy= +ball.vy+gravity
	
	//Erase the Screen
	context.clearRect(0,0,canvas.width,canvas.height);	


	
	//paddle collision
	//top
	if(ball.hitTestObject(player1))
	{
		p1wins=+1;
		ball.x = player1.x + player1.height/2 + ball.width/2
		ball.vy= -ball.vy;
		if(ball.y < player1.x - player1.height/6)
		{
			
			ball.vx=-6;
		}
		if(ball.x > player1.x)
		{
			ball.vx= 6;
			
			
		}
	}
	//Update the Screen
	if(ball.x < 0 + ball.width/2)
	{ ball.x = canvas.width/2}
	
	//top
	
	
	


	
	if(d)
	{
		player1.x+=10; 	
	}
	if(a)
	{
		player1.x-=10;
	}
	
	
	if(player1.x > canvas.width - player1.width)
	{
		player1.x = canvas.width - player1.width
		
		player1.color="yellow"
	}
	if(player1.y < 0 + player1.height/2)
	{
	player1.y = 0 + player1.height/2
		player1.color="cyan"}
			
	
	
	
		
		//----Movement Using the Player's move() function----
		ball.move();
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


