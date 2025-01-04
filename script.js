//your JS code here. If required.
let btn = document.querySelector('button');
document.getElementById('submit').addEventListener('click',function(){
document.getElementsByClassName('hide')[0].style.display="none";	
});
let boardpage = document.querySelector('.boardpage');
let user1 = document.getElementById('player1');
let user2 = document.getElementById('player2');
let tick = document.getElementsByClassName('ticblock');
let chance  = 0;
let message = document.getElementsByClassName('message');
 let player1 = user1.value;
let player2  = user2.value;
let arr  = new Array().fill("")
let correctval = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let i=0;i<tick.length;i++){ 
tick[i].addEventListener("click",function(e){	  
if(chance===0){	 
	boardpage.innerHTML= `${user1.value}! You're up`;
	tick[i].innerText = 'O';
	chance=1;
	arr[.e.target.id-1] = "o"
} 
else{
	boardpage.innerHTML = `${user2.value}! You're up`;
	tick[i].innerText ='X';
	chance = 0;	
		arr[.e.target.id-1] = "x"

}
});
}



function checkWinner(){
	if()
}