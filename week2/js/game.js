var canvas;
var context;
var timer;
var interval = 1000/60;
var player1;



	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	

	
	//Instantiate the Player
	
	var player1 = new GameObject();
	player1.x = 100;
	player1.width = 20;
	player1.height = 60;
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width,canvas.height);	
	
	//Move the Player

	
	//Update the Screen
	player1.drawRect();
	


}
