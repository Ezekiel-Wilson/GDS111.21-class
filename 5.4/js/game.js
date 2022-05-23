	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw a lazy version of the "matrix"----------------------------------
	//---------------------You will recalculate some particles positions and colors when they move off screen---------------
	//---------------------Follow the commented instructions below to complete this assignment------------------------------

var canvas;
var context;
var timer;
var interval;
var player;
var frictionX =.9;
var frictionY =.9;
var timer1;
var score = 0;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


 var player1 = new GameObject();
player1.color="cyan"
player1.x = canvas.width/2;
player1.y = 775;
player1.width = 50;
player1.height = 50;
	
	var amount = 5;
	var particles = [];
	var hazards= [];
	

	
	
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:50, height:50});
		particles[i].color="pink";
		
	
	
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = -canvas.height-100;
		particles[i].vy = Math.random() * 10 + 5;
	}
	for(var i = 0; i < amount; i++)
	{
		hazards[i] = new GameObject({width:50, height:50});
		hazards[i].color="green";
	
	
		hazards[i].x = Math.random() * canvas.width;
		hazards[i].y = -canvas.height-100;
		hazards[i].vy = Math.random() * 10 + 5;
	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{	
	context.clearRect(0,0,canvas.width, canvas.height);	
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
	



	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
			
		
		
		if(particles[p].y >= 800)
		{
			particles[p].y= -canvas.height-100;
			particles[p].vy= Math.random() * 10 + 5;
		}


		if(particles[p].hitTestObject(player1))
	{
		score+=1;
			player1.color="green";
			
			clearTimeout(timer1);
			timer1 = setTimeout (function()
			{
				player1.color="cyan";
			}, 500);

		particles[p].y= - canvas.height - 100;
	}
		particles[p].drawRect();
	}
	for(var h = 0; h < hazards.length; h++)
	{	
		hazards[h].x += hazards[h].vx;
		hazards[h].y += hazards[h].vy;
			
		
		
		if(hazards[h].y >= 800)
		{
			hazards[h].y= -canvas.height-100;
			hazards[h].vy= Math.random() * 10 + 5;
		}

		if(hazards[h].hitTestObject(player1))
		{
			score=0;
				player1.color="pink";
				
				clearTimeout(timer1);
				timer1 = setTimeout (function()
				{
					player1.color="cyan";
				}, 500);
				
				for(var o = 0; o < amount; o++)
				{
					hazards[o].y= - canvas.height-100;
				}
				for(var k = 0; k < amount; k++)
				{
					particles[k].y= - canvas.height-100;
				}
		}

		
		hazards[h].drawCircle();
	}
	context.font = "16px Arial black";
	context.fillStyle = "#555555"
	context.fillText("Score "+  score, 80, 25);
	player1.drawRect();
}


