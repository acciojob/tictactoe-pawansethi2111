//your JS code here. If required.
let btn = document.querySelector('button');
document.getElementById('submit').addEventListener('click',function(){
document.getElementsByClassName('hide')[0].style.display="none";	
});
let boardpage = document.querySelector('.boardpage');

let tick = document.getElementsByClassName('ticblock');
let chance  = 0;
let message = document.getElementsByClassName('message');
 
// let arr  = new Array().fill("")
// let correctval = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let i=0;i<tick.length;i++){ 
let user1 = document.getElementById('player1');
let user2 = document.getElementById('player2');

tick[i].addEventListener("click",function(e){	
let player1 = user1.value;
let player2  = user2.value;

if(chance===0){	 
	boardpage.innerHTML= `${player1}! You're up`;
	tick[i].innerText = 'O'; 
	chance=1;
	if(checkWinner(arr,player1)){
		break;
	}
	//arr[.e.target.id-1] = "o"
} 
else{
	boardpage.innerHTML = `${player2}! You're up`;
	tick[i].innerText ='X';
	chance = 0;	
	if(checkWinner(arr,player2)){
		break;
	}
		//arr[.e.target.id-1] = "x"
}
});
}



function checkWinner(arr,player){	
if(arr[0] == arr[1] && arr[1] == arr[2])
	||(arr[3]==arr[4]&& arr[4]==arr[5])
	||(arr[6]==arr[7]&& arr[7]==arr[8])
	||(arr[0]==arr[3]&& arr[3]==arr[6])
	||(arr[1]==arr[4]&& arr[4]==arr[7])
	||(arr[2]==arr[5]&& arr[5]==arr[8])
	||(arr[0]==arr[4]&& arr[4]==arr[8])
	||(arr[2]==arr[4]&& arr[4]==arr[6])
	{
		message.innerHTML = `${player} has won`;
	}
	return true;
}





