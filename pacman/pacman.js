const PACMAN_SPEED = 10;
var output;
var pacman;
var loopTimer;
var numLoops = 0;
var upArrowDown=false;
var downArrowDown = false;
var leftArrowDown = false;
var rightArrowDown = false;

function loadComplete(){
	output = document.getElementById('output');
	pacman = document.getElementById('pacman');
	
	pacman.style.left ='280px';
	pacman.style.top = '260px';
	
	loopTimer = setInterval(loop,50);
	
	//output.innerHTML = pacman.src;
}
function loop(){
    numLoops++;
    if(upArrowDown){
        var pacmanY = parseInt(pacman.style.top)-PACMAN_SPEED;
        pacman.style.top = pacmanY+'px';
    }
    if(downArrowDown){
        var pacmanY = parseInt(pacman.style.top)+PACMAN_SPEED;
        pacman.style.top = pacmanY+'px';
    }
    if(leftArrowDown){
        var pacmanX = parseInt(pacman.style.left)-PACMAN_SPEED;
        pacman.style.left = pacmanX+'px';
    }
    if(rightArrowDown){
        var pacmanX = parseInt(pacman.style.left)+PACMAN_SPEED;
        pacman.style.left = pacmanX+'px';
    }
    //output.innerHTML = numLoops;
}
document.addEventListener('keydown',function(event){
   //output.innerHTML = event.keyCode;
   if(event.keyCode==37) leftArrowDown = true;
   if(event.keyCode==38) upArrowDown = true;
   if(event.keyCode==39) rightArrowDown = true;
   if(event.keyCode==40) downArrowDown = true;

});
document.addEventListener('keyup',function(event){
     if(event.keyCode==37) leftArrowDown = false;
   if(event.keyCode==38) upArrowDown = false;
   if(event.keyCode==39) rightArrowDown =false;
   if(event.keyCode==40) downArrowDown = false;
});
