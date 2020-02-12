var userplayer = document.body.querySelector(".user");
var dragonplayer = document.body.querySelector(".dragon");
var winner = document.body.querySelector(".winner");

var user = 0;
var dragon = 0;
var userlimit = 5;
var dragonlimit = 10;

while(dragonlimit>0||userlimit>0){
 hits = prompt("Choose how many times you wish to hit the dragon from 1-5.");
 dragonlimit = dragonlimit-hits;
 user = Math.floor(Math.random()*2)+1;
 userlimit = userlimit - user;
      
if(user<1){
   winner.innerHTML="Congratulations! You are the winner!!!";
   break;
   }else if(userlimit<1){
   winner.innerHTML="I'm sorry. You have been defeated by the dragon :/";
   break;
   }
}