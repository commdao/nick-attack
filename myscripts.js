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

   attackButton.addEventListener("click", attack)
   magicButton.addEventListener("click", magicAttack)
   itemButton.addEventListener("click", listItems)
   restartButton.addEventListener('click', restart)

   function getRandoNumber() {
       return Math.floor(Math.random() * 10);
   }

   var crticalChoice = new Set([5, 7, 9])

   var recentAttacks = []

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

   function magicAttack() {
        if (enemyHealth <= 0){
            return damageField.innerText = "enemy is already dead"
        }
       var recentMagicAttack = getRandoNumber();
            console.log(recentMagicAttack)
        if (recentMagicAttack == 3){
            recentMagicAttack += 21
        }
       damageType.innerText = 'magical';

       damageField.innerText = recentMagicAttack
   }
