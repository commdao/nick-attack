import * as Player from './lib/Player.js';
import * as Utils from './lib/utils.js'
import * as Leaderboard from './lib/leaderboard.js'

// routes
   let startScreen = document.querySelector('.start_screen');
   let homeScreen = document.querySelector('.home_screen');
   let leaderboardScreen = document.querySelector('.leaderboard_screen');
   let battleScreen = document.querySelector('.battle_screen');
   let settingsScreen = document.querySelector('.settings_screen');

   let allScreens = [startScreen, homeScreen, leaderboardScreen, settingsScreen, battleScreen]
  
  // notifications, modals, etc
    let modal = document.querySelector('.modal')
    let toast = document.querySelector('.toast');

//  Player
   let playerForm = document.querySelector('.player-form');
// buttons
   let startButton = document.querySelector('.bottom-half');
   let exitButton = document.querySelectorAll('.exit_button')
   let leaderboardButton = document.querySelectorAll('.leaderboard_button')
   let settingsButton = document.querySelectorAll('.settings_button');
   let createPlayerButton = document.querySelector('.save_player_button')

// event listeners - routes
   // startButton.addEventListener('click', startGame);
   startButton.addEventListener('click', changeRoute(homeScreen));
   settingsButton.forEach(btn => btn.addEventListener('click', changeRoute(settingsScreen)));
   leaderboardButton.forEach(btn => btn.addEventListener('click', changeRoute(leaderboardScreen)));
   exitButton.forEach(btn => btn.addEventListener('click', changeRoute(startScreen)));
   battleScreen.addEventListener('click', changeRoute(battleScreen));

//  event listeners - player
    createPlayerButton.addEventListener('click', Player.createPlayer);

// dynamic content
   let leaderboardDisplay = document.querySelector('.leaderboard_display');

//start game fires automatically when the game is loaded
   function gameStart(){
    let loggedIn = false;
    console.log('Promise - display Studioname');
    console.log('Promise - display engine name');
    if (!loggedIn){
      Utils.displayToast('Welcome back');
    }
    
    changeRoute(startScreen);

  }

  function startGame(){
    console.log('the click is working')
    changeRoute(homeScreen);
  }


  gameStart();

// create a messages object that can be used as a mock api for fetching system messages

  function suggestTutorial(){
    console.log('would you like to play the tutorial?');
    console.log('estimated time to completion: getTimeToComplete(level)');
    console.log('Completion Bonus: displayBonus(level)');
    console.log('yes. no')

    modules.createPlayer()
  }

  function changeRoute(route){
    return function(e){
      e.preventDefault();
      allScreens.forEach(screen => screen.style.display = "none");
      route.style.display = "block";
    }
  }

  let darkmodeButton = document.querySelector('.darkmode-button');
  let darkFarts = document.querySelector('body');
  darkmodeButton.addEventListener('click', toggleDarkMode)

  function toggleDarkMode() {
    darkFarts.classList.toggle('dark');
  }

