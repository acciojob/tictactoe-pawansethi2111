//your JS code here. If required.
let btn = document.querySelector('button');
document.getElementById('submit').addEventListener('click',function(){
document.getElementsByClassName('hide')[0].style.display="none";	
});
let user1 = document.getElementById('player1');
let user2 = document.getElementById('player2');
let tick = document.getElementsByClassName('ticblock');
let chance  = 0;
let message = document.getElementsByClassName('message');

for(let i=0;i<tick.length;i++){ 
tick[i].addEventListener("click",function(){	
if(chance===0){	
	message.innerText= {user1}+"! You're up";
	tick[i].innerText = 'O';
	chance=1;
} 
else{
	message.innerText = {user2}+"! You're up";
	tick[i].innerText ='X';
	chance = 0;	
}
});
}