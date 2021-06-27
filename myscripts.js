   // Get the things from the HTML / REF content
   var attackButton = document.querySelector(".attack-button");
   var magicButton = document.querySelector(".magic-attack-button");
   var itemButton = document.querySelector(".item-button");
   var itemBox = document.querySelector('.item-box');

   var restartButton = document.querySelector('.restart-button');

   var damageField = document.querySelector(".js_attack_damage");
   var damageType = document.querySelector('.damage-type');

   var enemyHealthField = document.querySelector(".enemy-health-field");
   var enemyHealth = 100;

   // get player MP
   var magicPoints = document.querySelector(".player_magic")
   var baseMagic = 50;
   // Seems like this will be a bit more complicated than subtracting enemy health
   // Yes, we will deduce from our starting total, but we also have to create values for each magic attack

   attackButton.addEventListener("click", attack)
   magicButton.addEventListener("click", magicAttack)
   itemButton.addEventListener("click", listItems)
   restartButton.addEventListener('click', restart)

   function getRandoNumber() {
       return Math.floor(Math.random() * 10);
   }

   var crticalChoice = new Set([5, 7, 9])

   var recentAttacks = []
   // adding a magic plural to match the line above, but don't understand this part, I see it's referenced once
   var recentMagicAttacks = []

   var items = ['potion','antidote','phoenix down']
   
   function attack(){
       if (enemyHealth <= 0){
        return damageField.innerText = "enemy is already dead"
       }
       var recentAttack = getRandoNumber();
       recentAttack = multiplier(recentAttack)
       var newEnemyHp = (enemyHealth - recentAttack);
       enemyHealth = newEnemyHp
       enemyHealthField.innerText = newEnemyHp
       damageField.innerText = recentAttack
       recentAttacks.push(recentAttack)
       damageType.innerText = 'physical';
       return enemyHealth
   }

   function restart(){
        location.reload();
   }

   function listItems() {
       itemBox.classList.toggle('shown');
   }

   function multiplier(recentAttack){
       if (recentAttack == 5){
           recentAttack *= 4
       } else {
           console.log('multipier failed')
       }
       return recentAttack
   }

   // matching the magicAttack function to be in line with the LINE 30 function
   // having issue with enemy HP jumping up / testing and sometimes physical attacks adding health too
   // watching the console log, seems to be something with the multiplier math
   function magicAttack() {
        if (enemyHealth <= 0){
            return damageField.innerText = "enemy is already dead"
        }
        var recentMagicAttack = getRandoNumber();
        recentMagicAttack = magicMultiplier(recentMagicAttack)
        var newEnemyHp = (enemyHealth - recentMagicAttack);
        enemyHealthField.innerText = newEnemyHp
        damageField.innertext = recentMagicAttack
        recentMagicAttacks.push(recentMagicAttack)
        damageType.innerText = 'magical';
        // trying to set Magic Attack Color
        damageType.style.color = "red";
        damageType.style.backgroundColor = "black";
        return enemyHealth
   }

      // creating a separate multiplier for magic, want a lower chance but higher bonus
      function magicMultiplier(recentMagicAttack) {
        if (recentMagicAttack == 4){
            recentMagicAttack *= 5
        } else {
            console.log('magic bonus failed')
        }
        return recentMagicAttack
    }

    // creating simple function for MP cost ... where do I insert this?
    function magicDeduction() {
        var castSpell = 5;
        var newMp = (baseMagic - castSpell)
        player_magic.innerText = newMp
        return newMp
    }