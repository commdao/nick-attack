// routes
   let startScreen = document.querySelector('.start_screen');
   let homeScreen = document.querySelector('.home_screen');
   let leaderboardScreen = document.querySelector('.leaderboard_screen');
   let battleScreen = document.querySelector('.battle_screen');
   let settingsScreen = document.querySelector('.settings_screen');
   let messagesScreen = document.querySelector('.messages_screen');
   let friendsScreen = document.querySelector('.friends_screen');
   let notificationsScreen = document.querySelector('.notifications_screen');
   let allScreens = [startScreen, homeScreen, leaderboardScreen, settingsScreen, battleScreen, messagesScreen, 
    friendsScreen, notificationsScreen]
  
  // notifications, modals, etc
    let modal = document.querySelector('.modal')
    let toast = document.querySelector('.toast');

//  Player

   let playerForm = document.querySelector('.player-form');

// buttons
   let homeButton = document.querySelector('.home_button')
   let exitButton = document.querySelectorAll('.exit_button')
   let leaderboardButton = document.querySelectorAll('.leaderboard_button')
   let settingsButton = document.querySelectorAll('.settings_button');
   let createPlayerButton = document.querySelector('.save_player_button')
   let battleButton = document.querySelector('.battle_button');
   let messagesButton = document.querySelector('.messages_button');
   let friendsButton = document.querySelector('.friends_button');
   let notificationsButton = document.querySelector('.notifications_button');

// event listeners - routes

   settingsButton.forEach(btn => btn.addEventListener('click', changeRoute(settingsScreen)));
   leaderboardButton.forEach(btn => btn.addEventListener('click', changeRoute(leaderboardScreen)));
   exitButton.forEach(btn => btn.addEventListener('click', changeRoute(startScreen)));
   battleScreen.addEventListener('click', changeRoute(battleScreen));
   messagesButton.addEventListener('click', changeRoute(messagesScreen));
   friendsButton.addEventListener('click', changeRoute(friendsScreen));
   notificationsButton.addEventListener('click', changeRoute(notificationsScreen));
//  event listeners - player
    createPlayerButton.addEventListener('click', createPlayer);

// dynamic content
   let playerDisplay = document.querySelector('.player-display');
   let leaderboardDisplay = document.querySelector('.leaderboard_display');


// initial localStorage load
  window.onload = function() {
    getDate();
    loadLeaderboard();
  };

  function getDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateString = day + '/' + month + '/' + year;
    return dateString
  }
      
  function loadLeaderboard() {
    for(var i = 0; i<localStorage.length; i++) {
      var fetchedData = localStorage.getItem(localStorage.key(i));
      var parsedData = JSON.parse(fetchedData);
      console.log(parsedData);
      buildLeaderboard(parsedData); 
    }
  }

  function refreshLeaderboard(){
    let leaderboard = document.querySelector('.leaderboard_display');
    leaderboard.innerHTML = '';
    loadLeaderboard();
  }
  
  function checkIfLoggedIn(e){
    e.preventDefault();
    if(loggedIn){
      console.log(`user logged in as ${player.name}`);
      displayToast('Welcome back, ' + player.name);
      changeRoute(homeScreen)(e);

    } else {
      startGame(level = 0, difficulty = 0, mods=null)
    }
  }

  function displayToast(message){
    toast.innerHTML = message;
    toast.classList.add('onScreen')
    setTimeout(function(){ 
      toast.classList.remove('onScreen'); 
    }, 3000);
  }

//  Player
  function Player(name) {
    this.name = name;
    this.exp = 0;
    this.id = Date.now();
    this.friends = [];
    this.recentAchievement = [];
    this.skills = [];
    this.initialLogin = getDate();
    this.lastLogin;
  }

  // i need to write a function that updates my players last login time

  function updateLastLogin(){
    Player.lastLogin = getDate();
    savePlayer(player);
  }

  createPlayerButton.addEventListener('click', createPlayer);

  function createPlayer(e){
    e.preventDefault();
    let playerName = document.querySelector('.player-name-input-field').value;
    let newPlayer = new Player(playerName)
    localStorage.setItem(newPlayer.id, JSON.stringify(newPlayer))
    player.loggedIn = true;
  }

  function savePlayer(player) {
    if(!loggedIn){return}
    console.log('beginning save')
    localStorage.setItem(player.id, JSON.stringify(player));
    console.log('save complete, thanks for playing', player);
  }

  function loadPlayer(player){
    localStorage.getItem(player.id)
    // players can only log in from the start screen, can log out from the settings screen
    console.log(player);
  }

  //  Friends 

  function addFriend(player){
    var newFriend = new Player(player.id, player.name);
    newFriend.id = player.id;
    friendsArray.push(newFriend)
    savePlayer(player)
  }

  function deleteFriend(friend){
    friendsArray.splice(friendsArray.indexOf(friend), 1);
  }

  // leaderboard

  function buildLeaderboard(player) {
    var lbCard = document.createElement('tr');
    lbCard.innerHTML =`
      <td>${player.name}</td>
      <td>${player.exp}</td>
      <td><button class="addfriend_button">ADD</button></td>
      `;
    leaderboardDisplay.append(lbCard);
  }

  // navigation 

  function changeRoute(route){
    return function(e){
      e.preventDefault();
      allScreens.forEach(screen => screen.style.display = "none");
      route.style.display = "block";
    }
  }

  function loginReward(){
    if (getDate() > player.lastLogin){
      updateLastLogin();
      displayToast(`Welcome back ${player.name}. Here's a bonus for you!`);
      }
    }