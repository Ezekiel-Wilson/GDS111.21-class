var buttonData ={
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
				{width:64, height:64, startX:0, startY:0}	
			]
		},
		//The walwidth:128, height:128,
		hover:
		{
			fps:4,
			cycle:false,
			frames:
			[
				{width:64, height:64, startX:1600, startY:0}
            ]							
			
		}
	}
		
}