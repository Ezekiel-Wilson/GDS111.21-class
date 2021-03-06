

/*------------Use this if you want to implement States---------------*/
var gravity = 1;
var friction = {x:.85,y:.97}

var stage = new GameObject({width:canvas.width, height:canvas.height});

//Avatar
var wiz = new GameObject({width:128, height:128, spriteData:playerData}).makeSprite(playerData)
wiz.force=1

//Very back background
var sky = new GameObject({width:canvas.width, height:canvas.height, color:"transparent"})
sky.img.src=`images/bg122.png`


//The ground
var ground = new GameObject({width:canvas.width*10, height:64,y:canvas.height-32, color:"transparent"})
ground.img.src = `images/ground.png`

//A platform
var plat = new GameObject({width:256, height:64,y:canvas.height-200, color:"transparent"})
plat.img.src=`images/hoverboard.png`
//A level object when it is moved other objects move with it.
var level = new GameObject({x:0,y:0});
ground.world = level;
plat.world = level;

//Cave foreground Tile Grid
var cave = new Grid(caveData, {world:level, x:1024, tileHeight:64, tileWidth:64});
//Cave background Tile Grid
var caveBack = new Grid(caveBackData, {world:level, x:1024, tileHeight:64, tileWidth:64});
var caveHit = new Grid(caveHitData, {world:level, x:1024, tileHeight:64, tileWidth:64});

var leftBorder = new GameObject({x:0, height:canvas.height, world:level})

//This is a group used for collisions
var g1 = new Group();
g1.color= `rgb(251,0,254)`;

//Adds items to a group
g1.add([ground,leftBorder, caveHit.grid])

//removes items from a group
//g1.remove([plat, cave.grid])

//Used to draw the rectangles
var rects = new Group();
rects.add([ground,plat])

//used to render the sprites
var sprites = new Group();
sprites.add([caveBack.grid])

var front = new Group()
front.add([cave.grid])

//
var levelItems=new Group();
levelItems.add([caveBack.grid, ground, plat, cave.grid]);

//background
var bg = new GameObject({x:level.x,y:level.y, width:canvas.width*4, height:canvas.height})
bg.img.src=`images/eeee.png`

var clouds = new GameObject({x:level.x,y:level.y})
clouds.img.src=`images/mrt.jpg`

//farbackground
var rbg = new GameObject({x:level.x, y:level.y, width:1020, height:512, color:"transparent"})
rbg.img.src=`images/secondarybackground.png`

/*------------------vvBULLET STUFFvv----------------------*/

var bullets=[]
var canShoot=true;
var shotTimer = 0;
var shotDelay = 21;
var currentBullet = 0;


for(let i=0; i<100; i++)
{
	bullets[i] = new GameObject({width:32, height:32})
	bullets[i].img.src="images/attack.png"
	//bullets[i].makeSprite(playerData)
	bullets[i].y=-10000
	//bullets[i].changeState(`walk`)
}

//console.log(bullets)






/*------------------^^BULLET STUFF^^----------------------*/



gameStates[`level1`] = function()
{
	
	if(!keys[`W`] && !keys[`S`] && !keys[`D`] && !keys[`A`] && !keys[` `] && canShoot && wiz.canJump)
	{
		wiz.changeState(`idle`)
	}
	
	
	if(keys[`S`])
	{
		wiz.top={x:0,y:0};
		wiz.changeState(`crouch`)
	}
	else
	{
		wiz.top={x:0,y:-wiz.hitBoxHeight/2};
	}

	if(keys[`D`]  )
	{
		if(wiz.currentState != `crouch`) 
		{
			if(wiz.canJump)wiz.changeState(`walk`)
			wiz.vx += wiz.force
			wiz.dir=1;
		}
	}
	if(keys[`A`] )
	{
		if(wiz.currentState != `crouch` ) 
		{
			if(wiz.canJump)wiz.changeState(`walk`)
			wiz.vx += -wiz.force
			wiz.dir=-1;
		}
	}
	if(keys[`W`] && wiz.canJump )
	{
		wiz.canJump = false;
		wiz.vy = wiz.jumpHeight;
		wiz.changeState(`jump`)
		sounds.jump.volume=1
		
	}
	shotTimer--;
	if(shotTimer <=0)
	{
		canShoot=true
	}
	else
	{
		canShoot=false;
	}

	if(keys[` `] )
	{
		if(canShoot)
		{
			wiz.changeState(`attack`)
			shotTimer = shotDelay
			//console.log(`Boom`)

			bullets[currentBullet].vx = 5*wiz.dir;
			bullets[currentBullet].world = level;
			bullets[currentBullet].x = wiz.x-level.x + (wiz.dir * 30) ;
			bullets[currentBullet].y = wiz.y - 50;
			bullets[currentBullet].dir = wiz.dir;
			
			sounds.play(`attacks`);
			sounds.attacks.volume=.5

			currentBullet++;
			if(currentBullet>=bullets.length)
			{
				currentBullet=0
			}

		}
	}
	else
	{
		shotTimer=0
	}
	
	wiz.vy+= gravity
	wiz.vx *= friction.x
	wiz.vy *= friction.y
	wiz.x += Math.round(wiz.vx)
	wiz.y += Math.round(wiz.vy)

	let offset = {x:Math.round(wiz.vx), y:Math.round(wiz.vy)}
	
	while (plat.overlap(wiz.bottom) && wiz.vy>=0)
	{
		wiz.vy=0;
		wiz.canJump = true;
		wiz.y--;
		offset.y--;
	}
	/*if(wiz.overlap(plat,`bottom`,`x`))
	{
		wiz.vy=-10;
	}*/

	while(g1.collide(wiz.bottom) && wiz.vy>=0)
	{
		wiz.canJump = true;
			wiz.vy=0;
			wiz.y--;
			offset.y--;
	}
	while(g1.collide(wiz.top) && wiz.vy<=0 )
	{
			wiz.vy=0;
			wiz.y++;
			offset.y++;
	}
	while(g1.collide(wiz.left) && wiz.vx<=0 )
	{
		
			wiz.vx=0;
			wiz.x++;
			offset.x++;
	}
	while(g1.collide(wiz.right) && wiz.vx>=0 )
	{
		
			wiz.vx=0;
			wiz.x--;
			offset.x--;
	}
	
	

	//Makes the level move
	wiz.x -= offset.x;
	level.x -= offset.x;
	rbg.x -= offset.x*.5;

	

	bg.x = level.x*.75;
	clouds.x = level.x*.25;
	
	if(rbg.x < -rbg.width || rbg.x > rbg.width)
	{
		rbg.x=0; 
	}

	sky.drawStaticImage()
	
	var pattern = context.createPattern(ground.img, `repeat`);
	ground.color = pattern

	rbg.drawStaticImage([0,0]);
	rbg.drawStaticImage([-rbg.width,0]);
	rbg.drawStaticImage([rbg.width,0]);
	bg.drawStaticImage([0,0]);
	

	
	
	//rbg.render(`drawStaticImage`, [0,0])

	rects.render()
	plat.drawStaticImage([plat.width/-2,-plat.height/2-22]);
	
	

	/*context.beginPath()
	context.moveTo(0,wiz.bottom.y)
	context.lineTo(canvas.width,wiz.bottom.y)
	context.stroke();*/

	sprites.play().render(`drawSprite`);
	wiz.play(function(){return}).drawSprite()
	
	for(let i=0; i<bullets.length; i++)
	{
		//if(bullets[i].overlap(stage)) bullets[i].vy+=1;
		bullets[i].move()
		bullets[i].drawStaticImage()
		//bullets[i].angle+=10
		while(g1.collide(bullets[i].bottom) && bullets[i].vy>=0)
		{
			
			bullets[i].vy=0;
			bullets[i].y--;
			
		}
	}

	


	front.play().render(`drawSprite`);


}