// Get the things from the HTML / REF content
   let restartButton = document.querySelector('.restart-button');
   let attackButton = document.querySelector(".attack-button");

   let enemyHealthField = document.querySelector(".enemy-health-field");
   let enemyHealth = 100;
   let enemyHealthBar= document.getElementById("health")
   let damageCounter = []
   let damageOutput = document.querySelector('.damage-output');

   let gameStarted = false;
   let playerHealthField = document.querySelector('.player-health-field')
   let playerHealth = 100;

   attackButton.addEventListener("click", attack)
   restartButton.addEventListener('click', restart)

   function restart()  {
    location.reload();
   }

   function startGame(){
       gameStarted = true;
   }

   function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
   }
   
   function attack(target){
       let finalDamage = getRandomNumber(player.level, player.atk)
       damageCounter.push(finalDamage);
       displayDamage(finalDamage)
    //    dealDamage(target, finalDamage)
       return finalDamage
   }

   function displayDamage(num){
    damageOutput.innerHTML =`<li>you did ${num} damage</li>` 
   }

    var player = {
        name: '',
        level: 1,
        exp: 0,
        atk: 5,
        pwr: 5,
        abilities: [],
    }