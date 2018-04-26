const PACMAN_SPEED = 10;
const GHOST_SPEED = 5;
var output;
var pacman;
var redGhost;
var loopTimer;
var numLoops = 0;
var upArrowDown=false;
var downArrowDown = false;
var leftArrowDown = false;
var rightArrowDown = false;
var direction = 'right';
var walls = new Array();
var rgDirection;
//var wall_1;

function loadComplete(){
	output = document.getElementById('output');
	pacman = document.getElementById('pacman');
	pacman.style.left ='280px';
	pacman.style.top = '240px';
	pacman.style.width = '40px';
	pacman.style.height = '40px';
	
	pacman = document.getElementById('redGhost');
	pacman.style.left ='280px';
	pacman.style.top = '40px';
	pacman.style.width = '40px';
	pacman.style.height = '40px';
	
	loopTimer = setInterval(loop,50);
	//inside walls
	createWall(200,280,200,40);
	//top wall
	createWall(-20,0,640,40);
	//left side walls
	createWall(0,0,40,180);
	createWall(0,220,40,180);
	//right side walls
	createWall(560,0,40,180);
	createWall(560,220,40,180);
	//bottom wall
	createWall(-20,360,640,40);
	//maze
	createWall(120,80,40,40);
	createWall(160,80,40,40);
	createWall(200,80,40,40);
	createWall(200,120,40,40);
	createWall(360,80,40,40);
	createWall(400,80,40,40);
	createWall(440,80,40,40);
	createWall(440,120,40,40);
	createWall(120,200,40,40);
	createWall(160,200,40,40);
	createWall(200,200,40,40);
	createWall(360,200,40,40);
	createWall(400,200,40,40);
	createWall(440,200,40,40);
	createWall(440,200,40,40);
	createWall(440,240,40,40);
	createWall(240,280,40,40);
	createWall(280,280,40,40);
	createWall(320,280,40,40);
	
	
	
// 	if(hittest(wall_1,pacman)){
// 	    pacman.style.left = originalLeft;
// 	    pacman.style.top = originalTop;
// 	}
// // 	wall_1 = document.createElement('div');
// 	wall_1.setAttribute('id','wall_1');
// 	wall_1.className = 'wall';
// 	wall_1.style.left = '200px';
// 	wall_1.style.top = '300px';
// 	wall_1.style.height ='40px';
// 	wall_1.style.width ='200px';
// 	gameWindow.appendChild(wall_1);
	
	//output.innerHTML = pacman.src;
}
function createWall(left,top,width,height){
    var wall = document.createElement('div');
    wall.className = 'wall';
    wall.style.left = left+'px';
    wall.style.top = top +'px';
    wall.style.width = width+'px';
    wall.style.height = height + 'px';
    gameWindow.appendChild(wall);
    
    walls.push(wall);
    //output.innerHTML = walls.length;
}
function loop(){
    numLoops++;
    tryToChangeDirection();
    
    var originalLeft = pacman.style.left;
    var originalTop = pacman.style.top;
    
    if(direction == 'up'){
        var pacmanY = parseInt(pacman.style.top)-PACMAN_SPEED;
        if(pacmanY<-30) pacmanY = 390;
        pacman.style.top = pacmanY+'px';
    }
    if(direction == 'down'){
        var pacmanY = parseInt(pacman.style.top)+PACMAN_SPEED
        if(pacmanY>390) pacmanY = -30;;
        pacman.style.top = pacmanY+'px';
    }
    if(direction == 'left'){
        var pacmanX = parseInt(pacman.style.left)-PACMAN_SPEED;
        if(pacmanX<-30) pacmanX = 590;
        pacman.style.left = pacmanX+'px';
    }
    if(direction == 'right'){
        var pacmanX = parseInt(pacman.style.left)+PACMAN_SPEED;
        if(pacmanX>590) pacmanX = -30;
        pacman.style.left = pacmanX+'px';
    }
    if(hitWall(pacman)){
        pacman.style.left = originalLeft;
        pacman.style.top = originalTop;
    }
    if(hittest(pacman,redGhost)){
        clearInterval(loopTimer);
    }
    
    //red Ghost
    var rgX = parseInt(redGhost.style.left);
    var rgY = parseInt(redGhost.style.top);
    var rgNewDirection;
    
    var rgOppositeDirection;
    if(rgDirection = 'left') rgOppositeDirection = 'right';
    else if(rgDirection ='right') rgOppositeDirection ='left';
    else if(rgDirection ='down') rgOppositeDirection ='up';
    else if(rgDirection ='up') rgOppositeDirection ='down';
    // if(rgX>590) rgX = -30;
    // redGhost.style.left = rgX +GHOST_SPEED+'px';'
    do{
        var r = Math.floor(Math.random()*4);
        if(r == 0) rgNewDirection = 'right';
        else if(r == 1) rgNewDirection = 'left';
        else if(r == 2) rgNewDirection = 'down';
        else if(r == 3) rgNewDirection = 'up';
    }while(rgNewDirection == rgOppositeDirection);
    
    if(hittest(pacman,redGhost)){
        clearInterval(loopTimer);
    }
 
}
function tryToChangeDirection(){
    var originalLeft = pacman.style.left;
    var originalTop = pacman.style.top;
    
   //output.innerHTML = event.keyCode;
   if(leftArrowDown){
       //leftArrowDown = true;
       pacman.style.left = parseInt(pacman.style.left)-PACMAN_SPEED+'px';
       if(!hitWall(pacman)){
            direction = 'left';
            pacman.className ="flip-horizontal";
       }
   }
   if(upArrowDown){
        //upArrowDown = true;
        pacman.style.top = parseInt(pacman.style.top) - PACMAN_SPEED +'px';
        if(!hitWall(pacman)){
            direction = 'up';
            pacman.className ="rotate270";
        }
   }
   if(rightArrowDown){
       //rightArrowDown = true;
       pacman.style.left = parseInt(pacman.style.left)+PACMAN_SPEED+'px';
       if(!hitWall(pacman)){
           direction = 'right';
           pacman.className ="";
       }
   }
   if(downArrowDown){
        //downArrowDown = true;
        pacman.style.top = parseInt(pacman.style.top)+PACMAN_SPEED+'px';
        if(!hitWall(pacman)){
            direction = 'down';
            pacman.className ="rotate90";
        }
   }
   pacman.style.left = originalLeft;
   pacman.style.top = originalTop;
}
function hitWall(element){
    var hit = false;
    for(var i = 0; i < walls.length;i++){
        if(hittest(walls[i],element))hit = true;
    }
    return hit;
}
// document.addEventListener('keydown',function(event){
//   //output.innerHTML = event.keyCode;
//   if(event.keyCode==37){
//       //leftArrowDown = true;
//       pacman.style.left = parseInt(pacman.style.left)-PACMAN_SPEED+'px';
//       if(!hit()){
//             direction = 'left';
//             pacman.className ="flip-horizontal";
//       }
//   }
//   if(event.keyCode==38){
//         //upArrowDown = true;
//         pacman.style.top = parseInt(pacman.style.top) - PACMAN_SPEED +'px';
//         if(!hit()){
//             direction = 'up';
//             pacman.className ="rotate270";
//         }
//   }
//   if(event.keyCode==39){
//       //rightArrowDown = true;
//       pacman.style.left = parseInt(pacman.style.left)+PACMAN_SPEED+'px';
//       if(!hit()){
//           direction = 'right';
//           pacman.className ="";
//       }
//   }
//   if(event.keyCode==40){
//         //downArrowDown = true;
//         pacman.style.top = parseInt(pacman.style.top)+PACMAN_SPEED+'px';
//         if(!hit()){
//             direction = 'down';
//             pacman.className ="rotate90";
//         }
//   }
//   pacman.style.left = originalLeft;
//   pacman.style.top = originalTop;

// });
document.addEventListener('keydown',function(event){
    if(event.keyCode==37) leftArrowDown = true;
    if(event.keyCode==38) upArrowDown = true;
    if(event.keyCode==39) rightArrowDown =true;
    if(event.keyCode==40) downArrowDown = true;
});
document.addEventListener('keyup',function(event){
    if(event.keyCode==37) leftArrowDown = false;
    if(event.keyCode==38) upArrowDown = false;
    if(event.keyCode==39) rightArrowDown =false;
    if(event.keyCode==40) downArrowDown = false;
});
