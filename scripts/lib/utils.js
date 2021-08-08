
export function getTime() {
   console.log("get local time");
   return  (new Date().toLocaleTimeString());
}

export function getDate(){
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let dateString = day + '/' + month + '/' + year;
	return dateString;
} 

export function checkForDailyLogin(){
	if (getDate() > player.lastLogin){
			updateLastLogin();
			displayToast(`Welcome back ${player.name}. Here's a bonus for you!`);
			}
}

export function displayToast(message, type, timeout = 3000) {
	let toast = document.querySelector('.toast');
	toast.innerHTML = message;
	toast.classList.add('onScreen')
	setTimeout(function(){ 
			toast.classList.remove('onScreen'); 
	}, timeout);
}

export function destroyToast(){
	toast.classList.remove('onScreen');
}

export function updateLastLogin(){
	Player.lastLogin = getDate();
	savePlayer(player);
}