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





	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	

	
	//Instantiate the Player
	
	var player1 = new GameObject();
	player1.x = 0;
	player1.width = 40;
	player1.height = 120;
	
	ball = new GameObject();

	var player2 = new GameObject();
	player2.x = 1024;
	player2.width = 40;
	player2.height = 120;
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx =15;
	ball.vy = 0;
	ball.width = 30;
	ball.height = 30;	
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width,canvas.height);	
	
	//paddle collision
	//top
	if(ball.hitTestObject(player1))
	{
		ball.x = player1.x + player1.width/1 + ball.width/1
		ball.vx= -ball.vx;
		if(ball.y < player1.y - player2.height/6)
		{
		
			ball.vy=+6;
		}
		if(ball.y > player1.y)
		{
			ball.vx= +6
			ball.vy = 6
			
		}
	}
	//Update the Screen
	if(ball.x < 0 + ball.width/2)
	{ ball.x = canvas.width/2}
	
	//top
	if(ball.hitTestObject(player2))
	{
		ball.x = player2.x - player2.width/2 - ball.width/2
		ball.vx= -ball.vx;
		if(ball.y < player2.y - player2.height/6)
		{
		
			ball.vy=-6;
		}
		if(ball.y > player2.y)
		{
			ball.vx= -6
			ball.vy = 6
			
		}
	}
	
	
	


	
	if(s)
	{
		player1.y+=10; 	
	}
	if(w)
	{
		player1.y-=10;
	}
	if(down)
	{
		player2.y+=10; 	
	}
	if(up)
	{
		player2.y-=10;
	}
	
	if(player1.y > canvas.height - player1.width)
	{
		player1.y = canvas.height - player1.width
		
		player1.color="yellow"
	}
	if(player1.y < 0 + player1.height/2)
	{
	player1.y = 0 + player1.height/2
		player1.color="lime"}
			
	
	
	if(player2.y > canvas.height - player2.width)
	{
		player2.y = canvas.height - player2.width
		
		player2.color="yellow"
	}
	if(player2.y < 0 + player2.height/2)
	{
	player2.y = 0 + player2.height/2
		player2.color="lime"}
		
		
		//----Movement Using the Player's move() function----
		ball.move();
		//---------------------------------------------------
		
		//--------------Bounce of Right----------------------
		if(ball.x > canvas.width - ball.height/2)
		{	
		ball.x = canvas.width/2
		ball.color="orange"
		}
		if(ball.x < 0 + ball.height/2)
		{	
		ball.vx = -ball.vx;
		ball.color="pink"
		}
		if(ball.y > canvas.height - ball.width/2)
		{
			ball.y = canvas.height - ball.width/2
			ball.vy = -ball.vy;
		ball.color="yellow"
		}
		if(ball.y < 0 + ball.height/2)
		{ball.vy = -ball.vy
		ball.color="lime"}
			
			
			
			
			//---------------------------------------------------
			
			ball.drawCircle();
			player1.drawRect();
			player2.drawRect()
		}


