   // Get the things from the HTML / REF content
   var attackButton = document.querySelector(".attack-button");
   var magicButton = document.querySelector(".magic-attack-button");
   var itemButton = document.querySelector(".item-button");

   var damageField = document.querySelector(".js_attack_damage");

   var enemyHealthField = document.querySelector(".enemy-health-field");
   var enemyHealth = 100;



   attackButton.addEventListener("click", attack)
   magicButton.addEventListener("click", magicAttack)
   itemButton.addEventListener("click", listItems)


   function getRandoNumber() {
       return Math.floor(Math.random() * 10);
   }

   var crticalChoice = new Set([5, 7, 9])

   var recentAttacks = []

   var items = ['potion','antidote','phoenix down']
   
   function attack(){
       var recentAttack = getRandoNumber();
       recentAttack = multiplier(recentAttack)
       damageField.innerText = recentAttack
       recentAttacks.push(recentAttack)
       console.log(recentAttacks)
   }

   function listItems() {
       console.log(items)
   }

   function multiplier(recentAttack){
       if (recentAttack == 5){
           recentAttack *= 4
       }
       return recentAttack
   }

   function magicAttack() {
       var recentMagicAttack = getRandoNumber();
            console.log(recentMagicAttack)
        if (recentMagicAttack == 3){
            recentMagicAttack += 21
        }
       damageField.innerText = recentMagicAttack
   }
