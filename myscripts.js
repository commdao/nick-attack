// routes
   let startScreen = document.querySelector('.start_screen');
   let homeScreen = document.querySelector('.home_screen');
   let leaderboardScreen = document.querySelector('.leaderboard_screen');
   let battleScreen = document.querySelector('.battle_screen');
   let settingsScreen = document.querySelector('.settings_screen');

// buttons
   let homeButton = document.querySelector('.home_button')
   let refreshLeaderboardButton = document.querySelector('.refresh_lb_button')
   let exitButton = document.querySelectorAll('.exit_button')
   let leaderboardButton = document.querySelectorAll('.leaderboard_button')
   let settingsButton = document.querySelectorAll('.settings_button');
   let saveButton = document.querySelector('.save_button')

// event listeners - routes
   homeButton.addEventListener('click', homeRoute);
   refreshLeaderboardButton.addEventListener('click', refreshLeaderboard);
   settingsButton.forEach(btn => btn.addEventListener('click', settingsRoute));
   leaderboardButton.forEach(btn => btn.addEventListener('click', leaderboardRoute));
   exitButton.forEach(btn => btn.addEventListener('click', startRoute));

   // event listeners - menu actions
   saveButton.addEventListener('click', saveGame);

// dynamic content
   let playerDisplay = document.querySelector('.player-display');
   let leaderboardDisplay = document.querySelector('.leaderboard_display');

    var player = {
    name: 'Steaks McGee',
    level: 1,
    exp: 0,
    abilities: [],
    }

    function startRoute(){
    console.log('returned to start menu');
    battleScreen.style.display = "none";
    settingsScreen.style.display ="none";
    leaderboardScreen.style.display = "none";
    startScreen.style.display = "block";
    homeScreen.style.display = "none";
    }

   function homeRoute(){
    console.log('redirected to home');
    battleScreen.style.display = "none";
    settingsScreen.style.display ="none";
    leaderboardScreen.style.display = "none";
    startScreen.style.display = "none";
    homeScreen.style.display = "block";
    displayPlayerStats();
   }

   function leaderboardRoute(){
    console.log('redirected to leaderboard');
    settingsScreen.style.display ="none";
    battleScreen.style.display ="none";
    homeScreen.style.display = "none";
    startScreen.style.display = "none";
    leaderboardScreen.style.display = "block";
    console.log('leaderboard updating...');
    setTimeout(() => {
            console.log('leaderboard updated');
            displayLeaderboard();
        }, 1500)
   };


    function settingsRoute(){
    console.log('redirected to settings');
    battleScreen.style.display ="none";
    homeScreen.style.display = "none";
    startScreen.style.display = "none";
    leaderboardScreen.style.display = "none";
    settingsScreen.style.display ="block";
    };


//    Leaderboard 

   function refreshLeaderboard(){
    console.log('leaderboard updating...');
    setTimeout(() => {
        displayLeaderboard();
    }, 1500)
    console.log('leaderboard updated');
   }

   function displayLeaderboard(){

   }

//    Battle

   function displayPlayerStats(){
    playerDisplay.innerHTML = `<li>${player.name}</li><br/><li>${player.level}</li><br/><li>EXP: ${player.exp} </li>`
   }

//    settings

function createPlayer(e){
    e.preventDefault();
    let playerName = playerName.value;
    let mostRecentPlayer = new PlayerGenerator(playerName);
    prependPlayer(mostRecentPlayer);
    saveGame(mostRecentIdea);
}

function PlayerGenerator(player){
  this.name = player;
  this.exp = 0;
  this.id = Date.now();
}

// 
  function saveGame(player) {
    var save = JSON.stringify(player);
    localStorage.setItem(player.id, save);
    console.log('save complete. your challenge code is',  player.id)
  };

  function loadSaves() {
    for (var i = 0; localStorage.length; i++) {
      var code = JSON.parse(localStorage.getItem(localStorage.key(i)));
      prependIdea(code);
    }
  };


//    player

