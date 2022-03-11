/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/animate.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:7,
			cycle:true,
			frames:
			[
				{width:64, height:64, startX:0, startY:0},
				{width:64, height:64, startX:64, startY:0},
				{width:64, height:64, startX:128, startY:0},
				{width:64, height:64, startX:192, startY:0},
				{width:64, height:64, startX:256, startY:0},
				{width:64, height:64, startX:320, startY:0},
				{width:64, height:64, startX:384, startY:0}
			]
		},
		//The walwidth:128, height:128,
		jump:
		{
			fps:4,
			cycle:false,
			frames:
			[
				{width:64, height:64, startX:1600, startY:0},
				{width:64, height:64, startX:1664, startY:0},
				{width:64, height:64, startX:1728, startY:0},
				{width:64, height:64, startX:1792, startY:0}				
			]
		},
		//The jump animation 
		walk:
		{
			fps:7,
			cycle:true,
			frames:
			[
				{width:64, height:64, startX:1920, startY:0},
				{width:64, height:64, startX:1984, startY:0},
				{width:64, height:64, startX:2048, startY:0},
				{width:64, height:64, startX:2112, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:64, height:64, startX:960, startY:0},
				{width:64, height:64, startX:1024, startY:0},
				{width:64, height:64, startX:1088, startY:-1},
				{width:64, height:64, startX:1152, startY:-2},
				{width:64, height:64, startX:1216, startY:-3},
				{width:64, height:64, startX:1280, startY:-3},
				{width:64, height:64, startX:1344, startY:-3},
				{width:64, height:64, startX:1408, startY:-2},
				{width:64, height:64, startX:1472, startY:-1}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:64, height:64, startX:512, startY:0},
				{width:64, height:64, startX:576, startY:0},
				{width:64, height:64, startX:640, startY:0},
				{width:64, height:64, startX:704, startY:0},
				{width:64, height:64, startX:768, startY:0},
				{width:64, height:64, startX:832, startY:0},
				
				
			]
		}
	}
		
}