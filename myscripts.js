   // Get the things from the HTML / REF content
   var attackButton = document.querySelector(".attack-button");
   var magicButton = document.querySelector(".magic-attack-button");

   var damageField = document.querySelector(".js_attack_damage");
   var magicField = document.querySelector(".js_magic_damage")

   var enemyHealth = document.querySelector(".enemy-health");


   attackButton.addEventListener("click", attack)
   magicButton.addEventListener("click", magicAttack)


   function getRandoNumber() {
       return Math.floor(Math.random() * 10);
   }

   var crticalChoice = new Set([5, 7, 9])

   var recentAttacks = []
   
   function attack(){
       var recentAttack = getRandoNumber();
       recentAttack = multiplier(recentAttack)
       damageField.innerText = recentAttack
       recentAttacks.push(recentAttack)
       console.log(recentAttacks)
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
       magicField.innerText = recentMagicAttack
   }
