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

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	var player1 = new GameObject();
	player1.color="cyan"
	player1.x = canvas.width/2;
	player1.y = 550;
	player1.width = 250;
	player1.height = 40;

	ball = new GameObject();

	ball.color="magenta";
	ball.vx =5;
	ball.vy = 0
	gravity=1;
	ball.width = 80;
	ball.height = 80;
	ball.force = 5;	

	timer = setInterval(animate, interval);

function animate()
{

	context.clearRect(0,0,canvas.width,canvas.height);	
	ball.vx*=frictionX;
	ball.vy*=frictionY;
	ball.vy= ball.vy+gravity
	ball.move();

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
		player1.vx = 0
		player1.color="cyan"
	}
	if(player1.x < 0 + player1.width/2)
	{
	player1.x = 0 + player1.width/2
		player1.color="cyan"
		player1.vx=0
	}

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

		}
		if(ball.y > canvas.height - ball.width/2)
		{
			ball.y = canvas.height - ball.width/2
			ball.vy = -ball.vy;
		
		p1wins=0
		}
		if(ball.y < 0 + ball.height/2)
		{ball.vy = -ball.vy
		}

			context.font = "16px Arial black";
			context.fillStyle = "#555555"
			context.fillText("Score "+  p1wins, 80, 25);
			
			
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


