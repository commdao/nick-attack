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
   homeButton.addEventListener('click', checkIfLoggedIn);

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

   let today = new Date();
   let loggedIn = true;

// initial localStorage load
  window.onload = function() {
    loadLeaderboard();
  };
      
  function loadLeaderboard() {
    for(var i = 0; i<localStorage.length; i++) {
      var fetchedData = localStorage.getItem(localStorage.key(i));
      var parsedData = JSON.parse(fetchedData);
      buildLeaderboard(parsedData); 
    }
  }
  
  function checkIfLoggedIn(e){
    e.preventDefault();
    if(loggedIn){
      changeRoute(homeScreen)(e);
    } else {
      console.log('else')
    }
  }

//  Player
  function Player(name) {
    this.name = name;
    this.exp = 0;
    this.id = Date.now();
    this.friends = [];
    this.recentAchievement = [];
    this.skills = [];
    this.initialLogin = new Date();
    this.lastLogin = '';
  }

  function buildLeaderboard(player) {
    var lbCard = document.createElement('tr');
    lbCard.innerHTML =`
    <td>${player.name}</td>
    <td>${player.exp}</td>
    <td><button class="addfriend_button">ADD</button></td>
    `;
    leaderboardDisplay.append(lbCard);
  }

  createPlayerButton.addEventListener('click', createPlayer);
  // we need to add this createPlayer function to the post-game screen of the tutorial, and add a load character screen in it's place
  function createPlayer(e){
    e.preventDefault();
    let playerName = document.querySelector('.player-name-input-field').value;
    let newPlayer = new Player(playerName)
    localStorage.setItem(newPlayer.id, JSON.stringify(newPlayer))

    loggedIn = true;
  }

  function addFriend(player){
    var newFriend = new Player(player.name);
    newFriend.exp = player.exp;
    newFriend.id = player.id;
    friendsArray.push(newFriend)
  }
  
  // I think we need a function to save the player
  // and then a function to load the player

  function savePlayer(player) {
    if(!loggedIn){return}
    console.log('beginning save')
    localStorage.setItem(player.id, JSON.stringify(player));
    console.log('save complete, thanks for playing', player);
  }

  function buildLeaderboard(player) {
    var lbCard = document.createElement('tr');
    lbCard.innerHTML =`
        <td>${player.name}</td>
        <td>${player.exp}</td>
        <td><button class="addfriend_button">ADD</button></td>
      `;
    leaderboardDisplay.append(lbCard);
  }

  function changeRoute(route){
    return function(e){
      e.preventDefault();
      console.log('route changed', route);
      allScreens.forEach(screen => screen.style.display = "none");
      route.style.display = "block";
    }
  }