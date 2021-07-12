// routes
   let startScreen = document.querySelector('.start_screen');
   let homeScreen = document.querySelector('.home_screen');
   let leaderboardScreen = document.querySelector('.leaderboard_screen');
   let battleScreen = document.querySelector('.battle_screen');
   let settingsScreen = document.querySelector('.settings_screen');
   let allScreens = [startScreen, homeScreen, leaderboardScreen, settingsScreen]

//  Player
   let playerForm = document.querySelector('.player-form');

// buttons
   let homeButton = document.querySelector('.home_button')
   let exitButton = document.querySelectorAll('.exit_button')
   let leaderboardButton = document.querySelectorAll('.leaderboard_button')
   let settingsButton = document.querySelectorAll('.settings_button');
   let createPlayerButton = document.querySelector('.save_player_button')

// event listeners - routes
   homeButton.addEventListener('click', homeRoute);
   settingsButton.forEach(btn => btn.addEventListener('click', settingsRoute));
   leaderboardButton.forEach(btn => btn.addEventListener('click', leaderboardRoute));
   exitButton.forEach(btn => btn.addEventListener('click', startRoute));

// dynamic content
   let playerDisplay = document.querySelector('.player-display');
   let leaderboardDisplay = document.querySelector('.leaderboard_display');

// initial localStorage load
  window.onload = function() {
      loadSaves();
      console.log(localStorage.length, 'saves returned');
  };
      
  function loadSaves() {
    for(var i = 0; i<localStorage.length; i++) {
      var retrieveFromLocalStorage = localStorage.getItem(localStorage.key(i));
      var parsedLocalStorageData = JSON.parse(retrieveFromLocalStorage);
      addPlayerToLb(parsedLocalStorageData); 
    }
  }

//  Player
  function Player(name) {
    this.name = name;
    this.exp = 0;
    this.id = Date.now();
  }

  function addPlayerToLb(player) {
    var lbCard = document.createElement('li');
    lbCard.innerHTML =`<li>${player.name}, ${player.exp}</li>`;
    leaderboardDisplay.prepend(lbCard);
  }

  createPlayerButton.addEventListener('click', createPlayer);

  function createPlayer(e){
    e.preventDefault();
    let playerName = document.querySelector('.player-name-input-field').value;
    let newPlayer = new Player(playerName)
    localStorage.setItem(newPlayer.id, JSON.stringify(newPlayer))
    console.log('save complete. your challenge code is',  newPlayer.id)
  }


//  navigation
    function startRoute(){
    allScreens.forEach(screen => screen.style.display = "none");
    startScreen.style.display = "block";
    }

   function homeRoute(){
    allScreens.forEach(screen => screen.style.display = "none");
    homeScreen.style.display = "block";
   }

   function leaderboardRoute(){
    allScreens.forEach(screen => screen.style.display = "none");
    leaderboardScreen.style.display = "block";
   };

    function settingsRoute(){
    allScreens.forEach(screen => screen.style.display = "none");
    settingsScreen.style.display ="block";
    };




