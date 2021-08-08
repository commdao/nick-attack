export function Player(name) {
	this.name = name;
	this.exp = 0;
	this.id = Date.now();
	this.friends = [];
	this.recentAchievement = [];
	this.skills = [];
	this.initialLogin = new Date();
	this.lastLogin;
}

export function convertXPtoLevels()	{
	return Math.floor(Math.log(this.exp) / Math.log(2));
}

export function createPlayer(){
	let playerName = 'fart'
	// let playerName = document.querySelector('.player-name-input-field').value;
	let player = new Player(playerName)
	localStorage.setItem(player.id, JSON.stringify(player))
	console.log(player.name);
}

export function savePlayer(player) {
	localStorage.setItem(player.id, JSON.stringify(player));
	console.log('save complete', player);
}

export function loadPlayer(player){
	localStorage.getItem(player.id)
}

export function addFriend(name, id){
	let player = getPlayer(id);
	player.friends.push(name);
	savePlayer(player);
}

export function removeFriend(id){
	let player = getPlayer(id);
	let index = player.friends.indexOf(name);
	player.friends.splice(index, 1);
	savePlayer(player);
}


