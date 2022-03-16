/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:421, height:168}).makeSprite(buttonData)


var menuBackground = new GameObject();
menuBackground.img.src = "images/weedmannostart.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`music`)
			sounds.music.volume=.4
		}

		//Hover Effect Graffic
		startButton.changeState(`hover`)
		canvas.style.cursor=`pointer`;
		
			
	} 	
	else
	{
		//Default Button Graphic
		startButton.changeState(`idle`)
		
		
	}
	
	
	menuBackground.drawStaticImage();
	startButton.play().drawSprite()
}
	
	