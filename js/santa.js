var santa_move=0; 
var santa_direction=1; 
document.getElementById('animatedImage').style.top = 10;
document.getElementById('animatedImage').style.left = 10;
var timerToggle=null; 
animateBall();
function animateBall() {   
document.getElementById("animatedImage").style.left=santa_move + "px";
              //document.getElementById("animatedImage").style.top=santa_move + "px";
 santa_move+=santa_direction;
//400
if (santa_move>window.screen.width) { 
    //santa_direction=-1; 
document.getElementById('animatedImage').style.top = 10;
document.getElementById('animatedImage').style.left = 10;
santa_move=0;
}
 if (0>santa_move) { santa_direction=1; }
timerToggle=setTimeout(function() { animateBall(); },10);
}