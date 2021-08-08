export function loadLeaderboard() {
	for(var i = 0; i<localStorage.length; i++) {
			var fetchedData = localStorage.getItem(localStorage.key(i));
			var parsedData = JSON.parse(fetchedData);
			console.log(parsedData);
			buildLeaderboard(parsedData); 
	}
}

export function refreshLeaderboard(){
	let leaderboard = document.querySelector('.leaderboard_display');
	leaderboard.innerHTML = '';
	loadLeaderboard();
}

export function buildLeaderboard(player) {
	var lbCard = document.createElement('tr');
	lbCard.innerHTML =`
			<td>${player.name}</td>
			<td>${player.exp}</td>
			<td><button class="addfriend_button">ADD</button></td>
			`;
	leaderboardDisplay.append(lbCard);
}